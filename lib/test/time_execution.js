"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.timeExecution = timeExecution;
exports.benchmarkFunction = benchmarkFunction;
function timeExecution(fn) {
  var start = process.hrtime();
  fn();

  var _process$hrtime = process.hrtime(start),
      _process$hrtime2 = _slicedToArray(_process$hrtime, 2),
      seconds = _process$hrtime2[0],
      nanoseconds = _process$hrtime2[1];

  var milliseconds = seconds * 1000 + nanoseconds / 1000000;
  return milliseconds;
}

function benchmarkFunction(fn) {
  var warmupRuns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var benchmarkRuns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  // warmup v8 optimizations, cache, etc
  for (var i = 0; i < warmupRuns; i++) {
    fn();
  }

  var runTimes = [];
  for (var _i = 0; _i < benchmarkRuns; _i++) {
    runTimes.push(timeExecution(fn));
  }

  return Math.min.apply(null, runTimes);
}