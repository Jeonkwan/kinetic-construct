---
name: kinetic-serif
description: Design and build technical explainers, interactive architecture guides, system documentation, and web pages using the Kinetic Construct (kinetic-serif v1.2.3) design system. Use whenever the user asks to use kinetic-serif or Kinetic Construct, wants modern high-contrast editorial typography (Fraunces + Bitter + Fira Code), or needs compact technical documentation with Warm Alabaster surfaces, Botanical Field semantic accents, crisp 2px tactile shadows, and Alabaster Book code blocks.
---
# Kinetic Construct (kinetic-serif v1.2.3)

Create high-density, legible technical explainers and living architecture documentation using the calibrated Kinetic Construct design language.

## When to Use

- The user requests an interactive architecture explainer, technical guide, system topology, or living design system in `kinetic-serif` or **Kinetic Construct**.
- Building technical documentation where clarity, information density, and screen efficiency (13"-14" laptops and mobile devices) are prioritized.
- Presenting complex cloud infrastructure, pipelines, API choreography, or decision matrices.

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
  --accent-root: #15803D;     /* Forest Moss: Runtime Root */
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
