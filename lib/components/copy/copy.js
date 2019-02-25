'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCopy = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _services = require('../../services');

var _tool_tip = require('../tool_tip');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EuiCopy = exports.EuiCopy = function (_React$Component) {
  _inherits(EuiCopy, _React$Component);

  function EuiCopy(props) {
    _classCallCheck(this, EuiCopy);

    var _this = _possibleConstructorReturn(this, (EuiCopy.__proto__ || Object.getPrototypeOf(EuiCopy)).call(this, props));

    _this.copy = function () {
      var isCopied = (0, _services.copyToClipboard)(_this.props.textToCopy);
      if (isCopied) {
        _this.setState({
          tooltipText: _this.props.afterMessage
        });
      }
    };

    _this.resetTooltipText = function () {
      _this.setState({
        tooltipText: _this.props.beforeMessage
      });
    };

    _this.state = {
      tooltipText: _this.props.beforeMessage
    };
    return _this;
  }

  _createClass(EuiCopy, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          textToCopy = _props.textToCopy,
          beforeMessage = _props.beforeMessage,
          afterMessage = _props.afterMessage,
          rest = _objectWithoutProperties(_props, ['children', 'textToCopy', 'beforeMessage', 'afterMessage']);

      return _react2.default.createElement(
        _tool_tip.EuiToolTip,
        _extends({
          content: this.state.tooltipText,
          onMouseOut: this.resetTooltipText
        }, rest),
        children(this.copy)
      );
    }
  }]);

  return EuiCopy;
}(_react2.default.Component);

EuiCopy.propTypes = {

  /**
   * Text that will be copied to clipboard when copy function is executed.
   */
  textToCopy: _propTypes2.default.string.isRequired,

  /**
   * Tooltip message displayed before copy function is called.
   */
  beforeMessage: _propTypes2.default.string,

  /**
   * Tooltip message displayed after copy function is called that lets the user know that
   * 'textToCopy' has been copied to the clipboard.
   */
  afterMessage: _propTypes2.default.string.isRequired,

  /**
   * Function that must return a Component. First argument is 'copy' function.
   * Use your own logic to create the component that user's interactact with when triggering copy.
   */
  children: _propTypes2.default.func.isRequired
};

EuiCopy.defaultProps = {
  afterMessage: 'Copied'
};
EuiCopy.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiCopy',
  'methods': [{
    'name': 'copy',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'resetTooltipText',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }],
  'props': {
    'textToCopy': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Text that will be copied to clipboard when copy function is executed.'
    },
    'beforeMessage': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Tooltip message displayed before copy function is called.'
    },
    'afterMessage': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Tooltip message displayed after copy function is called that lets the user know that\n\'textToCopy\' has been copied to the clipboard.',
      'defaultValue': {
        'value': '\'Copied\'',
        'computed': false
      }
    },
    'children': {
      'type': {
        'name': 'func'
      },
      'required': true,
      'description': 'Function that must return a Component. First argument is \'copy\' function.\nUse your own logic to create the component that user\'s interactact with when triggering copy.'
    }
  }
}];