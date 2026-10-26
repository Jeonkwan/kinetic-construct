# Reference Architecture Specimen: GCP Terraform Monorepo & State Isolation

## Conceptual Model

Infrastructure as Code architecture separates into three orthogonal planes:

## Architectural Laws

1. **State Isolation over Folder Hierarchy**: State isolation is determined solely by backend prefix and bucket IAM permissions—never by folder nesting alone.
2. **Deterministic Version Promotion**: Roots deploy against explicit Git commit SHAs, never floating branch heads or mutable tags.
3. **Least Privilege Blast Perimeter**: Every root operates with a dedicated Google Service Account possessing permissions strictly bounded to that root's resources.
4. **Independent GCS State Locks**: Each root locks its own independent state object, preventing multi-service lock contention.
