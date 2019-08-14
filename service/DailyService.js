'use strict';


/**
 * Lista Todas DAYLIES do Banco
 * Lista Todas DAYLIES do Banco precisa ser Admin
 *
 * authorization String 
 * docs Daily  (optional)
 * returns List
 **/
exports.adminListaDailyDia = function(authorization,docs) {
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
 * Atualiza Daily
 * Atualizar Daily
 *
 * authorization String 
 * id Long 
 * docs DailyEditar 
 * returns Daily
 **/
exports.atualizarDailyDia = function(authorization,id,docs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "yesterday" : "Testes e correções de bugs.",
  "date" : "2000-01-23T04:56:07.000+00:00",
  "today" : "Testes e desenvolvimento.",
  "impediment" : "Nenhum impedimento.",
  "_id" : "5d41ca343c941f3bf0fddcf2",
  "id_user" : "5d41c9b63c941f3bf0fddcf1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Cadastrar Daily
 * Cadastrar Daily do dia
 *
 * authorization String 
 * docs DailyCadastro 
 * returns Daily
 **/
exports.cadastrarDailyDia = function(authorization,docs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "yesterday" : "Testes e correções de bugs.",
  "date" : "2000-01-23T04:56:07.000+00:00",
  "today" : "Testes e desenvolvimento.",
  "impediment" : "Nenhum impedimento.",
  "_id" : "5d41ca343c941f3bf0fddcf2",
  "id_user" : "5d41c9b63c941f3bf0fddcf1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista Dailyes do dia
 * Lista as dailys do dia
 *
 * date date 
 * page Long 
 * docs Daily  (optional)
 * returns List
 **/
exports.listaDailyDia = function(date,page,docs) {
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


/**
 * Procura por ID Daily
 * Procura por ID Daily
 *
 * authorization String 
 * id Long 
 * returns Daily
 **/
exports.sendDaily = function(authorization,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "yesterday" : "Testes e correções de bugs.",
  "date" : "2000-01-23T04:56:07.000+00:00",
  "today" : "Testes e desenvolvimento.",
  "impediment" : "Nenhum impedimento.",
  "_id" : "5d41ca343c941f3bf0fddcf2",
  "id_user" : "5d41c9b63c941f3bf0fddcf1"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Procura por ID do Usuerio
 * Verifica se a daily já foi cadastrada ou não
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.sendUserDaily = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

