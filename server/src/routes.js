const authenticationController = require('./controllers/authenticationController')

module.exports = (app) => {
  app.post('/register', authenticationController.register);
  app.post('/login', authenticationController.login)
};
