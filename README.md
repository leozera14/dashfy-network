# Dashfy Network

# Application Presentation

Application made by requesting a test consuming a `JSON` through the [json-server](https://www.npmjs.com/package/json-server).

## Installation

After cloning the project on your machine, simply run the `npm install` command in the` backend` and `frontend` folders to download the` node_modules`.

### Usage

To run the application you need to follow these steps:

First open 3 terminals, 1 of these in the `frontend` folder and the other 2 in the` backend` folder. That done, to start `json-server` in a terminal on the backend run:

`json-server --watch data.json -p 4000 (or any port other than 3333 and 3000)`

On the other run:

`npm start`

To start the `node` server.

After the previous steps, just run the `npm start` command on the` frontend` terminal to run and open the application, where it has the default
the address [http://localhost:3000](http://localhost:3000) and the `node` having [http://localhost:3333](http://localhost:3333).

The application runs based on the consumption of a `JSON` through the [json-server](https://www.npmjs.com/package/json-server) together with a` Node.js` server.
The use is very simple, first a list of all registered users is loaded, clicking on each one you will be redirected to a page of
`Profile` of the clicked user. Also having the option of searching the `Home` being able to search for any information of the registered users.

# Media Query

The application was developed adapting to the screen size, being possible to be used by mobile devices.