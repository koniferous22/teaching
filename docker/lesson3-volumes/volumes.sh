#!/bin/sh

echo "DO NOT EXECUTE THIS FILE, IT'S JUST .sh EXTENSION FOR COMMAND HIGHLIGHTING"
exit 1

# NOTE: examples use project in watch-mode or new can be created by running `typeorm init --database postgres` & manually creating Dockerfile


#--------------------------------------------------------------------------------


# 1. Demonstrate persisting data via bind mounts

mkdir postgres-data
cd postgres-data

# creates network for database and consumer applications
docker network create db-network

# creates bind mount where db data will be persisted
docker run -d \
  -it \
  --name some-postgres \
  --network db-network \
  -e POSTGRES_PASSWORD=test \
  -e POSTGRES_USER=test \
  -e POSTGRES_DATABASE=test \
  --mount type=bind,source="$(pwd)",target=/var/lib/postgresql/data \
  postgres

# How to manipulate db in docker?
# Solution: download pgadmin image
docker run -d \
  -it \
  --name some-pgadmin \
  --network db-network \
  -e PGADMIN_DEFAULT_EMAIL=admin@postgres.com \
  -e PGADMIN_DEFAULT_PASSWORD=password \
  -e PGADMIN_LISTEN_POST=80 \
  -p 3000:80 \
  dpage/pgadmin4:latest

# Go to localhost:3000
# Execute example query

# CREATE TABLE test_table(
# 	id serial PRIMARY KEY,
# 	firstName varchar,
# 	lastName varchar,
# 	age integer
# )



#--------------------------------------------------------------------------------


# 2. Using docker volumes
# Explain file system dependency: file system relies on permissions, that can be changed
# and data in container can be modified from outside

docker volume create some-postgres-vol
# Inspect volume and demonstrate how it's saved
# On MacOS, docker is running in virtual Linux
docker volume inspect some-postgres-vol

# Mount the application this time with native docker volume
docker run -d \
  -it \
  --name some-postgres \
  --network db-network \
  -e POSTGRES_PASSWORD=test \
  -e POSTGRES_USER=test \
  -e POSTGRES_DATABASE=test \
  --mount source=some-postgres-vol,target=/var/lib/postgresql/data \
  postgres



#--------------------------------------------------------------------------------


# 3. Setting docker with watch mode development - watching for file changes


# a) eiter reuse or
# b) create Dockerfile from scratch
cd watch-mode

docker build --tag watch-mode-api .
docker run -dit --mount type=bind,source="$(pwd)",target=/usr/express-app -p 3000:3000 watch-mode-api

# Demonstrate how ts-node-dev restarts container process, by changing file from filesystem
