---
name: kinetic-serif
description: Apply the Kinetic Construct / Kinetic Serif design system only when the user explicitly invokes $kinetic-serif or asks to use this named design system. Preserve the requested output format and scope; generic documentation, diagram, typography, or explanation requests do not activate this skill.
---
# Kinetic Construct (kinetic-serif v1.2.3)

Create high-density, legible technical explainers and living architecture documentation using the calibrated Kinetic Construct design language.

## Invocation and output scope

This skill is opt-in. Activate it only when the user explicitly invokes `$kinetic-serif`, selects this skill, or clearly asks to apply **Kinetic Serif / Kinetic Construct**. An incidental mention, a request to inspect this skill, or a generic request for documentation, a diagram, typography, or a short explanation is not an instruction to apply it.

The companion `agents/openai.yaml` sets `policy.allow_implicit_invocation: false` for Codex. Install the whole `reference/` directory as the skill folder so this policy accompanies `SKILL.md`. Hosts that do not support this policy must still follow the explicit-invocation boundary in these instructions.

Invocation selects the design language, not the deliverable format. Preserve the user's requested medium, complexity, and scope. A short prose answer stays short prose; a Markdown table stays Markdown. Create or modify HTML/CSS/JavaScript only when the user requests a web deliverable or the established task already requires one. Discussing a diagram does not automatically request a standalone interactive page.

Examples:
- “Use `$kinetic-serif` to build an HTML explainer” → apply the design system to the requested HTML.
- “Use Kinetic Serif to make a brief Markdown comparison” → give a brief Markdown comparison; create no webpage.
- “Explain modules versus state in two sentences” → ordinary prose; do not activate this skill.
- “What does the Kinetic Serif skill do?” → explain its behavior; do not start designing an artifact.

## Hosted References & Integration

Canonical site: [Kinetic Construct](https://jeonkwan.github.io/kinetic-construct/).

When authoring a guide in another project, use the published assets:

```html
<link rel="stylesheet" href="https://jeonkwan.github.io/kinetic-construct/css/kinetic-serif.css" />
<script src="https://jeonkwan.github.io/kinetic-construct/js/kinetic-serif.js" defer></script>
```

The stylesheet imports Fraunces, Bitter, and Fira Code and defines the complete light/dark token contract. Read the [authoring guide](https://jeonkwan.github.io/kinetic-construct/reference/guide.md) for layout and semantic color rules and the [JSON tokens](https://jeonkwan.github.io/kinetic-construct/reference/kinetic-serif.json) for machine-readable values. Use the [starter HTML](https://jeonkwan.github.io/kinetic-construct/starter/index.html) as a structural example; when copying it to another project, replace its `../css/` and `../js/` references with the hosted URLs above, or copy those asset directories and adjust the paths to their local location.

- [Discovery manifest](https://jeonkwan.github.io/kinetic-construct/llms.txt): discover the published resources.
- [Complete prompt context](https://jeonkwan.github.io/kinetic-construct/llms-full.txt): ingest the consolidated guide, tokens, assets, starter, and specimen.
- [Source repository](https://github.com/Jeonkwan/kinetic-construct): inspect or download the maintained sources.

For offline use, bundle the CSS and JavaScript with the guide and provide the fonts locally if they are needed without internet access. The Pages URLs track the repository's latest deployed `main`; vendor assets from a chosen Git commit when a project needs a fixed revision.

## Core Design Contract & CSS Tokens

The hosted stylesheet includes the complete token set. The excerpt below records the core design values for reference and inline implementations:

```css
:root {
  --bg-canvas: #F4F0E6;       /* Warm Alabaster canvas */
  --bg-surface: #FAF7F0;      /* Elevated card surface */
  --bg-well: #EAE4D7;         /* Recessed code well */
  --ink-primary: #111111;     /* Primary chrome & heading ink */
  --ink-prose: #222222;       /* Body prose ink */
  --ink-muted: #4A4740;       /* Secondary captions */

  --accent-module: #3730A3;   /* Indigo: Blueprint / Module */
  --accent-module-bg: #E0E7FF;
  --accent-root: #15803D;     /* Forest Moss: Execution / Root Configuration */
  --accent-root-bg: #DCFCE7;
  --accent-state: #9A3412;    /* Burnt Sienna: State Ledger */
  --accent-state-bg: #FFEDD5;

  --border-thick: 2px solid var(--ink-primary);
  --shadow-tactile: 2px 2px 0px var(--ink-primary);
  --radius-subtle: 6px;

  --font-display: 'Fraunces', Georgia, serif;
  --font-prose: 'Bitter', Georgia, serif;       /* 15px / 0.9375rem */
  --font-mono: 'Fira Code', monospace;         /* 13px / 0.8125rem */

  --container-max: 1520px;
  --rail-width: 220px;
  --outer-gutter: clamp(12px, 1.8vw, 24px);
  --section-gap: 22px;
}
```


## Authoring workflow and accepted relationship pattern

1. Establish the reader, question, scope, evidence or assumptions, and one-sentence takeaway from supplied context. Choose prose for explanation, a table for comparison, topology for dependencies, sequence for ordered messages, flowchart for decisions, or state diagram for states/transitions. Only the topology is implemented in this pilot; do not invent a gallery or require Terraform chapters.
2. Read [diagram-guide.md](https://jeonkwan.github.io/kinetic-construct/reference/diagram-guide.md) for notation and the [project-local diagram style](https://jeonkwan.github.io/kinetic-construct/reference/diagram-style.md). Copy the marked section from [starter/diagram.html](https://jeonkwan.github.io/kinetic-construct/starter/diagram.html), the canonical accepted specimen source. Preserve its visible overview, scope, legend, takeaway, relationship table, assumptions, and no-JS path. Rename all IDs and ARIA references if adding another figure.
3. Use subject → object arrows with specific verb labels. Name node types and boundary kinds. Source/root/state colors are domain roles, not selection or status. Roots in the example are configurations used for execution, not running database instances. Use neutral styling for unrelated actors. Keep readable technical labels at least 13px and prose labels at least 15px at the minimum rendered SVG width; scroll the figure locally instead of shrinking it on mobile.
4. Treat [architecture-spec.md](https://jeonkwan.github.io/kinetic-construct/reference/architecture-spec.md) as an illustrative Terraform/GCS model with checked concepts and explicit assumptions. Do not claim distinct state implies IAM isolation, complete blast-radius protection, or a deployed system. The missing historical three-plane enumeration is unknown and must not be invented.
5. Preserve progressive enhancement: native details contains all code without JS. JS exposes grouped inspector buttons, shows one detail article, sets `aria-pressed`, adds a neutral selection outline/check, and announces the selected name. Tab/Enter/Space operate the controls; no arrow-key tablist behavior is promised. Core meaning remains outside interaction.
6. Test comprehension with a fresh reader independently of visual/functional checks. Ask for the conclusion, every edge's direction/meaning, boundary claims, omissions, and conditions. Inspect both themes, focus/selection, contrast, reflow/zoom, no JS, and print. State limits of automated or AI-reader checks.

## Contract details and distribution

- Mobile rail: non-sticky horizontal scrolling row at <= 960px; docked workbench above 960px.
- Tactile active translation: 2px on both axes; remaining active shadow: 1px on both axes.
- Generic primary buttons use separate action tokens: light background/ink `#15803D`/`#FAF7F0`, dark `#34D399`/`#0E131B`. Domain role colors do not indicate inspector selection.
- CSS is the runtime authority; JSON mirrors light values and dark overrides. The warm-surface preference does not forbid a separately tested action foreground.
- After changing the canonical specimen or bundled references, run `python3 sync_reference.py`, then `python3 sync_reference.py --check`. This mirrors the specimen into the showcase and regenerates `llms-full.txt`. Account for new distributable files in both `make_repo.py` and the browser runtime's file list; regenerate the ZIP for a current local download.
