const luxun = require('./luxun/luxun.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(luxun);
};
