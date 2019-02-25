'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiMutationObserver = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * EuiMutationObserver watches its children with the MutationObserver API
 * There are a couple constraints which inform how this component works
 *
 * 1. React refs cannot be added to functional components
 * 2. findDOMNode will only return the first element from an array of children
 *    or from a fragment.
 *
 * Because of #1, we can't blindly attach refs to children and expect them to work in all cases
 * Because of #2, we can't observe all children for mutations, only the first
 *
 * When only one child is passed its found by findDOMNode and the mutation observer is attached
 * When children is an array the render function maps over them wrapping each child
 *   with another EuiMutationObserver, e.g.:
 *
 *   <Observer>
 *     <div>First</div>
 *     <div>Second</div>
 *   </Observer>
 *
 *   becomes
 *
 *   <Observer>
 *     <Observer><div>First</div></Observer>
 *     <Observer><div>Second</div></Observer>
 *   </Observer>
 *
 *   each descendant-Observer has only one child and can independently watch for mutations,
 *   triggering the parent's onMutation callback when an event is observed
 */
var EuiMutationObserver = function (_Component) {
  _inherits(EuiMutationObserver, _Component);

  function EuiMutationObserver() {
    var _ref;

    _classCallCheck(this, EuiMutationObserver);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = EuiMutationObserver.__proto__ || Object.getPrototypeOf(EuiMutationObserver)).call.apply(_ref, [this].concat(args)));

    _initialiseProps.call(_this);

    _this.childNode = null;
    _this.observer = null;
    return _this;
  }

  _createClass(EuiMutationObserver, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateChildNode();
    }
  }, {
    key: 'updateChildNode',
    value: function updateChildNode() {
      if (Array.isArray(this.props.children) === false) {
        var currentNode = (0, _reactDom.findDOMNode)(this);
        if (this.childNode !== currentNode) {
          // if there's an existing observer disconnect it
          if (this.observer != null) {
            this.observer.disconnect();
            this.observer = null;
          }

          this.childNode = currentNode;
          if (this.childNode != null) {
            this.observer = new MutationObserver(this.onMutation);
            this.observer.observe(this.childNode, this.props.observerOptions);
          }
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      // in case the child element was changed
      this.updateChildNode();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['children']);

      if (Array.isArray(children)) {
        return _react2.default.Children.map(children, function (child) {
          return _react2.default.createElement(
            EuiMutationObserver,
            rest,
            child
          );
        });
      } else {
        return children;
      }
    }
  }]);

  return EuiMutationObserver;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onMutation = function () {
    var _props2;

    (_props2 = _this2.props).onMutation.apply(_props2, arguments);
  };
};

EuiMutationObserver.propTypes = {
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.arrayOf(_propTypes2.default.node)]),
  observerOptions: _propTypes2.default.shape({ // matches a [MutationObserverInit](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit)
    attributeFilter: _propTypes2.default.arrayOf(_propTypes2.default.string),
    attributeOldValue: _propTypes2.default.bool,
    attributes: _propTypes2.default.bool,
    characterData: _propTypes2.default.bool,
    characterDataOldValue: _propTypes2.default.bool,
    childList: _propTypes2.default.bool,
    subtree: _propTypes2.default.bool
  }).isRequired,
  onMutation: _propTypes2.default.func.isRequired
};

exports.EuiMutationObserver = EuiMutationObserver;
EuiMutationObserver.__docgenInfo = [{
  'description': 'EuiMutationObserver watches its children with the MutationObserver API\nThere are a couple constraints which inform how this component works\n\n1. React refs cannot be added to functional components\n2. findDOMNode will only return the first element from an array of children\n   or from a fragment.\n\nBecause of #1, we can\'t blindly attach refs to children and expect them to work in all cases\nBecause of #2, we can\'t observe all children for mutations, only the first\n\nWhen only one child is passed its found by findDOMNode and the mutation observer is attached\nWhen children is an array the render function maps over them wrapping each child\n  with another EuiMutationObserver, e.g.:\n\n  <Observer>\n    <div>First</div>\n    <div>Second</div>\n  </Observer>\n\n  becomes\n\n  <Observer>\n    <Observer><div>First</div></Observer>\n    <Observer><div>Second</div></Observer>\n  </Observer>\n\n  each descendant-Observer has only one child and can independently watch for mutations,\n  triggering the parent\'s onMutation callback when an event is observed',
  'displayName': 'EuiMutationObserver',
  'methods': [{
    'name': 'updateChildNode',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }, {
    'name': 'onMutation',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': '...args',
      'type': null
    }],
    'returns': null
  }],
  'props': {
    'children': {
      'type': {
        'name': 'union',
        'value': [{
          'name': 'node'
        }, {
          'name': 'arrayOf',
          'value': {
            'name': 'node'
          }
        }]
      },
      'required': false,
      'description': ''
    },
    'observerOptions': {
      'type': {
        'name': 'shape',
        'value': {
          'attributeFilter': {
            'name': 'arrayOf',
            'value': {
              'name': 'string'
            },
            'required': false
          },
          'attributeOldValue': {
            'name': 'bool',
            'required': false
          },
          'attributes': {
            'name': 'bool',
            'required': false
          },
          'characterData': {
            'name': 'bool',
            'required': false
          },
          'characterDataOldValue': {
            'name': 'bool',
            'required': false
          },
          'childList': {
            'name': 'bool',
            'required': false
          },
          'subtree': {
            'name': 'bool',
            'required': false
          }
        }
      },
      'required': true,
      'description': ''
    },
    'onMutation': {
      'type': {
        'name': 'func'
      },
      'required': true,
      'description': ''
    }
  }
}];