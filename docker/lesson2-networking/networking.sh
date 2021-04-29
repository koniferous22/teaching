#!/bin/sh

echo "DO NOT EXECUTE THIS FILE, IT'S JUST .sh EXTENSION FOR COMMAND HIGHLIGHTING"
exit 1

# NOTE: examples use project in simple-setup or new can be created by running `typeorm init --database postgres` & manually creating Dockerfile


#--------------------------------------------------------------------------------


# 1st attempt run postgres image and assume it can communicate with api

cd simple-setup
docker build --tag test-docker-api .
docker run --name some-api test-docker-api

# Demonstrate reconfiguration of envs and sync with ormconfig.json
docker run --name some-postgres -e POSTGRES_PASSWORD=test -e POSTGRES_USER=test -e POSTGRES_DATABASE=test -d postgres

# Show default network
docker network list
docker network inspect bridge


#--------------------------------------------------------------------------------


# 2nd attempt: expose port

# demonstrate communication by showing `ping` command
ping www.google.com

# Comment out orm code since it is not working for now
docker run --name some-api -p 3000:3000 test-docker-api

# Restart postgres container
docker stop some-postgres
docker rm some-postgres

# Rerun again with -p argument
docker run --name some-postgres -e POSTGRES_PASSWORD=test -e POSTGRES_USER=test -e POSTGRES_DATABASE=test -p 5432:5432 -d postgres

# Demonstrate fuckup without -it argument, that new tty needs to be allocated
# Explain sh command
docker exec -it some-api sh

# EXECUTE INSIDE DOCKER CONTAINER
ping $IP_ADRESS_OF_DB_CONTAINER

# Explain that default bridge network doesn't provide by default DNS resolution

#--------------------------------------------------------------------------------

# 3rd attempt configured network

docker network create my-network

docker stop some-postgres
docker rm some-postgres

# Rerun again, this time with --network arg
docker run --name some-postgres -e POSTGRES_PASSWORD=test -e POSTGRES_USER=test -e POSTGRES_DATABASE=test -p 5432:5432 --network my-network -d postgres

# UNCOMMENT ORM Code here

docker stop some-api
docker rm some-api

docker run --name some-api -p 3000:3000 --network my-network -d test-docker-api

docker network inspect my-network

# AT THE END EXPLAIN THE BRIDGE NETWORKS ARE PURELY SOFTWARE NETWORKS
# Demonstrate briefly Overlay networks
