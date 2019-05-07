const fs = require('fs');
const errors = require('@feathersjs/errors')

const Mod = {
  search(ctx){
    
  }
};
module.exports = {
  before: {
    all: [ctx=>{
      if(Mod[ctx.id]){
        return Mod[ctx.id](ctx);
      }else{
        return Promise.reject(new errors.BadGateway('wrong request!'));
      }
    }],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
