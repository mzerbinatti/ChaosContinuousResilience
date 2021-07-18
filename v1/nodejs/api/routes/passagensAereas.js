module.exports = app => {
    const controller = require('../controllers/passagensAereas')();
  
    // Mapeia o endpoint a ser requisitado
    app.route('/api/v1/passagens-aereas')
      .get(controller.listarPassagensAereas);
  }