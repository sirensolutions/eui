'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiWrappingPopover = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popover = require('./popover');

var _portal = require('../portal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Injects the EuiPopover next to the button via EuiPortal
 * then the button element is moved into the popover dom.
 * On unmount, the button is moved back to its original location.
 */
var EuiWrappingPopover = exports.EuiWrappingPopover = function (_Component) {
  _inherits(EuiWrappingPopover, _Component);

  function EuiWrappingPopover() {
    var _ref;

    _classCallCheck(this, EuiWrappingPopover);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = EuiWrappingPopover.__proto__ || Object.getPrototypeOf(EuiWrappingPopover)).call.apply(_ref, [this].concat(args)));

    _this.setPortalRef = function (node) {
      _this.portal = node;
    };

    _this.portal = null;
    _this.contentParent = _this.props.button.parentNode;
    return _this;
  }

  _createClass(EuiWrappingPopover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var thisDomNode = (0, _reactDom.findDOMNode)(this);
      var placeholderAnchor = thisDomNode.querySelector('.euiWrappingPopover__anchor');

      placeholderAnchor.insertAdjacentElement('beforebegin', this.props.button);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.button.parentNode) {
        this.portal.insertAdjacentElement('beforebegin', this.props.button);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          button = _props.button,
          rest = _objectWithoutProperties(_props, ['button']);

      return _react2.default.createElement(
        _portal.EuiPortal,
        {
          portalRef: this.setPortalRef,
          insert: { sibling: this.props.button, position: 'after' }
        },
        _react2.default.createElement(_popover.EuiPopover, _extends({}, rest, {
          button: _react2.default.createElement('div', { className: 'euiWrappingPopover__anchor' })
        }))
      );
    }
  }]);

  return EuiWrappingPopover;
}(_react.Component);

EuiWrappingPopover.propTypes = {
  button: _propTypes2.default.instanceOf(HTMLElement)
};
EuiWrappingPopover.__docgenInfo = [{
  'description': 'Injects the EuiPopover next to the button via EuiPortal\nthen the button element is moved into the popover dom.\nOn unmount, the button is moved back to its original location.',
  'displayName': 'EuiWrappingPopover',
  'methods': [{
    'name': 'setPortalRef',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'node',
      'type': null
    }],
    'returns': null
  }],
  'props': {
    'button': {
      'type': {
        'name': 'instanceOf',
        'value': 'HTMLElement'
      },
      'required': false,
      'description': ''
    }
  }
}];