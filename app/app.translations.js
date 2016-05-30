'use strict';

module.exports = function($translateProvider) {

  $translateProvider.useStaticFilesLoader({
    prefix: './app.assets/lang/',suffix: '.json'
  });

  $translateProvider.useSanitizeValueStrategy('escaped');
  $translateProvider.preferredLanguage('es-ES');

};
