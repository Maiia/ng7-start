const express = require('express');
const app = express();

const cors = require('cors');

const users = [
  {
    login: 'volodiapika9',
    password: 'test',
    permission: 'EDITOR'
  },
  {
    login: 'Kate',
    password: 'test',
    permission: 'ADMIN'
  },
  {
    login: 'Lyubomir',
    password: 'test',
    permission: 'ADMIN'
  },
  {
    login: 'Yulia',
    password: 'test',
    permission: 'VIEWER'
  }
];

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
app.route('/api/users').get((req, res) => {
  res.send(200, users);
});

// POST
app.route('/api/users').post((req, res) => {
  console.log('post req', req.body);
  const selectedUser = users.find(
    item =>
      item['login'] === req.body['login'] &&
      item['password'] === req.body['password']
  );
  if (selectedUser) {
    res.send(200, selectedUser);
  } else {
    res.send(401);
  }
});
