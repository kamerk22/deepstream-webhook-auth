# deepstream-webhook-auth
Deepstream Webhook Authentication Demo

# How to use
```sh
$ git clone https://github.com/kamerk22/deepstream-webhook-auth.git
$ cd deepstream-webhook-auth
```

## Note
First update your config.yml file of your deepstream server for webhook link
Ex:
```
auth:
  type: http
  options:
    endpointUrl: localhost:3000/login
    permittedStatusCodes: [ 200 ]
    requestTimeout: 2000
```

# Steps to run
### 1. Start Deepstream Server
```sh
$ deepstream start
```
### 2. Start Autentication Server
```sh
$ cd Auth-Server
$ npm start
```
### 3. Start Client
```sh
$ cd Client
$ npm start
```