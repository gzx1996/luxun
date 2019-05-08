const fs = require('fs');
const path = require('path');
const errors = require('@feathersjs/errors')

function toDBC(str){
  let result = '';
  let len = str.length;
  for(let i=0;i<len;i++)
  {
    let cCode = str.charCodeAt(i);
    //全角与半角相差（除空格外）：65248(十进制)
    cCode = (cCode>=0x0021 && cCode<=0x007E)?(cCode + 65248) : cCode;
    //处理空格
    cCode = (cCode==0x0020)?0x03000:cCode;
    result += String.fromCharCode(cCode);
  }
  return result;
}

const Mod = {
  search(ctx){
    const book = fs.readFileSync(path.join(__dirname,'../../../book/book.txt'));
    let content = book.toString();
    let str = toDBC(ctx.params.query.str);
    let result = content.indexOf(str);
    ctx.result = result > -1 ? {
      code: 1,
      result: 1,
      message: '卧槽，鲁迅真说过！'
    } : {
      code: 1,
      result: 0,
      message: '很遗憾，这句话鲁迅没说过'
    }
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
