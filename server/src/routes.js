const authenticationController = require('./controllers/authenticationController');
const authenticationControllerPolicy = require('./policies/authenticationControllerPolicy');
const invoiceController = require('./controllers/invoiceController');
const businessController = require('./controllers/businessController');
const employeeController = require('./controllers/employeeController');
const uploadController = require('./controllers/uploadController');
const fileUploadController = require('./controllers/fileUploadController');
const logoUploadController = require('./controllers/logoUploadController');
const companyController = require('./controllers/companyController');
const isAuthenticated = require('./policies/isAuthenticated');

module.exports = (app) => {
  app.post('/register', authenticationControllerPolicy.register, authenticationController.register);
  app.post('/login', authenticationController.login);
  app.post('/invoices', isAuthenticated, invoiceController.create);
  app.post('/business', isAuthenticated, businessController.create);
  app.post('/employee', isAuthenticated, employeeController.create);
  app.post('/employeeFiles', isAuthenticated, fileUploadController.addFile, uploadController.file);
  app.post('/companyLogo', isAuthenticated, logoUploadController.addLogo, uploadController.logo);
  app.put('/invoices/:id', isAuthenticated, invoiceController.put);
  app.put('/employee/:id', isAuthenticated, employeeController.put);
  app.put('/business/:id', isAuthenticated, businessController.put);
  app.put('/company/:id', isAuthenticated, companyController.put);
  app.get('/invoices', isAuthenticated, invoiceController.index);
  app.get('/invoices/:invoiceId', isAuthenticated, invoiceController.invoice);
  app.get('/business', isAuthenticated, businessController.index);
  app.get('/employee', isAuthenticated, employeeController.index);
  app.get('/employee/:employeeId', isAuthenticated, employeeController.employee);
  app.get('/business/:businessId', isAuthenticated, businessController.business);
  app.delete('/business/:businessId', isAuthenticated, businessController.destroy)
};
