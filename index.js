// Generated by CoffeeScript 1.6.3
(function() {
  module.exports = function(config) {
    if (config == null) {
      config = {};
    }
    config = (typeof config === "function" ? config() : void 0) || config;
    return function(req, res, next) {
      var key, value;
      for (key in config) {
        value = config[key];
        res.header(key, value);
      }
      return next();
    };
  };

}).call(this);