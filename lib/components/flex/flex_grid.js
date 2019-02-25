'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFlexGrid = exports.COLUMNS = exports.GUTTER_SIZES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var gutterSizeToClassNameMap = {
  none: null,
  s: 'euiFlexGrid--gutterSmall',
  m: 'euiFlexGrid--gutterMedium',
  l: 'euiFlexGrid--gutterLarge',
  xl: 'euiFlexGrid--gutterXLarge'
};

var GUTTER_SIZES = exports.GUTTER_SIZES = Object.keys(gutterSizeToClassNameMap);

var columnsToClassNameMap = {
  0: 'euiFlexGrid--wrap',
  1: 'euiFlexGrid--single',
  2: 'euiFlexGrid--halves',
  3: 'euiFlexGrid--thirds',
  4: 'euiFlexGrid--fourths'
};

var COLUMNS = exports.COLUMNS = Object.keys(columnsToClassNameMap).map(function (columns) {
  return parseInt(columns, 10);
});

var EuiFlexGrid = function EuiFlexGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gutterSize = _ref.gutterSize,
      responsive = _ref.responsive,
      columns = _ref.columns,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'gutterSize', 'responsive', 'columns']);

  var classes = (0, _classnames2.default)('euiFlexGrid', gutterSizeToClassNameMap[gutterSize], columnsToClassNameMap[columns], {
    'euiFlexGrid--responsive': responsive
  }, className);

  return _react2.default.createElement(
    'div',
    _extends({
      className: classes
    }, rest),
    children
  );
};

exports.EuiFlexGrid = EuiFlexGrid;
EuiFlexGrid.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  gutterSize: _propTypes2.default.oneOf(GUTTER_SIZES),
  /**
   * Number of columns to show in the grid. Up to 4.
   */
  columns: _propTypes2.default.oneOf(COLUMNS).isRequired,
  /**
   * Allow grid items display at block level on small screens
   */
  responsive: _propTypes2.default.bool
};

EuiFlexGrid.defaultProps = {
  gutterSize: 'l',
  columns: 0,
  responsive: true
};
EuiFlexGrid.__docgenInfo = [{
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
    'gutterSize': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"none"',
          'computed': false
        }, {
          'value': '"s"',
          'computed': false
        }, {
          'value': '"m"',
          'computed': false
        }, {
          'value': '"l"',
          'computed': false
        }, {
          'value': '"xl"',
          'computed': false
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'l\'',
        'computed': false
      }
    },
    'columns': {
      'type': {
        'name': 'enum',
        'computed': true,
        'value': 'COLUMNS'
      },
      'required': true,
      'description': 'Number of columns to show in the grid. Up to 4.',
      'defaultValue': {
        'value': '0',
        'computed': false
      }
    },
    'responsive': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Allow grid items display at block level on small screens',
      'defaultValue': {
        'value': 'true',
        'computed': false
      }
    }
  }
}];