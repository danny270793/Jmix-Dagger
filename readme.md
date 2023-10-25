# Readme

## Local with gradle

To build the program directly on local machine use command

```bash
cd ./code/jmix
./gradlew -Pvaadin.productionMode=true bootJar
```

This normally takes 1 minute

![local](https://github.com/danny270793/Jmix-Dagger/blob/master/assets/local.png)

## From docker

To build the program inside a multi-stage dockerfile use the command

```bash
cd ./ci/bash
bash ./index.sh
```

This normally takes 5 minutes

![local](https://github.com/danny270793/Jmix-Dagger/blob/master/assets/docker.png)

## From dagger

To build the program from dagger using the same multi-stage dockerfile use the command

```bash
cd ./ci/dagger
npm run start
```

This takes too long

![local](https://github.com/danny270793/Jmix-Dagger/blob/master/assets/dagger.png)
