const bodyParser = require('body-parser');
const config     = require('config');
const expressjs  = require('express');


module.exports = () => {
  const app = expressjs();

  app.set('port', process.env.PORT || config.get('server.port'));
  app.use(bodyParser.json());

  require('../api/routes/passagensAereas')(app);

  return app;
};