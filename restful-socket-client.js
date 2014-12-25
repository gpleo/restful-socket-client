function RestfulSocketClient(address, opts) {
  opts = opts || {};
  opts.path = opts.path || '/restful-socket';

  this.socket = io.connect(address, opts);
}

RestfulSocketClient.prototype.proc = function (method, path, data, callback) {
  this.socket.emit(method, {path: path, data: data});
  this.socket.once(method + '-' + path, callback);
};

RestfulSocketClient.prototype.get = function (path, data, callback) {
  this.proc('get', path, data, callback);
};
RestfulSocketClient.prototype.post = function (path, data, callback) {
  this.proc('post', path, data, callback);
};
RestfulSocketClient.prototype.put = function (path, data, callback) {
  this.proc('put', path, data, callback);
};
RestfulSocketClient.prototype.delete = function (path, data, callback) {
  this.proc('delete', path, data, callback);
};