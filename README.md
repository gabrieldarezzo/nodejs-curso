Curso de Node da [RocketSeat](https://rocketseat.com.br/starter/curso-gratuito-nodejs). 

Construção de APIs REST utilizando o NodeJS, back-end utilizando o JavaScript.
* Uso de NPM.
* Uso de Docker.
* Criação de rotas.
* Criação de Controllers.
* CRUD no Mongo.
* Utilizar as libs: 'nodemon', 'require-dir', 'mongoose', 'express', 'cors'.


---

You will need [Node/npm](https://nodejs.org/en/download/) to run this project.

After install, open your prompt:

```PowerShell
npm install
```

After you just need start (static server):
```PowerShell
node server.js
```
If you'll need change and see dynamic change. use this command:
```PowerShell
npm run dev
```


# Install Docker (Windows:Mode)
Download docker:
https://hub.docker.com/editions/community/docker-ce-desktop-windows  

Ps: You'll need [account in Docker](https://hub.docker.com/signup) for download.

## Run Docker: (Curso / Win 10 Professional)

### Add Mongo in docker
```PowerShell
docker pull mongo
```

### Run mongo
```PowerShell
docker run --name mongodb -p 27017:27017 -d mongo
```
---

# Install Docker (Windows 10 HOME:Mode)
Ps²: 

If you use `Windows 10 Home` and get this error when install Docker-CE  
![Docker-Error](doc/docker_error.png)     
You should download [DockerToolbox](https://download.docker.com/win/stable/DockerToolbox.exe) instead of Docker-CE



## Run Docker: (ToolBoxMode Nobody likes$ Win10-Pro)

Open `Docker Quickstart Terminal`, in prompt run:
```PowerShell
docker pull mongo
```

Run mongo with this params:
```PowerShell
docker run --name database -d -p 27017:27017 mongo --noauth --bind_ip=0.0.0.0
```

In Oracle VM VirtualBox -> Tab Network, you'll need port fowarding:  
Port Host: `27017` 
Guest Host: `1111` 
![Port Foward](doc/port_fw.png) 


Access URL in Chrome: `http://192.168.99.1:1111` to test, you should recive this response:  
`It looks like you are trying to access MongoDB over HTTP on the native driver port.`  
PS: `192.168.99.1` its my ipv4's vm. 


Work like a charm, more info in this site:
https://codehangar.io/mongodb-image-instance-with-docker-toolbox-tutorial/

---
# Commands in Docker You'll like:

## List all dockers (actives)
```PowerShell
docker ps
```
* `-a` <- list all, include turnOff dockers 


## Stop Img
```PowerShell
docker stop [IMAGE_ID]
```


## Remover Img
```PowerShell
docker rm [IMAGE_ID]
```
    

## Start docker 
```PowerShell
docker start [NAME_OF_IMAGE]
```

# Client for MongoDb:
[Download Robo 3T](https://robomongo.org/download)  


I created `sender.html` to test CREATE,UPDATE,DELETE routes 