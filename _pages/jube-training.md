---
layout: page
title: Jube Training
permalink: /jube-training/
---

Master Jube in three days.  Hands-on training for compliance teams, engineers, and analysts to accelerate implementation, reduce false positives,
and improve detection.

![Jube Training](/training.png)

# Why Jube Training?

Proprietary AML and transaction fraud detection systems are overpriced, restrictive, and complex. Open-source
alternatives like Jube deliver the
same power—without the lock-in or costs. The only barrier is confidence, and that’s where this training comes in:

- **Training direct from the Developer:** Learn Jube straight from its creator.
- **Rapid Mastery:** Get proficient in days, not months.
- **True Independence:** Own your AML and transaction monitoring technology stack, free from vendor contracts.
- **Smart ROI:** Faster project evaluation , faster implementation, fewer mistakes, and independent mastery mean the
  investment quickly multiplies in value.
- **Ongoing Support:** Post training chat support available to assure project outcome.

Break free from overpriced, restrictive AML and transaction monitoring systems—learn Jube and take full control of your
technology stack.

# Who is Jube for?

Jube empowers professionals to protect their organization’s financial integrity and security with data-driven insights:

- **Compliance & Risk Leaders:** Get a holistic view of compliance and fraud risk. Quickly generate reports for auditors
  and regulators to stay ahead of evolving requirements.
- **Fraud Analysts:** Move from insight to action faster. Build, test, and refine detection rules to proactively reduce
  fraud losses.
- **Data Analysts & Scientists:** Go beyond basic rules with advanced analytics and machine learning to uncover hidden
  patterns and improve detection accuracy.
- **Developers & Technical Teams:** Integrate Jube seamlessly with clear APIs and developer-friendly tools for fast,
  reliable implementation.

Jube equips compliance, fraud, data, and technical professionals with the insights and tools to protect their
organization’s financial integrity and act on risk with confidence.

# **Learning Outcomes**

- **Implement & Manage Jube Confidently**
    - Master AML (FATF/Wolfsberg) and Fraud Detection transaction monitoring.
    - Navigate the user interface and integrate via APIs (e.g., Postman).
    - Configure rule strategies: Gateway, Abstraction, Activation Rules for abuse detection.

- **Optimize Performance & Security**
    - Configure caching, sanctions screening, and suppression techniques (key/total/rule-based).
    - Use TTL counters for high-volume transaction tracking.

- **Accelerate Adoption & Best Practices**
    - Build and evaluate predictive models for fraud and credit risk.
    - Implement machine learning via exhaustive training.
    - Design case management workflows (tracking, forms, audits).

- **Troubleshoot & Debug (for Developers)**
    - Explore Jube architecture (Docker, Redis, Postgres).
    - Debug with INFO-level logs and manage asynchronous processes (AMQP) and background threads.

- **Leverage Advanced Compliance Features**
    - Apply fuzzy matching (Levenshtein) for sanctions.
    - Trigger real-time alerts/cases via Activation Rules.
    - Create custom dashboards for oversight.

# **Pricing**

| Topics                                                                   | 3-Day Training | 5-Day Training |
|--------------------------------------------------------------------------|----------------|----------------|
| Day 1: Configuring Models, Messaging and Rule Strategy.                  | ✅              | ✅              |
| Day 2: Suppressions, Sanctions, Machine Learning and Case Workflow.      | ✅              | ✅              |
| Day 3: Permissions, Database, Reporting, Reprocessing and Extensibility. | ✅              | ✅              |
| Day 4 (Optional): Developer Workshop.                                    | –              | ✅              |
| Day 5 (Optional): Developer Workshop.                                    | –              | ✅              |
| Ongoing Post-Training Support.                                           | 6 weeks        | 12 weeks       |
|                                                                          | EUR 3600       | EUR 6000       |

Training delivered in person and onsite. Travel and expenses billed separately and in advance.

<div class="hero__subscribe">
  <a href="/contact" class="button button--primary section-button">Contact</a>
</div>

---

# **Training Plan**

It is common to implement and run Jube based on the time spent with the <a href="https://jube-home.github.io/jube/">
documentation</a> alone. Training provides a significant acceleration of a successful implementation of Jube. The
training is delivered in person by the [developer](https://www.churchman.io) of Jube.

While transaction monitoring encompasses a broad spectrum of activities, this training specifically focuses on
the AML (Anti-Money Laundering) and Fraud Detection Transaction Monitoring use cases. The training is designed to
support compliance efforts and is structured around this guidance.

It is important to note that Jube operates as a real-time system. As a result, while the training emphasizes
implementation of this guidance other transaction monitoring use cases will also be comprehensively addressed by
implication. The underlying concepts are largely adjacent and require similar methodologies, albeit with subtle
differences in application.

The following is an abridged version of the
full [Jube Training Plan (pdf)](https://jube.io/JubeTrainingPlan.pdf).

The training spans **3 to 4 days**, with each day lasting **6 to 8 hours**, depending on elective modules.
Elective
modules provide in-depth training on advanced administrative concepts using dedicated servers. These are ideal
for technical participants responsible for system administration but do not require developer expertise.

For organizations with developer teams, an **additional day** is available to familiarize them with the Jube codebase
for business continuity. This session covers software patterns, frameworks, coding standards, and hands-on debugging.

## **Day 1: Configuring Models, Messaging and Rule Strategy**

- AML Monitoring Compliance Guidance Overview and Fraud Detection Transaction Monitoring
- Introduction to Jube and Key User Interface Concepts
- Models and HTTP Messaging
- Request XPath Payload
- Inline Functions
- Gateway Rules
- Abstraction Rules
- Abstraction Calculations
- Activation Rules
- Lists and Dictionaries
- Workshop
- **Elective**: Architecture and Caching, Environment Variables, Installation, and Log Configuration

## **Day 2: Suppressions, Sanctions, Machine Learning and Case Workflow**

- Suppression
- Sanctions Fuzzy Matching
- Time To Live (TTL) Counters
- Introduction to Machine Learning
- Exhaustive Machine Learning Training
- Activation Watcher
- Tags
- Case Workflows
- Workshop
- **Elective**: Tracing Transaction Flow, High Availability, Performance Counters, AMQP

## **Day 3: Permissions, Database, Reporting, Reprocessing and Extensibility**

- Users, Roles, and Permissions:
- SQL Database Discovery
- Visualization and Reporting
- Reprocessing
- Inline Scripts and Remote Procedure Calls (RPC)
- Scores via Synchronous RPC
- Synchronous Messaging and Advanced Data Engineering
- Workshop
- **Elective**: Tracing Transaction Flow, Bottleneck Analysis, and Cache Training

## **Day 4 (Optional): Developer Workshop**

- Software Patterns employed in Jube
- C# Solution and Project Overview
- Building and Running Jube from Git (i.e. in Rider or Visual Studio)
- Working with Dockerfile and Docker Compose
- Stepping and Debugging instantiation of Environment Variables, Secrets and Logging Libraries
- Stepping and Debugging other .NET Hosting, Dependency Injection Services and Migrations
- Stepping and Debugging the HTTP Authentication Scheme, JWT and HTTP Status Code directions
- Stepping and Debugging Validations
- Stepping and Debugging the User Interface for Model Creation and Common Administration (frontend and backend)
- Stepping and Debugging the Rule Parser (frontend and backend) and token security
- Stepping and Debugging the User Interface for Case Management (Frontend and Backend)
- Stepping and Debugging the User Interface for Visualisation (Frontend and Backend)
- Stepping and Debugging the Repository Data Layer, ORM, Schema and Schemaless \ JSONB Data

## **Day 5 (Optional): Developer Workshop**

- Stepping and Debugging Model Synchronisation
- Stepping and Debugging .Net Rule, Inline Script, Inline Calculation Compilation and the Assembly Hash Cache
- Stepping and Debugging Detailed Transaction Flow, Serialisation HTTP Response and AMQP Exchange
- Stepping and Debugging Case Creation
- Stepping and Debugging Archive Data Storage, given ORM Bulk Copy
- Stepping and Debugging Performance Counters
- Stepping and Debugging the Redis Cache, Schema and Protocols
- Stepping and Debugging Reprocessing
- Stepping and Debugging Other Background Threads
- Stepping and Debugging Exhaustive Model Training
- Stepping and Debugging Preservation (Export \ Import), Serialisation and Encryption Scheme
- Stepping and Debugging the Jube CLI

## **Resources**

* [Source Code]()
* [AML Monitoring Compliance Guidance](https://jube.io/JubeAMLMonitoringComplianceGuidance.pdf)
* [Training Plan for Implementation of AML and Fraud Detection Transaction Monitoring with Jube](/JubeTrainingPlan.pdf)
* [Documentation](https://jube-home.github.io/aml-fraud-transaction-monitoring/)

---

# **Ongoing Post-Training Support**

![Jube Support](/support.png)

Participants gain access to a private [Matrix] chat room \ channel, and can continue to ask questions and obtain guidance after
the training delivery. The training, and developer of Jube, will provide timely, asynchronous responses to ensure the
participants can confidently apply what they’ve learned and resolve any challenges that arise.

---

# Next Steps

Get in touch to align your team’s project and training needs with measurable outcomes and timelines.

<div class="hero__subscribe">
  <a href="/contact" class="button button--primary section-button">Contact</a>
</div>