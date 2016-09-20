angular.module("app")
    .service("mainSvc", function($http, $q) {
        var og150 = [];

        this.getAllPokemon = function() {
            var dfd = $q.defer();
            $http({
              method: 'GET',
              url: "http://pokeapi.co/api/v2/pokedex/1/"
            }).then(function(response) {
                for (var i = 0; i < 150; i++) {
                    og150.push(response.data.pokemon_entries[i].pokemon_species);
                }
                dfd.resolve(og150);
            });
            return dfd.promise;
        };

        this.getPokemon = function(name) {
            return $http({
              method: 'GET',
              url: "http://pokeapi.co/api/v2/pokemon/" + name
            })
        };

});
