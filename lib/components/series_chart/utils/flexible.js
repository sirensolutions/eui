'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.makeFlexible = makeFlexible;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _resizeObserverPolyfill = require('resize-observer-polyfill');

var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function makeFlexible(WrappedComponent) {

  return function (_PureComponent) {
    _inherits(FlexibleEuiSeriesChart, _PureComponent);

    function FlexibleEuiSeriesChart(props) {
      _classCallCheck(this, FlexibleEuiSeriesChart);

      var _this = _possibleConstructorReturn(this, (FlexibleEuiSeriesChart.__proto__ || Object.getPrototypeOf(FlexibleEuiSeriesChart)).call(this, props));

      _this.onResize = function (entries) {
        entries.forEach(function (entry) {
          var _entry$contentRect = entry.contentRect,
              width = _entry$contentRect.width,
              height = _entry$contentRect.height;

          var notifyWidth = _this.state.width !== width;
          var notifyHeight = _this.state.height !== height;
          if (notifyWidth || notifyHeight) {
            _this.setState({ width: width, height: height });
          }
        });
      };

      _this.state = {
        height: 0,
        width: 0
      };
      _this.containerRef = _react2.default.createRef();
      _this.ro = new _resizeObserverPolyfill2.default(_this.onResize);
      return _this;
    }

    _createClass(FlexibleEuiSeriesChart, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.ro.observe(this.containerRef.current);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.ro.unobserve(this.containerRef.current);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          {
            ref: this.containerRef,
            style: { width: '100%', height: '100%' }
          },
          _react2.default.createElement(WrappedComponent, _extends({}, this.state, this.props))
        );
      }
    }]);

    return FlexibleEuiSeriesChart;
  }(_react.PureComponent);
}