'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSwitch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _make_id = require('../../form/form_row/make_id');

var _make_id2 = _interopRequireDefault(_make_id);

var _icon = require('../../icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EuiSwitch = exports.EuiSwitch = function (_Component) {
  _inherits(EuiSwitch, _Component);

  function EuiSwitch(props) {
    _classCallCheck(this, EuiSwitch);

    var _this = _possibleConstructorReturn(this, (EuiSwitch.__proto__ || Object.getPrototypeOf(EuiSwitch)).call(this, props));

    _this.state = {
      switchId: props.id || (0, _make_id2.default)()
    };
    return _this;
  }

  _createClass(EuiSwitch, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          id = _props.id,
          name = _props.name,
          checked = _props.checked,
          disabled = _props.disabled,
          compressed = _props.compressed,
          onChange = _props.onChange,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ['label', 'id', 'name', 'checked', 'disabled', 'compressed', 'onChange', 'className']);

      var switchId = this.state.switchId;


      var classes = (0, _classnames2.default)('euiSwitch', {
        'euiSwitch--compressed': compressed
      }, className);

      return _react2.default.createElement(
        'div',
        { className: classes },
        _react2.default.createElement('input', _extends({
          className: 'euiSwitch__input',
          name: name,
          id: switchId,
          type: 'checkbox',
          checked: checked,
          disabled: disabled,
          onChange: onChange
        }, rest)),
        _react2.default.createElement(
          'span',
          { className: 'euiSwitch__body' },
          _react2.default.createElement('span', { className: 'euiSwitch__thumb' }),
          _react2.default.createElement(
            'span',
            { className: 'euiSwitch__track' },
            _react2.default.createElement(_icon.EuiIcon, {
              type: 'cross',
              size: 'm',
              className: 'euiSwitch__icon'
            }),
            _react2.default.createElement(_icon.EuiIcon, {
              type: 'check',
              size: 'm',
              className: 'euiSwitch__icon euiSwitch__icon--checked'
            })
          )
        ),
        label && _react2.default.createElement(
          'label',
          {
            className: 'euiSwitch__label',
            htmlFor: id
          },
          label
        )
      );
    }
  }]);

  return EuiSwitch;
}(_react.Component);

EuiSwitch.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string,
  label: _propTypes2.default.node,
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  disabled: _propTypes2.default.bool,
  compressed: _propTypes2.default.bool
};
EuiSwitch.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiSwitch',
  'methods': [],
  'props': {
    'name': {
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
      'required': false,
      'description': ''
    },
    'label': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': ''
    },
    'checked': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': ''
    },
    'onChange': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    },
    'disabled': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': ''
    },
    'compressed': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': ''
    }
  }
}];