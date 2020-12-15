//Express !
const express = require('express');
// Parse requests body
const bodyParser = require('body-parser');
// Cors middleware because security
const cors = require('cors');

// init app express
const app = express();
// port
const port = 3000;

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

// Cors !
app.use(cors());
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Basic url to say hi
app.get('/', (req, res) => {
    res.send('Node / Express API is here');
})

// Quick route to handle service activation
app.get('/services', (req, res) => {
    res.json(services);
})
// Quick route to handle service activation
app.post('/service/:id', (req, res) => {
    const id = req.params.id;
    // Check and activate/desactivate
    // Return single service
    services.map((obj) => {
        if (obj.id == id){
            obj.activated = !obj.activated;
            res.send(obj);
        }
    });
})

// Let's ride !
app.listen(port, () => { console.log(`Our Node / Express fake API is running on port ${port}`) })