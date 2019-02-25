'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPortal = exports.INSERT_POSITIONS = exports.insertPositions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * NOTE: We can't test this component because Enzyme doesn't support rendering
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * into portals.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var insertPositions = exports.insertPositions = {
  'after': 'afterend',
  'before': 'beforebegin'
};

var INSERT_POSITIONS = exports.INSERT_POSITIONS = Object.keys(insertPositions);

var EuiPortal = exports.EuiPortal = function (_Component) {
  _inherits(EuiPortal, _Component);

  function EuiPortal(props) {
    _classCallCheck(this, EuiPortal);

    var _this = _possibleConstructorReturn(this, (EuiPortal.__proto__ || Object.getPrototypeOf(EuiPortal)).call(this, props));

    var _this$props = _this.props,
        children = _this$props.children,
        insert = _this$props.insert;


    _this.portalNode = document.createElement('div');

    if (insert == null) {
      // no insertion defined, append to body
      document.body.appendChild(_this.portalNode);
    } else {
      // inserting before or after an element
      (0, _reactDom.findDOMNode)(insert.sibling).insertAdjacentElement(insertPositions[insert.position], _this.portalNode);
    }
    return _this;
  }

  _createClass(EuiPortal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updatePortalRef();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.portalNode.parentNode.removeChild(this.portalNode);
      this.portalNode = null;
      this.updatePortalRef();
    }
  }, {
    key: 'updatePortalRef',
    value: function updatePortalRef() {
      if (this.props.portalRef) {
        this.props.portalRef(this.portalNode);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return (0, _reactDom.createPortal)(this.props.children, this.portalNode);
    }
  }]);

  return EuiPortal;
}(_react.Component);

EuiPortal.propTypes = {
  children: _propTypes2.default.node,
  /** `{sibling: ReactNode|HTMLElement, position: 'before'|'after'}` */
  insert: _propTypes2.default.shape({
    sibling: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.instanceOf(HTMLElement)]).isRequired,
    position: _propTypes2.default.oneOf(INSERT_POSITIONS)
  }),
  portalRef: _propTypes2.default.func
};
EuiPortal.__docgenInfo = [{
  'description': '',
  'displayName': 'EuiPortal',
  'methods': [{
    'name': 'updatePortalRef',
    'docblock': null,
    'modifiers': [],
    'params': [],
    'returns': null
  }],
  'props': {
    'children': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': ''
    },
    'insert': {
      'type': {
        'name': 'shape',
        'value': {
          'sibling': {
            'name': 'union',
            'value': [{
              'name': 'node'
            }, {
              'name': 'instanceOf',
              'value': 'HTMLElement'
            }],
            'required': true
          },
          'position': {
            'name': 'enum',
            'value': [{
              'value': '"after"',
              'computed': false
            }, {
              'value': '"before"',
              'computed': false
            }],
            'required': false
          }
        }
      },
      'required': false,
      'description': '`{sibling: ReactNode|HTMLElement, position: \'before\'|\'after\'}`'
    },
    'portalRef': {
      'type': {
        'name': 'func'
      },
      'required': false,
      'description': ''
    }
  }
}];