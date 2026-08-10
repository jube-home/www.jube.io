---
layout: page
title: Jube AGPLv3 and Open Source Compliance
permalink: /jube-agplv3-open-source-compliance/
---

Jube is distributed exclusively under the GNU Affero General Public License v3 (AGPLv3). It is free to use, deploy, and
modify. That is not a commercial positioning statement — it is the foundation on which Jube is built, and it will not
change.

## The licence is a contract

The AGPLv3 is not a courtesy, a convention, or a statement of intent. It is the instrument under which every right you
have to use Jube exists, and it is the only one. Absent it, deployment of Jube is copyright infringement. With it, you
hold rights on stated conditions — and the conditions are the consideration.

This is the position from which everything below follows. It is also the position taken by a US federal court in
*Artifex Software, Inc. v. Hancom, Inc.* (N.D. Cal. 2017), which declined to dismiss a claim that breach of the GNU
General Public Licence sounds in contract as well as copyright, on the basis that the licence's stated terms and
dual-licensing structure were capable of constituting an enforceable agreement. The case settled on terms favourable to
the plaintiff. The principle it illustrates — that copyleft obligations are legally operative rather than aspirational —
is recognised in substance across the jurisdictions in which Jube's users operate.

The practical consequence is the part organisations tend to overlook. A breach of the AGPLv3 is not a matter to be
regularised later at a price. Under Section 8, the rights granted terminate automatically on violation. Reinstatement is
neither automatic nor unconditional: it turns on cure, on notice, and — where a copyright holder has already put a party
on notice once — on that holder's election. An organisation in unremediated breach is not a licensee negotiating terms.
It is running unlicensed software in production, and that is a materially different conversation to have with an
auditor, a regulator, or a board.

## What the licence permits

- You can deploy Jube in your organisation without paying a licence fee
- You can modify Jube to suit your environment
- You can build workflows, configure rules, and extend the platform using its documented extensibility framework
- You cannot take Jube, modify it, and distribute or deploy it as a closed source product
- The network provision applies. If you run a modified version of Jube as a service accessible to others, including over
  an internal network, the modified source must be made available to those users under the same licence
  That obligation attaches to modifications of Jube's core software. Configuration, use of documented features, case
  management workflows, integrations, and Configuration Artifacts are your business and carry no AGPLv3 obligation — they
  remain proprietary to their creator, as is customary in open source software of this nature. The licence concerns the
  software, not how you use it.

## Derivative works

Building services around Jube is entirely compatible with the AGPLv3. The boundary between independent tooling and a
derivative work, however, requires honest consideration, and it is not settled by what a thing is called or how the
build is organised.

Integrations that interact with Jube through its published APIs and documented extensibility framework are generally
independent — generally, not automatically. A new user interface is the useful illustration. If it has independent
utility and existence beyond Jube, it is more likely to stand alone. If it exists solely to present Jube's functionality
under a different skin, the derivative work argument is considerably stronger, and no amount of architectural distancing
or contractual language cures that. Code tightly coupled to, embedded within, or directly modifying Jube's internals
raises the question more sharply still.

None of this is novel in open source. The answer in any given case turns on the nature and purpose of the coupling. If
you are building on Jube and uncertain where your implementation sits, take proper legal advice. Jube Operations Limited
(JOL) — the company that develops, operates, and supports Jube commercially — does not make that determination on your
behalf, and will not pretend the question does not exist.

## Guidance is not absolution

Copyright in Jube is held by Jube Holdings Limited (JHL). JOL is a separate company: it develops the software, provides
training, support, and implementation services around it, but holds no copyright in Jube and has no authority over the
licence beyond what any other party has. Asking either JHL or JOL — or anyone associated with either — for informal
steer on compliance does not discharge your obligations, and nothing you receive in reply should be read as doing so.

JHL, as the copyright holder, is not a licensing authority. It does not issue compliance opinions, comfort letters,
waivers, or forbearance, and it has no mechanism by which to do so. JOL is in no different a position: operating and
supporting Jube commercially does not give it any power to vary the licence, and nothing it says changes what the
AGPLv3 requires.

Nothing said, written, or implied by JHL, JOL, or anyone acting on their behalf — in conversation, correspondence, a
proposal, a support ticket, or a workshop — creates a commercial licence, varies the AGPLv3, or forgives an obligation
already assumed.

That is not a posture adopted for convenience. It is structural. Your licence to Jube does not come from JHL as a
counterparty willing to negotiate; it comes from the licensors of the work on the terms of the AGPLv3, and Section 10
expressly bars the imposition of further restrictions on downstream recipients. JHL cannot privately soften a licence it
does not privately control. Any representation to the contrary — most commonly from an intermediary seeking to close a
deal — should be referred to JOL or JHL directly, and treated as a warning about the intermediary.

No commercial licence exists. No partner or client relationship creates or implies one. None will be created.

## Enforcement is not JHL's alone to give or withhold

JHL actively enforces its rights, and where it becomes aware of material non-compliance it will pursue enforcement
through all available means, including formal cease and desist correspondence directed at the deploying organisation.
Organisations should not, however, plan on the basis that JHL is the only party in a position to raise the question, or
that a quiet accommodation with the copyright holder resolves the exposure.

Copyright in Jube's codebase is held by its contributors. Each holds rights in their own contribution and each can act
on them independently. Beyond that, anyone receiving a modified version of Jube over a network holds a direct
entitlement to its corresponding source under the licence — exercisable by that recipient, without reference to JHL and
without JHL's involvement.

Then there is the commercial reality, which is the one that tends to concentrate minds. Jube is in active use across a
meaningful number of System Integrators, several of whom compete directly with one another. A competitor maintaining
their own compliance, examining a rival bid or product and concluding that it shares Jube's underlying abstractions,
structure, or presentation, has every reason to raise it — with the end client, with that client's compliance function,
with the procurement process, or with JHL. That such a challenge is commercially motivated does not make it wrong, and
does not make it go away. It is a legitimate lever, and it will be pulled.

This is not a weakness of the model. It is the mechanism by which the field stays honest, and it operates independently
of whether JHL notices any particular breach first. Jube's traction compounds it: as one of the most widely deployed
open source AML and fraud prevention platforms in service, it means more contributors with standing, more recipients
with entitlements, and more competitors with cause.

## Where this surfaces in practice

Software composition analysis is routine in regulated environments, and Jube will appear in it. An organisation running
Jube, or something derived from it, should expect that to surface in tooling such as Black Duck as a matter of course —
in acquisition diligence, in vendor onboarding, in a third-party risk review, or in a competitor's tender response.

Whoever reads that output will read the AGPLv3 the way this page reads it, and will do so at the least convenient
moment. Compliance is cheapest addressed before it is asked about, and most expensive when it emerges mid-transaction.

Compliance is ultimately the responsibility of the deploying organisation — not the intermediary who implemented the
software, and not JHL. No commercial arrangement with an intermediary discharges it. In practice this makes AGPLv3
compliance a matter for the end user's own legal and compliance function, particularly where delivery came through a
third party. Regulated institutions will recognise it as an ordinary vendor and third-party risk question — the kind
their frameworks exist to handle, and through which the licence finds its most natural and effective expression.

## The position, stated plainly

Jube is offered under the AGPLv3. No commercial licence exists or will be created. The obligations the licence carries
travel with the software regardless of how it arrived, who was asked about it, what they said in reply, or who
ultimately raises the question.

*Jube is, and will remain, open source.*
 
---

*This page sets out JHL's position on the terms under which Jube is offered. It is not legal advice and does not vary
the AGPLv3, the text of which governs. Organisations uncertain about their obligations should take their own advice.*