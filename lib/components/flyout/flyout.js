'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFlyout = exports.SIZES = undefined;

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

var _overlay_mask = require('../overlay_mask');

var _button = require('../button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizeToClassNameMap = {
  s: 'euiFlyout--small',
  m: 'euiFlyout--medium',
  l: 'euiFlyout--large'
};

var SIZES = exports.SIZES = Object.keys(sizeToClassNameMap);

var EuiFlyout = exports.EuiFlyout = function (_Component) {
  _inherits(EuiFlyout, _Component);

  function EuiFlyout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, EuiFlyout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = EuiFlyout.__proto__ || Object.getPrototypeOf(EuiFlyout)).call.apply(_ref, [this].concat(args))), _this), _this.onKeyDown = function (event) {
      if (event.keyCode === _services.keyCodes.ESCAPE) {
        event.preventDefault();
        _this.props.onClose();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(EuiFlyout, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          children = _props.children,
          hideCloseButton = _props.hideCloseButton,
          onClose = _props.onClose,
          ownFocus = _props.ownFocus,
          size = _props.size,
          closeButtonAriaLabel = _props.closeButtonAriaLabel,
          maxWidth = _props.maxWidth,
          style = _props.style,
          rest = _objectWithoutProperties(_props, ['className', 'children', 'hideCloseButton', 'onClose', 'ownFocus', 'size', 'closeButtonAriaLabel', 'maxWidth', 'style']);

      var newStyle = void 0;
      var widthClassName = void 0;
      if (maxWidth === true) {
        widthClassName = 'euiFlyout--maxWidth-default';
      } else if (maxWidth !== false) {
        var value = typeof maxWidth === 'number' ? maxWidth + 'px' : maxWidth;
        newStyle = _extends({}, style, { maxWidth: value });
      }

      var classes = (0, _classnames2.default)('euiFlyout', sizeToClassNameMap[size], widthClassName, className);

      var closeButton = void 0;
      if (onClose && !hideCloseButton) {
        closeButton = _react2.default.createElement(_button.EuiButtonIcon, {
          className: 'euiFlyout__closeButton',
          iconType: 'cross',
          color: 'text',
          'aria-label': closeButtonAriaLabel,
          onClick: onClose,
          'data-test-subj': 'euiFlyoutCloseButton'
        });
      }

      var flyoutContent = _react2.default.createElement(
        'div',
        _extends({
          role: 'dialog',
          ref: function ref(node) {
            _this2.flyout = node;
          },
          className: classes,
          tabIndex: 0,
          style: newStyle || style
        }, rest),
        closeButton,
        children
      );

      // If ownFocus is set, show an overlay behind the flyout and allow the user
      // to click it to close it.
      var optionalOverlay = void 0;
      if (ownFocus) {
        optionalOverlay = _react2.default.createElement(_overlay_mask.EuiOverlayMask, { onClick: onClose });
      }

      return _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_services.EuiWindowEvent, { event: 'keydown', handler: this.onKeyDown }),
        optionalOverlay,
        _react2.default.createElement(
          _focusTrapReact2.default,
          {
            focusTrapOptions: {
              fallbackFocus: function fallbackFocus() {
                return _this2.flyout;
              },
              clickOutsideDeactivates: true
            }
          },
          flyoutContent
        )
      );
    }
  }]);

  return EuiFlyout;
}(_react.Component);

EuiFlyout.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  onClose: _propTypes2.default.func.isRequired,
  size: _propTypes2.default.oneOf(SIZES),
  /**
   * Hides the default close button. You must provide another close button somewhere within the flyout.
   */
  hideCloseButton: _propTypes2.default.bool,
  /**
   * Locks the mouse / keyboard focus to within the flyout
   */
  ownFocus: _propTypes2.default.bool,
  /**
   * Specify an aria-label for the close button of the flyout
   */
  closeButtonAriaLabel: _propTypes2.default.string,
  /**
   * Sets the max-width of the page,
   * set to `true` to use the default size,
   * set to `false` to not restrict the width,
   * set to a number for a custom width in px,
   * set to a string for a custom width in custom measurement.
   */
  maxWidth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.number, _propTypes2.default.string])
};

EuiFlyout.defaultProps = {
  size: 'm',
  hideCloseButton: false,
  ownFocus: false,
  closeButtonAriaLabel: 'Closes this dialog',
  maxWidth: false
};
EuiFlyout.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiFlyout',
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
    'size': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"s"',
          'computed': false
        }, {
          'value': '"m"',
          'computed': false
        }, {
          'value': '"l"',
          'computed': false
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'m\'',
        'computed': false
      }
    },
    'hideCloseButton': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Hides the default close button. You must provide another close button somewhere within the flyout.',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'ownFocus': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Locks the mouse / keyboard focus to within the flyout',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'closeButtonAriaLabel': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Specify an aria-label for the close button of the flyout',
      'defaultValue': {
        'value': '\'Closes this dialog\'',
        'computed': false
      }
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
      'description': 'Sets the max-width of the page,\nset to `true` to use the default size,\nset to `false` to not restrict the width,\nset to a number for a custom width in px,\nset to a string for a custom width in custom measurement.',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    }
  }
}];