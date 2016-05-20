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
        this.tab = 1;

        this.estaResuelta = function(tarea){
          return tarea.resuelta;
        };

        this.resolverTarea = function(tarea){
          tarea.resuelta = true;
        };

        this.reabrirTarea = function(tarea){
          tarea.resuelta = false;
        }
      }
    }
  });

})();