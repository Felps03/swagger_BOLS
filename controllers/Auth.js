'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.authUser = function authUser (req, res, next) {
  var docs = req.swagger.params['docs'].value;
  Auth.authUser(docs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
