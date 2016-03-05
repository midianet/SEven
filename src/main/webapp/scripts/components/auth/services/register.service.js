'use strict';

angular.module('sevenApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


