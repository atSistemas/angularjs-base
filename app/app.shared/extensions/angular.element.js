'use strict';

module.exports = function(){

    if ( angular.element.fn && angular.element.fn.jquery )
        return;

    var element = angular.element;

    angular.element = function( select ) {
        var result;

        if ( typeof select === 'string' && ! /^</.test( select.trim() ) )
            select = document.querySelector( select );

        result = element( select );

        result.find = function( find ) {
            if ( result.length )
                return element( result[0].querySelectorAll( find ) );
            return result;
        };

        return result;
    };

};