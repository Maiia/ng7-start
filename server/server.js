const express = require('express');
const app = express();

const cors = require('cors');

const baseCats = {cats: [{ catName: 'lilly' }, { catName: 'lucy' }]};
const bodyParser = require('body-parser');

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.listen(8000, () => {
  console.log('Server started!');
});

// GET
app.route('/api/cats').get((req, res) => {
  res.send(200, baseCats);
});

// POST
app.route('/api/cats').post((req, res) => {
  console.log('post req', req.body);
  baseCats.cats.push(req.body);
  res.send(201, baseCats);
});

// UPDATE
app.route('/api/cats/:name').put((req, res) => {
  const itemIndex = baseCats['cats'].findIndex(item => item.catName === req.body.catName);
  if(req.body && itemIndex !== -1){
    baseCats['cats'].splice(itemIndex, 1);
    res.send(200, baseCats);
  } else {
    res.send(204);
  }
});
