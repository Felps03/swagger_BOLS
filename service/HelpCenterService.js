'use strict';


/**
 * Cadastra HelpCenter
 * Cadastra HelpCenter Paginada
 *
 * authorization String 
 * docs HelpCenterAdd 
 * returns HelpCenterAddResp
 **/
exports.cadastraHelpCenter = function(authorization,docs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "_id" : "5d432d50a6d90d38c44061e6",
  "id_user" : "5d30b2610ae9530036eec2ae",
  "title" : "Deploy",
  "desc" : "Deploy do azure não funciona bem da erro no compilador, no express"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletar HelpCenter
 * Deletar HelpCenter
 *
 * authorization String 
 * id Long 
 * returns HelpCenterAddResp
 **/
exports.deleteHelpCenter = function(authorization,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "_id" : "5d432d50a6d90d38c44061e6",
  "id_user" : "5d30b2610ae9530036eec2ae",
  "title" : "Deploy",
  "desc" : "Deploy do azure não funciona bem da erro no compilador, no express"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista HelpCenter
 * Lista HelpCenter Paginada
 *
 * page Long 
 * returns List
 **/
exports.listaHelpCenter = function(page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "owner" : "Felipe Santos",
  "_id" : "5d30b2610ae9530036eec2ae",
  "id_user" : "5d30b1110ae9530036eec2a9",
  "title" : "Deploy",
  "desc" : "Deploy do azure não funciona bem da erro no compilador, no express"
}, {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "owner" : "Felipe Santos",
  "_id" : "5d30b2610ae9530036eec2ae",
  "id_user" : "5d30b1110ae9530036eec2a9",
  "title" : "Deploy",
  "desc" : "Deploy do azure não funciona bem da erro no compilador, no express"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista HelpCenter
 * Procura HelpCenter
 *
 * id Long 
 * returns HelpCenterAddResp
 **/
exports.sendHelpCenter = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "_id" : "5d432d50a6d90d38c44061e6",
  "id_user" : "5d30b2610ae9530036eec2ae",
  "title" : "Deploy",
  "desc" : "Deploy do azure não funciona bem da erro no compilador, no express"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

