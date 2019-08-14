'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userExport = function userExport (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  User.userExport(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
