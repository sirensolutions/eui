"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Find node which matches a specific test subject selector. Returns ReactWrappers around DOM element,
 * https://github.com/airbnb/enzyme/tree/master/docs/api/ReactWrapper.
 * Common use cases include calling simulate or getDOMNode on the returned ReactWrapper.
 */
var findTestSubject = exports.findTestSubject = function findTestSubject(mountedComponent, testSubjectSelector) {
  var testSubject = mountedComponent.find("[data-test-subj=\"" + testSubjectSelector + "\"]");

  // Restores Enzyme 2's find behavior, which was to only return ReactWrappers around DOM elements.
  // Enzyme 3 returns ReactWrappers around both DOM elements and React components.
  // https://github.com/airbnb/enzyme/issues/1174
  return testSubject.hostNodes();
};