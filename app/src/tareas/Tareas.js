(function(){
  var app = angular.module('tareas', []);

  app.controller('TareasController', function(){


  });

  app.directive('listaTareas', function(){
    return{
      restrict: 'E',
      templateUrl: 'src/tareas/view/tareas.html',
      controllerAs: 'tareas',
      controller: function($filter){

        this.estaResuelta = function(tarea){
          return tarea.resuelta;
        };

        this.cambiarEstadoResuelta = function(tarea){
          tarea.resuelta = !tarea.resuelta;
        };

        this.tareaNueva = {};
        this.hoy = $filter('date')(new Date(), 'yyyy-MM-dd');

        this.anadeTarea = function(listaTareas){
          this.tareaNueva.date = this.hoy;
          listaTareas.push(this.tareaNueva);
          this.tareaNueva = {};
        };
      }
    };
  });

})();