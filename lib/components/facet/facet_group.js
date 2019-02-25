'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFacetGroup = exports.LAYOUTS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _flex = require('../flex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var layoutToClassNameMap = {
  vertical: 'euiFacetGroup--vertical',
  horizontal: 'euiFacetGroup--horizontal'
};

var LAYOUTS = exports.LAYOUTS = Object.keys(layoutToClassNameMap);

var EuiFacetGroup = function EuiFacetGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      layout = _ref.layout,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'layout']);

  var classes = (0, _classnames2.default)('euiFacetGroup', layoutToClassNameMap[layout], className);
  var direction = layout === 'vertical' ? 'column' : 'row';
  var wrap = layout === 'vertical' ? false : true;

  return _react2.default.createElement(
    _flex.EuiFlexGroup,
    _extends({
      className: classes,
      direction: direction,
      wrap: wrap,
      gutterSize: 'none'
    }, rest),
    children
  );
};

exports.EuiFacetGroup = EuiFacetGroup;
EuiFacetGroup.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  layout: _propTypes2.default.oneOf(LAYOUTS)
};

EuiFacetGroup.defaultProps = {
  layout: 'vertical'
};
EuiFacetGroup.__docgenInfo = [{
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
    'layout': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"vertical"',
          'computed': false
        }, {
          'value': '"horizontal"',
          'computed': false
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'vertical\'',
        'computed': false
      }
    }
  }
}];