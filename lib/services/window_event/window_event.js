'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WindowEvent = function (_Component) {
  _inherits(WindowEvent, _Component);

  function WindowEvent() {
    _classCallCheck(this, WindowEvent);

    return _possibleConstructorReturn(this, (WindowEvent.__proto__ || Object.getPrototypeOf(WindowEvent)).apply(this, arguments));
  }

  _createClass(WindowEvent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addEvent(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.event !== this.props.event || prevProps.handler !== this.props.handler) {
        this.removeEvent(prevProps);
        this.addEvent(this.props);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvent(this.props);
    }
  }, {
    key: 'addEvent',
    value: function addEvent(_ref) {
      var event = _ref.event,
          handler = _ref.handler;

      window.addEventListener(event, handler);
    }
  }, {
    key: 'removeEvent',
    value: function removeEvent(_ref2) {
      var event = _ref2.event,
          handler = _ref2.handler;

      window.removeEventListener(event, handler);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return WindowEvent;
}(_react.Component);

exports.default = WindowEvent;


WindowEvent.displayName = 'WindowEvent';

WindowEvent.propTypes = {
  /**
   * Type of valid DOM event
   */
  event: _propTypes2.default.string.isRequired,
  /**
    * Event callback function
    */
  handler: _propTypes2.default.func.isRequired
};
WindowEvent.__docgenInfo = [{
  'description': '',
  'displayName': 'WindowEvent',
  'methods': [{
    'name': 'addEvent',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': '{ event, handler }',
      'type': null
    }],
    'returns': null
  }, {
    'name': 'removeEvent',
    'docblock': null,
    'modifiers': [],
    'params': [{
      'name': '{ event, handler }',
      'type': null
    }],
    'returns': null
  }],
  'props': {
    'event': {
      'type': {
        'name': 'string'
      },
      'required': true,
      'description': 'Type of valid DOM event'
    },
    'handler': {
      'type': {
        'name': 'func'
      },
      'required': true,
      'description': 'Event callback function'
    }
  }
}];
module.exports = exports['default'];