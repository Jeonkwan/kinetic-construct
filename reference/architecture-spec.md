# Terraform/GCS specimen: shared module, separate state

This document describes the illustrative teaching model in [the working specimen](../starter/diagram.html). It is distinct from Kinetic Serif's reusable [diagram grammar](diagram-guide.md). No infrastructure was deployed or inspected to establish this example.

## Answer and modeled relationships

Two independently run root configurations, `envs/dev/cloud-sql` and `envs/prod/cloud-sql`, call `modules/cloud-sql-ha` from one repository revision. Each root's Terraform run uses its own GCS state object. The module has no independent backend simply because it has its own directory. Deployed Cloud SQL instances are deliberately omitted from the figure; the roots are configurations used for execution, not running databases.

| Root | Source | Backend bucket | Prefix | Workspace | Resulting state object |
| --- | --- | --- | --- | --- | --- |
| Dev | `../../../modules/cloud-sql-ha` | `kc-state-example` | `dev` | `default` | `gs://kc-state-example/dev/default.tfstate` |
| Prod | `../../../modules/cloud-sql-ha` | `kc-state-example` | `prod` | `default` | `gs://kc-state-example/prod/default.tfstate` |

Each root → source arrow means “calls source.” Each root → ledger arrow means “the Terraform run reads/writes state.” This aggregates access as a relationship, not one-way data movement. Dashed boxes group environment configuration and its state association, not a physical bucket, network, or access-control boundary.

## Verified concepts and assumptions

Checked against primary HashiCorp documentation on 2026-10-26:

- Roots call child modules; child resources are managed as part of the calling configuration. Reusing source is supported. See [modules overview](https://developer.hashicorp.com/terraform/language/modules).
- GCS stores named workspace state at `<prefix>/<name>.tfstate` in a pre-existing bucket and supports state locking. Bucket, prefix, and workspace together identify the example object. See [GCS backend](https://developer.hashicorp.com/terraform/language/backend/gcs).
- State maps configuration resource instances to real objects. Distinct state objects must not be assumed to safely manage the same remote object. See [purpose of state](https://developer.hashicorp.com/terraform/language/state/purpose).

The exact bucket, prefixes, paths, common revision, default workspace, distinct resource identities, and absence of cross-state reads are example assumptions. Permissions, provider inputs, resource settings, networking, service accounts, encryption-key policy, bucket creation, and release automation are omitted. Code excerpts are intentionally incomplete teaching fragments, not a validated Terraform/GCP deployment.

Separate state storage does not establish IAM isolation, remove shared dependencies, or guarantee a bounded blast radius. Folder nesting alone establishes none of these. Sharing local source can affect either root on its next run; it does not automatically apply either root.

## Historical source gap and recovered policies

The reconstructed source introduced “three orthogonal planes” but did not supply the enumeration. That original passage remains unknown. The source/root/state teaching labels above are a new, explicit model for this pilot, not recovered missing text.

The four statements below were recovered from the original chat as “Architectural Laws.” They are retained here as historical project policies to review, not Terraform guarantees or universal Kinetic Serif rules:

1. **State Isolation over Folder Hierarchy.** The original said isolation was determined “solely by backend prefix and bucket IAM permissions.” Correction: bucket and workspace also affect state location; authorization and resource ownership are separate concerns.
2. **Deterministic Version Promotion.** Explicit Git commit SHAs were preferred over floating heads or mutable tags. This is a release-policy choice. The local-source pilot assumes a common checked-out revision and does not demonstrate remote source pinning.
3. **Least Privilege Blast Perimeter.** Dedicated, narrowly scoped service accounts were proposed. No such IAM policy is implemented or verified by the figure.
4. **Independent GCS State Locks.** GCS supports locking; distinct state objects avoid sharing one state lock. This does not prevent all contention, shared-resource conflicts, or partial-apply failures.
