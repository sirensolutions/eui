'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _focusTrapReact = require('focus-trap-react');

var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

var _services = require('../../services');

var _button = require('../button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EuiModal = exports.EuiModal = function (_Component) {
  _inherits(EuiModal, _Component);

  function EuiModal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EuiModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EuiModal.__proto__ || Object.getPrototypeOf(EuiModal)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      if (event.keyCode === _services.keyCodes.ESCAPE) {
        event.preventDefault();
        event.stopPropagation();
        _this.props.onClose();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EuiModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          initialFocus = _props.initialFocus,
          onClose = _props.onClose,
          maxWidth = _props.maxWidth,
          style = _props.style,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'initialFocus', 'onClose', 'maxWidth', 'style']);

      var newStyle = void 0;
      var widthClassName = void 0;
      if (maxWidth === true) {
        widthClassName = 'euiModal--maxWidth-default';
      } else if (maxWidth !== false) {
        var value = typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth;
        newStyle = _extends({}, style, { maxWidth: value });
      }

      var classes = (0, _classnames2.default)('euiModal', widthClassName, className);

      return _react2.default.createElement(
        _focusTrapReact2.default,
        {
          focusTrapOptions: {
            fallbackFocus: function fallbackFocus() {
              return _this2.modal;
            },
            initialFocus: initialFocus
          }
        },
        _react2.default.createElement(
          'div',
          _extends({
            ref: function ref(node) {
              _this2.modal = node;
            },
            className: classes,
            onKeyDown: this.onKeyDown,
            tabIndex: 0,
            style: newStyle || style
          }, rest),
          _react2.default.createElement(_button.EuiButtonIcon, {
            iconType: 'cross',
            onClick: onClose,
            className: 'euiModal__closeIcon',
            color: 'text',
            'aria-label': 'Closes this modal window'
          }),
          _react2.default.createElement(
            'div',
            { className: 'euiModal__flex' },
            children
          )
        )
      );
    }
  }]);

  return EuiModal;
}(_react.Component);

EuiModal.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClose: _propTypes2.default.func.isRequired,
  /**
   * Sets the max-width of the modal.
   * Set to `true` to use the default (`euiBreakpoints 'm'`),
   * set to `false` to not restrict the width,
   * set to a number for a custom width in px,
   * set to a string for a custom width in custom measurement.
   */
  maxWidth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string]),
  /** specifies what element should initially have focus; Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node. */
  initialFocus: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(HTMLElement), _propTypes2.default.func, _propTypes2.default.string])
};

EuiModal.defaultProps = {
  maxWidth: true
};
EuiModal.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiModal',
  'methods': [{
    'name': 'onKeyDown',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'event',
      'type': null
    }],
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
    'children': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': ''
    },
    'onClose': {
      'type': {
        'name': 'func'
      },
      'required': true,
      'description': ''
    },
    'maxWidth': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'bool'
        }, {
          'name': 'number'
        }, {
          'name': 'string'
        }]
      },
      'required': false,
      'description': 'Sets the max-width of the modal.\nSet to `true` to use the default (`euiBreakpoints \'m\'`),\nset to `false` to not restrict the width,\nset to a number for a custom width in px,\nset to a string for a custom width in custom measurement.',
      'defaultValue': {
        'value': 'true',
        'computed': false
      }
    },
    'initialFocus': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'instanceOf',
          'value': 'HTMLElement'
        }, {
          'name': 'func'
        }, {
          'name': 'string'
        }]
      },
      'required': false,
      'description': 'specifies what element should initially have focus; Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node.'
    }
  }
}];