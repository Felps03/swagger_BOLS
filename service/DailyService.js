'use strict';


/**
 * Lista Dailyes do dia
 * Lista as dailys do dia
 *
 * date date 
 * page Long 
 * returns List
 **/
exports.listaDailyDia = function(date,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "yesterday" : "Testes e correções de bugs.",
  "date" : "2000-01-23T04:56:07.000+00:00",
  "today" : "Testes e desenvolvimento.",
  "impediment" : "Nenhum impedimento.",
  "_id" : "5d41ca343c941f3bf0fddcf2",
  "id_user" : "5d41c9b63c941f3bf0fddcf1"
}, {
  "yesterday" : "Testes e correções de bugs.",
  "date" : "2000-01-23T04:56:07.000+00:00",
  "today" : "Testes e desenvolvimento.",
  "impediment" : "Nenhum impedimento.",
  "_id" : "5d41ca343c941f3bf0fddcf2",
  "id_user" : "5d41c9b63c941f3bf0fddcf1"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista todas Dailyes
 * Lista as ultimas 10 daily cadastradas
 *
 * authorization String 
 * returns List
 **/
exports.listaTodasDaily = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "yesterday" : "Testes e correções de bugs.",
  "date" : "2000-01-23T04:56:07.000+00:00",
  "today" : "Testes e desenvolvimento.",
  "impediment" : "Nenhum impedimento.",
  "_id" : "5d41ca343c941f3bf0fddcf2",
  "id_user" : "5d41c9b63c941f3bf0fddcf1"
}, {
  "yesterday" : "Testes e correções de bugs.",
  "date" : "2000-01-23T04:56:07.000+00:00",
  "today" : "Testes e desenvolvimento.",
  "impediment" : "Nenhum impedimento.",
  "_id" : "5d41ca343c941f3bf0fddcf2",
  "id_user" : "5d41c9b63c941f3bf0fddcf1"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

