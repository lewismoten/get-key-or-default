/* eslint-env jasmine */

(() => {

  'use strict';

  let lib = require('../'),
    defaultValue = 'source was undefined',
    notDefined;

  describe('package', () => {

    describe('source is undefined', () => {

      let result = lib(notDefined, notDefined, defaultValue);

      it('returns default value', () => {

        expect(result).toBe(defaultValue);

      });

    });

    describe('source key', () => {

      describe('does not exist', () => {

        let source = {},
          result = lib(source, notDefined, defaultValue);

        it('returns default value', () => {

          expect(result).toBe(defaultValue);

        });

      });

      describe('exists', () => {

        let source = {
          testKey: notDefined
        };

        describe('is not defined', () => {

          source.testKey = notDefined;
          let result = lib(source, 'testKey', defaultValue);

          it('is default value', () => {

            expect(result).toBe(defaultValue);

          });

        });

        describe('is defined', () => {

          let keyValue = 'defined value';
          source.testKey = keyValue;

          describe('without evaluator', () => {

            let result = lib(source, 'testKey', defaultValue);

            it('is keys value', () => {

              expect(result).toBe(keyValue);

            });

          });

          describe('is valid', () => {

            let isValid = jasmine.createSpy('isValid').andReturn(true),
              result = lib(source, 'testKey', defaultValue, isValid);

            it('is keys value', () => {

              expect(result).toBe(keyValue);
              expect(isValid).toHaveBeenCalledWith(keyValue);

            });

          });

          describe('is not valid', () => {

            let isValid = jasmine.createSpy('isValid').andReturn(false),
              result = lib(source, 'testKey', defaultValue, isValid);

            it('is default value', () => {

              expect(result).toBe(defaultValue);
              expect(isValid).toHaveBeenCalledWith(keyValue);

            });

          });

        });

      });

    });

  });

})();
