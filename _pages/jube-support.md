---
layout: page
title: Jube Training and Implementation
permalink: /jube-training/
---

Private training that takes your team from first principles to a working pre-production
deployment of Jube. Designed for compliance professionals, engineers, analysts, and
architects, this programme combines instructor-led sessions with supported own-time
project work.

It is delivered in one of two ways — **remotely over seven weeks**, or **on-site across a
single month, at the end of which the system is in pre-production**. The curriculum, the
certification, and the payment schedule — including the de-risking that defers payment
until delivery is under way — are the same in both cases. On-site, sessions run two
blocks a day, so the curriculum completes in week one and the remaining three weeks are a
hundred hours of implementation delivered alongside your team, in your environment,
rather than through an asynchronous channel over the two months that follow.

Your team will **learn, configure, and operate Jube in realistic scenarios** throughout.

**This page is the offer.** Everything commercial — fees, payment schedule, de-risking,
what's included, governance, and intellectual property position — is published here in
full. Engagement proceeds directly to a quote which references this page; the quote adds
only the handful of parameters specific to your engagement (see
[From this page to a signed engagement](#from-this-page-to-a-signed-engagement) below).

In **private training**, you'll gain:

- **Practical mastery** — configure rules, workflows, and machine learning models hands-on
- **Real deployment outcomes** — leave ready to implement Jube in a pre-production environment
- **Guided integration support** — expert access throughout to ensure architectural
  correctness, successful pre-production deployment, and smooth completion of certification.
- **Production-ready architecture** — deploy and chaos-test a high availability cluster
  configuration, covering Docker Swarm, Patroni, Redis Sentinel, and HAProxy, so your
  team understands the stack before it matters.

![Jube Training](/training.png)

Private delivery allows deeper focus on your architecture, data, workflows, and
implementation strategy, ensuring the training directly supports pre-production.

- Fully customised to your team's schedule, experience level, and objectives
- Can include **developer workshops**, advanced architecture topics, and live implementation support
- Ideal for teams planning pre-production deployment or complex integrations
- Delivered remotely via Google Meet or on-site at your offices, with recordings
  available via OneDrive throughout in either case

> *Training is delivered by the Jube developer, ensuring first-hand knowledge throughout
> — from compliance fundamentals through to production deployment and C# extensibility.*

---

## Choosing a delivery mode

Both modes deliver the same eleven sessions, the same practical exercises, the same two
days of custom gap development, and the same certification. What differs is how the
implementation support is delivered, and therefore how long the project takes.

| | **Remote** | **On-site month** |
|---|---|---|
| Elapsed time to pre-production | Seven weeks, plus integration thereafter | Within the month |
| Curriculum | Eleven sessions over seven weeks | Eleven sessions in week one, two blocks a day |
| Session length | Capped at three hours, one at a time | Two three-hour blocks a day |
| Implementation support | 20 hours, asynchronous | 100 hours in the room across three weeks, plus 10 on call |
| Total hours | 50 | 140 |
| Fee | $6,250 | $17,500 |
| Travel and subsistence | None | You book travel directly; subsistence at HMRC scale rate |
| Implementation reviews | Twice-weekly, remote | Daily, in the room |
| Recordings | Yes | Yes |

### Remote delivery

This programme was deliberately designed for remote delivery. Experience has shown that
distributed compliance and technology teams have competing priorities, inconsistent
availability, and finite attention — and that attempting to replicate a classroom day
across a video call rarely serves anyone well. Sessions are capped at three hours, held
regularly over seven weeks, and paired with practical own-time exercises so that concepts
are applied before the next session builds on them. Recordings are available throughout.
The cadence is intentional: short, focused, repeated — with each session reinforcing what
came before rather than racing to cover ground. The aim is retention and implementation,
not completion.

### On-site delivery, and why it accelerates the project

The three-hour cap is a remote-delivery constraint, not a pedagogical one. It exists
because attention across a video call is finite and because participants remain
reachable by their day jobs throughout. Neither applies in a room.

But longer sessions are the least of it. The reason an on-site month reaches
pre-production while a remote programme is still working through its integration backlog
comes down to five things that behave differently when the developer is in the building.

**Latency compounds; it does not add.** An implementation is a chain of dependent
decisions, where the answer to one question determines what the next question is. Asked
asynchronously, each link costs most of a day. Ten dependent questions is a fortnight; the
same ten, asked over a shoulder, are an afternoon.

**The questions nobody asks are the expensive ones.** A team asks about what it knows it
does not understand, not about what it has misunderstood. Sixty rules built on a subtly
wrong entity model is weeks of rework — found remotely by the false positive rate, and
on-site by someone watching the screen. Most of the acceleration is rework never
incurred, not work done faster.

**Decisions sit on the critical path, not tasks.** Which topic the payments team
publishes to, whether security permits the cluster's internal traffic, who owns identity.
Remote, each is a meeting in a fortnight with four people who are never free at once.
On-site, twenty minutes in a corridor.

**Real data cannot leave the building.** Thresholds, suppression, model training, and
false positive analysis are only meaningful against your actual transaction history.
Remotely this is worked around — tuned against sampled data, then redone against the real
thing inside the perimeter. That is the same job twice, and the second pass is the one
that finds the problems.

**Access is granted to a person, not a connection.** Institutions that will not open
remote access to a foreign supplier will issue a badge and seat the same person beside
the team. Where that is the position, on-site is not an accelerator so much as the only
route that runs at all.

### What the acceleration is worth

The fee is best assessed against the cost of the delay it removes rather than against the
remote programme's price. Most organisations arriving at Jube are carrying something
while they wait: a legacy licence paid monthly until cut-over, fraud losses running
against controls everyone agrees are inadequate, or a remediation date with a regulator
on the other end. Against a monthly cost of that kind, moving go-live forward by a
quarter is ordinarily the calculation that decides between the two delivery modes — not
the difference in fee.

The month is structured as follows:

1. **Remote lead-in** *(during the booked lead time)* — Session 1, prerequisites, the
   WhatsApp channel, the training server, and any agreed custom gap development, exactly
   as for a remote engagement. Nobody's time on-site is spent installing Docker.
2. **Week one — the whole curriculum.** On-site, sessions run in two blocks a day, one
   morning and one afternoon. Sessions 2 to 11 are therefore delivered inside a single
   week rather than spread across seven, and the curriculum is complete by Friday. The
   two-block day is what makes the rest of the month possible: it is not a longer
   training week, it is a shorter one.
3. **Weeks two, three and four — implementation.** Three full weeks, not training:
   building your cluster, configuring your rules against your data, integrating your
   messaging, chaos-testing what has been built, and driving to pre-production, with the
   developer working alongside the team throughout. The own-time project exercises become
   supervised project work.
4. **Tail** — Ten hours of on-call asynchronous support through to first live transaction
   and certification.

Three quarters of the month is implementation. That ratio is the point of the on-site
variant: the curriculum is the entry price, and what the fee actually buys is fifteen
working days of a developer building the thing alongside the people who will run it.

This is the part that matters commercially. In remote delivery, pre-production is reached
some weeks after training ends, at a pace set by how quickly questions can be asked and
answered across a channel. In the on-site month, the implementation is done inside the
engagement. **Pre-production is a milestone of the month, not a consequence of it.** For
organisations working to a regulatory deadline, a migration cut-over, or a licence
condition, that is ordinarily the whole reason to choose it.

Two things are worth saying in advance. The first is that the month depends on the team
being genuinely released for it: a room half-populated by people answering email is
slower than a well-run remote programme, and the three implementation weeks in particular
need the infrastructure and integration people available rather than merely nearby. That
is worth weighing honestly when choosing between the two modes. The second is that the
month assumes there are environments to deploy into. Where there are not, it is far
better to find that during the lead-in than on the first morning, and the lead-in is
arranged with exactly that in mind.

---

## Pricing

One rate card governs everything Jube charges for time, and no rate is invented per
engagement. Keener rates on that card are earned by ongoing commitment — a retained
support arrangement — rather than by the size of any single piece of work. **On-site
delivery is not derated**, and it is worth saying why: travelling to you consumes a month
of capacity outright rather than reserving it, so a card that made the more demanding
engagement the cheaper one per hour would be hard to justify to anyone else on it.

### Remote delivery — $6,250

Priced at the published **project rate of USD 125 per hour**, the same rate that governs
on-site delivery.

| Line Item             | Hours  | Rate    | Fee        |
|-----------------------|--------|---------|------------|
| Training Delivery     | 30     | $125    | $3,750     |
| Asynchronous Support  | 20     | $125    | $2,500     |
| **Total**             | **50** | | **$6,250** |

### On-site month — $17,500

Priced at the same published **project rate of USD 125 per hour** as remote delivery.
On-site delivery is not derated. The rate card's keener rates are earned by ongoing
commitment, which is a different thing from physical presence: presence is a month of
dedicated capacity rather than a volume of hours booked in advance, and it is charged at
the standard project rate — no premium for being on-site, and no discount for the
quantity.

| Line Item                       | Hours   | Rate            | Fee         |
|---------------------------------|---------|-----------------|-------------|
| Training Delivery               | 30      | $125            | $3,750      |
| On-site Implementation Support  | 100     | $125            | $12,500     |
| On-call Asynchronous Support    | 10      | $125            | $1,250      |
| **Total**                       | **140** |                 | **$17,500** |

Travel and subsistence are additional: flights and accommodation are booked directly by
you and are not recharged, and subsistence is charged on the HMRC international scale rate
basis set out below. **Travel days are not billed** — days spent in transit do not consume programme hours and are not charged.

Set against remote delivery, the on-site month is 2.8 times the fee for 2.8 times the
hours. The rate is identical; only the quantity differs — the two figures are the same
rate applied to a different number of hours.

The fee is fixed until pre-production conditions are satisfied, although not more than
four months from commencement for remote delivery, or two months for the on-site month.
Support required beyond the included hours, or
after pre-production is confirmed, continues under standard
[support](/jube-support/) terms on the published rate scale, billed in arrears — the
same channels, cadence, and time-recording basis used throughout the programme carry
straight through, so there is no separate onboarding to a "real" support process later.

In addition to the hours itemised above, the programme includes **two days of custom
gap development into the core product** — see
[Custom gap development](#custom-gap-development) below.

### Travel and subsistence (on-site delivery only)

**Flights and accommodation are booked and paid directly by you**, under your own
corporate travel policy and in your own name. Nothing in respect of them is recharged, and
no expense claim, receipt reconciliation, or reimbursement arises. For a month-long stay a
corporate rate will almost always beat an individual booking, so this is usually cheaper
for you than the alternative, as well as simpler for both sides.

**Economy class is fine** — there is no business class stipulation and none is charged
for. The one request concerns timing rather than cabin: flights booked within social
hours where possible. An overnight departure or a red-eye arrival tends to cost the first
working day, which serves neither side well. Where no direct daytime routing exists, a
routing with a layover, or an additional night either side, works better than a night
flight, and will still come to less than a premium cabin would.

What remains is subsistence, and it is charged on a published, externally-set basis rather
than as a discretionary claim:

- **Subsistence** — at the **HMRC international scale rate** for the destination, as
  updated from time to time (see the
  [HMRC guidance](https://www.gov.uk/guidance/expenses-rates-for-employees-travelling-outside-the-uk)).
  The rate is set by HMRC, not by Jube, and is the same rate the UK tax authority accepts
  for any UK employer sending staff to that country. It is estimated in the quote before
  signature and cannot drift upward during the stay.
- **Visas, work permits, and any required vaccinations or insurance loadings** — at cost,
  where the Jube side must obtain them. A month's presence engages permit requirements in
  some jurisdictions that a short visit does not; this is checked during the lead-in, not
  on arrival.
- **Local transport** — at cost, or within the scale rate where it provides for it.

The effect is that the on-site month carries no expense float in either direction: you
hold your own travel arrangements, Jube claims a published per-diem, and nobody has to
form a view at month end on whether a dinner was reasonable.

**Travel days are not billed.** Days spent in transit consume no programme hours and are
not charged as time.

Venue and catering at your own premises are your responsibility; where a neutral venue is
required, it is priced according to location and scope.

### Payment schedule and mutual de-risking

**The de-risking is unchanged.** The payment schedule, its triggers, and the protections
it gives the client are identical in both delivery modes — the on-site month simply
reaches those triggers sooner. In new relationships,
it is recognised that a demand for payment in advance is counterproductive to engagement,
and Jube structures payment to mutually de-risk the engagement for both parties:

- **50%** is invoiced only after the first week of training sessions has concluded.
- The **balance** falls due on success — defined as proof-of-concept level infrastructure
  stability and the first transaction flowing in production — and in any case typically
  within twelve weeks.

No payment is taken before delivery has demonstrably begun, and the second half of the
fee is tied to the outcome the programme exists to produce.

On the on-site month these are the same two triggers on a compressed calendar. The first
falls at the end of week one, by which point the entire curriculum has been delivered
rather than the first two sessions of it. The second falls on pre-production, which
arrives inside the month rather than some weeks after training ends. Nothing about the
client's protection changes: no advance payment, and the balance still contingent on the
outcome. It is the same structure, arriving sooner — which is the whole proposition of
the variant, applied to the commercials as well as the delivery.

Subsistence is the sole exception to billing in arrears, and is invoiced monthly as
incurred. Because flights and accommodation are held in your own name, a postponement
costs Jube nothing to recover from you — whatever your own bookings allow is a matter
between you and your travel provider, and there is no third-party cost to pass back.

---

## What's included

Included in both remote and on-site delivery:

- Fully customised curriculum across eleven sessions, based on your team's schedule,
  experience, and objectives
- Two days of custom gap development into the core product, closing exact client
  requirements ahead of training
- Hands-on workshops, guided configuration, and optional developer-focused sessions
- Practical own-time project exercises bridging each phase of delivery
- Integration support via WhatsApp, JIRA, and Loom, continuing through pre-production
  deployment — twenty hours on remote delivery, ten on-call hours following the on-site
  month
- Direct access to the developer for technical guidance throughout the engagement
- Additional mop-up training sessions covering practical administration topics as they
  arise during implementation
- Sessions recorded and made available via OneDrive in both delivery modes
- Jube Certified Application Specialist Verifiable Certificate (after conclusion of the
  test project)

On remote delivery, additionally:

- Implementation review meetings twice-weekly across the seven weeks

On the on-site month, additionally:

- One hundred hours of implementation support delivered in the room, across three full
  weeks, against your own environment and your own data
- Sessions delivered as two blocks a day, completing the curriculum inside week one
- Daily implementation review, held with the people who can answer the question
- Whiteboard architecture sessions with your infrastructure and security teams, which in
  remote delivery tend to be the slowest conversations to converge
- Supervised cluster build and chaos testing, rather than the same work attempted
  unsupervised and reviewed afterwards

---

## Who this is for

- Teams and organisations looking to adopt Jube for AML or fraud detection
- Compliance professionals, engineers, analysts, and architects preparing for
  pre-production deployment
- Organisations modernising legacy transaction monitoring systems with an open,
  flexible platform

> This is a **practical, implementation-focused programme**. Participants will gain real
> experience configuring, operating, and managing Jube in realistic environments, without
> requiring deep prior technical expertise.

The on-site month suits organisations working to a fixed external date — a licence
condition, a remediation deadline, a vendor contract expiring, a migration cut-over —
those whose security posture makes remote access to environments slow or impossible,
those whose transaction data cannot leave their premises, and those whose teams are
co-located and can be released for the month. Remote delivery suits distributed teams,
those who cannot release people for whole days at a time, and those for whom a longer
runway is an advantage rather than a cost. Where there is no date pressing and the team
is spread across three time zones, remote is the better programme and is recommended as
such.

### Who should attend which sessions

Participants typically fall into four groups, and not every session is relevant to every
group. Sessions are structured so each group can prioritise attendance accordingly:

- **Compliance Officers / MLRO** — primarily Sessions 2, 4 (Suppression, Sanctions,
  ML overview), and 5 (Case Management).
- **Analysts / Case Management Teams** — primarily Sessions 2, 5, and 6 (Access,
  Reporting), who will work the queues day-to-day.
- **Developers / Integrators** — primarily Sessions 7, 9, 10, and 11, covering
  extensibility, cluster deployment, and codebase architecture.
- **System Administrators (Jube power users)** — primarily Sessions 3, 6, 8, and 9,
  covering rule configuration, database/reporting, cache internals, and cluster
  operations.

All sessions are recorded and made available via OneDrive, so participants who miss a
session relevant to another group can review it asynchronously rather than needing to
attend live.

On the on-site month this grouping does real work, because it determines who is needed on
which day. The curriculum week runs as two blocks a day, and the sessions are sequenced so
that each group is required in the room only for the days that concern it — in practice
around two and a half days for compliance and case management staff, and around two for
developers and integrators, rather than a week each. Releasing people for the month is a
significant ask of any organisation, and the schedule is built to make it a smaller one.

That sequencing is agreed with you rather than imposed. The order in which the blocks
fall is a matter of your operational reality and your own preference: month-end, audit
committee dates, existing standing meetings, whether your architects would rather see the
deployment sessions before the compliance ones or after, and which of your people can
realistically be released on which days. The eleven sessions have dependencies among them
and those are respected, but within that constraint the week is arranged around your
calendar. The proposed sequence is set out ahead of travel during the lead-in and
confirmed before anyone books anything.

### Your working week, not ours

A substantial share of Jube's work is with institutions in the Gulf, the wider Middle
East, Africa, and South and Southeast Asia — places where the working week and the shape
of the working day are not the European ones, and where faith is part of the ordinary
structure of both.

The schedule is built around that as a matter of course, not offered as an accommodation
when asked for:

- **The working week is yours.** Where the week runs Sunday to Thursday, the training
  week runs Sunday to Thursday. It is not treated as a variation from a standard.
- **Blocks are scheduled around daily prayer rather than across it.** The two-block day
  suits a working day punctuated by prayer rather better than a single long session does:
  sessions break for prayer, instead of being paused mid-topic and resumed in a thinner
  room.
- **Ramadan is planned for, not worked through.** Where the month falls within the
  engagement, session length, timing, and the balance between curriculum and
  implementation are adjusted to the shortened working day. Where you would rather the
  on-site month did not overlap it at all, that is a scheduling decision taken at quote
  stage — the lead time is long enough to make it easily.
- **National and religious holidays** are identified during the lead-in and built into
  the plan, rather than discovered on arrival.

None of this is complicated, and it is mentioned only because it is easy to get wrong
from a distance. A schedule built around a Monday to Friday week and an uninterrupted
nine to five meets a great many exceptions in these markets, and managing them one at a
time makes for a poor month. After some years of delivering into these markets, it is
easier to start from the local week and the local day and work outwards from there.

---

## Why Jube Training and Implementation?

- **Training direct from the developer** — Learn Jube from its developer, with no second-hand interpretation.
- **Rapid mastery** — Become proficient in weeks rather than months, accelerating your implementation timeline.
- **True independence** — Own your AML and transaction monitoring stack, free from vendor lock-in and restrictive contracts.
- **Genuine ROI** — Faster evaluation, smoother implementation, and independent mastery significantly reduce the cost of getting to production.
- **Real implementation outcome** — Hands-on training plus supported project work ensures your team can deploy Jube, configure rules, manage cases, and validate alerts.
- **Fully open-source and transparent** — [Jube is fully open-source (AGPLv3)](https://github.com/jube-home/aml-fraud-transaction-monitoring), auditable and extensible, keeping your data under your control while enabling rapid adaptation.

---

## Training Plan

The programme comprises eleven sessions. Delivered remotely, they run over seven weeks
with a maximum of three hours per session to sustain engagement. Delivered on-site, the
same sessions run as two three-hour blocks a day and are completed inside week one,
leaving three weeks for supervised implementation. Each pair of
instructor-led sessions is followed by a
practical own-time project exercise, progressively building toward a complete
pre-production implementation.

- **Session 1** *(1 hour)* — Prerequisites and Dress Rehearsal
- **Session 2** *(3 hours)* — From Regulation to Real-Time
- **Session 3** *(3 hours)* — From Data to Decisions
- **Session 4** *(3 hours)* — Precision, Memory and Intelligence
- **Session 5** *(3 hours)* — Managing the Human Side
- **Session 6** *(3 hours)* — Access, Data and Insight
- **Session 7** *(3 hours)* — Extending the Platform
- **Session 8** *(2 hours)* — Transaction Flow Analysis and Redis Cache Internals
- **Session 9** *(3 hours)* — Production-Grade Deployment
- **Session 10** *(3 hours)* — C# Architecture Patterns and Solution Structure
- **Session 11** *(3 hours)* — C# Background Threads and Transaction Processing

Practical exercises are woven throughout: designing a transaction monitoring strategy,
building a compliance-grade case management system, chaos engineering a live Jube
cluster, and constructing an analytical dashboard and management reporting suite.

See [Full Training and Integration Plan PDF](https://jube.io/JubeTrainingPlan.pdf) for session-level detail.

---

## Integration Plan

The eleven sessions above form the core curriculum. Beyond these, the programme
includes additional mop-up training sessions addressing practical administration
topics as they arise during implementation, alongside implementation review meetings held
twice-weekly throughout the programme — up to an hour each — to review project
progress, resolve blockers, and keep the implementation tracking toward the
pre-production milestone. These are working sessions against the project plan, not
extensions of the curriculum, and are where integration decisions, async messaging
patterns, and architectural questions tend to get resolved in the context of your
specific environment.

During the on-site month these reviews are held in the room, at the end of each day, and
are markedly more productive for it: the people who can answer a network, identity, or
data question are in the building.

## How asynchronous support works

Integration support during and after the programme is delivered async-first, through
channels aligned with your own tooling. Jube manages all client support through a single,
transparent system: issues are raised directly via WhatsApp and tracked in real time
against a permanent record — every note, time entry, and status change captured once
and traceable from start to finish. Most generally: a WhatsApp message becomes a
ticket, responded to with a Loom video and links to documentation.

Clients can request a full digest of open issues and progress at any time, including an
AI-generated summary of status and suggested next steps. All logged time is billed in
arrears at the published rate and fully auditable at month end, with no surprises at
invoice time.

This period doubles as the natural introduction to Jube's standard support model. By the
end of the programme, both sides have a clear, evidenced picture of what ongoing
support demands — how often your team needs to reach in, what kind of questions recur,
and roughly how many hours a normal month requires — making the sizing of any follow-on
support arrangement straightforward rather than a guess.

Where delivery is on-site, the asynchronous channel is still opened during the lead-in and
used throughout. The block does not replace it; it front-loads the questions that would
otherwise have flowed through it, which is precisely why on-site engagements tend to
finish the programme with more of the twenty included hours intact.

---

## Training servers

Training takes place on a dedicated cloud server (DigitalOcean, Frankfurt or
Singapore). The server exists for two months, allowing your team time to assemble its
own test servers as part of the wider integration project (i.e. Jube Cluster on Flatcar
Linux). Training is delivered in isolated tenants — the same software and hardware
infrastructure, yet logically independent environments.

Training assumes local installations of Jube: participants are expected to have Git and
Docker installed and functional, as well as a running version of Jube. In advance of
training, trainer support is available to individual participants to validate all
prerequisites — this is the purpose of Session 1.

For on-site delivery this validation matters more, not less. Session 1 is completed
remotely and in full before travel, so that the first morning in the room begins with
training rather than with laptop builds.

## Custom gap development

The programme includes **two days of custom gap development into the core Jube
product**. Exact client requirements are usually minimal to satisfy — a Kafka
integration where RabbitMQ or HTTP messaging would otherwise exist is a typical
example — and are identified and delivered during the lead-in, so the platform meets
your environment before training begins.

Gap work is developed into the core product under AGPLv3, not held as client-side
customisation: it is maintained with the platform from then on, benefits the wider
Jube community, and never becomes a private fork you have to carry. Requirements
beyond the included two days are agreed in advance and recorded in the quote.

## Scheduling and lead time

Capacity is one training and implementation client started a month, and the lead time
from signature to commencement is typically two months. This is a statement of fact
rather than a sales device: the programme is delivered by the Jube developer
personally, and starts are scheduled so that each client receives the attention the
programme is designed around. Start dates are confirmed in the quote.

The on-site month occupies that capacity slot in full — it is a month of the developer's
working year, not a portion of one — and its dates are fixed at signature, since they
commit travel and displace all other project work. Once fixed, the month is not moved
other than in the circumstances described under
[Continuity commitment](#continuity-commitment). One reschedule outside thirty days is
accommodated without charge; inside thirty days, any non-refundable travel already
committed remains payable, which is the practical reason the direct-booking route above
is recommended.

The lead-in, once booked, is not idle time. It is used little and often to put the
prerequisites in place: the training server, the WhatsApp channel, any agreed custom
gap development, and a more general introduction to Docker for participants who prefer
to run the software locally throughout the project — typically the infrastructure
team. By the time Session 1's dress rehearsal arrives, the foundations are already
standing.

## Continuity commitment

Jube prioritises scheduled training and treats session continuity seriously. In rare
cases — critical outage support required by another client — a session could need to be
rescheduled rather than run as planned. This has not occurred to date across Jube
training engagements, and is stated here only for completeness, on the same basis that
you would expect the same priority from Jube in a genuine emergency of your own.

The on-site month, once travelled to, is delivered. Where a genuine emergency arises
during it, it is handled outside working hours or at day's end, not by cancelling a day
your team has been released for.

---

## Ownership of extensions and configurations

Jube provides extensive configuration and extensibility capabilities through mechanisms
including Inline Scripts, dependency injection add-ins, custom DLLs, and rule
extensions. These mechanisms are analogous to Lua scripts in Redis — an AGPLv3-licensed
software where it is standard practice that user-created scripts remain proprietary to
the user and are not considered modifications to the underlying platform.

Configuration and extensibility artefacts, such as Inline Scripts and similar
extensibility features, are treated as configuration data, not as modifications to
Jube's core codebase. They are:

- Stored as data within the system (not merged into source code).
- Compiled or interpreted at runtime (not at build time).
- Deployable without modifying Jube's core binaries or source files.
- Analogous to Lua scripts in Redis.

Notwithstanding that Inline Scripts may be written in C# or other programming
languages, the way they are deployed to the software constitutes configuration rather
than code modification. This architecture allows the client to develop sophisticated
customisations without forking Jube's codebase, and does not require that they be
released to end users — protecting the client's intellectual property. Extensions and
configurations developed by the client remain the client's proprietary assets. Just as
it would not be expected to share stored procedures from an open-source database
deployment, clients' Inline Scripts and custom extensions are not automatically subject
to source disclosure.

The AGPLv3 license applies to Jube's core platform code. When Inline Scripts or custom
extensions are executed as part of a network-accessible Jube service:

- If they constitute independent works that merely use Jube's APIs and extension points
  (akin to stored procedures using a database API), they are not derivative works and
  remain proprietary to the client.
- If they are so tightly integrated that they form a derivative work of Jube's AGPLv3
  code, source availability may be required for that specific deployment to users of
  that service — but this is not the case when using the extensibility features of Jube.

In practice, Jube's extensibility architecture is designed to ensure that
client-specific logic implemented through Inline Scripts and supported extension
mechanisms remains within the configuration layer. This design pattern is
well-established in the open-source community (Redis Lua scripts) and provides the
client with the flexibility to deliver proprietary value-added solutions while
leveraging the AGPLv3-licensed Jube platform.

## Governance and insurance

All engagements are delivered under the
[Jube Terms of Service (JTOS)](/agreements/jtos-version-1-7) — published, versioned,
and written to be clear and equitable for both parties. Professional insurances are
carried at GBP 1M per claim, subject to exclusions as set out in the JTOS.

On-site attendance is additionally subject to your site access, security, and health and
safety requirements, which are complied with as a matter of course. Where your
procurement process requires evidence of insurance, contractor screening, or background
checks ahead of site access, this is provided during the lead-in and should be raised at
quote stage so that it does not delay the block.

Behind the Jube name sit two companies. Jube Holdings Limited (JHL) is a Cyprus-based
company that owns the Jube software and trademarks, registered with the Cyprus
Intellectual Property Office. Jube Operations Limited (JOL) is a UK-based company and
wholly owned subsidiary of JHL, providing services utilising JHL's intellectual
property. JOL is the customary client contracting entity, and the entity that issues
quotes under this offer.

---

## From this page to a signed engagement

There is no proposal step. This page, together with the
[Full Training and Integration Plan PDF](https://jube.io/JubeTrainingPlan.pdf) and the
[JTOS](/agreements/jtos-version-1-7), constitutes the complete published offer. The
quote adds only the parameters specific to your engagement:

1. **Quote issued** — Jube raises a formal quote for digital signature, referencing this
   page and the Training and Integration Plan, and stating: the client entity, the
   delivery mode (remote or on-site), the confirmed start date and, for the on-site
   month, its dates, the venue, the travel and accommodation to be booked by the client,
   and the estimated subsistence on the HMRC scale rate basis, invoicing details, and any
   engagement-specific commitments agreed in advance (for example, custom gap development
   beyond the included two days, or reference introductions).
2. **Signature** — On digital signature of the quote, the quote and the referenced
   documents together constitute the work order as defined in the JTOS. Quotes are
   issued by Jube Operations Limited, the contracting entity (see
   [Governance and insurance](#governance-and-insurance) above).
3. **Scheduling** — On signature, meeting invites are distributed for training delivery
   commencing on the confirmed start date, and any travel is booked against the fixed
   on-site dates.

---

Following successful implementation and first live transactions, ongoing support is
available directly from the Jube developer. See [Support](/jube-support/) for details.