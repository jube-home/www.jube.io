---
layout: page
title: Docker
permalink: /docker/
---

A Docker Compose file simplifies Jube installation, orchestrating the following:

* Postgres and Redis images for database and caching.
* Building and starting Jube images for WebAPI Services (API/UI) and Background Jobs.

With Docker and Git installed on Linux or WSL, Jube can be deployed in just five lines of shell script (note: update default environment variables).

```shell
git clone https://github.com/jube-home/jube.git
cd jube
export DockerComposePostgresPassword="SuperSecretPasswordToChange"
export DockerComposeJWTKey="IMPORTANT:_ChangeThisKey_~%pvif3KRo!3Mk|1oMC50TvAPi%{mUt<9"B&|>DP|GZy"YYWeVrNUqLQE}mz{L_UsingThisKeyIsDangerous"
docker compose up -d
```

Once set up, Jube will be accessible on port 5001 at `http://localhost:5001`.
