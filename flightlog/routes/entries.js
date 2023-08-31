import { EntryModel } from '../models/Entry';

export default (app) => {
  
  app.get('/entry', async (req, res) => {
    const entryList = await EntryModel.find() || [];
    res.send(entryList);
  });

  app.get('/entry/:id', async (req, res) => {
    try {
      const entry = await EntryModel.findById(req.params.id);
      if(entry) {
        res.send(entry);
      } else {
        res.status(404).end();
      }
    } catch (e) {
      res.status(404).end();
    }
  });

  app.post('/entry/new', async (req, res) => {
    const entry = await EntryModel.create(req.body);
    if(entry) {
      res.status(200).end();
    } else {
      res.status(500).end();
    }
  });

  app.put('/entry/:id/update', async (req, res) => {
    const entry = await EntryModel.findByIdAndUpdate(
      req.params.id, 
      req.body
    );
    if(!entry || entry?.errors) {
      res.status(500).end();
    } else {
      res.status(200).end();
    }
  });

  app.delete('/entry/:id/delete', async (req, res) => {
    const entry = await EntryModel.findByIdAndDelete(
      req.params.id, 
      req.body
    );
    if(!entry || entry?.errors) {
      res.status(500).end();
    } else {
      res.status(200).end();
    }
  });
}