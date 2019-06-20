Curso de Node da [RocketSeat](https://rocketseat.com.br/starter/curso-gratuito-nodejs). 

You will need [Node/npm](https://nodejs.org/en/download/) to run this project.

After install, open your prompt:

```PowerShell
npm install
```

After you just need start:
```PowerShell
node server.js
```

# Install Docker (Windows:Mode)
Download docker:
https://hub.docker.com/editions/community/docker-ce-desktop-windows  

Ps: You'll need [account in Docker](https://hub.docker.com/signup)  
RUN AS LINUX ok?!



Ps²: 

If you use Windows 10 Home and get this error when install Docker-CE  
![Docker-Error](doc/docker_error.png)     
You should download [DockerToolbox](https://download.docker.com/win/stable/DockerToolbox.exe) instead of Docker-CE


## Add Mongo in docker
```PowerShell
docker pull mongo
```

## Run Docker:
```PowerShell
docker run --name mongodb -p 27017:27017
```

## List all dockers (actives)
```PowerShell
docker ps
```

## List all dockers (all:all)
```PowerShell
docker ps -a
```

## Start docker 
```PowerShell
docker start [NAME_OF_IMAGE]
```

# Client for MongoDb:
[Download Robo 3T](https://robomongo.org/download)  