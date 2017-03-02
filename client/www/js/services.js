angular.module('starter.services', ['appConfig'])


.factory('User', function ($q, $http, appConfig) {
  
  var user = null;

  return {
    login: function(username, password) {
      return $q(function(resolve, reject){
          $http.post(appConfig.apiAddr + "login", { username: username, password: password }).then(function (result) {
          if(result.status == 200)
          {
            user = { id: result.data.id, username: result.data.username };
            resolve();
          }
          else
          {
            reject();
          }
        }).catch(function(){
          reject();
        });
      });
    },
    isLogged: function()
    {
      return $q(function(resolve, reject){
        if(user != null)
        {
          resolve();
        }
        else
        {
          reject();
        }
      });
    }    
  };
});;
