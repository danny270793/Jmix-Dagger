#!/bin/bash
set -e

VERSION="1.0.0"
DOCKER_NAME="jmixbash"

cd ../../code/jmix
docker pull $DOCKER_NAME:latest || true
docker build --cache-from $DOCKER_NAME:latest --tag $DOCKER_NAME:latest --tag $DOCKER_NAME:$VERSION --file dockerfile .
