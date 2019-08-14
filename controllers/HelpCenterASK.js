'use strict';

var utils = require('../utils/writer.js');
var HelpCenterASK = require('../service/HelpCenterASKService');

module.exports.adminListaHelpCenterASK = function adminListaHelpCenterASK (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  HelpCenterASK.adminListaHelpCenterASK(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listHelpCenterAsk = function listHelpCenterAsk (req, res, next) {
  var page = req.swagger.params['page'].value;
  HelpCenterASK.listHelpCenterAsk(page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendHelpCenterASK = function sendHelpCenterASK (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var id = req.swagger.params['id'].value;
  HelpCenterASK.sendHelpCenterASK(authorization,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendHelpCenterASKResposta = function sendHelpCenterASKResposta (req, res, next) {
  var idQuestion = req.swagger.params['idQuestion'].value;
  var page = req.swagger.params['page'].value;
  HelpCenterASK.sendHelpCenterASKResposta(idQuestion,page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
