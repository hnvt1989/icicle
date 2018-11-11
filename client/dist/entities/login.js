System.register(['aurelia-orm', 'aurelia-validation', 'aurelia-form'], function (_export, _context) {
  "use strict";

  var Entity, validatedResource, association, type, ensure, inputType, label, placeholder, position, required, validationMessages, ValidationRules, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _desc, _value, _class, _descriptor, _descriptor2, LoginEntity;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaOrm) {
      Entity = _aureliaOrm.Entity;
      validatedResource = _aureliaOrm.validatedResource;
      association = _aureliaOrm.association;
      type = _aureliaOrm.type;
    }, function (_aureliaValidation) {
      ensure = _aureliaValidation.ensure;
      validationMessages = _aureliaValidation.validationMessages;
      ValidationRules = _aureliaValidation.ValidationRules;
    }, function (_aureliaForm) {
      inputType = _aureliaForm.inputType;
      label = _aureliaForm.label;
      placeholder = _aureliaForm.placeholder;
      position = _aureliaForm.position;
      required = _aureliaForm.required;
    }],
    execute: function () {
      _export('LoginEntity', LoginEntity = (_dec = type('input'), _dec2 = required(), _dec3 = label('Email'), _dec4 = placeholder('Enter your login email'), _dec5 = position(1), _dec6 = inputType('email'), _dec7 = type('input'), _dec8 = required(), _dec9 = label('Password'), _dec10 = placeholder('Enter your login password'), _dec11 = position(4), _dec12 = inputType('password'), (_class = function (_Entity) {
        _inherits(LoginEntity, _Entity);

        function LoginEntity() {
          _classCallCheck(this, LoginEntity);

          var _this = _possibleConstructorReturn(this, _Entity.call(this));

          _initDefineProp(_this, 'email', _descriptor, _this);

          _initDefineProp(_this, 'password', _descriptor2, _this);

          validationMessages['invalidEmail'] = 'Please enter a valid email';

          ValidationRules.ensure('email').matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).withMessageKey('invalidEmail').minLength(8).maxLength(20).on(_this);
          return _this;
        }

        return LoginEntity;
      }(Entity), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'email', [_dec, _dec2, _dec3, _dec4, _dec5, _dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 'joe@test.com';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'password', [_dec7, _dec8, _dec9, _dec10, _dec11, _dec12], {
        enumerable: true,
        initializer: function initializer() {
          return 'test1234';
        }
      })), _class)));

      _export('LoginEntity', LoginEntity);
    }
  };
});
//# sourceMappingURL=login.js.map
