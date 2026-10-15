---
layout: page
title: Jube AGPLv3 and Open Source Compliance
permalink: /jube-agplv3-open-source-compliance/
description: "How Jube is licensed under the AGPLv3, and what the licence requires of anyone who deploys, modifies or builds on it."
---

Jube is distributed exclusively under the GNU Affero General Public License v3 (AGPLv3). It is free to use, deploy, and
modify. That is not a commercial positioning statement — it is the foundation on which Jube is built, and it will not
change.

## The licence is a contract

The AGPLv3 is not a courtesy, a convention, or a statement of intent. It is the instrument under which every right you
have to use Jube exists, and it is the only one. Absent it, deployment of Jube is copyright infringement. With it, you
hold rights on stated conditions — and the conditions are the consideration.

This is the position from which everything below follows. It is also the position taken by a US federal court in
*Artifex Software, Inc. v. Hancom, Inc.*, No. 16-cv-06982-JSC, 2017 WL 1477373 (N.D. Cal. Apr. 24, 2017), which declined
to dismiss a claim that breach of the GNU General Public Licence sounds in contract as well as copyright, on the basis
that the licence's stated terms and dual-licensing structure were capable of constituting an enforceable agreement. The
case subsequently settled. The principle it illustrates — that copyleft obligations are legally operative rather than
aspirational — is recognised in substance across the jurisdictions in which Jube's users operate.

That consistency is not accidental. The AGPLv3 is a copyright licence, and copyright in software is near-universal:
TRIPS (Article 10) and the WIPO Copyright Treaty (Article 4) require computer programs to be protected as literary works
within the meaning of the Berne Convention, and the organisations likely to deploy Jube operate almost without exception
in jurisdictions bound by them. Forum affects how the finer questions are answered — where the derivative-work line
falls, whether a contract claim runs alongside. It does not affect the baseline, which is that deployment without a
licence is infringement wherever it occurs.

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
  an internal network, the modified source must be made available to those users under the same licence. That obligation
  attaches to modifications of Jube's core software. Configuration, use of documented features, case management
  workflows, integrations, and Configuration Artifacts are your business and carry no AGPLv3 obligation — they remain
  proprietary to their creator, as is customary in open source software of this nature. The licence concerns the
  software, not how you use it.

## If you are the end user

If you are a bank, a payment company, a fintech, or any other organisation running Jube for your own use — as released,
configured through its documented features, with your own systems calling it over the network — then your position
under the AGPLv3 is the same as your position with Redis 8, Grafana, or MinIO. All three are AGPLv3. You almost
certainly run at least one of them today, on exactly that basis, and your open-source review process signed it off some
time ago. Calling an AGPLv3 service from your own code does not make your code a covered work, and running the service
unmodified gives you nothing to publish. Jube is the same question with a different name in the scan, and the answer is
the same.

You should feel comfortable integrating Jube. The remainder of this page is about organisations that change Jube's
software, or build products on its internals and sell them to others. If that is not you, you have just read the part
that applies to you — and you now know the one question to ask anyone who delivered Jube to you: which part applies to
them?

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

## Ingestion, Vectorisation, and the RAG Pipeline

A particular case merits mention. Tools built by ingesting Jube's source code and internal documentation into a
retrieval pipeline — so that an orchestrator, agent or chatbot can answer questions about, or act on, Jube's internals —
are increasingly common. Whether such a tool is a derivative work is not settled, and this page does not pretend it is.
The licence attaches to Jube's software and to modifications of it, and whether a tool is a modification is a question of
fact and law about what the tool contains and does, not a label its builder can apply. That a program has read Jube's
code does not by itself answer the question in either direction. What matters is what the program reproduces and whether
it has any function other than to expose or operate Jube. Chunked source text held in an index is a copy of that
source, and the licence's conditions apply to it as they do to any other copy.

Whether that question is answered against the tool depends in part on whether Jube's internal structure, sequence and
organisation is itself protected expression — and that is not uniform across jurisdictions. In the United States, the
Federal Circuit held in *Oracle America, Inc. v. Google LLC*, 750 F.3d 1339 (Fed. Cir. 2014), that the structure,
sequence and organisation of software interfaces can be protected by copyright; the Supreme Court in 2021 assumed that
holding without disturbing it and decided the case on fair use, a defence specific to that jurisdiction. In the European
Union, *SAS Institute Inc. v World Programming Ltd* (C‑406/10, 2012) points the other way on functionality and
interfaces. In many of the jurisdictions in which Jube is deployed there is no authority at all. A tool that exists only
to map natural language onto Jube's class structures and schemas is operating on exactly the material those cases
disagree about — and the United States, where that case law was made and where copyleft enforcement has in practice
been litigated, is the forum any organisation with US operations, US customers or a US-listed parent should assume it
would be tested in.

The derivative work question arises with particular force where the tool has no function other than to expose or operate
Jube's internals, and the analysis set out above applies to it in the ordinary way: independent utility and existence
weigh one way; exclusive coupling to Jube's internal structure weighs the other. Organisations building such tooling
should expect the question to be asked — by their own compliance function, by an auditor, or by a competitor — and
should take advice before it is, not after.

The courts are only now deciding how copyright applies to retrieval-based systems as distinct from training. In *Dow
Jones & Co. v. Perplexity AI, Inc.*, No. 24-cv-7984 (S.D.N.Y.), and *Advance Local Media LLC v. Cohere Inc.*, No.
25-cv-1305 (S.D.N.Y.), publishers allege that answer engines infringe by retrieving and reproducing their works at query
time, and in *Cohere* the court has allowed claims based on non-verbatim summaries to proceed. Neither case has reached a
ruling on fair use and neither concerns an open source licence. They matter here because they show where the line
between lawful learning and unlawful retrieval is being drawn, and a tool built on a retrieval index sits on the
contested side of it. Both are a fascinating watch for anyone whose software, or the documentation around it, is being
ingested by retrieval tools.

## Guidance is not absolution

Jube Holdings Limited (JHL) holds copyright in Jube alongside its individual contributors, each of whom holds copyright
in their own contribution. JOL is a separate company: it develops the software, provides training, support, and
implementation services around it, but holds no copyright in Jube and has no authority over the licence beyond what any
other party has. Asking either JHL or JOL — or anyone associated with either — for informal steer on compliance does not
discharge your obligations, and nothing you receive in reply should be read as doing so.

JHL, as a copyright holder, is not a licensing authority. It does not issue compliance opinions, comfort letters,
waivers, or forbearance, and it has no mechanism by which to do so. JOL is in no different a position: operating and
supporting Jube commercially does not give it any power to vary the licence, and nothing it says changes what the AGPLv3
requires.

Nothing said, written, or implied by JHL, JOL, or anyone acting on their behalf — in conversation, correspondence, a
proposal, a support ticket, or a workshop — creates a commercial licence, varies the AGPLv3, or forgives an obligation
already assumed.

That is not a posture adopted for convenience. It is structural, in two respects. First, copyright in Jube is not held
by JHL alone: each contributor holds copyright in their own contribution, and no single holder can relicense the work as
a whole. A private arrangement with JHL would leave every other contributor's rights exactly where they were. Second,
JHL has elected not to offer Jube on any terms other than the AGPLv3, and that election is deliberate and permanent. The
consequence is the same either way: your licence comes from the licensors of the work on the terms of the AGPLv3, and
nobody at JHL or JOL is in a position to vary it for you. Any representation to the contrary — most commonly from an
intermediary seeking to close a deal — should be referred to JOL or JHL directly, and treated as a warning about the
intermediary.

No commercial licence exists. No partner or client relationship creates or implies one. None will be created.

## Enforcement is not JHL's alone to give or withhold

JHL actively enforces its rights, and where it becomes aware of material non-compliance it will pursue enforcement
through all available means, including formal cease and desist correspondence directed at the deploying organisation.
Organisations should not, however, plan on the basis that JHL is the only party in a position to raise the question, or
that a quiet accommodation with the copyright holder resolves the exposure.

Copyright in Jube's codebase is shared. JHL holds its own, and each contributor holds rights in their own contribution
and can act on them independently. Beyond that, anyone receiving a modified version of Jube over a network holds a
direct entitlement to its corresponding source under the licence — exercisable by that recipient, without reference to
JHL and without JHL's involvement.

Then there is the commercial reality, which is the one that tends to concentrate minds. Jube is in active use across a
meaningful number of System Integrators, several of whom compete directly with one another. A competitor maintaining
their own compliance, examining a rival bid or product and concluding that it shares Jube's underlying abstractions,
structure, or presentation, has every reason to raise it — with the end client, with that client's compliance function,
with the procurement process, or with JHL. That such a challenge is commercially motivated does not make it wrong, and
does not make it go away. It is a legitimate lever, and it will be pulled.

A System Integrator that strips Jube's copyright notices and branding and holds the platform out to its own client as
proprietary technology has not solved its AGPLv3 exposure — it has added a second problem, owed to a different party.
The client who believes it bought bespoke IP and later discovers it is running rebadged Jube has a grievance of its own,
against the integrator, entirely independent of anything JHL, a contributor, or a competitor might raise. That exposure
is the integrator's alone to carry.

Licence breach is also rarely the only exposure. Jube is a registered trademark in Cyprus, and where non-compliant use
also carries the Jube name or brand — on a rebadged product, in a tender response, in marketing — trademark infringement
and passing off are separate claims, available in the relevant jurisdiction and ordinarily brought in the same
proceedings as the licence claim. The point for an intangible-asset risk function is not that one claim inflates the
other. It is that the two are routinely pleaded together, and that curing the first does nothing for the second.

This is not a weakness of the model. It is the mechanism by which the field stays honest, and it operates independently
of whether JHL notices any particular breach first. Jube's footprint compounds it: every additional deployment means
more contributors with standing, more recipients with entitlements, and more competitors with cause.

Nor is enforcement theoretical elsewhere in the AGPLv3 ecosystem. The Software Freedom Conservancy, which supports and
enforces on behalf of a wide range of copyleft projects, has said openly that private negotiation with violators is
often met with delay and refusal, and has shifted its own strategy toward litigation rather than treating it as a last
resort. Its active investigations — most recently into AGPLv3 compliance in commercial hardware and firmware — are a
reminder that AGPLv3 enforcement is not the preserve of any one copyright holder acting alone, and that the boundaries
of the licence continue to be tested in practice, not just in commentary. Organisations should read that as a live
enforcement environment, not a dormant one.

## Where this surfaces in practice

Software composition analysis is routine in regulated environments, and Jube will appear in it. An organisation running
Jube, or something derived from it, should expect that to surface in tooling such as Black Duck as a matter of course —
in acquisition or investment diligence, in vendor onboarding, in a third-party risk review, or in a competitor's tender
response.

Investment diligence is the same question asked from the other side of the table, and it is often the first that either
Jube or the investor hears of it. The resulting conversation borders on the comical, and usually ends up on this page. A
company whose product is built on Jube, or is presented as proprietary when it is not, has a materially different IP
position from the one it describes, and an investor will want to know that before the round closes, not after. Investors
are not naive, and a finding of this kind usually ends quickly and politely, with their attention moving to the next
deck. Neither JHL nor JOL gives diligence comfort, joins a funding round, or lends its name to one.

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

*This page sets out JHL's position on the terms under which Jube is offered. It is written primarily for the deploying
organisation's compliance function and for the auditor of record who encounters Jube in a scan or review — not as an
invitation for informal interpretation. It is not legal advice and does not vary the AGPLv3, the text of which governs.
Organisations uncertain about their obligations should take their own advice.*