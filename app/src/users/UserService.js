(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
        name: 'Manson',
        avatar: 'svg-1',
        content: 'Me gusta programar, pero me gusta más aun echar horas',
        tareas:{
          tareasHoy: [
            {
              date: "2016-05-15",
              title: "maquetar nuevo diseño pantalla X",
              finished: false,
              position: 1
            },
            {date: "2016-05-15",
              title: "pedir por email a Charly que me pase resultados de test de seguridad",
              finished: false,
              position: 1
            },
            {date: "2016-05-15",
              title: "Publicar nuevo servicio InformaVistoService",
              finished: false,
              position: 1
            }
          ],
          tareasHistorico: [
            {
              date: "2016-05-14",
              title: "Desarrollar nuevo servicio InformaVistoService",
              finished: false,
              position: 1
            },
            {date: "2016-05-14",
              title: "Enviar solicitud de test de seguridad, entorno ya disponible",
              finished: false,
              position: 1
            },
            {date: "2016-05-13",
              title: "Revisión requisitos usuario InformaVistoService",
              finished: false,
              position: 1
            }
          ]
        }
      },
      {
        name: 'Viscaralascasca',
        avatar: 'svg-2',
        content: 'Suelo jugar al rol sin parar, y a veces hago commits',
        tareas:{
          tareasHoy: [
            {
              date: "2016-05-15",
              title: "Programar comportamientos en la pantalla de comunicaciones",
              finished: false,
              position: 1
            },
            {date: "2016-05-15",
              title: "Abrir incidencia por dependencia de host en el api cuando consultamos comunicaciones",
              finished: false,
              position: 1
            },
            {date: "2016-05-15",
              title: "Reparto de tareas pantalla de comunicaciones",
              finished: false,
              position: 1
            }
          ],
          tareasHistorico: [
            {
              date: "2016-05-13",
              title: "Reunión de planificación próximo sprint",
              finished: false,
              position: 1
            },
            {date: "2016-05-12",
              title: "Incidencia al consultar el número de mensajes sin leer.",
              finished: false,
              position: 1
            },
            {date: "2016-05-09",
              title: "Desarrollo front pantalla de comunicaciones",
              finished: false,
              position: 1
            }
          ]
        }
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
