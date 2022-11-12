---
title: Data Wrangling
date: 2022-01-09 08:03:00 +0300
image: '/images/data-wrangling/abstraction-with-builder.png'
subtitle: Data-wrangled values are elegantly brought together into a score to detect new typologies while guarding against confirmed typology past.
---

Data wrangling is real-time. Data wrangling is directed via a series of rules created using either a point-and-click rule builder or an intuitive rule coder. Rules are in-memory matching functions tested against data returned from high-performance cache tables, where datasets are fetched only once for each key that the rules roll up to for each transaction or event processing, with the matches aggregating using a variety of functions. Alternative means of maintaining a lightweight long-term state to facilitate data wrangling is Time To Live (TTL) Counters which are incremented on rule match and then decremented for that incrementation on time-lapse.

Data wrangling return values are independently available for use as features in artificial intelligence training and real-time recall or tested by rules to perform a specific action (e.g., the rejection of a transaction or event). Wrangled values are returned in the real-time response payload and can facilitate a Function as a Service (FaaS) pattern. Response payload data is also stored in an addressable fashion, improving the experience of advanced analytical reporting while also reducing database resource \ compute cost.

<div class="gallery-box">
  <div class="gallery">
    <img src="/images/data-wrangling/abstraction-with-coder.png" loading="lazy" alt="Abstraction with coder.">
    <img src="/images/data-wrangling/abstraction-calculation-coder.png" loading="lazy" alt="Abstraction Calculation with coder.">
  </div>
  <br/>
  <div class="gallery">
    <img src="/images/data-wrangling/ttl-counter-definition.png" loading="lazy" alt="Time To Live (TTL) Counter definition.">
    <img src="/images/data-wrangling/response-faas.png" loading="lazy" alt="Abstraction response FaaS example.">
  </div>
</div>

Jube is developed statelessly and can support massive horizontal scalability and separation of concerns in the infrastructure.