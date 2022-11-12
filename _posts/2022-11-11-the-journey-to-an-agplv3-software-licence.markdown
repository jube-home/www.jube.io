---
layout: post
title:  The journey to an AGPLv3 software licence.
description:  Trying to strike the right balance between developing software in the open and retaining some credit.
date:   2022-11-11 10:00:00 +0300
image:  '/images/2022-11-11-the-journey-to-an-agpl-v3-software-licence/agpl-v3.png'
tags:   [jube,licence,AGPLv3,ElasticV2,SSPL,open-source,fraud,transaction,event,monitoring]
---

The situation was that we were sat on some pretty lovely technology used to good effect for fraud prevention but never really found a means to compete with the behemoths by selling proprietary licences. Our customers were fine paying for support and know-how but baulked at the prospect of proprietary software licences. Over the years,  it got so extreme that we were making proposals to be the solitary proprietary software in a company's tech stack; it was all open-source otherwise. SaaS was perhaps an option,  but glancing at one or two financial statements of companies with whom we might compete, racking up similar losses in an ever more hyper-competitive,  generally low-volume business, did not seem worth the stress.

So,  after a [more than a] bit of refactoring, open-source became the stated direction, cueing the thorny issue of choosing a licence.

As a primer, open-source licences are not born equal. On the one hand,  there is the permissive type of licence whereby anyone can do anything with the code,  including passing it off as their own. Given the product in question was working and proven, it was too bitter a pill to go the ultra-liberal route. Enter the copy-left licence,  which is broadly free to use, modify and distribute, but works a bit harder to ensure that everyone knows to who the work belongs,  notwithstanding it being free. A wrinkle is that Google, among others, bans copy-left open-source licences,  but let's be pragmatic, the chances of Google working with us is slim, at least for the moment.

Ok,  so a copy-left licence seems right? While we are here protecting hard-fought code, what if a company with deep pockets comes and eats our value by turning it into SaaS? A better approach must be to create a licence and make the code free accessible, and available. It turns out that is what both MongoDB (SSPL) and Elasticsearch (ElasticV2) have decided to do, with a reception that has been mixed (to be kind). Neither licence is an official open-source licence and has the open-source community foaming at the mouth, translating into reduced adoption. Anger in the open-source community might not be a big issue for Elasticsearch, but considering it is built on open-source Lucene,  it does seem a bit cheeky.

The anger at MongoDB saw seemed a little less fair,  although I struggled to understand the difference between SSPL and AGPLv3, and while well intended, it seemed to muddy the waters and relied on the threat of enforcement. Any claim is only as good as enforcement,  and it is hard to get excited about battling some tech giant over a non-standard licence instead of pushing a product,  and with this in mind, we have yet to see the point of a pseudo approach to open-source. Frankly, given that Jube is a small unfunded private company with minimal ambitions outside of pushing code were hardly likely to be this arrogant.

We settled on the AGPLv3 licence in the end. The thinking was that AGPL, is a decent copy-left license, genuinely open-source, while leaving some options to ensure the project's survival. Users can copy, distribute and make changes to the code,  but they need to throw back some recognition in copyright notices. 

Solving open-source funding is a long way off. While initiatives like GitHub sponsors try to go someway, the reality is that charging for Support and SaaS is the only proven way to commercialise - thus ensuring the survival - of an open-source project.  At the time of writing,  commercialisation is not much of a focus,  but,  we did not want to be negligent to it either.

<div class="gallery">
<img src="/images/2022-11-11-the-journey-to-an-agpl-v3-software-licence/something-known-to-github.png" loading="lazy" alt="Something known to GitHub is a good start.">
</div>

