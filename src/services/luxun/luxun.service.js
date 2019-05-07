// Initializes the `luxun` service on path `/luxun`
const createService = require('./luxun.class.js');
const hooks = require('./luxun.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/luxun', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('luxun');

  service.hooks(hooks);
};
