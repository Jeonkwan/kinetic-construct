# Kinetic Serif: information design and diagram review

Date: 2026-10-26 (Asia/Shanghai)  
Status: Research and proposals for discussion. No implementation approved.  
Baseline: `2d601f42a142e68e644ee3127facc6f39e6975cd` (`kinetic-serif v1.2.3`)  
Repository: https://github.com/Jeonkwan/kinetic-construct  
Published system: https://jeonkwan.github.io/kinetic-construct/

## Purpose and boundaries

The owner asked whether the design system, its agent skill, and its human guidance are sufficient, particularly given the absence of diagram specimens. They requested research and feedback before changes, then explicitly authorized saving this research locally for another session.

This document is the research deliverable. Creating it does not approve the proposed design changes. No existing site, CSS, runtime, skill, guide, manifest, workflow, or token file was edited during this review. No commit, push, or deployment was performed for this research.

The assessment uses local source inspection, primary-source reading, a fresh-agent reader test, and calculations from declared CSS colors. It is not a complete browser, screen-reader, WCAG-conformance, or end-user usability audit. Source summaries below are paraphrases, not archived copies of the articles.

## Assessment

Kinetic Serif is a coherent visual foundation and usable starter. Its fonts, paper surfaces, restrained semantic palette, reusable assets, and compact layout establish a recognizable identity. Setup and asset reuse are documented.

The remaining weakness is its explanation system: how an author selects a representation, encodes a relationship, directs attention, establishes scope, and checks reader understanding. The current guidance gives far more detail about appearance than about those decisions.

The highest-value next step is a complete, reusable diagram specimen and a concise information-design contract, followed by a small number of additional visual forms. A large decorative gallery would not address the underlying gap.

## Evidence labels

- **Observed:** directly supported by the baseline source files.
- **Calculated:** derived from the declared token values; reproducible below.
- **Research:** findings from primary studies, with their limits retained.
- **Convention:** a framework, standard, or author recommendation; not proof of universal cognitive laws.
- **Proposal:** a project-specific recommendation awaiting discussion.

## Current-system findings

| Finding | Evidence at the baseline | Consequence / proposed response |
|---|---|---|
| The topology has no visible relationships. | `index.html:85–130` provides three selector buttons and an inspector. Neither the root page nor starter contains SVG, figures, or diagram connectors. | Selection reveals details, but readers cannot inspect dependencies, containment, or isolation at a glance. Add a meaningful overview before optional inspection. |
| Diagram grammar is unspecified. | `reference/guide.md:7–27` specifies purpose, colors, typography, and layout; it does not define edge direction, edge labels, node anatomy, scope boundaries, or accessible alternatives. | Different agents must invent different conventions. Define a small shared vocabulary and show it in working examples. |
| The showcase mixes design rules and one infrastructure lesson. | Chapters 3–6 and 9 focus on GCP/Terraform; design tokens and components arrive in chapters 7–8. `reference/architecture-spec.md:5` still introduces three planes without enumerating them. | Separate reusable system guidance from a clearly labeled domain specimen. Do not invent the missing original passage. |
| The semantic-color rule is not applied consistently. | `reference/guide.md:8–12` reserves accents for roles. `index.html:65–79` also assigns those accents to generic principles; `css/kinetic-serif.css:277–280` makes all primary actions use the runtime accent. | A color can mean both a domain role and generic emphasis. Distinguish diagram role, interaction emphasis, and status. Neutral styling can provide hierarchy without adding a rainbow. |
| Documentation and CSS disagree. | The guide promises a horizontal mobile rail (`reference/guide.md:24`), while the media rule retains the rail's column direction (`css/kinetic-serif.css:134–146,390–399`). Guide active movement is 1px (`guide.md:27`); CSS movement is 2px (`css:272–274`). | Resolve the intended behavior, then align the guide, CSS, JSON, examples, and full bundle. Active shadow offset and physical translation are different properties and should be named separately. |
| There is an observed contrast problem in dark-mode actions. | Dark `--accent-root` is `#34D399` (`css:70`). Primary buttons always use white labels (`css:277–280`). Calculated ratio is 1.922:1. | This is below the normal-text minimum in [S08]. Use a contrasting foreground appropriate to each theme. This does not require replacing the palette. |
| Some promised floors and token coverage are incomplete. | Copy text is `0.78rem` (`css:344`), approximately 12.48px at a 16px root. The guide describes a 13px technical floor. JSON contains light-theme values but no dark-theme set; CSS contains both. | Clarify intentional exceptions and token authority. Future diagram typography needs a rendered-size rule, not just an SVG source font-size. |
| Inspector selection has no defined treatment in the design system. | JavaScript toggles `.selected` (`js/kinetic-serif.js:47–49`), but the stylesheet has no `.selected` or `.node-btn` rule. There is no authored selected-state ARIA update. | Specify visible and programmatic selection, keyboard access, and an appropriate means of communicating changed details. Do not assume a CSS class alone establishes those behaviors. |

Pinned source reference: [baseline source tree](https://github.com/Jeonkwan/kinetic-construct/tree/2d601f42a142e68e644ee3127facc6f39e6975cd). Line references describe this revision and may move later.

## Fresh-reader test

An independent agent received only the published-project files and realistic questions, without this review's suspected findings or proposed answers. This is a documentation diagnostic, not a study with human participants.

| Reader question | Result | Missing guidance |
|---|---|---|
| How do I create my first explainer in another project? | Answerable | Basic setup, hosted assets, starter paths, and local preview are clear. |
| How do I choose prose, table, sequence, flowchart, or another diagram? | Partial | The information-first principle is present; selection criteria are absent. |
| How do I draw conforming nodes, edges, and boundaries? | Partial | Colors and general card chrome are present; diagram notation and construction rules are absent. |
| Which rules are universal and which are Terraform/GCP-specific? | Partial | The distinction must be inferred from the examples. |
| How do I verify clarity and accessibility? | Partial | Typography is documented, but comprehension, keyboard, nonvisual equivalents, and acceptance checks are not. |

The practical failure is not inability to start. It is the amount of visual and editorial judgment a new agent must invent after starting.

## Research implications

### 1. Start from the reader's task

Munzner separates domain needs, task/data abstraction, visual encoding, and algorithms [S01]. This supports checking whether the document answers the right question before polishing the representation. It is a design-and-validation framework, not an experiment proving one template superior.

**Proposal:** each substantial explainer should establish its reader, question, scope, evidence, and intended takeaway. Ask only for genuinely missing context. Avoid requiring a rigid questionnaire or ten-chapter structure for every document.

### 2. Make diagram notation explicit

C4 is notation-independent but recommends titles and scope, explicit element types, meaningful relationship labels, and a legend [S02]. These conventions can inform Kinetic Serif without adopting C4's example colors or making all diagrams C4 diagrams.

**Proposal:** document node anatomy, boundary meaning, direction, relationship labels, grouping, selection, and captions. Distinguish a dependency from a data flow, temporal sequence, or containment relation. A label such as “reads/writes state” is more informative than an unexplained line.

### 3. Give an overview before optional detail

Shneiderman's overview/detail guidance is a design heuristic [S03], not a requirement to implement zoom controls. The useful application here is that readers should understand the essential topology before clicking individual nodes.

**Proposal:** keep the meaningful relationship map and takeaway visible; use the inspector for code, metadata, and focused detail. Print and no-JavaScript views should retain the diagram's core meaning.

### 4. Keep explanations near their subjects

Moreno and Mayer found a spatial-contiguity benefit in an experiment about learning from lightning animations and explanatory text [S04]. Applying that finding to static technical diagrams is an inference, not a direct result for this website.

**Proposal:** use direct labels, nearby short annotations, and a caption that states the conclusion. Keep substantial explanations outside nodes, close enough that the reader can connect them without repeated distant cross-reference.

### 5. Treat complexity budgets as heuristics

A comparison of node-link and matrix representations found task-, density-, and size-dependent differences [S05]. Huang's preliminary study with 16 participants found small crossing angles affected path tracing more than node finding [S06]. Neither study establishes a universal nine-node maximum.

**Proposal:** use the diagram skill's compactness budgets as review prompts. Split when the reader's question or abstraction changes, or when the important path becomes hard to trace. Favor readable routing; do not label strict orthogonal geometry or one node count as an accessibility law.

### 6. Design text and graphics as equivalent routes to the meaning

W3C's complex-image guidance calls for short identification and a fuller equivalent of essential information [S07]. Color must not be the sole distinguishing cue [S09]. Essential graphical objects generally need 3:1 contrast against adjacent colors [S10]. Reflow has a specific exception for content that requires two-dimensional layout [S11].

**Proposal:** pair diagrams with a visible ordered explanation or relationship table, use text/type cues alongside color, preserve keyboard operation, and test narrow layouts. A diagram can scroll within its own region where needed; surrounding prose should still reflow. An SVG title and description alone may be insufficient for a complex relationship model.

### 7. Organize documentation around reader needs

Diátaxis distinguishes tutorials, how-to guides, reference, and explanation [S12]. It is a documentation framework, not a mandatory folder taxonomy.

**Proposal:** provide a first-guide walkthrough, task-based recipes, a precise component/notation reference, and explanations of the rationale. The existing infrastructure lesson can remain a worked example rather than determine every guide's chapter order.

## How the available skills help

### Diagram Design

Relevant local instructions: `/Users/jeonkwan/.codex/skills/diagram-design/SKILL.md`, its `WORK-INTEGRATION.md`, and `references/type-architecture.md` / `references/type-sequence.md`.

Reuse its visual-type selection, overview/detail thinking, explicit connectors, boundaries, accessible SVG contract, and inspection of rendered output. Its compactness rules are house conventions, not cognitive-science limits.

Its default fonts, coral accent, no-shadow preference, and standalone-file templates are not automatically Kinetic Serif requirements. The local integration instructions explicitly make the chosen project design system authoritative. A project-local style profile would be preferable to editing shared installed skill defaults if diagram implementation is later approved.

### Doc Co-authoring

Relevant local instructions: `/Users/jeonkwan/.codex/skills/doc-coauthoring/SKILL.md` and its `WORK-INTEGRATION.md`.

Reuse context gathering, structure/refinement, and context-isolated reader testing. Preserve the author's chosen pace and existing context; do not copy every procedural question or force an external product. Here, the skill's reader check exposed the gap between visual specifications and authoring decisions.

### Research

Relevant local instructions: `/Users/jeonkwan/.agents/skills/research/SKILL.md`.

A separate research agent investigated primary sources while the main review inspected local evidence. This report consolidates the research, source URLs, limitations, and handoff context under the user's explicit request to save the work.

## Proposed information-design contract

This is a draft direction for discussion, not a new mandatory policy.

1. Establish the reader's question, scope, and one-sentence takeaway.
2. Choose prose, table, or visual according to the relationship being explained.
3. Model the facts before choosing geometry; mark assumptions and omissions.
4. Use consistent labels, boundaries, edge meanings, and role treatments.
5. Keep the main conclusion and relationship overview visible without interaction.
6. Add readable source/example material and equivalent text.
7. Check comprehension separately from appearance and functional correctness.

### Representation selector

These mappings are project proposals informed by the frameworks above, not experimentally proven universal rules.

| Reader asks | Useful starting form | Common failure |
|---|---|---|
| What is this, and why does it matter? | Short prose plus one concrete example | Drawing a diagram for a single sentence |
| How do options or attributes compare? | Table; a chart when quantitative values matter | Equal cards that make comparisons difficult |
| What depends on what? | Dependency/topology diagram | Unlabeled edges or mixing dependency with data flow |
| What belongs inside which scope? | Containment diagram or tree | Using folder nesting to imply an unstated runtime/security boundary |
| In what order do actors communicate? | Sequence diagram | Treating a static topology as a timeline |
| What decisions change the path? | Flowchart | A visually implied branch with no explicit condition |
| What states and transitions are possible? | State diagram | Confusing states with activities or deployment components |
| What must I do next? | Procedure or checklist; swimlane if ownership handoffs matter | A graphic that omits actionable instructions |

### Small diagram grammar to define later

- **Figure:** informative title, scope, takeaway caption, and nearby explanatory text.
- **Node:** readable name, optional type, concise responsibility, technical identifier when needed.
- **Edge:** direction and a specific relationship phrase; notation depends on the visual type.
- **Boundary:** explicitly named ownership, environment, trust, or other scope; do not imply security from decoration.
- **Role:** reuse source/runtime/state where they fit; give people and external systems a neutral treatment rather than force them into an unrelated category.
- **Emphasis:** distinguish domain role from selection, primary action, warning, or error.
- **Geometry:** stable reading direction, sufficient separation, readable labels, and connectors that do not obscure nodes.
- **Interaction:** optional detail, visible selection/focus, keyboard access, and a complete static overview.

Keep Fraunces for editorial display, Bitter for human-readable text, and Fira Code for technical strings. Define diagram-specific rendered type sizes after inspecting actual output at target widths. Preserve tactile chrome where it communicates an interactive affordance; evaluate whether every passive node needs the same weight and shadow as a button.

## Proposed first specimen

Start with the existing module/root/state lesson because it already has content and an inspector.

**Question:** Can two deployments share module code while keeping their state separate?

**Proposed extension, not an existing documented architecture:** one shared module, two environment roots, and two distinct state objects. Show each root's dependency on the module and its own state relationship. Use labels and boundaries to explain what is shared and what is isolated. Sharing code does not, by itself, imply shared state.

Include a caption, legend, static relationship table, code source, and inspector. Review the infrastructure assertions before treating them as technical guidance; this review did not validate Terraform/GCP operational advice.

After that pilot, add a release sequence and a decision-flow or state example. Include at least one non-Terraform example to show the system generalizes. Do not build the full diagram skill's 45-type catalog in the first iteration.

## Proposed work order, pending discussion

| Order | Scope | Definition of done |
|---|---|---|
| 1 | Reconcile existing contract and contrast issues | Intended mobile/active behavior is agreed; theme foregrounds pass applicable contrast checks; documentation names intentional exceptions. |
| 2 | Add the authoring brief and representation selector | A reader can choose an appropriate form without inventing the selection rules. |
| 3 | Build one complete topology specimen and its notation reference | A fresh reader can explain the sharing/isolation relationships without clicking; the example has reusable source and an equivalent text path. |
| 4 | Expand the skill, guide, and starter from the accepted specimen | Guidance describes demonstrated components, separates universal rules from the infrastructure lesson, and includes a short reader check. |
| 5 | Add a few complementary examples and align distribution | The manifests, consolidated bundle, token coverage, and packagers include approved additions and stay consistent. |

Potential new paths such as `reference/diagram-guide.md`, `starter/diagram.html`, or an examples directory are implementation options only. They have not been created or approved. Existing `make_repo.py` and the browser downloader each enumerate repository files, so any later distribution changes must deliberately account for new examples and references.

## Acceptance questions for a later implementation

- Can a first-time reader state the main conclusion in one sentence?
- Can they explain the direction and meaning of every essential edge?
- Can they distinguish shared source, deployed execution, and persisted state without relying on color?
- Are unknowns and domain-specific assumptions explicitly labeled?
- Does the complete meaning remain available without hover, animation, or JavaScript?
- Do interactive controls work with keyboard focus and communicate their state?
- Are text and meaningful graphics sufficiently contrasting in both themes?
- At narrow widths and zoom, does prose reflow and do diagrams retain readable text?
- Does the chosen visual outperform a simpler paragraph or table for its intended question?
- Can an agent with only the published material reproduce the accepted pattern without inventing missing conventions?

## Reproducing the contrast finding

This uses declared foreground/background colors, not a screenshot sample. The button color is opaque; no alpha compositing is needed. General conformance still needs a wider audit. See [S08].

```python
def luminance(color):
    channels = [int(color[i:i + 2], 16) / 255 for i in (1, 3, 5)]
    linear = [c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
              for c in channels]
    return sum(c * w for c, w in zip(linear, (0.2126, 0.7152, 0.0722)))

def contrast(a, b):
    lighter, darker = sorted((luminance(a), luminance(b)), reverse=True)
    return (lighter + 0.05) / (darker + 0.05)

print(contrast('#FFFFFF', '#15803D'))  # light action: approximately 5.016
print(contrast('#FFFFFF', '#34D399'))  # dark action: approximately 1.922
```

Additional token-only checks found approximately 4.008:1 for light comment text (`#736E62` on `#EAE4D7`) and 4.145:1 for dark comment text (`#6B7C77` on `#111618`). These combinations fall below 4.5:1 if used for normal-sized informative text. The current HTML does not apply the syntax-comment class, so distinguish a token risk from an already displayed comment failure. Decorative line numbers need separate evaluation according to their purpose.

## Source register

All URLs below were consulted on 2026-10-26. Frameworks, empirical studies, and accessibility guidance are labeled separately. Older research is included for foundational concepts, with no claim that it settles every contemporary documentation choice.

### S01 — Visualization design and validation framework

Tamara Munzner (2009), *A Nested Model for Visualization Design and Validation*. Primary author/university-hosted paper.  
https://www.cs.ubc.ca/labs/imager/tr/2009/NestedModel/NestedModel.pdf

Use for task-first design and distinguishing different kinds of evaluation. It is a conceptual model; it does not prescribe Kinetic Serif's palette, node count, or exact page structure.

### S02 — Architecture notation conventions

Simon Brown / C4 model, *Notation* (continuously maintained primary documentation).  
https://c4model.com/diagrams/notation  
Related levels: https://c4model.com/diagrams

Use for explicit scope, labels, and notation. These are architecture conventions; they do not make C4 appropriate for every process, state, or comparison visual.

### S03 — Overview and detail heuristic

Ben Shneiderman (1996), *The Eyes Have It: A Task by Data Type Taxonomy for Information Visualizations*. Primary author/university-hosted paper.  
https://www.cs.umd.edu/~ben/papers/Shneiderman1996eyes.pdf

Use for deciding which information is initially visible and which details can be requested. It is a starting heuristic, not a demand that static documentation acquire zoom/filter controls.

### S04 — Spatial contiguity evidence

Roxana Moreno and Richard E. Mayer (1999), *Cognitive Principles of Multimedia Learning: The Role of Modality and Contiguity*, Journal of Educational Psychology 91(2), 358–368. Primary research article available through an educational reading copy.  
https://www.davidlewisphd.com/courses/EDD8121/readings/1999-MorenoMayer.pdf  
DOI: https://doi.org/10.1037/0022-0663.91.2.358

Use for the rationale behind adjacent labels/explanations. Transfer from the animation experiment to static software diagrams is explicitly an inference. It does not justify narration, animation, or dense text in every node.

### S05 — Task-dependent graph representation evidence

Mohammad Ghoniem, Jean-Daniel Fekete, and Philippe Castagliola (2004), *A Comparison of the Readability of Graphs Using Node-Link and Matrix-Based Representations*. Primary research article hosted as a university reading.  
https://courses.ischool.berkeley.edu/i247/f05/readings/Ghoniem-GraphReadability_InfoVis04.pdf

Use when choosing between a relationship matrix and node-link form for denser material. Its experimental tasks and graph conditions limit generalization to narrative documentation.

### S06 — Graph layout evidence

Weidong Huang (2008), *An Eye Tracking Study into the Effects of Graph Layout*. Primary author-submitted research/preprint.  
https://arxiv.org/abs/0810.4431

Use for task-dependent caution about crossing angles and path readability. The paper describes a preliminary study, not a universal proof for orthogonal-only diagrams or a fixed complexity budget.

### S07 — Complex-image alternatives

W3C WAI, *Complex Images* (official implementation guidance).  
https://www.w3.org/WAI/tutorials/images/complex/

Use when designing meaningful textual equivalents and accessible figure structure. The full relationships of a complex diagram may need more than a short name or one-line description.

### S08 — Text contrast

W3C, *Understanding SC 1.4.3: Contrast (Minimum)* (official explanation of the normative criterion).  
https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

Normal text generally needs 4.5:1 and qualifying large text 3:1, subject to the criterion's exceptions. Do not round a failing value up to the threshold.

### S09 — Color-independent meaning

W3C, *Understanding SC 1.4.1: Use of Color* (official explanation of the normative criterion).  
https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html

Use for redundant text, type, or other visual cues whenever color encodes meaning. Good contrast alone does not resolve every dependence on recognizing a hue.

### S10 — Meaningful graphic contrast

W3C, *Understanding SC 1.4.11: Non-text Contrast* (official explanation of the normative criterion).  
https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html

Use for essential connectors, shapes, and visual control/state information against adjacent colors. Apply the criterion's scope and exceptions rather than testing every decorative stroke indiscriminately.

### S11 — Reflow

W3C, *Understanding SC 1.4.10: Reflow* (official explanation of the normative criterion).  
https://www.w3.org/WAI/WCAG22/Understanding/reflow.html

Use for narrow/zoomed page behavior and the exception for content needing two-dimensional layout. The exception should not become an excuse for unnecessary page-wide horizontal scrolling.

### S12 — Documentation needs and forms

Daniele Procida, *Diátaxis* (original framework documentation).  
https://diataxis.fr/

Use to distinguish learning, doing, reference lookup, and conceptual understanding. Adopt the reader-needs distinction without assuming that four new directories or an entire site restructure are required.

## Handoff to another session

1. Read this assessment and the source register; fetch the relevant original source before expanding its claims.
2. Check the current repository revision against the baseline before relying on the file/line findings.
3. Confirm the owner's chosen scope from the proposals above before implementation. No proposed diagram grammar, new gallery, or source modification was approved in the research conversation.
4. Preserve Kinetic Serif's established brand unless the owner requests a change. Treat imported skill defaults as defaults, not project authority.
5. Carry unresolved issues forward: the missing original conceptual enumeration, the boundary between universal guidance and GCP examples, and the choice of the first diagram specimen.
6. If implementation is subsequently approved, update the accepted examples and their human/agent guidance together, validate reader comprehension, and keep packaged/published context consistent.
