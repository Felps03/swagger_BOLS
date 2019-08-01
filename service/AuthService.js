'use strict';


/**
 * Autenticação
 * Autenticação de Usuario
 *
 * docs Auth  (optional)
 * returns Authenticate
 **/
exports.authUser = function(docs) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "batata",
  "createdAt" : "2000-01-23T04:56:07.000+00:00",
  "password" : "a6361743ee6a60423a1879014f38fe37d363c840adc9e37deb5609c32fc8f2ea",
  "name" : "João P",
  "dateOfBirth" : "2000-01-23T04:56:07.000+00:00",
  "isAdmin" : false,
  "_id" : "5d33fcb3fa5500198847300d",
  "userName" : "batata",
  "email" : "batata@gmail.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

