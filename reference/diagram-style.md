# Kinetic Serif diagram style profile

Project-local adaptation for the installed Diagram Design skill. This file is authoritative for this pilot's skin; it does not modify shared skill defaults. Use alongside [guide.md](guide.md) and [diagram-guide.md](diagram-guide.md).

- Paper roles: `--bg-canvas`, `--bg-surface`, `--bg-well`; ink: `--ink-primary`, `--ink-prose`, `--ink-muted` from the shared CSS, in both themes.
- Fraunces for display and node names; Bitter for readable labels/prose; Fira Code for technical identifiers and type labels. Rendered floors are 15px prose and 13px technical text at the diagram's minimum width.
- Source/module: `--accent-module` and its background; execution/root configuration: `--accent-root`; persisted state: `--accent-state`. Type labels preserve meaning without color. Neutral ink for edges and selection.
- Passive nodes: 2px role border, 6px radius, no button shadow. Existing tactile cards and controls retain Kinetic Serif shadows and 2px active translation.
- The pilot is an 880 × 480 configuration topology with five nodes and four edges, locally scrollable below 880px. This is a content/layout choice, not a universal complexity budget.
- Direct edge labels, rounded orthogonal routing, named dashed environment scopes, caption, legend, equivalent relationship table, and static HTML all precede optional inspection.
- No motion, added palette, default skill fonts, or new visual family is needed.
