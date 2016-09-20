angular.module("app")
    .controller("mainCtrl", function($scope, mainSvc) {

        mainSvc.getAllPokemon()
            .then(function(response) {
                console.log("response", response);
                $scope.pokemons = response;
            })

        $scope.getPokemon = function(name) {
            mainSvc.getPokemon(name)
                .then(function(response) {
                    console.log(response.data.sprites);
                    $scope.pokeCard = response.data;
                })
        }

});
