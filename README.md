# ALX Assignment

This assignment is composed of the React SPA as well as a quick Node/Express server to mimic a basic API behavior.

It was created with create-react-app and designed with the help of react-bootstrap

It was built with Babel/Webpack

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

You can check by opening your browser and navigating to http://localhost:3000 and you should see

```bash
Node / Express API is here
```

## Adding some data

If you want to add more services to the application, you can simple edit the main file apiserver.js and modify the services array

```bash
// Our fake item to store Services and statuses;
let services = [
    {
        id: 1,
        name: 'Siteconstructor.io',
        description: 'Description',
        promocode: 'itpromocode 2020 1',
        activated: false,
    },
    {
        id: 2,
        name: 'Appvision.com',
        description: 'Description',
        promocode: 'itpromocode 2020 2',
        activated: false,
    },
    {
        id: 3,
        name: 'Analytics.com',
        description: 'Description',
        promocode: 'itpromocode 2020 3',
        activated: false,
    },
    {
        id: 4,
        name: 'Logotype',
        description: 'Description',
        promocode: 'itpromocode 2020 4',
        activated: false,
    },
];
```


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

If you click on "Activate bonus" you should see the button change, and if you refresh your page, state should be here.

Note that if you stop the Node/Express server those changes will be lost as its only a PoC with an API running behind

## Customising the application

You can customise a few aspects of the application style-wise.
For this i have implemented a few root css variables you can quickly edit in /src/App.css

```bash
:root{
  --spacing-base:2rem; // Basic guttering
  --main-color:#262626; // The main text color
  --sidebar-color:#1b1d29; // Sidebar color
  --secondary-color:#7D7D7D; // Secondary text color
}
```

## Compiling the project

After you have mode your changes, you can build the client by typing 

```bash
npm run build
```

The compiled code will be found in the newly create /dist/ folder

Enjoy !