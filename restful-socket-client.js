function RestfulSocketClient(address) {
  this.socket = io.connect(address);
  this.ons = {};
}

RestfulSocketClient.prototype.proc = function (method, key, data, callback) {
  this.socket.emit(method, {key: key, data: data});
  if (!this.ons[method + '-' + key]) {
    this.socket.on(method + '-' + key, callback);
    this.ons[method + '-' + key] = 1;
  }
};

RestfulSocketClient.prototype.get = function (key, data, callback) {
  this.proc('get', key, data, callback);
};
RestfulSocketClient.prototype.post = function (key, data, callback) {
  this.proc('post', key, data, callback);
};
RestfulSocketClient.prototype.put = function (key, data, callback) {
  this.proc('put', key, data, callback);
};
RestfulSocketClient.prototype.delete = function (key, data, callback) {
  this.proc('delete', key, data, callback);
};