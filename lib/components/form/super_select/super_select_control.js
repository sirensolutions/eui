'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSuperSelectControl = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _accessibility = require('../../accessibility');

var _make_id = require('../form_row/make_id');

var _make_id2 = _interopRequireDefault(_make_id);

var _form_control_layout = require('../form_control_layout');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EuiSuperSelectControl = function EuiSuperSelectControl(_ref) {
  var className = _ref.className,
      options = _ref.options,
      id = _ref.id,
      name = _ref.name,
      fullWidth = _ref.fullWidth,
      isLoading = _ref.isLoading,
      defaultValue = _ref.defaultValue,
      compressed = _ref.compressed,
      value = _ref.value,
      rest = _objectWithoutProperties(_ref, ['className', 'options', 'id', 'name', 'fullWidth', 'isLoading', 'defaultValue', 'compressed', 'value']);

  var classes = (0, _classnames2.default)('euiSuperSelectControl', {
    'euiSuperSelectControl--fullWidth': fullWidth,
    'euiSuperSelectControl--compressed': compressed,
    'euiSuperSelectControl-isLoading': isLoading
  }, className);

  // React HTML input can not have both value and defaultValue properties.
  // https://reactjs.org/docs/uncontrolled-components.html#default-values
  var selectDefaultValue = void 0;
  if (!value) {
    selectDefaultValue = defaultValue || '';
  }

  var selectedValue = void 0;
  if (value) {
    var selectedOption = options.find(function (option) {
      return option.value === value;
    });
    selectedValue = selectedOption.inputDisplay;
  }

  var icon = {
    type: 'arrowDown',
    side: 'right'
  };

  var screenReaderId = (0, _make_id2.default)();

  return _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement('input', {
      type: 'hidden',
      id: id,
      name: name,
      defaultValue: selectDefaultValue,
      value: value
    }),
    _react2.default.createElement(
      _form_control_layout.EuiFormControlLayout,
      {
        icon: icon,
        fullWidth: fullWidth,
        isLoading: isLoading,
        compressed: compressed
      },
      _react2.default.createElement(
        _accessibility.EuiScreenReaderOnly,
        null,
        _react2.default.createElement(
          'span',
          { id: screenReaderId },
          'Select an option: ',
          selectedValue,
          ', is selected'
        )
      ),
      _react2.default.createElement(
        'button',
        _extends({
          role: 'option',
          type: 'button',
          className: classes,
          'aria-haspopup': 'true',
          'aria-labelledby': id + ' ' + screenReaderId
        }, rest),
        selectedValue
      )
    )
  );
};

exports.EuiSuperSelectControl = EuiSuperSelectControl;
EuiSuperSelectControl.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.node.isRequired,
    inputDisplay: _propTypes2.default.node.isRequired
  })).isRequired,
  isInvalid: _propTypes2.default.bool,
  fullWidth: _propTypes2.default.bool,
  isLoading: _propTypes2.default.bool,
  /**
   * when `true` creates a shorter height input
   */
  compressed: _propTypes2.default.bool
};

EuiSuperSelectControl.defaultProps = {
  options: [],
  fullWidth: false,
  isLoading: false,
  compressed: false
};
EuiSuperSelectControl.__docgenInfo = [{
  'description': '',
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
    'options': {
      'type': {
        'name': 'arrayOf',
        'value': {
          'name': 'shape',
          'value': {
            'value': {
              'name': 'node',
              'required': true
            },
            'inputDisplay': {
              'name': 'node',
              'required': true
            }
          }
        }
      },
      'required': true,
      'description': '',
      'defaultValue': {
        'value': '[]',
        'computed': false
      }
    },
    'isInvalid': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': ''
    },
    'fullWidth': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isLoading': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'compressed': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'when `true` creates a shorter height input',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    }
  }
}];