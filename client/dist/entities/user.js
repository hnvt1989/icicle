System.register(['aurelia-orm', 'aurelia-validation', 'aurelia-form'], function (_export, _context) {
  "use strict";

  var Entity, validatedResource, association, type, ensure, inputType, label, placeholder, position, required, validationMessages, ValidationRules, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, UserEntity;

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
      _export('UserEntity', UserEntity = (_dec = type('input'), _dec2 = required(), _dec3 = label('First Name'), _dec4 = placeholder('Enter your first name'), _dec5 = position(1), _dec6 = type('input'), _dec7 = required(), _dec8 = label('Last Name'), _dec9 = placeholder('Enter your last name'), _dec10 = position(2), _dec11 = type('input'), _dec12 = required(), _dec13 = label('Email'), _dec14 = placeholder('Enter your email address'), _dec15 = position(3), _dec16 = inputType('email'), _dec17 = type('input'), _dec18 = required(), _dec19 = label('Password'), _dec20 = placeholder('Enter your password'), _dec21 = position(4), _dec22 = inputType('password'), (_class = function (_Entity) {
        _inherits(UserEntity, _Entity);

        function UserEntity() {
          _classCallCheck(this, UserEntity);

          var _this = _possibleConstructorReturn(this, _Entity.call(this));

          _initDefineProp(_this, 'firstName', _descriptor, _this);

          _initDefineProp(_this, 'lastName', _descriptor2, _this);

          _initDefineProp(_this, 'email', _descriptor3, _this);

          _initDefineProp(_this, 'password', _descriptor4, _this);

          validationMessages['invalidEmail'] = 'Please enter a valid email';

          ValidationRules.ensure('email').matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).withMessageKey('invalidEmail').minLength(8).maxLength(20).on(_this);
          return _this;
        }

        return UserEntity;
      }(Entity), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'firstName', [_dec, _dec2, _dec3, _dec4, _dec5], {
        enumerable: true,
        initializer: function initializer() {
          return 'test';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'lastName', [_dec6, _dec7, _dec8, _dec9, _dec10], {
        enumerable: true,
        initializer: function initializer() {
          return 'user';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'email', [_dec11, _dec12, _dec13, _dec14, _dec15, _dec16], {
        enumerable: true,
        initializer: function initializer() {
          return 'test.user' + Date.now() + '@test.com';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'password', [_dec17, _dec18, _dec19, _dec20, _dec21, _dec22], {
        enumerable: true,
        initializer: function initializer() {
          return 'test1234';
        }
      })), _class)));

      _export('UserEntity', UserEntity);
    }
  };
});
//# sourceMappingURL=user.js.map
