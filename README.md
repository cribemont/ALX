# ALX Assignment

This assignment is composed of the React SPA as well as a quick Node/Express server to mimic a basic API behavior.

## Installation

Clone the repository on your local machine

## Running the server

As the server side is used to mimick an API, we fetch the date from the server in the client.
You need to run the server before running the client to be sure you'll see up to date data.

Open a terminal in the root folder of the project and type :

```bash
cd server
node apiserver.js
```

The Node/Express fake API should now be running on port 3000

You can check by opening your browser and navigating to http://localhost:3000


## Running the client

To run the client, first you need to install its dependencies

```bash
cd client/alx-promo-codes
npm install
```

After all the dependencies have been installed, you can run the client locally :

```bash
npm run dev
```

To check the SPA, open your browser if the dev command doesn't do it for you and go to http://localhost:8080

## Compiling the project

After you have mode your changes, you can build the client by typing 

```bash
npm run build
```

The compiled code will be found in the newly create /dist/ folder

Enjoy !