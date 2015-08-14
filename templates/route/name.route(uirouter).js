'use strict';

angular.module('<%= scriptAppName %>')
    .config(function($stateProvider) {
        $stateProvider
            .state('<%= name %>', {
                url: '<%= route %>',
                templateUrl: '<%= htmlUrl %>',
                controller: '<%= controllerName %>',
                controllerAs: 'vm',
                title: '<%= classedName %>',
                //resolve: <%= controllerName %>.resolve
            });
    });
