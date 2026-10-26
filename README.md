# Kinetic Construct (`kinetic-serif v1.2.3`)

A living design system and technical architecture explainer engine engineered for high readability, information density, and screen efficiency on laptops and mobile devices.

[Living design system](https://jeonkwan.github.io/kinetic-construct/) · [Starter template](https://jeonkwan.github.io/kinetic-construct/starter/) · [Download repository ZIP](https://jeonkwan.github.io/kinetic-construct/kinetic-construct-v1.2.3.zip)

## Features

- **Glare-Free Surfaces:** Warm Alabaster (`#F4F0E6` / `#FAF7F0`) with optional Nocturnal Ink dark mode.
- **Editorial Typography Floor:** Fraunces display headings, Bitter at 15px reading prose, and Fira Code at 13px technical code.
- **Strict 3-Role Accents:** Indigo for blueprints, Forest Moss for runtime roots, and Burnt Sienna for state ledgers.
- **Tactile Chrome:** Crisp 2px solid borders and 2px offset shadows with mechanical button depression.
- **Relationship Specimen:** One shared module, two environment roots, and distinct state objects, with explicit notation, an always-visible table equivalent, and optional code inspection.
- **Interactive Workbench:** Topology inspector, decision lab, token copying, chapter navigation, theme toggle, and repository download.
- **Code Primitives:** Alabaster Book code wells with tab chrome and optional syntax and line-number classes.

## Repository Layout

```text
kinetic-construct/
├── .github/workflows/pages.yml
├── .gitignore
├── css/kinetic-serif.css
├── js/kinetic-serif.js
├── reference/
│   ├── kinetic-serif.json
│   ├── SKILL.md
│   ├── agents/openai.yaml
│   ├── guide.md
│   ├── architecture-spec.md
│   ├── diagram-guide.md
│   └── diagram-style.md
├── starter/index.html
├── starter/diagram.html
├── docs/research/2026-10-26-information-design-review.md
├── docs/validation/2026-10-26-diagram-pilot.md
├── sync_reference.py
├── index.html
├── llms.txt
├── llms-full.txt
├── README.md
├── LICENSE
└── make_repo.py
```

The root `index.html` is the 10-chapter living system. `starter/index.html` is the clean guide template. There is no build step or JavaScript dependency installation.

## Preview Locally

From this repository directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [the living system](http://127.0.0.1:8000/) [the starter](http://127.0.0.1:8000/starter/), or [the focused diagram pilot](http://127.0.0.1:8000/starter/diagram.html). Use HTTP rather than opening an HTML file directly so repository downloads and clipboard actions can work. Google Fonts requires an internet connection; system serif and monospace fallbacks are declared in the stylesheet.

## Direct Hosted Usage

Use the published GitHub Pages assets directly:

```html
<link rel="stylesheet" href="https://jeonkwan.github.io/kinetic-construct/css/kinetic-serif.css" />
<script src="https://jeonkwan.github.io/kinetic-construct/js/kinetic-serif.js" defer></script>
```

Copy `starter/index.html` for a new guide and update its CSS and JavaScript paths for that guide's location. Hosted asset URLs can also be used from other sites. These URLs serve the latest deployed `main`; vendor the assets from a chosen Git commit if a project needs a fixed revision.

## Machine-Readable Contracts for AI Agents

- [JSON tokens](https://jeonkwan.github.io/kinetic-construct/reference/kinetic-serif.json)
- [Agent skill](https://jeonkwan.github.io/kinetic-construct/reference/SKILL.md)
- [Authoring guide](https://jeonkwan.github.io/kinetic-construct/reference/guide.md)
- [Architecture specimen](https://jeonkwan.github.io/kinetic-construct/reference/architecture-spec.md)
- [Discovery manifest](https://jeonkwan.github.io/kinetic-construct/llms.txt)
- [Consolidated prompt context](https://jeonkwan.github.io/kinetic-construct/llms-full.txt)

The manifest and agent skill provide absolute published URLs so they remain usable when copied into another project or a standalone prompt. The site and bundled starter retain relative internal asset paths for local previews and downloaded copies. When copying the starter alone, replace its asset paths with the hosted URLs above. The consolidated context includes the complete collected guide, skill, JSON tokens, CSS, runtime, starter, and architecture specimen. After editing those files, run `python3 sync_reference.py` to refresh the full bundle and mirror the canonical `starter/diagram.html` specimen into chapter 3. Run `python3 sync_reference.py --check` to verify consistency without writing. The workflow and packager reject stale generated references.

## Install the opt-in agent skill

The skill is explicit-only. In Codex, select it or invoke `$kinetic-serif`; a generic documentation or explanation request must not activate it. Its `reference/agents/openai.yaml` sets `policy.allow_implicit_invocation: false`. Install the entire `reference/` folder, not just `SKILL.md`, so the invocation policy is retained. The instructions also preserve the requested output format: choosing this design system does not itself request HTML.

For Codex, ask `$skill-installer` to install `Jeonkwan/kinetic-construct`, path `reference`, with the installed name `kinetic-serif`. It is available on your next turn; restart Codex if it does not appear. Other hosts may not enforce Codex's YAML policy, so the skill's description and body repeat the opt-in boundary.

## Create a Repository ZIP

```sh
python3 make_repo.py
```

This packages the 22 listed repository files into `kinetic-construct-v1.2.3.zip` alongside the script. It works from any current directory, checks for missing files, and does not recreate or delete source directories. Generated archives, browser verification output, and operating-system files are excluded from Git.

The site's download buttons use the prebuilt archive on GitHub Pages. When no archive exists on a local HTTP server, the browser fetches the same 22 files and assembles a ZIP with CRC32 checksums. Both paths include the workflow, license, manifests, and packager.

## Publish with GitHub Pages

1. Create an empty public GitHub repository and push this directory's contents on `main`.
2. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
3. Run **Deploy Kinetic Construct to GitHub Pages** from the Actions tab if the initial push happened before Pages was enabled. Later pushes to `main` deploy automatically.
4. The workflow packages the repository, uploads the static site, and publishes the deployment URL.

Example commands after creating the remote repository:

```sh
git init -b main
git add .
git commit -m "Assemble Kinetic Construct v1.2.3 living design system"
git remote add origin https://github.com/Jeonkwan/kinetic-construct.git
git push -u origin main
```

## Assembly Notes

The sources were collected from a Gemini chat and reorganized without redesigning the visual system. The original collection is backed up separately in `../_source-archive/kinetic-serif-gemini-originals/`; that backup is not part of this repository or its downloads.

- The collected `index.html` was identified as the starter and moved to `starter/index.html`.
- The living system was extracted from `index.txt`; the authoring guide was extracted from `guide.txt`. Chat headings and wrapper fences were removed.
- Unclosed code fences in the agent skill and original LLM bundle were repaired; the full bundle was then expanded from the collected sources.
- The architecture reference preserves four recovered policies with corrections and separates them from the new illustrative model. The original **Conceptual Model** introduced three planes without supplying their enumeration. That missing content remains unknown.
- The empty packager stub was replaced. Browser archive checksums, omitted archive files, failed-fetch handling, and project-relative manifest links were corrected. Theme controls now reflect a saved/system theme on load and tolerate unavailable browser storage.

## Focused diagram pilot

Start at [the diagram guide](reference/diagram-guide.md) for representation selection and reusable notation. The [standalone specimen](starter/diagram.html) is the canonical copyable HTML/SVG source; chapter 3 mirrors it. [Technical assumptions](reference/architecture-spec.md) apply only to this Terraform/GCS teaching example. No infrastructure deployment is included.

The visible figure, caption, legend, assumptions, and relationship table work without JavaScript. Native details keeps all code excerpts available; JavaScript adds grouped selection buttons, a polite status, and copying. Mobile navigation becomes a horizontal scroll row at <=960px. Action colors, focus, selected-state styling, and dark token overrides are recorded in CSS/JSON and the guides. Sequence, flowchart, and state diagrams are guidance only in this iteration.

See the [pilot validation record](docs/validation/2026-10-26-diagram-pilot.md) for rendered, functional, and comprehension checks and remaining limits. The research report is preserved as historical context; its original proposals are not rewritten as if already approved at the time of research. Local completion does not publish these changes: pushing `main` triggers Pages deployment.

## License

[MIT](LICENSE)
