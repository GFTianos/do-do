(function(){
  var app = angular.module('tareas', []);

  app.controller('TareasController', function(){
    this.tarea = {};

    this.anadeTarea = function(usuario){
      usuario.tareas.push(this.tarea);
      this.tarea = {};
    };

  });

  app.directive('listaTareas', function(){
    return{
      restrict: 'E',
      templateUrl: 'src/tareas/view/tareas.html',
      controllerAs: 'tareas',
      controller: function(){

        this.estaResuelta = function(tarea){
          return tarea.resuelta;
        };

        this.cambiarEstadoResuelta = function(tarea){
          tarea.resuelta = !tarea.resuelta;
        };
      };
    };
  });

})();