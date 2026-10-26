# Kinetic Construct (`kinetic-serif v1.2.3`)

A living design system and technical architecture explainer engine engineered for high readability, information density, and screen efficiency on laptops and mobile devices.

[Living design system](https://jeonkwan.github.io/kinetic-construct/) · [Starter template](https://jeonkwan.github.io/kinetic-construct/starter/) · [Download repository ZIP](https://jeonkwan.github.io/kinetic-construct/kinetic-construct-v1.2.3.zip)

## Features

- **Glare-Free Surfaces:** Warm Alabaster (`#F4F0E6` / `#FAF7F0`) with optional Nocturnal Ink dark mode.
- **Editorial Typography Floor:** Fraunces display headings, Bitter at 15px reading prose, and Fira Code at 13px technical code.
- **Strict 3-Role Accents:** Indigo for blueprints, Forest Moss for runtime roots, and Burnt Sienna for state ledgers.
- **Tactile Chrome:** Crisp 2px solid borders and 2px offset shadows with mechanical button depression.
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
│   ├── guide.md
│   └── architecture-spec.md
├── starter/index.html
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

Open [the living system](http://127.0.0.1:8000/) or [the starter](http://127.0.0.1:8000/starter/). Use HTTP rather than opening an HTML file directly so repository downloads and clipboard actions can work. Google Fonts requires an internet connection; system serif and monospace fallbacks are declared in the stylesheet.

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

The manifest and agent skill provide absolute published URLs so they remain usable when copied into another project or a standalone prompt. The site and bundled starter retain relative internal asset paths for local previews and downloaded copies. When copying the starter alone, replace its asset paths with the hosted URLs above. The consolidated context includes the complete collected guide, skill, JSON tokens, CSS, runtime, starter, and architecture specimen. When editing those files, refresh their corresponding sections in `llms-full.txt` as well.

## Create a Repository ZIP

```sh
python3 make_repo.py
```

This packages the existing 15 repository files into `kinetic-construct-v1.2.3.zip` alongside the script. It works from any current directory, checks for missing files, and does not recreate or delete source directories. Generated archives, browser verification output, and operating-system files are excluded from Git.

The site's download buttons use the prebuilt archive on GitHub Pages. When no archive exists on a local HTTP server, the browser fetches the same 15 files and assembles a ZIP with CRC32 checksums. Both paths include the workflow, license, manifests, and packager.

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
- The architecture specimen includes the four laws recovered separately from the chat. Its **Conceptual Model** introduction still ends with a colon and has no following enumeration in the supplied text. That content has not been invented.
- The empty packager stub was replaced. Browser archive checksums, omitted archive files, failed-fetch handling, and project-relative manifest links were corrected. Theme controls now reflect a saved/system theme on load and tolerate unavailable browser storage.

## License

[MIT](LICENSE)
