const PROXY_CONFIG = {
    "/api": {
      "target": "http://www.angular.at", // localhost4200/api --> http://www.angular.at/api
      "secure": false,
      "changeOrigin": true,
      "bypass": function(req, res, proxyOptions) {
        // req.headers['host'] = 'www.angular.at';
        req.headers['Authorization'] = 'Basic bWF4OmdlaGVpbQ==';
      }
    },
    "/other": {
      "target": "http://www.angular.at/api", // http://localhost:4200/other --> http://www.angular.at/api
      "secure": false,
      "changeOrigin": true,
      "headers": {
        "Authorization": "Basic bWF4OmdlaGVpbQ=="
      },
      "pathRewrite": {
        "/other": ""
      },
    }
  }

  module.exports = PROXY_CONFIG;
