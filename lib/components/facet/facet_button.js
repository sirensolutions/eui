'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFacetButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _badge = require('../badge');

var _loading = require('../loading');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var EuiFacetButton = function EuiFacetButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      isDisabled = _ref.isDisabled,
      isLoading = _ref.isLoading,
      isSelected = _ref.isSelected,
      quantity = _ref.quantity,
      buttonRef = _ref.buttonRef,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'icon', 'isDisabled', 'isLoading', 'isSelected', 'quantity', 'buttonRef']);

  // If in the loading state, force disabled to true
  isDisabled = isLoading ? true : isDisabled;

  var classes = (0, _classnames2.default)('euiFacetButton', {
    'euiFacetButton--isSelected': isSelected,
    'euiFacetButton--unSelected': !isSelected
  }, className);

  // Add quanity number if provided or loading indicator
  var buttonQuantity = void 0;

  if (isLoading) {
    buttonQuantity = _react2.default.createElement(_loading.EuiLoadingSpinner, {
      className: 'euiFacetButton__spinner',
      size: 'm'
    });
  } else if (typeof quantity === 'number') {
    buttonQuantity = _react2.default.createElement(
      _badge.EuiNotificationBadge,
      {
        className: 'euiFacetButton__quantity'
      },
      quantity
    );
  }

  // Add an icon to the button if one exists.
  var buttonIcon = void 0;

  if (icon) {
    buttonIcon = _react2.default.cloneElement(icon, { className: 'euiFacetButton__icon' });
  }

  return _react2.default.createElement(
    'button',
    _extends({
      disabled: isDisabled,
      className: classes,
      type: 'button',
      ref: buttonRef
    }, rest),
    _react2.default.createElement(
      'span',
      { className: 'euiFacetButton__content' },
      buttonIcon,
      _react2.default.createElement(
        'span',
        { className: 'euiFacetButton__text' },
        children
      ),
      buttonQuantity
    )
  );
};

exports.EuiFacetButton = EuiFacetButton;
EuiFacetButton.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  icon: _propTypes2.default.node,
  isDisabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,

  /**
   * Adds/swaps for loading spinner & disables
   */
  isLoading: _propTypes2.default.bool,

  /**
   * Changes visual of button to indicate it's currently selected
   */
  isSelected: _propTypes2.default.bool,

  /**
   * Adds a notification indicator for displaying the quantity provided
   */
  quantity: _propTypes2.default.number,

  buttonRef: _propTypes2.default.func
};

EuiFacetButton.defaultProps = {
  isDisabled: false,
  isLoading: false,
  isSelected: false
};
EuiFacetButton.__docgenInfo = [{
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
    'icon': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': ''
    },
    'isDisabled': {
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
    'onClick': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    },
    'isLoading': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Adds/swaps for loading spinner & disables',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'isSelected': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Changes visual of button to indicate it\'s currently selected',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'quantity': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'Adds a notification indicator for displaying the quantity provided'
    },
    'buttonRef': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    }
  }
}];