'use strict';

angular.module('cooperforteApp.pessoa', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pessoa', {
            templateUrl: 'pessoa/pessoa.tpl.html',
            controller: 'PessoaController'
        });
    }])

    .controller('PessoaController', [function($http) {

        var vm = this;

        vm.cadastrarPessoa = cadastrarPessoa;

        function cadastrarPessoa() {

            $http({
                method: 'POST',
                url: 'http://localhost:8081/cooperforte/api/pessoas',
                data : vm.pessoaForm,
                cache: false,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function(response) {

                callback(response);
            }, function(response) {

                if (errorback) {
                    errorback(response);
                }
            });

        }





    }]);