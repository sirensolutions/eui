'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTableFooterCell = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _services = require('../../services');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ALIGNMENT = [_services.LEFT_ALIGNMENT, _services.RIGHT_ALIGNMENT, _services.CENTER_ALIGNMENT];

var EuiTableFooterCell = function EuiTableFooterCell(_ref) {
  var children = _ref.children,
      align = _ref.align,
      colSpan = _ref.colSpan,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ['children', 'align', 'colSpan', 'className']);

  var classes = (0, _classnames2.default)('euiTableFooterCell', className);
  var contentClasses = (0, _classnames2.default)('euiTableCellContent', className, {
    'euiTableCellContent--alignRight': align === _services.RIGHT_ALIGNMENT,
    'euiTableCellContent--alignCenter': align === _services.CENTER_ALIGNMENT
  });

  return _react2.default.createElement(
    'td',
    _extends({
      className: classes,
      colSpan: colSpan
    }, rest),
    _react2.default.createElement(
      'div',
      { className: contentClasses },
      _react2.default.createElement(
        'span',
        { className: 'euiTableCellContent__text' },
        children
      )
    )
  );
};

exports.EuiTableFooterCell = EuiTableFooterCell;
EuiTableFooterCell.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  align: _propTypes2.default.oneOf(ALIGNMENT),
  colSpan: _propTypes2.default.number
};

EuiTableFooterCell.defaultProps = {
  align: _services.LEFT_ALIGNMENT
};