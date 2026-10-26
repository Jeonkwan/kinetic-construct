# Kinetic Construct (kinetic-serif v1.2.3) Authoring Guide

## Philosophy & Communication Principles

1. **Information First**: Structure the explanation before selecting its visual presentation. Architecture diagrams must clarify dependencies, trust perimeters, and failure modes—not demonstrate rendering technology.
2. **Strict Semantic 3-Role Accents (Botanical Field)**:
   - **Indigo (`#3730A3`)**: Blueprint, module source, definition, contract schema.
   - **Forest Moss (`#15803D`)**: Runtime boundary, deployed root, active service, pipeline execution.
   - **Burnt Sienna (`#9A3412`)**: State storage, persistent ledger, database backend, immutable log.
   *Rule: Never use these three colors for arbitrary decoration.*
3. **Glare-Free Surfaces**:
   - Use `--bg-canvas: #F4F0E6` for viewport backdrops.
   - Use `--bg-surface: #FAF7F0` for elevated content cards.
   - Use `--bg-well: #EAE4D7` for recessed wells, code backgrounds, and callouts.
   - Pure `#FFFFFF` is prohibited to prevent high-contrast glare on OLED and laptop screens.
4. **Locked Typography Contract**:
   - Display Headings: `Fraunces, Georgia, serif` (Weights 700-800, line-height 1.15-1.22).
   - Reading Prose: `Bitter, Georgia, serif` at `15px` (`0.9375rem`), line-height `1.55`, constrained to `max-width: 65ch`.
   - Technical & Code: `Fira Code, monospace` at `13px` (`0.8125rem`), line-height `1.55`.
   - Badges & Eyebrows: Strict floor of `13px` (`0.8125rem`). Never use sub-12px micro-text.
5. **Spatial Density & Layout**:
   - Navigation: Compact `220px` sticky left rail (`sidebar-rail`) that collapses into horizontal pills on mobile viewports.
   - Flush Cards: Do not wrap sections in redundant outer container boxes with compound nested padding.
   - Side-Docked Workbench: On viewports >= 960px, dock topology graphs side-by-side with code/contract inspectors (`1.25fr 1fr`).
   - Tactile Chrome: `2px solid #111111` borders with `2px 2px 0px #111111` shadows. Interactive elements depress by `(1px, 1px)` on `:active`.
