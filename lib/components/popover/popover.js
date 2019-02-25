'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPopover = exports.ANCHOR_POSITIONS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.getPopoverPositionFromAnchorPosition = getPopoverPositionFromAnchorPosition;
exports.getPopoverAlignFromAnchorPosition = getPopoverAlignFromAnchorPosition;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _focusTrapReact = require('focus-trap-react');

var _focusTrapReact2 = _interopRequireDefault(_focusTrapReact);

var _tabbable = require('tabbable');

var _tabbable2 = _interopRequireDefault(_tabbable);

var _services = require('../../services');

var _outside_click_detector = require('../outside_click_detector');

var _accessibility = require('../accessibility');

var _panel = require('../panel');

var _portal = require('../portal');

var _mutation_observer = require('../mutation_observer');

var _popover_positioning = require('../../services/popover/popover_positioning');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var anchorPositionToPopoverPositionMap = {
  'up': 'top',
  'right': 'right',
  'down': 'bottom',
  'left': 'left'
};
function getPopoverPositionFromAnchorPosition(anchorPosition) {
  // maps the anchor position to the matching popover position
  // e.g. "upLeft" -> "top", "downRight" -> "bottom"

  // extract the first positional word from anchorPosition:
  // starts at the beginning (" ^ ") of anchorPosition and
  // captures all of the characters (" (.*?) ") until the
  var _anchorPosition$match = anchorPosition.match(/^(.*?)[A-Z]/),
      _anchorPosition$match2 = _slicedToArray(_anchorPosition$match, 2),
      primaryPosition = _anchorPosition$match2[1];

  return anchorPositionToPopoverPositionMap[primaryPosition];
}
function getPopoverAlignFromAnchorPosition(anchorPosition) {
  // maps the gravity to the matching popover position
  // e.g. "upLeft" -> "left", "rightDown" -> "bottom"

  // extract the second positional word from anchorPosition:
  // starts a capture group at the first capital letter
  var _anchorPosition$match3 = anchorPosition.match(/([A-Z].*)/),
      _anchorPosition$match4 = _slicedToArray(_anchorPosition$match3, 2),
      align = _anchorPosition$match4[1];

  // this performs two tasks:
  // 1. normalizes the align position by lowercasing it
  // 2. `center` doesn't exist in the lookup map which converts it to `undefined` meaning no align


  return anchorPositionToPopoverPositionMap[align.toLowerCase()];
}

var anchorPositionToClassNameMap = {
  'upCenter': 'euiPopover--anchorUpCenter',
  'upLeft': 'euiPopover--anchorUpLeft',
  'upRight': 'euiPopover--anchorUpRight',
  'downCenter': 'euiPopover--anchorDownCenter',
  'downLeft': 'euiPopover--anchorDownLeft',
  'downRight': 'euiPopover--anchorDownRight',
  'leftCenter': 'euiPopover--anchorLeftCenter',
  'leftUp': 'euiPopover--anchorLeftUp',
  'leftDown': 'euiPopover--anchorLeftDown',
  'rightCenter': 'euiPopover--anchorRightCenter',
  'rightUp': 'euiPopover--anchorRightUp',
  'rightDown': 'euiPopover--anchorRightDown'
};

var ANCHOR_POSITIONS = exports.ANCHOR_POSITIONS = Object.keys(anchorPositionToClassNameMap);

var DEFAULT_POPOVER_STYLES = {
  top: 50,
  left: 50
};

var GROUP_NUMERIC = /^([\d.]+)/;

function getElementFromInitialFocus(initialFocus) {
  var initialFocusType = typeof initialFocus === 'undefined' ? 'undefined' : _typeof(initialFocus);
  if (initialFocusType === 'string') return document.querySelector(initialFocus);
  if (initialFocusType === 'function') return initialFocus();
  return initialFocus;
}

var EuiPopover = exports.EuiPopover = function (_Component) {
  _inherits(EuiPopover, _Component);

  _createClass(EuiPopover, null, [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevProps.isOpen && !nextProps.isOpen) {
        return {
          prevProps: {
            isOpen: nextProps.isOpen
          },
          isClosing: true,
          isOpening: false
        };
      }

      if (prevState.prevProps.isOpen !== nextProps.isOpen) {
        return {
          prevProps: {
            isOpen: nextProps.isOpen
          }
        };
      }

      return null;
    }
  }]);

  function EuiPopover(props) {
    _classCallCheck(this, EuiPopover);

    var _this = _possibleConstructorReturn(this, (EuiPopover.__proto__ || Object.getPrototypeOf(EuiPopover)).call(this, props));

    _this.onKeyDown = function (e) {
      if (e.keyCode === _services.cascadingMenuKeyCodes.ESCAPE) {
        e.preventDefault();
        e.stopPropagation();
        _this.props.closePopover();
      }
    };

    _this.onMutation = function (records) {
      var waitDuration = records.reduce(function (waitDuration, record) {
        // only check for CSS transition values for ELEMENT nodes
        if (record.target.nodeType === document.ELEMENT_NODE) {
          var computedStyle = window.getComputedStyle(record.target);

          var computedDuration = computedStyle.getPropertyValue('transition-duration');
          var durationMatch = computedDuration.match(GROUP_NUMERIC);
          durationMatch = durationMatch ? parseFloat(durationMatch[1]) * 1000 : 0;

          var computedDelay = computedStyle.getPropertyValue('transition-delay');
          var delayMatch = computedDelay.match(GROUP_NUMERIC);
          delayMatch = delayMatch ? parseFloat(delayMatch[1]) * 1000 : 0;

          waitDuration = Math.max(waitDuration, durationMatch + delayMatch);
        }

        return waitDuration;
      }, 0);
      _this.positionPopover();

      if (waitDuration > 0) {
        var startTime = Date.now();
        var endTime = startTime + waitDuration;

        var onFrame = function onFrame() {
          _this.positionPopover();

          if (endTime > Date.now()) {
            requestAnimationFrame(onFrame);
          }
        };

        requestAnimationFrame(onFrame);
      }
    };

    _this.positionPopover = function () {
      if (_this.button == null || _this.panel == null) return;

      var _findPopoverPosition = (0, _popover_positioning.findPopoverPosition)({
        container: _this.props.container,
        position: getPopoverPositionFromAnchorPosition(_this.props.anchorPosition),
        align: getPopoverAlignFromAnchorPosition(_this.props.anchorPosition),
        anchor: _this.button,
        popover: _this.panel,
        offset: _this.props.hasArrow ? 16 : 8,
        arrowConfig: {
          arrowWidth: 24,
          arrowBuffer: 10
        }
      }),
          top = _findPopoverPosition.top,
          left = _findPopoverPosition.left,
          position = _findPopoverPosition.position,
          arrow = _findPopoverPosition.arrow;

      // the popover's z-index must inherit from the button
      // this keeps a button's popover under a flyout that would cover the button
      // but a popover triggered inside a flyout will appear over that flyout


      var zIndexProp = _this.props.zIndex;

      var zIndex = zIndexProp == null ? (0, _popover_positioning.getElementZIndex)(_this.button, _this.panel) : zIndexProp;

      var popoverStyles = {
        top: top,
        left: left,
        zIndex: zIndex
      };

      var arrowStyles = _this.props.hasArrow ? arrow : null;
      var arrowPosition = position;

      _this.setState({ popoverStyles: popoverStyles, arrowStyles: arrowStyles, arrowPosition: arrowPosition });
    };

    _this.panelRef = function (node) {
      _this.panel = node;

      if (node == null) {
        // panel has unmounted, restore the state defaults
        _this.setState({
          popoverStyles: DEFAULT_POPOVER_STYLES,
          arrowStyles: {},
          arrowPosition: null
        });
        window.removeEventListener('resize', _this.positionPopover);
      } else {
        // panel is coming into existence
        _this.positionPopover();
        window.addEventListener('resize', _this.positionPopover);
      }
    };

    _this.buttonRef = function (node) {
      return _this.button = node;
    };

    _this.closingTransitionTimeout = undefined;
    _this.button = null;

    _this.state = {
      prevProps: {
        isOpen: props.isOpen
      },
      suppressingPopover: _this.props.isOpen, // only suppress if created with isOpen=true
      isClosing: false,
      isOpening: false,
      popoverStyles: DEFAULT_POPOVER_STYLES,
      arrowStyles: {},
      arrowPosition: null
    };
    return _this;
  }

  _createClass(EuiPopover, [{
    key: 'updateFocus',
    value: function updateFocus() {
      var _this2 = this;

      // Wait for the DOM to update.
      window.requestAnimationFrame(function () {
        if (!_this2.props.ownFocus || !_this2.panel) {
          return;
        }

        // If we've already focused on something inside the panel, everything's fine.
        if (_this2.panel.contains(document.activeElement)) {
          return;
        }

        // Otherwise let's focus the first tabbable item and expedite input from the user.
        var focusTarget = void 0;

        if (_this2.props.initialFocus != null) {
          focusTarget = getElementFromInitialFocus(_this2.props.initialFocus);
          // there's a race condition between the popover content becoming visible and this function call
          // if the element isn't visible yet (due to css styling) then it can't accept focus
          // so wait for another render and try again
          var visibility = window.getComputedStyle(focusTarget).visibility;
          if (visibility === 'hidden') {
            _this2.updateFocus();
          }
        } else {
          var tabbableItems = (0, _tabbable2.default)(_this2.panel);
          if (tabbableItems.length) {
            focusTarget = tabbableItems[0];
          }
        }

        if (focusTarget != null) focusTarget.focus();
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.state.suppressingPopover) {
        // component was created with isOpen=true; now that it's mounted
        // stop suppressing and start opening
        this.setState({ suppressingPopover: false, isOpening: true }); // eslint-disable-line react/no-did-mount-set-state
      }

      if (this.props.repositionOnScroll) {
        window.addEventListener('scroll', this.positionPopover);
      }

      this.updateFocus();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      // The popover is being opened.
      if (!prevProps.isOpen && this.props.isOpen) {
        clearTimeout(this.closingTransitionTimeout);
        // We need to set this state a beat after the render takes place, so that the CSS
        // transition can take effect.
        window.requestAnimationFrame(function () {
          _this3.setState({
            isOpening: true
          });
        });
      }

      // update scroll listener
      if (prevProps.repositionOnScroll !== this.props.repositionOnScroll) {
        if (this.props.repositionOnScroll) {
          window.addEventListener('scroll', this.positionPopover);
        } else {
          window.removeEventListener('scroll', this.positionPopover);
        }
      }

      // The popover is being closed.
      if (prevProps.isOpen && !this.props.isOpen) {
        // If the user has just closed the popover, queue up the removal of the content after the
        // transition is complete.
        this.closingTransitionTimeout = setTimeout(function () {
          _this3.setState({
            isClosing: false
          });
        }, 250);
      }

      this.updateFocus();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.positionPopover);
      clearTimeout(this.closingTransitionTimeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          anchorPosition = _props.anchorPosition,
          button = _props.button,
          isOpen = _props.isOpen,
          ownFocus = _props.ownFocus,
          withTitle = _props.withTitle,
          children = _props.children,
          className = _props.className,
          closePopover = _props.closePopover,
          panelClassName = _props.panelClassName,
          panelPaddingSize = _props.panelPaddingSize,
          popoverRef = _props.popoverRef,
          hasArrow = _props.hasArrow,
          repositionOnScroll = _props.repositionOnScroll,
          zIndex = _props.zIndex,
          initialFocus = _props.initialFocus,
          rest = _objectWithoutProperties(_props, ['anchorPosition', 'button', 'isOpen', 'ownFocus', 'withTitle', 'children', 'className', 'closePopover', 'panelClassName', 'panelPaddingSize', 'popoverRef', 'hasArrow', 'repositionOnScroll', 'zIndex', 'initialFocus']);

      var classes = (0, _classnames2.default)('euiPopover', anchorPositionToClassNameMap[anchorPosition], {
        'euiPopover-isOpen': this.state.isOpening,
        'euiPopover--withTitle': withTitle
      }, className);

      var panelClasses = (0, _classnames2.default)('euiPopover__panel', 'euiPopover__panel--' + this.state.arrowPosition, { 'euiPopover__panel-isOpen': this.state.isOpening }, { 'euiPopover__panel-withTitle': withTitle }, { 'euiPopover__panel-noArrow': !hasArrow }, panelClassName);

      var panel = void 0;

      if (!this.state.suppressingPopover && (isOpen || this.state.isClosing)) {
        var tabIndex = void 0;
        var _initialFocus = void 0;
        var ariaLive = void 0;

        if (ownFocus) {
          tabIndex = '0';
          ariaLive = 'off';

          _initialFocus = function _initialFocus() {
            return _this4.panel;
          };
        } else {
          ariaLive = 'assertive';
        }

        var focusTrapScreenReaderText = void 0;
        if (ownFocus) {
          focusTrapScreenReaderText = _react2.default.createElement(
            _accessibility.EuiScreenReaderOnly,
            null,
            _react2.default.createElement(
              'p',
              { role: 'alert' },
              'You are in a popup. To exit this popup, hit escape.'
            )
          );
        }

        var arrowClassNames = (0, _classnames2.default)('euiPopover__panelArrow', 'euiPopover__panelArrow--' + this.state.arrowPosition);

        panel = _react2.default.createElement(
          _portal.EuiPortal,
          null,
          _react2.default.createElement(
            _focusTrapReact2.default,
            {
              active: ownFocus,
              focusTrapOptions: {
                clickOutsideDeactivates: true,
                initialFocus: _initialFocus
              }
            },
            focusTrapScreenReaderText,
            _react2.default.createElement(
              _panel.EuiPanel,
              {
                panelRef: this.panelRef,
                className: panelClasses,
                paddingSize: panelPaddingSize,
                tabIndex: tabIndex,
                'aria-live': ariaLive,
                style: this.state.popoverStyles
              },
              _react2.default.createElement('div', { className: arrowClassNames, style: this.state.arrowStyles }),
              children ? _react2.default.createElement(
                _mutation_observer.EuiMutationObserver,
                {
                  observerOptions: {
                    attributes: true, // element attribute changes
                    childList: true, // added/removed elements
                    characterData: true, // text changes
                    subtree: true // watch all child elements
                  },
                  onMutation: this.onMutation
                },
                children
              ) : null
            )
          )
        );
      }

      return _react2.default.createElement(
        _outside_click_detector.EuiOutsideClickDetector,
        { onOutsideClick: closePopover },
        _react2.default.createElement(
          'div',
          _extends({
            className: classes,
            onKeyDown: this.onKeyDown,
            ref: popoverRef
          }, rest),
          _react2.default.createElement(
            'div',
            { className: 'euiPopover__anchor', ref: this.buttonRef },
            button instanceof HTMLElement ? null : button
          ),
          panel
        )
      );
    }
  }]);

  return EuiPopover;
}(_react.Component);

EuiPopover.propTypes = {
  isOpen: _propTypes2.default.bool,
  ownFocus: _propTypes2.default.bool,
  withTitle: _propTypes2.default.bool,
  closePopover: _propTypes2.default.func.isRequired,
  button: _propTypes2.default.node.isRequired,
  children: _propTypes2.default.node,
  anchorPosition: _propTypes2.default.oneOf(ANCHOR_POSITIONS),
  panelClassName: _propTypes2.default.string,
  panelPaddingSize: _propTypes2.default.oneOf(_panel.SIZES),
  popoverRef: _propTypes2.default.func,
  hasArrow: _propTypes2.default.bool,
  container: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.instanceOf(HTMLElement)]),
  /** When `true`, the popover's position is re-calculated when the user scrolls, this supports having fixed-position popover anchors. */
  repositionOnScroll: _propTypes2.default.bool,
  /** By default, popover content inherits the z-index of the anchor component; pass zIndex to override */
  zIndex: _propTypes2.default.number,
  /** specifies what element should initially have focus; Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node. */
  initialFocus: _propTypes2.default.oneOfType([_propTypes2.default.instanceOf(HTMLElement), _propTypes2.default.func, _propTypes2.default.string])
};

EuiPopover.defaultProps = {
  isOpen: false,
  ownFocus: false,
  anchorPosition: 'downCenter',
  panelPaddingSize: 'm',
  hasArrow: true
};
EuiPopover.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiPopover',
  'methods': [{
    'name': 'getDerivedStateFromProps',
    'docblock': null,
    'modifiers': ['static'],
    'params': [{
      'name': 'nextProps',
      'type': null
    }, {
      'name': 'prevState',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'onKeyDown',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'e',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'updateFocus',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'onMutation',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'records',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'positionPopover',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'panelRef',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'node',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'buttonRef',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': 'node',
      'type': null
    }],
    'returns': null
  }],
  'props': {
    'isOpen': {
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
    'ownFocus': {
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
    'withTitle': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': ''
    },
    'closePopover': {
      'type': {
        'name': 'func'
      },
      'required': true,
      'description': ''
    },
    'button': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': ''
    },
    'children': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': ''
    },
    'anchorPosition': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"upCenter"',
          'computed': false
        }, {
          'value': '"upLeft"',
          'computed': false
        }, {
          'value': '"upRight"',
          'computed': false
        }, {
          'value': '"downCenter"',
          'computed': false
        }, {
          'value': '"downLeft"',
          'computed': false
        }, {
          'value': '"downRight"',
          'computed': false
        }, {
          'value': '"leftCenter"',
          'computed': false
        }, {
          'value': '"leftUp"',
          'computed': false
        }, {
          'value': '"leftDown"',
          'computed': false
        }, {
          'value': '"rightCenter"',
          'computed': false
        }, {
          'value': '"rightUp"',
          'computed': false
        }, {
          'value': '"rightDown"',
          'computed': false
        }]
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'downCenter\'',
        'computed': false
      }
    },
    'panelClassName': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': ''
    },
    'panelPaddingSize': {
      'type': {
        'name': 'enum',
        'computed': true,
        'value': 'SIZES'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': '\'m\'',
        'computed': false
      }
    },
    'popoverRef': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    },
    'hasArrow': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': '',
      'defaultValue': {
        'value': 'true',
        'computed': false
      }
    },
    'container': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'node'
        }, {
          'name': 'instanceOf',
          'value': 'HTMLElement'
        }]
      },
      'required': false,
      'description': ''
    },
    'repositionOnScroll': {
      'type': {
        'name': 'bool'
      },
      'required': false,
      'description': 'When `true`, the popover\'s position is re-calculated when the user scrolls, this supports having fixed-position popover anchors.'
    },
    'zIndex': {
      'type': {
        'name': 'number'
      },
      'required': false,
      'description': 'By default, popover content inherits the z-index of the anchor component; pass zIndex to override'
    },
    'initialFocus': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'instanceOf',
          'value': 'HTMLElement'
        }, {
          'name': 'func'
        }, {
          'name': 'string'
        }]
      },
      'required': false,
      'description': 'specifies what element should initially have focus; Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node.'
    }
  }
}];