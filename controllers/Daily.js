'use strict';

var utils = require('../utils/writer.js');
var Daily = require('../service/DailyService');

module.exports.listaDailyDia = function listaDailyDia (req, res, next) {
  var date = req.swagger.params['date'].value;
  var page = req.swagger.params['page'].value;
  var docs = req.swagger.params['docs'].value;
  Daily.listaDailyDia(date,page,docs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listaTodasDaily = function listaTodasDaily (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var docs = req.swagger.params['docs'].value;
  Daily.listaTodasDaily(authorization,docs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
