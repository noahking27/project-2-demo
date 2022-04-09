const express = require('express');
const app = express();
const port = process.env.PORT || 3005;
const routes = require('./src/components/controllers');

// turn on routes
app.use(routes);

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });
