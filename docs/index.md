---
layout: default
title: Welcome
nav_order: 1
---

<p align="center">
  <img src="banner.png" alt="Jube. Open-source agentic AI for transaction monitoring. Just ask Jooby." width="100%">
</p>

# Jube

**Open-source agentic AI for transaction monitoring. “Just ask Jooby.”** Real-time AML and fraud monitoring, run by a
Herd of AI agents called Joobriks, with outcomes a regulator can follow.

**Ask Jooby.** No menu to learn, no query language, no ticket to raise. Type the question the way you'd ask a colleague,
and the Herd does the legwork, showing every step. 150+ Joobriks across five domains, 700+ real platform functions, and
every step validated by the platform before anything reaches you.

**The platform underneath.** Jube was real-time transaction monitoring long before Jooby arrived. Every Joobrik stands
on it, and all of it is in the open: explainable ML, hybrid detection (rules, velocity and sanctions, plus supervised
and unsupervised ML), real-time and horizontally scalable, case management, a rule builder compliance can edit,
cloud-native and multi-tenant, on your infrastructure with no lock-in.

## Quickstart

With Docker installed, Jube is a copy and paste away. It builds from source, so give the first start a few minutes.

```bash
git clone https://github.com/jube-home/aml-fraud-transaction-monitoring
cd aml-fraud-transaction-monitoring
export DockerComposePostgresPassword='IMPORTANT:_ChangeThisKey_SuperSecretPasswordToChangeForPg'
export DockerComposeJWTKey='IMPORTANT:_ChangeThisKey_~%pvif3KRo!3Mkm1oMC50TvAPi%{mUt<9sBm>DPjGZyfYYWssseVrNUqLQE}mz{L_UsingThisKeyIsDangerous'
export DockerComposeApiHmacKey='IMPORTANT:_ChangeThisKey_~%pvif3KRo!3Mkm1oMC50TvAPi%{mUt<9sBm>DPjGZyfYYWssseVrNUqLQE}mz{L_UsingThisKeyIsDangerous'
export DockerComposePasswordHashingKey='IMPORTANT:_ChangeThisKey_~%pvif3KRo!3Mkm1oMC50TvAPi%{mUt<9sBm>DPjGZyfYYWssseVrNUqLQE}mz{L_UsingThisKeyIsDangerous'
export DockerComposeElementSymmetricEncryptionKey='IMPORTANT:_ChangeThisKey_~%pvif3KRo!3Mkm1oMC50TvAPi%{mUt<9sBm>DPjGZyfYYWssseVrNUqLQE}mz{L_UsingThisKeyIsDangerous'
export DockerComposeEnableAskJooby=False
export DockerComposeAskJoobyApiKey='OPTIONAL_IMPORTANT:_ChangeThisKey_~%pvif3KRo!3Mkm1oMC50TvAPi%{mUt<9sBm>DPjGZyfYYWssseVrNUqLQE}mz{L_UsingThisKeyIsDangerous'
docker compose up -d
```

1. **Change every value.** They are placeholders, not defaults. Make each key at least as long as the
   example. [What each key does](Concepts/EnvironmentVariables/index.md).
2. **Open [localhost:5001](http://localhost:5001).** Sign in as `Administrator / Administrator` and change it on first
   login.

**Want Ask Jooby?** The defaults point at DigitalOcean Serverless Inference, and you are free to change that. Put $20 in
a prepaid DigitalOcean account, paste in your inference key, set `DockerComposeEnableAskJooby=True`, and Ask Jooby is
alive.

Evaluation only. For production, see
the [deployment guide](GettingStarted/DeployingWithJubeCluster/index.md).

## Licence

[AGPLv3](https://github.com/jube-home/aml-fraud-transaction-monitoring/blob/master/LICENSE).