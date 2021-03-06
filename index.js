require('dotenv').config();
const express = require('express');

const router = require('./router/router');

const app = express();

app.use(express.json());
app.use('/', router);

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.get('/', (_request, response) => {
  response.send();
});
