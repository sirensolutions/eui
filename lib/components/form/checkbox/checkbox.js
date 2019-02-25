'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCheckbox = exports.TYPES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var typeToClassNameMap = {
  inList: 'euiCheckbox--inList'
};

var TYPES = exports.TYPES = Object.keys(typeToClassNameMap);

var EuiCheckbox = exports.EuiCheckbox = function (_Component) {
  _inherits(EuiCheckbox, _Component);

  function EuiCheckbox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EuiCheckbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EuiCheckbox.__proto__ || Object.getPrototypeOf(EuiCheckbox)).call.apply(_ref, [this].concat(args))), _this), _this.setInputRef = function (input) {
      _this.inputRef = input;

      if (_this.props.inputRef) {
        _this.props.inputRef(input);
      }

      _this.invalidateIndeterminate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EuiCheckbox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.invalidateIndeterminate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.invalidateIndeterminate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          id = _props.id,
          checked = _props.checked,
          label = _props.label,
          onChange = _props.onChange,
          type = _props.type,
          disabled = _props.disabled,
          compressed = _props.compressed,
          rest = _objectWithoutProperties(_props, ['className', 'id', 'checked', 'label', 'onChange', 'type', 'disabled', 'compressed']);

      var inputProps = (0, _lodash.omit)(rest, 'indeterminate');

      var classes = (0, _classnames2.default)('euiCheckbox', typeToClassNameMap[type], {
        'euiCheckbox--noLabel': !label,
        'euiCheckbox--compressed': compressed
      }, className);

      var optionalLabel = void 0;

      if (label) {
        optionalLabel = _react2.default.createElement(
          'label',
          {
            className: 'euiCheckbox__label',
            htmlFor: id
          },
          label
        );
      }

      return _react2.default.createElement(
        'div',
        {
          className: classes
        },
        _react2.default.createElement('input', _extends({
          className: 'euiCheckbox__input',
          type: 'checkbox',
          id: id,
          checked: checked,
          onChange: onChange,
          disabled: disabled,
          ref: this.setInputRef
        }, inputProps)),
        _react2.default.createElement('div', { className: 'euiCheckbox__square' }),
        optionalLabel
      );
    }
  }, {
    key: 'invalidateIndeterminate',
    value: function invalidateIndeterminate() {
      if (this.inputRef) {
        this.inputRef.indeterminate = this.props.indeterminate;
      }
    }
  }]);

  return EuiCheckbox;
}(_react.Component);

EuiCheckbox.propTypes = {
  className: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  checked: _propTypes2.default.bool.isRequired,
  label: _propTypes2.default.node,
  onChange: _propTypes2.default.func.isRequired,
  type: _propTypes2.default.oneOf(TYPES),
  disabled: _propTypes2.default.bool,
  indeterminate: _propTypes2.default.bool,
  /**
   * when `true` creates a shorter height checkbox row
   */
  compressed: _propTypes2.default.bool
};

EuiCheckbox.defaultProps = {
  checked: false,
  disabled: false,
  indeterminate: false,
  compressed: false
};
EuiCheckbox.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiCheckbox',
  'methods': [{
    'name': 'setInputRef',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'input',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'invalidateIndeterminate',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }],
  'props': {
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'id': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': ''
    },
    'checked': {
      'type': {
        'name': 'bool'
      },
      'required': true,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'label': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': ''
    },
    'onChange': {
      'type': {
        'name': 'func'
      },
      'required': true,
      'description': ''
    },
    'type': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"inList"',
          'computed': false
        }]
      },
      'required': false,
      'description': ''
    },
    'disabled': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'indeterminate': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'compressed': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'when `true` creates a shorter height checkbox row',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    }
  }
}];