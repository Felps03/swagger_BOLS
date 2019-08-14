'use strict';


/**
 * Lista Todas HelpCenterASK
 * Lista Todas HelpCenterASK precisa ser admin
 *
 * authorization String 
 * returns List
 **/
exports.adminListaHelpCenterASK = function(authorization) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "owner" : "Willian Froes",
  "help" : "help",
  "_id" : "5d30b35a0ae9530036eec2b1",
  "id_user" : "5d30b01b0ae9530036eec2a4",
  "id_helpCenter" : "5d30b2610ae9530036eec2ae",
  "desc" : "Não sei."
}, {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "owner" : "Willian Froes",
  "help" : "help",
  "_id" : "5d30b35a0ae9530036eec2b1",
  "id_user" : "5d30b01b0ae9530036eec2a4",
  "id_helpCenter" : "5d30b2610ae9530036eec2ae",
  "desc" : "Não sei."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lista HelpCenterASK
 * Lista HelpCenterASK
 *
 * page Long 
 * returns List
 **/
exports.listHelpCenterAsk = function(page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "owner" : "Willian Froes",
  "help" : "help",
  "_id" : "5d30b35a0ae9530036eec2b1",
  "id_user" : "5d30b01b0ae9530036eec2a4",
  "id_helpCenter" : "5d30b2610ae9530036eec2ae",
  "desc" : "Não sei."
}, {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "owner" : "Willian Froes",
  "help" : "help",
  "_id" : "5d30b35a0ae9530036eec2b1",
  "id_user" : "5d30b01b0ae9530036eec2a4",
  "id_helpCenter" : "5d30b2610ae9530036eec2ae",
  "desc" : "Não sei."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Procura HelpCenterASK
 * Procura HelpCenterASK (Resposta)
 *
 * authorization String 
 * id Long 
 * returns HelpCenterASKSend
 **/
exports.sendHelpCenterASK = function(authorization,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "_id" : "5d30b35a0ae9530036eec2b1",
  "id_user" : "5d30b01b0ae9530036eec2a4",
  "id_helpCenter" : "5d30b2610ae9530036eec2ae",
  "desc" : "Não sei."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Procura HelpCenterASK
 * Procura HelpCenterASK (Resposta)
 *
 * idQuestion Long 
 * page Long 
 * returns List
 **/
exports.sendHelpCenterASKResposta = function(idQuestion,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "_id" : "5d30b35a0ae9530036eec2b1",
  "id_user" : "5d30b01b0ae9530036eec2a4",
  "id_helpCenter" : "5d30b2610ae9530036eec2ae",
  "desc" : "Não sei."
}, {
  "date" : "2000-01-23T04:56:07.000+00:00",
  "_id" : "5d30b35a0ae9530036eec2b1",
  "id_user" : "5d30b01b0ae9530036eec2a4",
  "id_helpCenter" : "5d30b2610ae9530036eec2ae",
  "desc" : "Não sei."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

