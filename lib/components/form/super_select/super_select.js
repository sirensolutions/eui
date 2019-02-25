'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSuperSelect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _accessibility = require('../../accessibility');

var _super_select_control = require('./super_select_control');

var _popover = require('../../popover');

var _context_menu = require('../../context_menu');

var _services = require('../../../services');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SHIFT_BACK = 'back';
var SHIFT_FORWARD = 'forward';

var EuiSuperSelect = exports.EuiSuperSelect = function (_Component) {
  _inherits(EuiSuperSelect, _Component);

  function EuiSuperSelect(props) {
    _classCallCheck(this, EuiSuperSelect);

    var _this = _possibleConstructorReturn(this, (EuiSuperSelect.__proto__ || Object.getPrototypeOf(EuiSuperSelect)).call(this, props));

    _this.setItemNode = function (node, index) {
      _this.itemNodes[index] = node;
    };

    _this.setPopoverRef = function (ref) {
      _this.popoverRef = ref;
    };

    _this.openPopover = function () {
      _this.setState({
        isPopoverOpen: true
      });

      var focusSelected = function focusSelected() {
        var indexOfSelected = _this.props.options.reduce(function (indexOfSelected, option, index) {
          if (indexOfSelected != null) return indexOfSelected;
          if (option == null) return null;
          return option.value === _this.props.valueOfSelected ? index : null;
        }, null);

        // valueOfSelected is optional, and options may not exist yet
        if (indexOfSelected != null) {
          // wait for the CSS classes to be applied, removing visibility: hidden
          requestAnimationFrame(function () {
            _this.focusItemAt(indexOfSelected);

            _this.setState({
              menuWidth: _this.popoverRef.getBoundingClientRect().width - 2 // account for border not inner shadow
            });
          });
        } else {
          requestAnimationFrame(focusSelected);
        }
      };

      requestAnimationFrame(focusSelected);
    };

    _this.closePopover = function () {
      _this.setState({
        isPopoverOpen: false
      });
    };

    _this.itemClicked = function (value) {
      _this.setState({
        isPopoverOpen: false
      });
      _this.props.onChange(value);
    };

    _this.onSelectKeyDown = function (e) {
      if (e.keyCode === _services.keyCodes.UP || e.keyCode === _services.keyCodes.DOWN) {
        e.preventDefault();
        e.stopPropagation();
        _this.openPopover();
      }
    };

    _this.onItemKeyDown = function (e) {
      switch (e.keyCode) {
        case _services.keyCodes.ESCAPE:
          // close the popover and prevent ancestors from handling
          e.preventDefault();
          e.stopPropagation();
          _this.closePopover();
          break;

        case _services.keyCodes.TAB:
          // no-op
          e.preventDefault();
          e.stopPropagation();
          break;

        case _services.keyCodes.UP:
          e.preventDefault();
          e.stopPropagation();
          _this.shiftFocus(SHIFT_BACK);
          break;

        case _services.keyCodes.DOWN:
          e.preventDefault();
          e.stopPropagation();
          _this.shiftFocus(SHIFT_FORWARD);
          break;
      }
    };

    _this.itemNodes = [];
    _this.state = {
      isPopoverOpen: props.isOpen || false,
      menuWidth: null
    };
    return _this;
  }

  _createClass(EuiSuperSelect, [{
    key: 'focusItemAt',
    value: function focusItemAt(index) {
      var targetElement = this.itemNodes[index];
      if (targetElement != null) {
        targetElement.focus();
      }
    }
  }, {
    key: 'shiftFocus',
    value: function shiftFocus(direction) {
      var currentIndex = this.itemNodes.indexOf(document.activeElement);
      var targetElementIndex = void 0;

      if (currentIndex === -1) {
        // somehow the select options has lost focus
        targetElementIndex = 0;
      } else {
        if (direction === SHIFT_BACK) {
          targetElementIndex = currentIndex === 0 ? this.itemNodes.length - 1 : currentIndex - 1;
        } else {
          targetElementIndex = currentIndex === this.itemNodes.length - 1 ? 0 : currentIndex + 1;
        }
      }

      this.focusItemAt(targetElementIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          options = _props.options,
          valueOfSelected = _props.valueOfSelected,
          onChange = _props.onChange,
          isOpen = _props.isOpen,
          hasDividers = _props.hasDividers,
          itemClassName = _props.itemClassName,
          itemLayoutAlign = _props.itemLayoutAlign,
          rest = _objectWithoutProperties(_props, ['className', 'options', 'valueOfSelected', 'onChange', 'isOpen', 'hasDividers', 'itemClassName', 'itemLayoutAlign']);

      var buttonClasses = (0, _classnames2.default)({
        'euiSuperSelect--isOpen__button': this.state.isPopoverOpen
      }, className);

      var itemClasses = (0, _classnames2.default)('euiSuperSelect__item', {
        'euiSuperSelect__item--hasDividers': hasDividers
      }, itemClassName);

      var button = _react2.default.createElement(_super_select_control.EuiSuperSelectControl, _extends({
        options: options,
        value: valueOfSelected,
        onChange: onChange,
        onClick: this.state.isPopoverOpen ? this.closePopover : this.openPopover,
        onKeyDown: this.onSelectKeyDown,
        className: buttonClasses
      }, rest));

      var items = options.map(function (option, index) {
        var value = option.value,
            dropdownDisplay = option.dropdownDisplay,
            inputDisplay = option.inputDisplay,
            optionRest = _objectWithoutProperties(option, ['value', 'dropdownDisplay', 'inputDisplay']);

        return _react2.default.createElement(
          _context_menu.EuiContextMenuItem,
          _extends({
            key: index,
            className: itemClasses,
            icon: valueOfSelected === value ? 'check' : 'empty',
            onClick: function onClick() {
              return _this2.itemClicked(value);
            },
            onKeyDown: _this2.onItemKeyDown,
            layoutAlign: itemLayoutAlign,
            buttonRef: function buttonRef(node) {
              return _this2.setItemNode(node, index);
            },
            style: { width: _this2.state.menuWidth },
            role: 'option',
            id: value
          }, optionRest),
          dropdownDisplay || inputDisplay
        );
      });

      return _react2.default.createElement(
        _popover.EuiPopover,
        {
          className: 'euiSuperSelect',
          panelClassName: 'euiSuperSelect__popoverPanel',
          button: button,
          isOpen: isOpen || this.state.isPopoverOpen,
          closePopover: this.closePopover,
          panelPaddingSize: 'none',
          anchorPosition: 'downCenter',
          ownFocus: false,
          popoverRef: this.setPopoverRef,
          hasArrow: false
        },
        _react2.default.createElement(
          _accessibility.EuiScreenReaderOnly,
          null,
          _react2.default.createElement(
            'p',
            { role: 'alert' },
            'You are in a form selector of ',
            options.length,
            ' items and must select a single option. Use the up and down keys to navigate or escape to close.'
          )
        ),
        _react2.default.createElement(
          'div',
          { role: 'listbox', 'aria-activedescendant': valueOfSelected },
          items
        )
      );
    }
  }]);

  return EuiSuperSelect;
}(_react.Component);

EuiSuperSelect.propTypes = {
  /**
   * Classes (and `...rest`) will be applied to the control
   */
  className: _propTypes2.default.string,
  /**
   * Classes for the context menu item
   */
  itemClassName: _propTypes2.default.string,
  /**
   * You must pass an `onChange` function to handle the update of the value
   */
  onChange: _propTypes2.default.func,
  /**
   * Pass an array of options that must at least include:
   * `value`: storing unique value of item,
   * `inputDisplay`: what shows inside the form input when selected
   * `dropdownDisplay` (optional): what shows for the item in the dropdown
   */
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.string.isRequired,
    inputDisplay: _propTypes2.default.node,
    dropdownDisplay: _propTypes2.default.node
  })).isRequired,
  valueOfSelected: _propTypes2.default.string,
  /**
   * Change to `true` if you want horizontal lines between options.
   * This is best used when options are multi-line.
   */
  hasDividers: _propTypes2.default.bool,
  /**
   * Change `EuiContextMenuItem` layout position of icon
   */
  itemLayoutAlign: _propTypes2.default.string
};

EuiSuperSelect.defaultProps = {
  options: []
};
EuiSuperSelect.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiSuperSelect',
  'methods': [{
    'name': 'setItemNode',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'node',
      'type': null
    }, {
      'name': 'index',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'setPopoverRef',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'ref',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'openPopover',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'closePopover',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'itemClicked',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'value',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'onSelectKeyDown',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'e',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'onItemKeyDown',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'e',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'focusItemAt',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'index',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'shiftFocus',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'direction',
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
      'description': 'Classes (and `...rest`) will be applied to the control'
    },
    'itemClassName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Classes for the context menu item'
    },
    'onChange': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': 'You must pass an `onChange` function to handle the update of the value'
    },
    'options': {
      'type': {
        'name': 'arrayOf',
        'value': {
          'name': 'shape',
          'value': {
            'value': {
              'name': 'string',
              'required': true
            },
            'inputDisplay': {
              'name': 'node',
              'required': false
            },
            'dropdownDisplay': {
              'name': 'node',
              'required': false
            }
          }
        }
      },
      'required': true,
      'description': 'Pass an array of options that must at least include:\n`value`: storing unique value of item,\n`inputDisplay`: what shows inside the form input when selected\n`dropdownDisplay` (optional): what shows for the item in the dropdown',
      'defaultValue': {
        'value': '[]',
        'computed': false
      }
    },
    'valueOfSelected': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'hasDividers': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'Change to `true` if you want horizontal lines between options.\nThis is best used when options are multi-line.'
    },
    'itemLayoutAlign': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Change `EuiContextMenuItem` layout position of icon'
    }
  }
}];