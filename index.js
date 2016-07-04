(() => {

  'use strict';

  let isUndefined = require('is-undefined'),
    isFunction = require('is-function');

  module.exports = (source, key, defaultValue, isValidCallback) => {

      if (isUndefined(source)) {

        return defaultValue;

      }

      let value = source[key];

      if (isFunction(isValidCallback)) {

        return isValidCallback(value) ? value : defaultValue;

      }

      return isUndefined(value) ? defaultValue : value;

    };

})();
