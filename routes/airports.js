import { AirportModel } from '../models/Airport';

export default (app) => {
  
  app.get('/airport', async (req, res) => {
    const airportList = await AirportModel.find() || [];
    res.send(airportList);
  });

  app.get('/airport/:id', async (req, res) => {
    try {
      const airport = await AirportModel.findById(req.params.id);
      if(airport) {
        res.send(airport);
      } else {
        res.status(404).end();
      }
    } catch (e) {
      res.status(404).end();
    }
  });

  app.post('/airport/new', async (req, res) => {
    const airport = await AirportModel.create(req.body);
    if(airport) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });

  app.put('/airport/update/:id', async (req, res) => {
    const airport = await AirportModel.findByIdAndUpdate(
      req.params.id, 
      req.body,
      (err) => {
        if(err) {
          res.status(500).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });

  app.delete('/airport/delete/:id', async (req, res) => {
    const airport = await AirportModel.findByIdAndDelete(
      req.params.id,
      req.body,
      (err) => {
        if(err) {
          res.status(500).end();
        } else {
          res.status(200).end();
        }
      }
    );
  });
}