const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {

  const dados = request.body;

  console.log(dados);
  return response.json(dados);

});

module.exports = routes;