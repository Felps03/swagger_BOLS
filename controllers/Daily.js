'use strict';

var utils = require('../utils/writer.js');
var Daily = require('../service/DailyService');

module.exports.atualizarDailyDia = function atualizarDailyDia (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var id = req.swagger.params['id'].value;
  var docs = req.swagger.params['docs'].value;
  Daily.atualizarDailyDia(authorization,id,docs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.cadastrarDailyDia = function cadastrarDailyDia (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var docs = req.swagger.params['docs'].value;
  Daily.cadastrarDailyDia(authorization,docs)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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
  Daily.listaTodasDaily(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendDaily = function sendDaily (req, res, next) {
  var authorization = req.swagger.params['authorization'].value;
  var id = req.swagger.params['id'].value;
  Daily.sendDaily(authorization,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendUserDaily = function sendUserDaily (req, res, next) {
  var id = req.swagger.params['id'].value;
  Daily.sendUserDaily(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
