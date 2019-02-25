'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStep = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _accessibility = require('../accessibility');

var _title = require('../title');

var _step_number = require('./step_number');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EuiStep = function EuiStep(_ref) {
  var className = _ref.className,
      children = _ref.children,
      headingElement = _ref.headingElement,
      step = _ref.step,
      title = _ref.title,
      status = _ref.status,
      rest = _objectWithoutProperties(_ref, ['className', 'children', 'headingElement', 'step', 'title', 'status']);

  var classes = (0, _classnames2.default)('euiStep', className);

  var screenReaderPrefix = void 0;
  if (status === 'incomplete') {
    screenReaderPrefix = 'Incomplete';
  }

  return _react2.default.createElement(
    'div',
    _extends({
      className: classes
    }, rest),
    _react2.default.createElement(
      _accessibility.EuiScreenReaderOnly,
      null,
      _react2.default.createElement(
        'span',
        null,
        screenReaderPrefix,
        ' Step '
      )
    ),
    _react2.default.createElement(_step_number.EuiStepNumber, { className: 'euiStep__circle', number: step, status: status, isHollow: status === 'incomplete' }),
    _react2.default.createElement(
      _title.EuiTitle,
      { size: 's', className: 'euiStep__title' },
      _react2.default.createElement(headingElement, null, title)
    ),
    _react2.default.createElement(
      'div',
      { className: 'euiStep__content' },
      children
    )
  );
};

exports.EuiStep = EuiStep;
EuiStep.propTypes = {
  children: _propTypes2.default.node.isRequired,
  /**
   * Will replace the number provided in props.step with alternate styling.
   * Options: `complete`, `incomplete`, `warning`, `danger`, `disabled`
   */
  status: _propTypes2.default.oneOf(_step_number.STATUS),
  /**
   * The number of the step in the list of steps
   */
  step: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.string.isRequired,
  /**
   * The HTML tag used for the title
   */
  headingElement: _propTypes2.default.string.isRequired
};

EuiStep.defaultProps = {
  headingElement: 'p'
};
EuiStep.__docgenInfo = [{
  'description': '',
  'methods': [],
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    },
    'status': {
      'type': {
        'name': 'enum',
        'computed': true,
        'value': 'STATUS'
      },
      'required': false,
      'description': 'Will replace the number provided in props.step with alternate styling.\nOptions: `complete`, `incomplete`, `warning`, `danger`, `disabled`'
    },
    'step': {
      'type': {
        'name': 'number'
      },
      'required': true,
      'description': 'The number of the step in the list of steps'
    },
    'title': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': ''
    },
    'headingElement': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'The HTML tag used for the title',
      'defaultValue': {
        'value': '\'p\'',
        'computed': false
      }
    }
  }
}];