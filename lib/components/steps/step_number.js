'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStepNumber = exports.STATUS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var statusToClassNameMap = {
  complete: 'euiStepNumber--complete',
  incomplete: 'euiStepNumber--incomplete',
  warning: 'euiStepNumber--warning',
  danger: 'euiStepNumber--danger',
  disabled: 'euiStepNumber--disabled'
};

var STATUS = exports.STATUS = Object.keys(statusToClassNameMap);

var EuiStepNumber = function EuiStepNumber(_ref) {
  var className = _ref.className,
      status = _ref.status,
      number = _ref.number,
      isHollow = _ref.isHollow,
      rest = _objectWithoutProperties(_ref, ['className', 'status', 'number', 'isHollow']);

  var classes = (0, _classnames2.default)('euiStepNumber', statusToClassNameMap[status], {
    'euiStepNumber-isHollow': isHollow
  }, className);

  var numberOrIcon = void 0;
  if (status === 'complete') {
    numberOrIcon = _react2.default.createElement(_icon.EuiIcon, { type: 'check', className: 'euiStepNumber__icon', title: 'complete' });
  } else if (status === 'warning') {
    numberOrIcon = _react2.default.createElement(_icon.EuiIcon, { type: 'alert', className: 'euiStepNumber__icon', title: 'has warnings' });
  } else if (status === 'danger') {
    numberOrIcon = _react2.default.createElement(_icon.EuiIcon, { type: 'cross', className: 'euiStepNumber__icon', title: 'has errors' });
  } else if (!isHollow) {
    numberOrIcon = number;
  }

  return _react2.default.createElement(
    'div',
    _extends({
      className: classes
    }, rest),
    numberOrIcon
  );
};

exports.EuiStepNumber = EuiStepNumber;
EuiStepNumber.propTypes = {
  children: _propTypes2.default.node,
  /**
   * May replace the number provided in props.number with alternate styling
   */
  status: _propTypes2.default.oneOf(STATUS),
  number: _propTypes2.default.number,
  /**
   * Uses a border and removes the step number
   */
  isHollow: _propTypes2.default.bool
};
EuiStepNumber.__docgenInfo = [{
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
    'status': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"complete"',
          'computed': false
        }, {
          'value': '"incomplete"',
          'computed': false
        }, {
          'value': '"warning"',
          'computed': false
        }, {
          'value': '"danger"',
          'computed': false
        }, {
          'value': '"disabled"',
          'computed': false
        }]
      },
      'required': false,
      'description': 'May replace the number provided in props.number with alternate styling'
    },
    'number': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': ''
    },
    'isHollow': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Uses a border and removes the step number'
    }
  }
}];