---
layout: page
title: Jube AGPLv3 and Open Source Compliance
permalink: /jube-agplv3-open-source-compliance/
---

Jube is distributed exclusively under the GNU Affero General Public License v3 (AGPLv3). It is free to use, deploy, and modify. That is not a commercial positioning statement — it is the foundation on which Jube is built, and it will not change.

## What this means in practice

The AGPLv3 is a strong copyleft licence. In plain terms:

- You can deploy Jube in your organisation without paying a licence fee
- You can modify Jube to suit your environment
- You can build workflows, configure rules, and extend the platform using its documented extensibility framework
- You cannot take Jube, modify it, and distribute or deploy it as a closed source product
- The network provision of AGPLv3 applies — if you run a modified version of Jube as a service accessible to others, the modified source must be made available under the same licence

Configuration, use of documented features, case management workflows, and integration with your own systems are entirely your business and carry no AGPLv3 obligations. The licence concerns the software itself, not how you use it.

## For system integrators and technology partners

Building services around Jube is entirely compatible with the AGPLv3, but the boundary between independent tooling and a derivative work requires honest consideration. Integrations that interact with Jube through its published APIs and documented extensibility framework are generally independent — but not automatically so. A new user interface that consumes Jube's APIs is a useful illustration: if that interface has independent utility and existence beyond Jube, it is more likely to stand alone. If it exists solely to present Jube's functionality under a different skin, the derivative work argument is considerably stronger regardless of how it is described or structured. Code that is tightly coupled to, embedded within, or directly modifies Jube's internals raises the same question more sharply still. This is not a novel question in open source software, and the answer in any specific case depends on the nature and purpose of the coupling rather than what the work is called. If you are building on top of Jube and uncertain where your implementation sits, take proper legal advice. JOL does not make that determination on your behalf, but will not pretend the question does not exist.

## Responsibility

Each deploying organisation is responsible for ensuring their own use and deployment of Jube complies with the AGPLv3. No commercial arrangement with an intermediary discharges that obligation. The licence is between you and the open source community — JOL's role is to build the software and maintain the terms under which it is offered, not to police compliance.

No commercial licence exists. No partner or client relationship creates or implies one. Any representation to the contrary should be referred to JOL directly.

## A note for end users

Licence compliance is ultimately the responsibility of the deploying organisation — not the intermediary who implemented the software, and not JOL. In practice this means the question of AGPLv3 compliance is most often one for the end user's own legal and compliance function to consider, particularly where implementation has been delivered through a third party. Regulated institutions will recognise this as a straightforward vendor and third party risk management question — the kind their frameworks are designed to address. JOL's position is simply that Jube is offered under AGPLv3, that no commercial licence exists or will be created, and that the obligations the licence carries travel with the software regardless of how it arrived. If your implementation partner has represented otherwise, we would welcome the conversation.

*If you have questions about what the AGPLv3 means for your specific deployment, the licence text is the authoritative reference. We are also happy to discuss it directly.*

*Jube is, and will remain, open source.*