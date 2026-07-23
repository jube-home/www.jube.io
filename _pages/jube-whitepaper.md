---
layout: page
title: Jube Whitepapers
permalink: /jube-whitepapers/
---

Practitioner-focused whitepapers on real-time Anti Money Laundering and Fraud Detection — written by the developer of
Jube from direct experience in the field.

New whitepapers are published periodically. Check back here, or subscribe to be notified by email when the next one drops.

<div class="hero__subscribe">
  <form class="subscribe-form" action="https://buttondown.com/api/emails/embed-subscribe/jube" method="POST">
    <label class="screen-reader-text" for="jube-email">Email address</label>
    <input class="subscribe-email required email" id="jube-email" type="email" name="email" placeholder="Your email address..." required>
    <input type="hidden" value="1" name="embed"/>
    <button class="button button--primary button--small subscribe-button" type="submit">Get updates</button>
  </form>
</div>

---

### July 2026: Labrador-Level Advanced Analytics: Fraud and Risk Models from Someone Who Never Quite Made It to School

A plain-speaking tour of the statistical models behind fraud and risk scoring, written in retort to "it is just a bunch
of if statements". The paper dissects rules into Abstraction and Activation, makes the case for a single well calibrated
quantitative score — the thermostat by which risk appetite is turned — and walks through Logistic Regression, Neural
Networks, and decision trees before arriving at the author's weapon of choice, Bayesian Networks via bnlearn in R. Along
the way it covers structure learning, bootstrap arc strength as regulator-ready validation, and the practicalities of
deploying models as Plumber-wrapped HTTP services, all anchored to the generally accepted practices of Basel model
governance rather than the bravado of AI. Includes a required reading list spanning Baesens, Pearl, Neil, and Scutari,
and concedes — in the end — that the accusation is half true. Written for practitioners without a rigorous academic
background who nonetheless need defensible analytical work product, by one of their own.

[Download PDF](/LabradorLevelAdvancedAnalytics.pdf)

---

### June 2026: No Big Rubber Shoes: A Jaded Practitioner's Guide to Building on Jube

A practical guide for System Integrators embarking on a Jube implementation for real-time Anti Money Laundering and
Fraud Detection. The paper argues for a disciplined, iterative approach over big-bang delivery, grounding the engagement
firmly in regulatory satisfaction as the singular objective. It covers integration realities, the dangers of freestyling
without Run Books, the importance of analytical methodology over template rules, and how SIs can build proprietary IP
within Jube's extensibility framework while remaining compliant with its AGPLv3 licence. Candid, experience-led, and
written for practitioners who want to build a practice rather than merely survive a project.

[Download PDF](/JubeWhitepaperNoBigRubberShoes.pdf)