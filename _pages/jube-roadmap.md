---
layout: page
title: Jube Roadmap
permalink: /jube-roadmap/
---

The Jube roadmap is shaped by production experience across a significant number of production deployments. What follows
reflects real operational feedback from compliance teams, implementation partners, and co-delivery engagements — not
theoretical product planning. Items are sequenced by impact and dependency, not by ambition.

The roadmap is published in plain terms. No commitments are made to specific release dates beyond the releases described
below. The platform evolves continuously and this page is updated to reflect current direction. Between formal releases,
the platform continues to evolve in response to the requirements of the current corpus of production clients; changes of
general application are merged continuously and will be present in 0.1.0 onwards, as shipped.

---

## Version 0.1.0 — Consolidation Release — July 2026

Version 0.1.0 is the first formal tag of the Jube platform. It represents a deliberate consolidation of
production-proven capability across a significant number of production deployments — tightening existing functionality,
closing identified gaps in operational completeness, and establishing a stable, versioned baseline for all subsequent
development.

This is not a feature release in the conventional sense. The feature additions included are directly informed by
production client requirements. The majority of the work is hardening, integrity, and operational completeness rather
than new capability.

**Security and Authentication Overhaul**
A comprehensive platform hardening including hybrid JWT and API key authentication across all endpoints, parameterised
SQL throughout, AES encryption hardening, password generation improvements, and HTTP security header injection. Breaking
changes to Invoke endpoint authentication are included; all endpoints now require authentication.

**Performance and Resilience Under Load**
Significant work on connection pool management, Redis Polly retry policies, Sentinel failover support, cache warm jitter
and batching, and resolution of a long-standing connection exhaustion root cause in the PostgreSQL connection wrapper.
Benchmarks on development hardware show substantial headroom against production throughput requirements.

**UTC Standardisation**
Full stack standardisation to UTC timestamps.

**Preservation**
Corrections to import and preservation logic covering edge cases identified in production and role migration support.

**Cache Architecture**
Optional offload of HSET operations from Redis to PostgreSQL, a new CacheSetHash table with covering index for
index-only scan performance, and an abstraction interface over the Redis cache layer to support future backend
substitution.

**Tagging Infrastructure**
Tags promoted to a data structure with their own table, archive integration ensuring tagged records are
reflected consistently across case records, and tag management within the Case Key Journal and a dedicated Transaction
Report page.

**Idempotency**
Idempotency for Time to Live (TTL) Counter incrementing at the transaction level, and Case Creation and Notifications at
the
transaction and activation rule level. The intention is to increase adoption of the reprocessing functionality by
assuring material actions are guaranteed to only happen the once, regardless the amount of reprocessing having been
instructed (which is an especially material issue in the case of the incrementing of TTL Counters).

Invocation hash on Json POST or AMQP body to improve retry logic in Jube Cluster HAProxy or AMQP ACK NACK patterns.

**Manual Case Creation via Transaction Report Page**
The ability to retroactively create cases on the basis of results in the aforementioned Transaction Report page.
Structured case creation directly from transaction and alert context, with full audit trail and journal from point of
origin. Closes the workflow loop between detection and investigation.

**Sampling and Analytics**
Archive sampling page enabling date-range and percentage-based sample extraction from the transaction archive, with JSON
flattening to CSV for downstream analytics use.

**Date Expiry on Suppressions and List Entries**
Time-bounded suppression and list management, ensuring that entries age out automatically rather than accumulating
indefinitely. Addresses a common operational hygiene problem in production deployments and supports defensible
compliance posture.

**Add to List from Case Journal**
The ability to add entities, values, or identifiers directly to a List from within the Case Journal, without leaving the
investigation workflow. Reduces analyst friction and accelerates response.

**Transaction Journey Protocol**
Currently the HTTP Adaptation, which exists for remote microservice model recall returns just a single value, the
score. While the score is the primary output and carried through to activation, in the case page, further analysis of
how the model arrived at the decision is valuable, the so-called transaction journey. Transaction Journey will be
protocol between the model recall microservice and Jube to present the scores quantitative origin.

**Jube Reference Cluster, High Availability and Flatcar Linux Validation**
Support of fully active-active clustered deployments with no single point of failure, suitable for primary and Disaster
Recovery configurations. The reference cluster topology comprises multiple Jube application nodes, a Patroni-managed
PostgreSQL cluster with automatic failover coordinated via etcd, and a Redis master-replica setup with Sentinel for
near-real-time failover detection. The platform is designed to run in this configuration, typically in Docker Swarm,
though Kubernetes is equally supported, in production; horizontal scaling of application nodes requires no architectural
changes.

Jube validated for deployment on Flatcar Container Linux, where the full Docker Swarm stack is provisioned via
the provided Swarm compose configuration. Flatcar's immutable, container-optimised runtime makes it well suited to
on-premises and edge deployments where operational simplicity, security hardening, and a minimal host footprint are
priorities. Persistent storage and log shipping are handled via NFS-mounted network-attached storage — an approach that
complements Flatcar's immutable OS model by externalising durable Docker volumes and log shipping entirely outside the
host lifecycle.

---

## Version 1.0.0 — Tests and User Experience — January 2027

Version 1.0.0 is the full platform release. The backend capability established in 0.1.0 is complete; this release
delivers the user experience to match. It is a comprehensive UX investment.

**Integration Test Coverage**
A structured integration test suite focused on the invocation pipeline and model construction via the API. Test cases
will be built around real integration scenarios — exercising the full path from invocation through model execution —
rather
than controller-level unit coverage. Controllers are covered only to the extent that they participate in meaningful
end-to-end scenarios. The test suite will be designed to support continuous integration and protect feature velocity as
the
platform matures: changes to core pipeline behaviour are caught early, and new capability can be delivered with
confidence against a stable, verified baseline.

**Platform UI Migration — Daisy and Vue**
The full platform UI will be migrated to Daisy UI and Vue, replacing the current jQuery-based implementation. The
migration will deliver a modern, component-driven interface with consistent design language across all platform areas.
The
configuration interface — covering rule management, model configuration, entity setup, and platform administration —
will be migrated as a direct translation of existing functionality.

The core information architecture will be unchanged, although the tree based navigation will be replaced with a hub card
journey approach, reducing navigation depth and making the path through configuration more explicit. Hub cards will also
surface significantly more contextual information than the current tree allows, including status, activity, and
configuration state at a glance.

**Visualisation**
The visualisation layer will remain SQL-led and largely unchanged in its underlying approach. The port to Chart.js will
replace the current rendering implementation while preserving the query-driven model. The primary UX improvement will be
a move away from requiring analysts to author raw JSON initialisation blocks: charts will instead be defined through
templated configurations with user-defined parameters and series definitions, keeping the flexibility of the existing
approach while substantially reducing the technical burden of chart authorship. More broadly, visualisation will no
longer be confined to the Case Management and Visualisation Directory contexts — chart and query output will be
available across a wider range of platform areas, bringing data-proximate rendering to the workflows where it is most
useful.

**Case Management Redesign**
The case management interface will be rebuilt from the ground up with serious usability at its core. The existing
interface was designed for functional completeness; the redesigned interface is being designed for the compliance
analyst who lives in it all day. Workflow, information architecture, and interaction design are all in scope.

## Version 1.1.0 — AI Case Management Facilitation — July 2027

**AI-Assisted Case Automation**
LLM-driven automation within the case management workflow via Semantic Kernel, supporting narrative generation, case
summarisation, next-action recommendation, and structured reporting. Designed to reduce analyst burden on routine
documentation tasks and accelerate case throughput without reducing quality or auditability. Case management functions
otherwise available via API are exposed through the same integration layer and invocable given prompts via Semantic
Kernel.

**Vector Similarity Analysis**
Embedding-based similarity analysis across case history, enabling the identification of structurally similar cases
across time, entity, and typology dimensions. Intended to support pattern recognition at scale, typology development,
and the
surfacing of related activity that rule-based approaches may not connect. Particularly relevant to complex layering and
integration-stage AML typologies.

**IP Intelligence Dataset Integration**
Integration of a proprietary IP intelligence dataset built from multiple corroborating public sources, cross-validated
to produce reliable attribution at the country, ASN, and network type level. The dataset is maintained with a specific
compliance focus — prioritising attributes that can be verified with confidence over those that carry an impression of
precision without the substance to support it. City-level geolocation is deliberately out of scope; the dataset is
designed around what remains accurate and defensible under compliance scrutiny, not what looks compelling in a demo.

---

## Principles

**Open source first.** Jube is and will remain open source under AGPLv3. The roadmap reflects the platform's mission to
make serious AML and fraud detection capability accessible. Commercial arrangements exist to support sustainable
development, not to gate functionality.

**Production informed.** Every item on this roadmap has been validated against real deployment experience. Nothing here
is speculative.

**No roadmap theatre.** This page will be updated when direction changes. Items will be removed if they are
deprioritised. The roadmap exists to communicate genuine intent, not to market a vision.

---

*Last updated: May 2026*