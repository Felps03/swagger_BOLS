'use strict';

var utils = require('../utils/writer.js');
var HelpCenter = require('../service/HelpCenterService');

module.exports.cadastraHelpCenter = function cadastraHelpCenter (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var docs = req.swagger.params['docs'].value;
  HelpCenter.cadastraHelpCenter(authorization,docs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteHelpCenter = function deleteHelpCenter (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var id = req.swagger.params['id'].value;
  HelpCenter.deleteHelpCenter(authorization,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listaHelpCenter = function listaHelpCenter (req, res, next) {
  var page = req.swagger.params['page'].value;
  HelpCenter.listaHelpCenter(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendHelpCenter = function sendHelpCenter (req, res, next) {
  var id = req.swagger.params['id'].value;
  HelpCenter.sendHelpCenter(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
