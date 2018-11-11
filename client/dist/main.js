System.register(['bootstrap', 'config/entities', 'aurelia-validation'], function (_export, _context) {
  "use strict";

  var entities, validateTrigger, validationController, myConfiguration;
  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();

    aurelia.use.plugin('aurelia-config', function (configure) {
      return configure(['aurelia-form', 'aurelia-form-validation'], myConfiguration);
    });

    aurelia.use.plugin('aurelia-orm', function (builder) {
      builder.registerEntities(entities);
    });

    aurelia.use.plugin('aurelia-validation');

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }

  _export('configure', configure);

  return {
    setters: [function (_bootstrap) {}, function (_configEntities) {
      entities = _configEntities;
    }, function (_aureliaValidation) {
      validateTrigger = _aureliaValidation.validateTrigger;
      validationController = _aureliaValidation.validationController;
    }],
    execute: function () {
      myConfiguration = {
        'aurelia-form': {
          defaultElement: 'input',

          defaultBehavior: 'regular',

          defaultLabelClasses: '',

          defaultElementClasses: '',

          elements: {},

          validation: {
            controller: validationController,
            trigger: validateTrigger.change
          },

          submitButton: {
            enabled: true,
            options: ['primary'],
            label: 'Submit' },

          aliases: {
            enum: 'radio',
            int: 'input',
            integer: 'input',
            number: 'input',
            float: 'input',
            string: 'input',
            bool: 'checkbox',
            boolean: 'checkbox',
            text: 'textarea'
          }
        }
      };
    }
  };
});
//# sourceMappingURL=main.js.map
