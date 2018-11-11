import 'bootstrap';
import * as entities from 'config/entities';
import { validateTrigger, validationController } from 'aurelia-validation';

const myConfiguration = {
  'aurelia-form': {
    // The default element used, probably best left unchanged
    defaultElement: 'input',

    // The default behavior to use for forms
    defaultBehavior: 'regular',

    // The default classes for labels
    defaultLabelClasses: '',

    // The default classes for input elements
    defaultElementClasses: '',

    // Register your (custom) elements here
    elements: {},

    // Configured by aurelia-form-validation
    validation: {
      controller: validationController,
      trigger: validateTrigger.change
    },

    // Submit button configuration for <aurelia-form /> and <entity-form />
    submitButton: {
      enabled: true,        // Show the button
      options: ['primary'], // Options to pass to the button
      label: 'Submit'     // Default (fallback) label of the button
    },

    // Alias these entity types to elements (used by aurelia-orm)
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

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia
    .use.plugin('aurelia-config', configure => {
      return configure([
        'aurelia-form',
        'aurelia-form-validation'
      ], myConfiguration);
    });

  aurelia
    .use.plugin('aurelia-orm', builder => {
      builder.registerEntities(entities);
    });

  aurelia
    .use.plugin('aurelia-validation');

  aurelia.start().then(() => aurelia.setRoot());
}
