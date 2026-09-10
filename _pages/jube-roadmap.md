---
layout: page
title: Jube Roadmap
permalink: /jube-roadmap/
---

The Jube roadmap is shaped by production experience across a significant number of production deployments. What follows
reflects real operational feedback from compliance teams, implementation partners, and co-delivery engagements — not
theoretical product planning. Items are sequenced by impact and dependency, not by ambition.

The roadmap is published in plain terms. No commitments are made to specific release dates — Jube does not tag versioned
releases; see *Master is the release* below. The platform evolves continuously and this page is updated to reflect
current direction, in response to the requirements of the current corpus of production clients; changes of general
application are merged to master continuously.

**Controllers Moving to Service Layer and Prompt Decoration**
The user interface is moving to Blazor and Radzen components. This migration necessitates moving controller logic into a
service layer, since Blazor Server renders on the server rather than calling controller endpoints from client-side
script. As part of this migration, service properties and methods will be comprehensively decorated to provide robust,
strongly-typed function calling for "Ask Jooby", the AI chatbot described below — the same service layer that drives the
UI becomes the surface the agent invokes.

**Service Layer Test Coverage**
As part of the controller migration, comprehensive XUnit test coverage is being built out for the new service layer,
establishing a tested foundation ahead of both the UI migration and Ask Jooby's function-calling surface.

**AI Chatbot "Ask Jooby"**
LLM-driven automation running on a Phi-4 Mini model via the Microsoft Agent Framework. Ask Jooby is delivered as a set
of role-scoped agents rather than a single general assistant, each invoking the decorated service layer described above:

* **DevOps Support** — a read-only operational assistant for running Jube in production: interpreting cluster,
  PostgreSQL, and Redis Sentinel health, triaging logs, and explaining deployment state to reduce time-to-diagnosis
  during incidents.
* **Analyst Agent** — narrative generation, case summarisation, next-action recommendation, and structured reporting.
  Intended to reduce analyst burden on routine documentation tasks and accelerate case throughput without reducing
  quality or auditability. Case management functions otherwise available via the API are exposed through the same
  integration layer and invocable via natural-language prompts.
* **Data Analyst** — interprets query and visualisation output, model performance statistics, and Exhaustive Adaptation
  results, giving analysts and non-technical stakeholders a way to ask questions of the data without first learning SQL
  or the platform's chart configuration.
* **General Administrator** — guides platform configuration: entity setup, multi-tenancy, and user and role management,
  aimed at reducing the learning curve for teams new to the platform.
* **Rule Writer** — translates an analyst's description of a typology or a control gap into a candidate rule
  definition — thresholds, velocity checks, aggregation counts, sanctions logic — within the existing rule engine,
  leaving it in an unapproved state for a human reviewer to test and sign off before activation.

Ask Jooby will come onstream very quickly, but early agents will focus on read only activities, broadly in priority
order as above. Rule Writer and General Administrator write to production configuration and are therefore gated by the
Maker Checker approval workflow above; Data Analyst and DevOps are read-only by design, and will be one of the last
agents to arrive, mindful that the highest impact agents are likely to be read-only in any case.

The use of such a small model has only recently become possible because of the agentic AI patterns we have seen prevail
in 2026, alongside new frameworks such as Microsoft Agentic Framework. While Phi-4, let along Phi-4 mini, has nothing
like the knowladge, the itterateve nature of agentic AI skills and run books means computation demands are less,
although it does offload this to the AI engineer to create relevant skills. The reality is that the large models
frequently have the end user chasing their tail, and it is this reality that guides the approach. Creative solutions are
wrong quite a lot.

Ask Jooby is deliberately built on the smallest available model with good reasoning — specifically mathematical and
logical reasoning — rather than chasing the largest general-purpose model available. Jube's domain is quantitative:
thresholds, velocity and aggregation logic, rule authoring, statistical model output. That rewards reasoning capability
over conversational breadth, and it is what Phi-4 Mini, and its successors, is being backed on. A small model also keeps
inference cheap enough to run within the clients own infrastructure, in keeping with Jube's open source,
no-vendor-lock-in stance — no case, transaction, or configuration data need ever leave the deployment boundary to reach
a third-party inference API.

Retrieval Augmented Generation (RAG) and embedding-based similarity, within Ask Jooby itself, are scoped broadly:
directing function calling — matching a request to the correct decorated service-layer method — by transposing the
descriptive elements of that decoration into embeddings for retrieval, yet also containing chunked documentation, source
code tree and example, generalised, rule definitions.

**Case Vector Similarity Analysis and Real-Time Comparison**
Embedding-based similarity analysis across case history, enabling the identification of structurally similar cases
across time, entity, and typology dimensions. Intended to support pattern recognition at scale, typology development,
and the surfacing of related activity that rule-based approaches may not connect. Particularly relevant to complex
layering and integration-stage AML typologies. The intention is for this to be available both on the Case page and for
real-time recall — to the extent embedding models permit real-time recall, since they require a remote procedure call
and are likely to take longer than the rest of the invocation pipeline. Anything under 60ms is likely acceptable, which
is still a long way off the sub-20ms latency Jube otherwise targets for model invocation.

Redis is used for the Vector storage in RAG and Case Similarity, via full text and distance evaluation indexes, lending
it to realtime evaluation. An extension to the invocation pipeline will facilitate realtime evaluation of similar cases
given vector distance and other case status attributes.

**Maker Checker Improvements**
A review layer in support of "Ask Jooby": an LLM agent cannot be allowed to drop function calls straight into
production. Every model entity gains an Approved state; during synchronisation, only approved states are eligible for
propagation, with the system falling back to the last approved version wherever a pending change has not yet been signed
off. The model sync page will surface a digest of unapproved changes, linking directly to the affected entity, so a
human reviewer can see — and approve or reject — exactly what an agent, or a person, is proposing before it reaches
production.

**Invocation Test Coverage**
A structured integration XUnit test suite focused on the invocation pipeline and model construction via the API. Test
cases will be built around real integration scenarios — exercising the full path from invocation through model
execution — rather than controller-level unit coverage. Controllers are covered only to the extent that they participate
in meaningful end-to-end scenarios. The test suite will be designed to support continuous integration and protect
feature velocity as the platform matures: changes to core pipeline behaviour are caught early, and new capability can be
delivered with confidence against a stable, verified baseline.

**Flatten HSET Switch**
Although the load on Redis leaves plenty of headroom, and Redis wire-compatible dictionary backends are increasingly
leaning towards multithreading (e.g. Valkey), HSET does not support sharding, since hash keys are only ever top-level
keys. A switch will be included that optionally promotes HSET entries to more traditional key-value pairs, to facilitate
sharding for very large Jube implementations, or implementations that rely on managed cloud Redis, which is often
backend-sharded.

**Platform UI Migration — Blazor and Radzen**
The full platform UI will be migrated to Blazor Server and Radzen, replacing the current jQuery-based implementation.
The migration will deliver a modern, component-driven interface with consistent design language across all platform
areas. The configuration interface — covering rule management, model configuration, entity setup, and platform
administration — will be migrated as a direct translation of existing functionality.

The core information architecture will be unchanged, although the tree based navigation will be replaced with a hub card
journey approach, reducing navigation depth and making the path through configuration more explicit. Hub cards will also
surface significantly more contextual information than the current tree allows, including status, activity, and
configuration state at a glance.

*Why Blazor.* Most Jube deployments sit inside enterprise environments with stringent security requirements, and a
large, fast-moving JavaScript dependency tree is a genuinely difficult thing to keep on top of — the churn, the
transitive dependency count, and the supply-chain risk of the npm ecosystem are an ongoing operational burden that sits
uneasily with compliance-grade software. Run as Blazor Server, the UI renders to what is effectively a dumb terminal: a
minimal Blazor JS interop shim plus an optimised transport (SignalR) to keep the circuit alive, and nothing else. No
application logic runs in the browser, there is no bundler toolchain to maintain, and there is no meaningful client-side
attack surface to audit or patch — the code that matters runs server-side, next to the data, never shipped to the client
for inspection or tampering.

Blazor has also come of age considerably as an Server Side Rendering (SSR) framework, and it is well suited to the
situation most Jube deployments sit in: backend infrastructure that is substantially more capable than the client, on a
network the operator controls end-to-end. Because the UI shares the same C# codebase and type system as the decorated
service layer described above, there is a single source of truth for validation and behaviour rather than a duplicated —
and potentially divergent — copy on the client, which matters for software whose outputs need to hold up under
compliance scrutiny. It also keeps the whole stack within the developers' existing .NET expertise, rather than requiring
a separate front-end discipline and toolchain to be maintained and kept secure alongside it.

**Visualisation**
The visualisation layer will remain SQL-led and largely unchanged in its underlying approach. The port to Radzen charts
will replace the current rendering implementation while preserving the query-driven model. The primary UX improvement
will be a move away from requiring analysts to author raw JSON initialisation blocks: charts will instead be defined
through templated configurations with user-defined parameters and series definitions, keeping the flexibility of the
existing approach while substantially reducing the technical burden of chart authorship.

Alongside SQL, remote web calls will be supported as a chart data source in their own right — configured with the same
templated approach as SQL-defined charts. This allows visualisation to be built directly against external APIs and
third-party services, such as reporting platforms or enrichment and sanctions providers, without first landing the data
in Jube's own database.

**Case Management Redesign and Service Levels**
The case management interface will be rebuilt from the ground up with serious usability at its core. The existing
interface was designed for functional completeness; the redesigned interface is being designed for the compliance
analyst who lives in it all day. Workflow, information architecture, and interaction design are all in scope. Service
Level metrics will be included as part of the overall audit functionality, which is a gap between Jube and other open
source systems.

**Blazor Test Coverage**
As part of the user interface redesign, comprehensive BUnit test coverage will be added for Blazor pages.

**IP Intelligence Dataset**
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

**Master is the release.** Rightly or wrongly, Jube does not tag versioned releases. Issues and fixes are patched
forward directly on master, and this becomes a materially more defensible position as the automated test coverage
described above comes on stream. Clients on Enterprise Support may request a hot fix against a specific Git SHA, but
this is exceptional rather than routine: the intention is that Enterprise deployments track master as a matter of
course, since deferring that only stores up larger migrations for later. Where a hot fix is issued, the regression risk
between the client's SHA and current master is documented as a matter of course.

Not everything lands on master on the same terms, though. The controller-to-service-layer migration and its accompanying
test coverage, for instance, is wholly backward compatible, so it merges to master almost as soon as it's written — the
intention is iterative feedback, not a big-bang cutover. The Blazor UI rewrite doesn't enjoy that same privilege, and
neither does Ask Jooby, which depends on it: it is being developed as a project distinct from the current jQuery UI, and
it will land in master feature by feature as each area is migrated, but it will sit in a non-functional state for some
time before there is enough of it in place to run.

**No roadmap theatre.** This page will be updated when direction changes. Items will be removed if they are
deprioritised. The roadmap exists to communicate genuine intent, not to market a vision.

---

*Last updated: September 2026*