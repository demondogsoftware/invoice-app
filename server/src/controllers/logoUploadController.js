const multer = require('multer');
//const moment = require('moment');
const path = require('path');
//const date = moment().format('lll');

exports.addLogo = function(req, res, next) {
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, path.join(__dirname, '../../businessLogo'));
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname + path.extname(file.originalname));
    }
  })
  const upload = multer({storage: storage}).single('image')
  try {
    upload(req, res, (err) => {
      if (err) {
        console.log(err)
      } else {
        next()
      }
    })
  } catch (err) {
    console.log(err)
  }
};
