'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTabs = exports.SIZES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var sizeToClassNameMap = {
  s: 'euiTabs--small',
  m: null
};

var SIZES = exports.SIZES = Object.keys(sizeToClassNameMap);

var EuiTabs = function EuiTabs(_ref) {
  var size = _ref.size,
      expand = _ref.expand,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['size', 'expand', 'children', 'className']);

  var classes = (0, _classnames2.default)('euiTabs', sizeToClassNameMap[size], {
    'euiTabs--expand': expand
  }, className);

  return _react2.default.createElement(
    'div',
    _extends({
      role: 'tablist',
      className: classes
    }, rest),
    children
  );
};

exports.EuiTabs = EuiTabs;
EuiTabs.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(SIZES),
  /**
   * Evenly stretches each tab to fill the
   * horizontal space
   */
  expand: _propTypes2.default.bool
};

EuiTabs.defaultProps = {
  size: 'm',
  expand: false
};
EuiTabs.__docgenInfo = [{
  'description': '',
  'methods': [],
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': ''
    },
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
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
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'m\'',
        'computed': false
      }
    },
    'expand': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Evenly stretches each tab to fill the\nhorizontal space',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    }
  }
}];