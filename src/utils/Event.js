export default (function () {
  const clientList = {};
  let listen, trigger, remove;

  listen = function (key, fn) {
    if(!clientList[key]) {
      clientList[key] = [];
    }
    clientList[key].push(fn);
  };

  trigger = function () {
    const key = Array.prototype.shift.call(arguments),
          fns = clientList[key];
    if(!fns || fns.length === 0) {
      return false;
    }
    for(let i = 0, fn; fn = fns[i++]; ) {
      fn.call(this, arguments);
    }
  };

  remove = function(key, fn) {
    const fns = clientList[key];
    if(!fns) {
      return false;
    }
    if(!fn) {
      fns && (fns.length = 0);
    } else {
      for(let l = fns.length - 1; l >= 0; l--) {
        let _fn = fns[l];
        if(_fn === fn) {
          fns.splice(l, 1);
        }
      }
    }
  };

  return {
    listen,
    trigger,
    remove
  }
})()
