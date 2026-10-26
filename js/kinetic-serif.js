/**
 * Kinetic Construct (kinetic-serif v1.2.3) Runtime
 * Manages theme toggling, node graph inspection, copy helpers,
 * and client-side zero-dependency ZIP archive creation.
 */

(function () {
  'use strict';

  const assetBase = new URL('../', document.currentScript.src);

  // 1. Theme Toggle
  window.toggleTheme = function () {
    const html = document.documentElement;
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    try { localStorage.setItem('kinetic-theme', next); } catch (_) { /* Storage may be disabled. */ }
    const btn = document.getElementById('themeToggleBtn');
    if (btn) btn.textContent = next === 'dark' ? '☀️ Daylight' : '🌙 Nocturnal';
  };

  let saved;
  try { saved = localStorage.getItem('kinetic-theme'); } catch (_) { /* Use the system preference. */ }
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const themeButton = document.getElementById('themeToggleBtn');
  if (themeButton) {
    themeButton.hidden = false;
    themeButton.textContent = document.documentElement.getAttribute('data-theme') === 'dark'
      ? '☀️ Daylight' : '🌙 Nocturnal';
  }

  // 2. Clipboard Copy Helper
  window.copySnippet = async function (btn, textToCopy) {
    const text = textToCopy || btn.closest('.code-wrapper').querySelector('.code-lines-col').innerText;
    const orig = btn.innerText;
    try {
      await navigator.clipboard.writeText(text);
      btn.innerText = 'Copied! ✓';
    } catch (_) {
      btn.innerText = 'Select code to copy';
    }
    setTimeout(() => { btn.innerText = orig; }, 1800);
  };

  // Progressive enhancement: the SVG, table, assumptions, and all code are HTML.
  // Buttons select optional detail; they do not carry the lesson's core meaning.
  document.querySelectorAll('[data-topology]').forEach(figure => {
    const controls = figure.querySelector('.inspector-controls');
    const status = figure.querySelector('.inspector-status');
    const buttons = [...figure.querySelectorAll('[data-node]')];
    const panels = [...figure.querySelectorAll('[data-detail]')];
    function inspect(button) {
      buttons.forEach(item => {
        const selected = item === button;
        item.classList.toggle('selected', selected);
        item.setAttribute('aria-pressed', String(selected));
      });
      panels.forEach(panel => { panel.hidden = panel.dataset.detail !== button.dataset.node; });
      status.textContent = `Inspecting ${button.textContent}`;
    }
    buttons.forEach(button => button.addEventListener('click', () => inspect(button)));
    if (buttons.length) {
      inspect(buttons[0]);
      controls.hidden = false;
      status.hidden = false;
      figure.querySelectorAll('.copy-button').forEach(button => { button.hidden = false; });
    }
  });

  // 3. Topology Inspector Handler
  window.selectTopologyNode = function (btn, role, title, file, code, blastDesc) {
    const scope = btn.closest('[data-topology]') || document;
    scope.querySelectorAll('.node-btn').forEach(b => {
      b.classList.remove('selected');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.setAttribute('aria-pressed', 'true');
    btn.classList.add('selected');

    const badge = document.getElementById('topologyInspBadge');
    if (badge) {
      badge.className = `role-badge ${role}`;
      badge.textContent = role === 'module' ? 'MODULE BLUEPRINT' : role === 'root' ? 'EXECUTION ROOT' : 'REMOTE STATE LEDGER';
    }

    const titleEl = document.getElementById('topologyInspTitle');
    if (titleEl) titleEl.textContent = title;

    const fileEl = document.getElementById('topologyInspFile');
    if (fileEl) fileEl.textContent = file;

    const codeEl = document.getElementById('topologyInspCode');
    if (codeEl) codeEl.textContent = code;

    const blastEl = document.getElementById('topologyInspBlast');
    if (blastEl) blastEl.textContent = blastDesc;
  };

  // 4. Decision Lab Engine
  window.calculateTopologyRecommendation = function () {
    const teamSize = document.getElementById('labTeamSize')?.value || 'small';
    const blastRisk = document.getElementById('labBlastRisk')?.value || 'standard';
    const resultCard = document.getElementById('labResultCard');
    if (!resultCard) return;

    if (teamSize === 'large' || blastRisk === 'strict') {
      resultCard.innerHTML = `
        <div class="role-badge state" style="margin-bottom: 8px;">ILLUSTRATIVE OPTION</div>
        <h3>Isolated Roots with Granular GCS State Boundaries</h3>
        <p>Deploy independent root configurations per service and environment with dedicated service accounts and separate state buckets to minimize blast radius.</p>
      `;
    } else {
      resultCard.innerHTML = `
        <div class="role-badge root" style="margin-bottom: 8px;">ILLUSTRATIVE OPTION</div>
        <h3>Lightweight Monorepo with Shared Modules</h3>
        <p>Maintain root configurations in a monorepo versioned by Git commit SHAs, referencing internal modules directly with change detection.</p>
      `;
    }
  };

  // 5. Zero-Dependency In-Browser ZIP Builder
  // Implements standard PKZip format using pure typed arrays
  function crc32(bytes) {
    let crc = 0xFFFFFFFF;
    for (const byte of bytes) {
      crc ^= byte;
      for (let bit = 0; bit < 8; bit++) {
        crc = (crc >>> 1) ^ ((crc & 1) ? 0xEDB88320 : 0);
      }
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }

  function createZip(files) {
    const fileEntries = [];
    let offset = 0;

    const encoder = new TextEncoder();

    files.forEach(file => {
      const nameBytes = encoder.encode(file.name);
      const dataBytes = typeof file.content === 'string' ? encoder.encode(file.content) : file.content;
      const size = dataBytes.length;
      const checksum = crc32(dataBytes);

      // Local File Header (30 bytes) + Name + Data
      const header = new Uint8Array(30 + nameBytes.length);
      const view = new DataView(header.buffer);
      view.setUint32(0, 0x04034b50, true);  // Local file header signature
      view.setUint16(4, 20, true);          // Version needed
      view.setUint16(6, 0x0800, true);      // UTF-8 filenames
      view.setUint16(8, 0, true);           // Compression: 0 (Store)
      view.setUint16(10, 0, true);          // Time
      view.setUint16(12, 33, true);         // Date: 1980-01-01
      view.setUint32(14, checksum, true);   // CRC32
      view.setUint32(18, size, true);       // Compressed size
      view.setUint32(22, size, true);       // Uncompressed size
      view.setUint16(26, nameBytes.length, true); // Name length
      view.setUint16(28, 0, true);          // Extra field length
      header.set(nameBytes, 30);

      fileEntries.push({
        nameBytes,
        header,
        dataBytes,
        offset,
        size,
        checksum
      });

      offset += header.length + dataBytes.length;
    });

    // Central Directory
    let centralDirSize = 0;
    const centralEntries = fileEntries.map(entry => {
      const cd = new Uint8Array(46 + entry.nameBytes.length);
      const view = new DataView(cd.buffer);
      view.setUint32(0, 0x02014b50, true);  // Central dir signature
      view.setUint16(4, 20, true);          // Made by
      view.setUint16(6, 20, true);          // Version needed
      view.setUint16(8, 0x0800, true);      // UTF-8 filenames
      view.setUint16(10, 0, true);          // Compression (Store)
      view.setUint16(12, 0, true);          // Time
      view.setUint16(14, 33, true);         // Date: 1980-01-01
      view.setUint32(16, entry.checksum, true); // CRC32
      view.setUint32(20, entry.size, true); // Compressed size
      view.setUint32(24, entry.size, true); // Uncompressed size
      view.setUint16(28, entry.nameBytes.length, true);
      view.setUint16(30, 0, true);          // Extra length
      view.setUint16(32, 0, true);          // Comment length
      view.setUint16(34, 0, true);          // Disk start
      view.setUint16(36, 0, true);          // Internal attrs
      view.setUint32(38, 0, true);          // External attrs
      view.setUint32(42, entry.offset, true);// Local header offset
      cd.set(entry.nameBytes, 46);
      centralDirSize += cd.length;
      return cd;
    });

    // End of Central Directory Record (22 bytes)
    const eocd = new Uint8Array(22);
    const eocdView = new DataView(eocd.buffer);
    eocdView.setUint32(0, 0x06054b50, true);  // EOCD signature
    eocdView.setUint16(4, 0, true);           // Disk number
    eocdView.setUint16(6, 0, true);           // Central dir disk
    eocdView.setUint16(8, fileEntries.length, true);  // Disk entries
    eocdView.setUint16(10, fileEntries.length, true); // Total entries
    eocdView.setUint32(12, centralDirSize, true);     // Central dir size
    eocdView.setUint32(16, offset, true);             // Central dir offset
    eocdView.setUint16(20, 0, true);                  // Comment length

    // Assemble parts into single Blob
    const parts = [];
    fileEntries.forEach(e => {
      parts.push(e.header);
      parts.push(e.dataBytes);
    });
    centralEntries.forEach(cd => parts.push(cd));
    parts.push(eocd);

    return new Blob(parts, { type: 'application/zip' });
  }

  // 6. Download Hub Trigger
  // Pages builds a complete archive because its artifact excludes hidden files.
  // On a local HTTP server, fall back to assembling all source files in-browser.
  const repositoryFiles = [
    '.github/workflows/pages.yml', '.gitignore',
    'css/kinetic-serif.css', 'js/kinetic-serif.js',
    'reference/kinetic-serif.json', 'reference/SKILL.md', 'reference/agents/openai.yaml',
    'reference/guide.md', 'reference/diagram-guide.md', 'reference/diagram-style.md',
    'reference/architecture-spec.md', 'starter/diagram.html', 'sync_reference.py',
    'docs/research/2026-10-26-information-design-review.md',
    'docs/validation/2026-10-26-diagram-pilot.md',
    'starter/index.html', 'index.html', 'llms.txt', 'llms-full.txt',
    'README.md', 'LICENSE', 'make_repo.py'
  ];

  window.downloadRepoZip = async function (btn) {
    const origText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = 'Compiling ZIP... ⏳';

    try {
      const archiveName = 'kinetic-construct-v1.2.3.zip';
      const response = await fetch(new URL(archiveName, assetBase));
      let blob;
      if (response.ok) {
        blob = await response.blob();
      } else {
        const files = await Promise.all(repositoryFiles.map(async path => {
          const result = await fetch(new URL(path, assetBase));
          if (!result.ok) throw new Error(`Could not fetch ${path}: HTTP ${result.status}`);
          return { name: `kinetic-construct/${path}`, content: await result.text() };
        }));
        blob = createZip(files);
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = archiveName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);

      btn.innerHTML = 'Downloaded! ✓';
      setTimeout(() => { btn.innerHTML = origText; }, 2200);
    } catch (err) {
      console.error(err);
      alert('Unable to download the complete repository. Serve this folder over HTTP, or run python3 make_repo.py to create the ZIP locally.');
      btn.innerHTML = origText;
    } finally {
      btn.disabled = false;
    }
  };

  // 7. Rail Scroll Sync
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.rail-link').forEach(link => {
          const active = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  });
})();