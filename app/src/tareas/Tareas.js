(function(){
  var app = angular.module('tareas', []);

  app.controller('TareasController', function(){


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

        this.tareaNueva = {};

        this.anadeTarea = function(listaTareas){
          this.tareaNueva.date = new Date();
          listaTareas.push(this.tareaNueva);
          this.tareaNueva = {};
        };
      }
    };
  });

})();