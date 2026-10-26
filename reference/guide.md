# Kinetic Construct (kinetic-serif v1.2.3) Authoring Guide

[Living design system](https://jeonkwan.github.io/kinetic-construct/) · [CSS](https://jeonkwan.github.io/kinetic-construct/css/kinetic-serif.css) · [Runtime](https://jeonkwan.github.io/kinetic-construct/js/kinetic-serif.js) · [JSON tokens](https://jeonkwan.github.io/kinetic-construct/reference/kinetic-serif.json)

## Philosophy & Communication Principles

1. **Information First**: Structure the explanation before selecting its visual presentation. Choose a diagram only when its relationships help answer the reader’s question. Name any trust perimeter or failure-mode claim explicitly.
2. **Strict Semantic 3-Role Accents (Botanical Field)**:
   - **Indigo (`#3730A3`)**: Blueprint, module source, definition, contract schema.
   - **Forest Moss (`#15803D`)**: Execution entry configuration, runtime boundary, active service, pipeline execution. Name the specific type: a root configuration is not itself a running service.
   - **Burnt Sienna (`#9A3412`)**: State storage, persistent ledger, database backend, immutable log.
   *Rule: Never use these three colors for arbitrary decoration.*
3. **Glare-Free Surfaces**:
   - Use `--bg-canvas: #F4F0E6` for viewport backdrops.
   - Use `--bg-surface: #FAF7F0` for elevated content cards.
   - Use `--bg-well: #EAE4D7` for recessed wells, code backgrounds, and callouts.
   - Use warm paper instead of pure white surfaces. Action foregrounds have their own contrast tokens.
4. **Locked Typography Contract**:
   - Display Headings: `Fraunces, Georgia, serif` (Weights 700-800, line-height 1.15-1.22).
   - Reading Prose: `Bitter, Georgia, serif` at `15px` (`0.9375rem`), line-height `1.55`, constrained to `max-width: 65ch`.
   - Technical & Code: `Fira Code, monospace` at `13px` (`0.8125rem`), line-height `1.55`.
   - Badges & Eyebrows: Strict floor of `13px` (`0.8125rem`). Never use sub-12px micro-text.
5. **Spatial Density & Layout**:
   - Navigation: Compact `220px` sticky left rail (`sidebar-rail`) that becomes a non-sticky, horizontally scrollable row at widths <= 960px; chapter labels do not wrap.
   - Flush Cards: Do not wrap sections in redundant outer container boxes with compound nested padding.
   - Side-Docked Workbench: On viewports > 960px, dock topology graphs side-by-side with code/contract inspectors (`1.25fr 1fr`).
   - Tactile Chrome: `2px solid #111111` borders with `2px 2px 0px #111111` shadows. Interactive elements translate `(2px, 2px)` on `:active`; their remaining shadow offset is `(1px, 1px)`. These are separate properties.


## Explanation and diagram authoring

Use the [representation selector and notation contract](diagram-guide.md) before drawing. Start with the reader's question, scope, evidence/assumptions, and one-sentence answer. The [complete topology specimen](../starter/diagram.html) demonstrates the accepted pattern: visible relationships before optional inspection, title/scope/caption/legend, a table equivalent, static HTML, and keyboard-operable detail. Its [Terraform/GCS assumptions](architecture-spec.md) are example-specific. Other diagram forms have selection advice only in this pilot.

Semantic accents apply to domain roles inside the figure. Editorial eyebrows and generic emphasis may remain neutral. Primary actions use `--action-bg` / `--action-ink` (light: `#15803D` / `#FAF7F0`; dark: `#34D399` / `#0E131B`); this action styling does not label a runtime node. Inspector selection uses a neutral outline plus check mark and `aria-pressed`; focus has a separate 3px outline with a 4px offset. The optional inspector uses buttons, not tab semantics. Its selected name is announced politely while focus stays on the initiating button.

CSS is the runtime token authority. JSON mirrors light tokens and includes dark overrides, action colors, diagram sizes, and interaction rules. Copy text is at least 13px; comment syntax colors are `#625D52` in light mode and `#8C9D97` in dark mode. Line numbers are decorative and must be `aria-hidden="true"` when used. No line-number dependency is used in the specimen.

Review comprehension separately from appearance: ask a reader to state the takeaway, explain all edges and boundaries, identify what is shared/separate/omitted, and name assumptions. Then check both themes, keyboard focus and state, no-JS meaning, print, and narrow/zoomed layouts. See the [pilot validation record](../docs/validation/2026-10-26-diagram-pilot.md) for what was actually tested.


## Agent use is opt-in

The companion skill applies only when explicitly selected/invoked or when the user clearly asks to use Kinetic Serif / Kinetic Construct. Generic explanation, documentation, or diagram requests do not activate it. Install `agents/openai.yaml` with `SKILL.md` to retain Codex's `allow_implicit_invocation: false` policy. Even after invocation, preserve the requested format and scope; a simple prose or Markdown answer does not become an HTML artifact unless the task asks for one.
