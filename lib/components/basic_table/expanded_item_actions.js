'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedItemActions = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _default_item_action = require('./default_item_action');

var _custom_item_action = require('./custom_item_action');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandedItemActions = exports.ExpandedItemActions = function ExpandedItemActions(_ref) {
  var actions = _ref.actions,
      itemId = _ref.itemId,
      item = _ref.item,
      actionEnabled = _ref.actionEnabled,
      className = _ref.className;


  var moreThanThree = actions.length > 2;

  return actions.reduce(function (tools, action, index) {

    var available = action.available ? action.available(item) : true;
    if (!available) {
      return tools;
    }

    var enabled = actionEnabled(action);

    var key = 'item_action_' + itemId + '_' + index;

    var classes = (0, _classnames2.default)(className, {
      'expandedItemActions__completelyHide': moreThanThree && index < 2
    });

    if (action.render) {
      // custom action has a render function
      tools.push(_react2.default.createElement(_custom_item_action.CustomItemAction, {
        key: key,
        className: classes,
        index: index,
        action: action,
        enabled: enabled,
        itemId: itemId,
        item: item
      }));
    } else {
      tools.push(_react2.default.createElement(_default_item_action.DefaultItemAction, {
        key: key,
        className: classes,
        index: index,
        action: action,
        enabled: enabled,
        itemId: itemId,
        item: item
      }));
    }
    return tools;
  }, []);
};