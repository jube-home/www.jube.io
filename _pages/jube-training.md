---
layout: page
title: Jube Training
permalink: /jube-training/
---

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

---

## **Learning Outcomes:**

* Confidently Implement and Manage Jube: Master Jube’s AML (FATF/Wolfsberg-aligned) and Fraud Detection Transaction
  Monitoring, User Interface navigation, API integration (e.g., Postman), and rule strategies (
  Gateway/Abstraction/Activation Rules) for abuse
  detection.
* Optimize Jube for Performance & Security: Configure caching, sanctions screening, and suppression techniques (
  keys/total/rule-based); use TTL counters for high-volume transaction tracking.
* Accelerate Adoption with Best Practices: Build/evaluate predictive models (fraud/credit risk); implement ML via
  Exhaustive training; design case management workflows (tracking, forms, audits).
* Troubleshoot & Debug (Developers): Explore Jube’s architecture (Docker/Redis/Postgres), debug with INFO-level logs,
  and manage async processes (AMQP) and background threads.
* Leverage Advanced Compliance Features: Apply fuzzy matching (Levenshtein) for sanctions, trigger real-time
  alerts/cases via Activation Rules, and create custom dashboards for oversight.

---

## **Training Plan**:

The following is an abridged version of the
full [Jube Training Plan (pdf)](https://jube.io/JubeTrainingPlan.pdf).

The training spans **3 to 4 days**, with each day lasting **6 to 8 hours**, depending on elective modules.
Elective
modules provide in-depth training on advanced administrative concepts using dedicated servers. These are ideal
for technical participants responsible for system administration but do not require developer expertise.

For organizations with developer teams, an **additional day** is available to familiarize them with the Jube codebase
for business continuity. This session covers software patterns, frameworks, coding standards, and hands-on debugging.

### **Day 1: Configuring Models, Messaging and Rule Strategy:**

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

### **Day 2: Suppressions, Sanctions, Machine Learning and Case Workflow:**

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

### **Day 3: Permissions, Database, Reporting, Reprocessing and Extensibility:**

- Users, Roles, and Permissions:
- SQL Database Discovery
- Visualization and Reporting
- Reprocessing
- Inline Scripts and Remote Procedure Calls (RPC)
- Scores via Synchronous RPC
- Synchronous Messaging and Advanced Data Engineering
- Workshop
- **Elective**: Tracing Transaction Flow, Bottleneck Analysis, and Cache Training

### **Day 4 (Optional): Developer Workshop:**

- Software Patterns
- C# Solution and Project Overview
- Building and Running
- Stepping and Debugging .NET Hosting, Dependency Injection, and Migrations
- Stepping and Debugging the User Interface (Frontend and Backend):
- Stepping and Debugging Background Threads
- Stepping and Debugging Detailed Transaction Flow and Algorithms
- Stepping and Debugging Exhaustive Model Training

## **Pricing**

* 3 Days Core Training: EUR 2400
* 4 Days Core and Developer Training: EUR 3200

Training delivered in person and onsite. Travel and expenses billed separately and in advance.

## **Resources:**

* [Source Code]()
* [AML Monitoring Compliance Guidance](https://jube.io/JubeAMLMonitoringComplianceGuidance.pdf)
* [Training Plan for Implementation of AML and Fraud Detection Transaction Monitoring with Jube](/JubeTrainingPlan.pdf)
* [Documentation](https://jube-home.github.io/aml-fraud-transaction-monitoring/)
* [Advanced Analytics with R Training](/advanced-analytics-with-r-training)
* [Support](/jube-support)

---

<div class="hero__subscribe">
  <a href="/jube-support" class="button button--primary section-button">Reduce Resource Costs with Support</a>
</div>