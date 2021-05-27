<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://miro.medium.com/max/2484/1*CeuWv9fCjD1uTiTuKytnBQ.png" width="320" alt="Nest Logo" /></a>
</p>

## Description

A-LISTWARE TASK

## Dependencies

* Installed [node.js](https://nodejs.org/uk/download/)

* Installed [docker](https://docs.docker.com/engine/install/)

* Installed [docker-compose](https://docs.docker.com/compose/install/)

## Check dependencies

* nodejs
  ``` 
  node -v
  
* docker
  ``` 
  docker -v

* docker-compose
  ``` 
  docker-compose -v
  
# Run APPLICATION in docker
* IN ROOT FOLDER 
```bash
    cd nest-prototype/docker-compose-backend
    docker-compose -f docker-compose.dev.yml up
  ```
* IN ROOT FOLDER 
```bash
    cd react-prototype/docker-compose
    docker-compose -f docker-compose.dev.yml up
```

# Run APPLICATION with nodejs
* IN ROOT FOLDER 
 ```bash
    cd nest-prototype
    npm i
    npm run start:dev
  ```
* IN ROOT FOLDER 
```bash
    cd react-prototype
    npm i 
    npm run start
```
