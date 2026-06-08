# SDD Lifecycle and Workflow

## End-to-End Lifecycle

SDD organizes delivery into explicit phases with verifiable outputs:

1. Discovery and framing
2. Specification drafting
3. Technical design and planning
4. Implementation
5. Verification and release readiness
6. Production monitoring and feedback

Each phase produces artifacts that become inputs for the next phase.

## 1) Discovery and Framing

Goal: define problem boundaries and desired outcomes.

Typical outputs:

- Problem statement
- Target users and workflows
- Success metrics (business and technical)
- Risks, assumptions, and constraints

This stage prevents teams from solving the wrong problem with perfect execution.

## 2) Specification Drafting

Goal: convert product intent into testable requirements.

Specification content should include:

- Functional requirements (required behaviors)
- Non-functional requirements (latency, security, reliability, cost)
- Data contracts and integration boundaries
- Negative cases and edge-case behavior
- Acceptance criteria in measurable terms

All requirements should be independently verifiable.

## 3) Technical Design and Planning

Goal: translate specifications into implementation strategy.

Activities:

- Break requirements into architecture decisions
- Define service boundaries and ownership
- Plan migrations, rollout sequence, and rollback paths
- Estimate effort and dependency risks

The design review should validate conformance to specification, not only architecture elegance.

## 4) Implementation

Goal: build in small increments while preserving specification alignment.

Recommended practices:

- Map each work item to one or more requirements
- Keep pull requests scoped and traceable
- Update specs in the same branch when behavior changes
- Use feature flags for staged exposure

Implementation quality improves when teams enforce “spec before merge.”

## 5) Verification and Release Readiness

Goal: prove behavior, resilience, and policy compliance.

Verification matrix usually covers:

- Unit/integration/contract tests
- Functional acceptance tests
- Security and performance checks
- Failure-mode and recovery tests

Release criteria should be objective, with documented pass/fail thresholds.

## 6) Production Monitoring and Feedback

Goal: confirm real-world behavior stays aligned with the specification.

Operational controls:

- KPI dashboards linked to requirements
- Alerting tied to SLO/SLA and risk thresholds
- Incident templates referencing affected specs
- Continuous learning loop for future revisions

Production data should continuously inform spec quality.

## Workflow Model: Single-Track vs Dual-Track

### Single-Track

Discovery and delivery run together. Faster for small teams, but can increase ambiguity when complexity grows.

### Dual-Track

Continuous discovery runs alongside delivery. Better for larger domains where requirement quality and prioritization are critical.

## Change Management in SDD

Changes are expected and should be managed deliberately:

- Submit requirement change request
- Run impact analysis (code, tests, operations, timeline)
- Approve and version the new spec
- Implement with updated trace links
- Validate with revised acceptance criteria

This keeps teams agile without losing control.
