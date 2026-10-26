# Diagram pilot validation — 2026-10-26

Local pilot against baseline `2d601f4`. The initial validation below preceded publication approval; no commit, push, or Pages publication had occurred at that point. The existing research report remains an unchanged historical document. The version label stays v1.2.3; this is a local revision for review, not a newly published release.

## What changed

- Replaced the showcase's three-button-only lesson with a complete configuration topology: one shared source, two roots, two state objects, four labeled arrows, named environment associations, scope, legend, takeaway, assumptions, and a visible relationship table.
- Added the canonical copyable source at `starter/diagram.html`; `sync_reference.py` mirrors its marked section into chapter 3 and rebuilds the consolidated LLM bundle. `--check`, the packager, and Pages workflow reject stale generated references.
- Added a reusable representation selector/diagram grammar and project-local style profile. Updated human/agent guidance, starter, tokens, discovery manifest, and both packagers together. Sequence, flowchart, and state forms remain selection guidance only.
- Added grouped optional inspection with exactly one pressed button, neutral selection/check mark, distinct focus, a polite status, code copying, and native-details fallback. Corrected action contrast, comment tokens, the copy-text floor, and horizontal mobile navigation. Clarified active translation versus shadow offset.
- Qualified the historical infrastructure policies and the decision lab's illustrative status. The missing original three-plane enumeration remains unknown.

## Acceptance questions and evidence

| Research acceptance question | Result and practical limit |
| --- | --- |
| Can a first-time reader state the conclusion? | A context-isolated AI reader answered: two independently run roots can call the same source while using distinct backend objects. This is a diagnostic, not a human participant study. |
| Can they explain every essential edge? | Reader correctly identified both root → module calls and both Terraform-run → ledger read/write associations; recognized subject-to-target direction rather than a timeline or one-way data movement. |
| Can they distinguish source, execution, and state without color? | Textual type labels, IDs, the caption, and table identify them. Reader distinguished configurations, Terraform runs, omitted deployed resources, state mappings, and application data. |
| Are assumptions explicit? | Common revision, paths, default workspace, pre-existing example bucket, distinct prefixes/resource identities, and no cross-state reads are labeled. IAM, networks, credentials, deployed resources, and release ordering are omitted. |
| Is core meaning available without JS? | Browser test disabled script execution and reloaded: question, figure, legend, caption, assumptions, four table relationships, and all five code articles were present. Native Enter opened details; selection/copy/theme controls stayed hidden. Scripting was restored afterward. |
| Are controls keyboard operable and stateful? | Enter opens native details; Tab reaches module then dev-root buttons; Space selected dev root. Exactly one `aria-pressed=true`, the matching article, and polite selected-name status were observed. Focus remained on the control. Enter selection was also exercised. Selected focus computed to a separate 3px outline / 4px offset after fixing a specificity conflict. No tablist arrow-key behavior is claimed. Copy reported successful completion for a selected root excerpt; clipboard contents were not independently confirmed. |
| Are themes and graphics readable? | Visually inspected desktop light/dark renders with Fraunces, Bitter, and Fira Code font faces confirmed loaded. Calculated selected text/graphic pairs pass below. This is not a site-wide WCAG audit. |
| Do narrow and zoomed layouts retain meaning? | At 320 CSS px, document width remained 320, with a 262px diagram region scrolling its 880px SVG. Expanded inspector and table stayed inside the page. At 375, 960, 961, and 1440 CSS px the showcase had no page overflow. Navigation was horizontal/static at 960 and vertical/sticky at 961. 320 CSS px exercises the reflow width corresponding to a 1280px viewport at 400% zoom; actual browser zoom was not separately tested. |
| Does the visual earn its place? | The paragraph supplies the yes/no answer; the topology exposes two roots converging on one source while each reaches a separate ledger. The table is better for exact edge lookup and remains an equal reading route. No timed comparison or empirical superiority claim was made. |
| Can an author reproduce the pattern from distributed material? | Reader found source boundaries, IDs/ARIA references, rendered-size rules, edge/boundary semantics, table/fallback, and inspector contract sufficient to reproduce this topology. Other diagram types deliberately have no implementation contract yet. |

## Reader check, separate from appearance

A fresh sub-agent received only the canonical HTML, diagram guide, human guide, agent skill, and architecture reference, plus realistic reader questions. It had no conversation history, suspected findings, or CSS/JS verification evidence.

It answered the lesson and all four edges correctly. It identified ambiguity in the old root-color definition, the implied Terraform-run subject of state arrows, the SVG description's unconditioned “only its own state” claim, and role classification outside Terraform. Revisions added execution-entry configurations to the root definition, a visible run/configuration note, the no-cross-state condition, and neutral-role examples. A second read of the revised files found no remaining comprehension blocker or contradiction. The reader did not assess runtime behavior.

## Contrast calculations

Ratios use declared sRGB values and WCAG relative luminance. Dark alpha backgrounds were composited over their actual figure or surface parent. Normal text threshold: 4.5:1; meaningful graphical strokes: 3:1. Values are displayed rounded only after evaluating the thresholds.

| Pair | Light | Dark |
| --- | ---: | ---: |
| Primary action foreground / background | 4.688 | 9.687 |
| Muted text / surface | 8.660 | 6.467 |
| Syntax comment / code well | 5.169 | 6.412 |
| Neutral connectors / environment surface | 17.649 | 15.136 |
| Environment boundary / canvas | 8.142 | 7.263 |
| Module border / node fill | 8.062 | 5.181 |
| Root border / node fill | 4.567 | 6.368 |
| State border / node fill | 6.377 | 5.679 |
| Module badge text / badge fill | 8.062 | 4.554 |
| Root badge text / badge fill | 4.567 | 6.368 |
| State badge text / badge fill | 6.377 | 5.679 |

Prose on the three node fills ranged from 12.913–14.487 in light and 9.931–12.537 in dark. Focus/selection uses primary ink rather than a reused role accent. Decorative line numbers were not used.

## Rendering, sources, and distribution checks

- Browser: local in-app browser at `http://127.0.0.1:8000/`, focused source at `/starter/diagram.html`. Desktop and narrow inspection, saved theme/reload, native details, keyboard selection, and copy-success feedback exercised. Local screenshots are in ignored `output/playwright/diagram-light.png` and `diagram-dark.png`.
- Print-media emulation retained the overview/table, hid optional inspection, removed minimum-width scrolling, and used dark ink on warm paper even from the dark theme. Physical pagination and a print-to-PDF document were not tested.
- `node --check js/kinetic-serif.js`, `python3 sync_reference.py --check`, `git diff --check`, local HTML IDs/ARIA/link checks, and JSON parsing passed.
- The installed diagram skill's `self_check.py` passed on the exact static SVG extracted from the canonical page. The complete shared-runtime HTML does not meet that tool's standalone-file safety/motion contract (it forbids ordinary scripts and inline event handlers). That whole-page check is intentionally not claimed as passing; integrated behavior was checked in the browser instead. No repository-only geometry validators were claimed.
- The terminal Playwright CLI could not fetch its package because registry DNS was unavailable; browser validation used the available in-app browser controls instead.
- Python and browser packaging lists match: 21 files. Both actual browser downloads were opened as ZIPs; all entries matched source bytes and CRC checks passed. The prebuilt archive was temporarily moved to provoke the 404/fallback path, then restored. Final archive regenerated after completing this record.
- [HashiCorp modules](https://developer.hashicorp.com/terraform/language/modules), [GCS backend](https://developer.hashicorp.com/terraform/language/backend/gcs), and [state purpose](https://developer.hashicorp.com/terraform/language/state/purpose) checked on 2026-10-26. The architecture reference records checked concepts separately from assumptions. No Terraform/GCP apply, credential access, IAM test, or deployed-resource inspection occurred.

## Remaining limits and review focus

This is one local teaching specimen. Shared state storage and access-control isolation remain different claims. Code fragments intentionally omit provider configuration and required resource settings; they are not deployable examples. Human comprehension, assistive-technology announcements, actual browser zoom, physical print pagination, and fallback-font rendering remain separate follow-up checks. The broader inherited showcase is not certified as production infrastructure guidance.

Review the figure's reading order and compactness, the wording of the scope/caption/assumptions, and whether this is the right accepted pattern to extend. Publishing or adding diagram types is a separate next step after local review.


## Publication preparation: explicit-only skill

Before publication and installation, the owner requested opt-in activation. The original broad trigger wording was replaced with an explicit named-system boundary, and `reference/agents/openai.yaml` now sets `policy.allow_implicit_invocation: false`. Instructions preserve the requested format and scope, including short prose and Markdown; invoking the design system alone does not request HTML. Incidental mentions and questions about the skill do not activate design work. The installable unit is the entire `reference/` directory with the installed name `kinetic-serif`.

The policy is included in the consolidated LLM bundle and both packaging lists, bringing the distribution to 22 files. The former 21-file checks above document the initial pilot; the revised package and invocation metadata were checked again before publication. This configuration check does not claim an end-to-end host routing test; new skill discovery occurs on a subsequent turn.

Official behavior reference: [Build skills](https://learn.chatgpt.com/docs/build-skills), consulted 2026-10-26. Codex defaults to implicit matching unless `allow_implicit_invocation` is false; explicit invocation remains available. Other hosts may not enforce this Codex-specific field.
