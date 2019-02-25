'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiStat = exports.ALIGNMENTS = exports.COLORS = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _text = require('../text');

var _title = require('../title/title');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var colorToClassNameMap = {
  default: null,
  subdued: 'euiStat__title--dark',
  primary: 'euiStat__title--primary',
  secondary: 'euiStat__title--secondary',
  danger: 'euiStat__title--danger',
  accent: 'euiStat__title--accent'
};

var COLORS = exports.COLORS = Object.keys(colorToClassNameMap);

var textAlignToClassNameMap = {
  left: 'euiStat--leftAligned',
  center: 'euiStat--centerAligned',
  right: 'euiStat--rightAligned'
};

var ALIGNMENTS = exports.ALIGNMENTS = Object.keys(textAlignToClassNameMap);

var EuiStat = function EuiStat(_ref) {
  var children = _ref.children,
      className = _ref.className,
      description = _ref.description,
      title = _ref.title,
      titleSize = _ref.titleSize,
      titleColor = _ref.titleColor,
      textAlign = _ref.textAlign,
      reverse = _ref.reverse,
      rest = _objectWithoutProperties(_ref, ['children', 'className', 'description', 'title', 'titleSize', 'titleColor', 'textAlign', 'reverse']);

  var classes = (0, _classnames2.default)('euiStat', textAlignToClassNameMap[textAlign], className);

  var titleClasses = (0, _classnames2.default)('euiStat__title', colorToClassNameMap[titleColor]);

  var descriptionDisplay = _react2.default.createElement(
    _text.EuiText,
    { size: 's', className: 'euiStat__description' },
    _react2.default.createElement(
      'p',
      null,
      description
    )
  );

  var titleDisplay = _react2.default.createElement(
    _title.EuiTitle,
    { size: titleSize, className: titleClasses },
    _react2.default.createElement(
      'p',
      null,
      title
    )
  );

  var statDisplay = void 0;

  if (reverse) {
    statDisplay = _react2.default.createElement(
      _react.Fragment,
      null,
      titleDisplay,
      descriptionDisplay
    );
  } else {
    statDisplay = _react2.default.createElement(
      _react.Fragment,
      null,
      descriptionDisplay,
      titleDisplay
    );
  }

  return _react2.default.createElement(
    'div',
    _extends({
      className: classes
    }, rest),
    statDisplay,
    children
  );
};

exports.EuiStat = EuiStat;
EuiStat.propTypes = {
  /**
   * Set the title (value) text
   */
  title: _propTypes2.default.node.isRequired,

  /**
   * Set the description (label) text
   */
  description: _propTypes2.default.node.isRequired,

  /**
   * Places the title (value) above the description (label)
   */
  reverse: _propTypes2.default.bool.isRequired,

  /**
   * Define the size of the title text. See EuiTitle for sizing options ('s', 'm', 'l'... etc)
   */
  titleSize: _propTypes2.default.oneOf(_title.TITLE_SIZES),

  /**
   * Define the color of the title text
   */
  titleColor: _propTypes2.default.oneOf(COLORS),

  /**
   * Define how you want the content aligned
   */
  textAlign: _propTypes2.default.oneOf(ALIGNMENTS),

  /**
   * Appends additional classes to parent
   */
  className: _propTypes2.default.string,

  /**
   * Additional content that appears after the title and description
   */
  children: _propTypes2.default.node
};

EuiStat.defaultProps = {
  titleColor: 'default',
  textAlign: 'left',
  titleSize: 'l',
  reverse: false
};
EuiStat.__docgenInfo = [{
  'description': '',
  'methods': [],
  'props': {
    'title': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': 'Set the title (value) text'
    },
    'description': {
      'type': {
        'name': 'node'
      },
      'required': true,
      'description': 'Set the description (label) text'
    },
    'reverse': {
      'type': {
        'name': 'bool'
      },
      'required': true,
      'description': 'Places the title (value) above the description (label)',
      'defaultValue': {
        'value': 'false',
        'computed': false
      }
    },
    'titleSize': {
      'type': {
        'name': 'enum',
        'computed': true,
        'value': 'TITLE_SIZES'
      },
      'required': false,
      'description': 'Define the size of the title text. See EuiTitle for sizing options (\'s\', \'m\', \'l\'... etc)',
      'defaultValue': {
        'value': '\'l\'',
        'computed': false
      }
    },
    'titleColor': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"default"',
          'computed': false
        }, {
          'value': '"subdued"',
          'computed': false
        }, {
          'value': '"primary"',
          'computed': false
        }, {
          'value': '"secondary"',
          'computed': false
        }, {
          'value': '"danger"',
          'computed': false
        }, {
          'value': '"accent"',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Define the color of the title text',
      'defaultValue': {
        'value': '\'default\'',
        'computed': false
      }
    },
    'textAlign': {
      'type': {
        'name': 'enum',
        'value': [{
          'value': '"left"',
          'computed': false
        }, {
          'value': '"center"',
          'computed': false
        }, {
          'value': '"right"',
          'computed': false
        }]
      },
      'required': false,
      'description': 'Define how you want the content aligned',
      'defaultValue': {
        'value': '\'left\'',
        'computed': false
      }
    },
    'className': {
      'type': {
        'name': 'string'
      },
      'required': false,
      'description': 'Appends additional classes to parent'
    },
    'children': {
      'type': {
        'name': 'node'
      },
      'required': false,
      'description': 'Additional content that appears after the title and description'
    }
  }
}];