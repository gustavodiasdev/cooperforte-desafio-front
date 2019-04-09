'use strict';

angular.module('cooperforteApp.pessoa', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/pessoa', {
            templateUrl: 'pessoa/pessoa.tpl.html',
            controller: 'PessoaController'
        });
    }])

    .controller('PessoaController', PessoaController);

    PessoaController.$inject = ['$http'];

    function PessoaController($http) {

    var vm = this;
    vm.pessoa = {};

    vm.cadastrarPessoa = cadastrarPessoa;

    function cadastrarPessoa() {
        $http({
            method: 'POST',
            url: 'http://localhost:8081/cooperforte/api/pessoas',
            data : vm.pessoa,
            cache: false,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers':'Content-Type',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Origin':'*'
            }
        }).then(function(response) {
            callback(response);''
        }, function(response) {
            if (errorback) {
                errorback(response);
            }
        });
    }





};