import express from 'express';
import bodyParser from 'body-parser';
import aircraftRoutes from './routes/aircrafts';
import airportRoutes from './routes/airports';
import entryRoutes from './routes/entries';
import db from './db/dbinit';

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

aircraftRoutes(app);
airportRoutes(app);
entryRoutes(app);


app.listen(port, () => {
    console.log('Started express and listening on port ' + port);
});