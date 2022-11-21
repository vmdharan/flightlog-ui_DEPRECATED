import { AircraftModel } from '../models/Aircraft';

export default (app) => {
  
  app.get('/aircraft', async (req, res) => {
    const aircraftList = await AircraftModel.find() || [];
    res.send(aircraftList);
  });

  app.get('/aircraft/:id', async (req, res) => {
    try {
      const aircraft = await AircraftModel.findById(req.params.id);
      if(aircraft) {
        res.send(aircraft);
      } else {
        res.status(404).end();
      }
    } catch (e) {
      res.status(404).end();
    }
  });

  app.post('/aircraft/new', async (req, res) => {
    const aircraft = await AircraftModel.create(req.body);
    if(aircraft) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });

  app.put('/aircraft/update/:id', async (req, res) => {
    const aircraft = await AircraftModel.findByIdAndUpdate(
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

  app.delete('/aircraft/delete/:id', async (req, res) => {
    const aircraft = await AircraftModel.findByIdAndDelete(
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