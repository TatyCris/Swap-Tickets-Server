# Tickets Now
This project is the server side of a full stack web-application where users can buy and sell tickets for all kinds of events.

## Table of contents
- [Intro](#Intro)
- [Technologies used](#Technologies-used)
- [Setup](#Setup)
- [API](#API)

## Intro
This is a node.js server for the Swap Tickets real world project - which was created for the final assignment during week 8 of the Codaisseur Academy.

The Front-end for the following repo may be found [here](https://github.com/TatyCris/Swap-Tickets-Client)

The Backend is deployed to heroku [here](
https://tikets-now-server.herokuapp.com)

## Technologies used
- PostgreSQL
- Express
- Sequelize

## Setup

Please note that in order to run the server locally you must also start a Postgres container using the following commands

```bash
$ docker run \
  --rm \
  -e POSTGRES_PASSWORD=secret \
  -p 5432:5432 \
  postgres
```
  
- git clone
```bash
$ git clone https://github.com/TatyCris/Swap-Tickets-Server.git
```

- npm install
```bash
$ npm install
```

- npm run dev
```bash
$ npm run dev
```

## API

MODELS:

- User -> registered users
- Events -> events inputted by users
- Tickets -> tickets inputted by users
- Comments -> comments inputted by users

ENDPOINTS:

\<base url\> is either http://localhost:4000 for local development or https://tikets-now-server.herokuapp.com for the deployed backend.
</br>

Create an user:
- POST \<base url\>/users

Get a token:
- POST \<base url\>/login

Authenticate an user:
- GET \<base url\>/authentication

Get all events:
- GET \<base url\>/events

Create an event:
- POST \<base url\>/events

Get an event:
- GET \<base url\>/events/:id

Modify an event:
- PUT \<base url\>/events/:id

Delete an event:
- PUT \<base url\>/events/:id

Get all tickets:
- GET \<base url\>/events/:id/tickets

Create a ticket:
- POST \<base url\>/events/:id/tickets

Get a ticket:
- GET \<base url\>/events/:id/tickets/:ticketId

Modify a ticket:
- PUT \<base url\>/events/:id/tickets/:ticketId

Delete a ticket:
- PUT \<base url\>/events/:id/tickets/:id

Get all comments:
- GET \<base url\>/events/:id/tickets/:ticketId/comments

Create a comment:
- POST \<base url\>/events/:id/tickets/:ticketId/comments
