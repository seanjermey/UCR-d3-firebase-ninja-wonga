webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/chart.tsx":
/*!******************************!*\
  !*** ./components/chart.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_svg_legend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-svg-legend */ "./node_modules/d3-svg-legend/indexRollupNext.js");
var _this = undefined,
    _jsxFileName = "C:\\Courses\\build-data-uis-with-d3-firebase\\ninja-wonga\\components\\chart.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Chart = function Chart(_ref) {
  _s();

  var data = _ref.data,
      _ref$dims = _ref.dims,
      dims = _ref$dims === void 0 ? {
    height: 300,
    width: 300,
    radius: 150
  } : _ref$dims;
  var graphRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var legendRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var cent = {
    x: dims.width / 2 + 5,
    y: dims.height / 2 + 5
  };
  var color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeSet3"]);
  var legend = Object(d3_svg_legend__WEBPACK_IMPORTED_MODULE_2__["legendColor"])().shape("circle").shapePadding(10).scale(color);
  var pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().sort(null).value(function (d) {
    return d.cost;
  });
  var arcPath = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().outerRadius(dims.radius).innerRadius(dims.radius / 2);

  var arcTweenEnter = function arcTweenEnter(d) {
    var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.endAngle, d.startAngle);
    return function (t) {
      d.startAngle = i(t);
      return arcPath(d);
    };
  };

  function arcTweenUpdate(d) {
    var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](this._current, d);
    this._current = i(1);
    return function (t) {
      return arcPath(i(t));
    };
  }

  var arcTweenExit = function arcTweenExit(d) {
    var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.startAngle, d.endAngle);
    return function (t) {
      d.startAngle = i(t);
      return arcPath(d);
    };
  }; // update dom


  var update = function update(data) {
    var graph = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graphRef.current);
    var paths = graph.selectAll("path").data(pie(data)); // configure colors

    color.domain(data.map(function (d) {
      return d.name;
    })); // attach legend

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](legendRef.current).call(legend).selectAll("text").attr("fill", "#fff"); // handle exit dom paths

    paths.exit().transition().duration(750).attrTween("d", arcTweenExit).remove(); // handle current dom paths

    paths.attr("d", arcPath).transition().duration(750).attrTween("d", arcTweenUpdate); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("fill", function (d) {
      return color(d.data.name);
    }).each(function (d) {
      this["_current"] = d;
    }).transition().duration(750).attrTween("d", arcTweenEnter); // add events

    graph.selectAll("path").on("mouseover", function (d, i, n) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition().duration(300).attr("fill", "#fff");
    }).on("mouseout", function (d, i, n) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition().duration(300).attr("fill", color(d.data.name));
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    update(data);
  }, [data]);
  return __jsx("svg", {
    width: dims.width + 150,
    height: dims.height + 150,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }));
};

_s(Chart, "MfsbwQzeigA8XVhv4qeNlzUy8U0=");

_c = Chart;
/* harmony default export */ __webpack_exports__["default"] = (Chart);

var _c;

$RefreshReg$(_c, "Chart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5FbnRlciIsImkiLCJlbmRBbmdsZSIsInN0YXJ0QW5nbGUiLCJ0IiwiYXJjVHdlZW5VcGRhdGUiLCJfY3VycmVudCIsImFyY1R3ZWVuRXhpdCIsInVwZGF0ZSIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwiZG9tYWluIiwibWFwIiwibmFtZSIsImNhbGwiLCJhdHRyIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImVudGVyIiwiYXBwZW5kIiwiZWFjaCIsIm9uIiwibiIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBYUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FHSTtBQUFBOztBQUFBLE1BRmhCQyxJQUVnQixRQUZoQkEsSUFFZ0I7QUFBQSx1QkFEaEJDLElBQ2dCO0FBQUEsTUFEaEJBLElBQ2dCLDBCQURUO0FBQUVDLFVBQU0sRUFBRSxHQUFWO0FBQWVDLFNBQUssRUFBRSxHQUF0QjtBQUEyQkMsVUFBTSxFQUFFO0FBQW5DLEdBQ1M7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0Qsb0RBQU0sRUFBeEI7QUFFQSxNQUFNRSxJQUFJLEdBQUc7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QyxDQUFDLENBQUMxQixDQUFELENBQVgsRUFDR2tCLFVBREgsR0FFR0MsUUFGSCxDQUVZLEdBRlosRUFHR0gsSUFISCxDQUdRLE1BSFIsRUFHZ0JoQyxLQUFLLENBQUNVLENBQUMsQ0FBQ3JCLElBQUYsQ0FBT3lDLElBQVIsQ0FIckI7QUFJRCxLQVZIO0FBV0QsR0F2REQ7O0FBeURBYSx5REFBUyxDQUFDLFlBQU07QUFDZHBCLFVBQU0sQ0FBQ2xDLElBQUQsQ0FBTjtBQUNELEdBRlEsRUFFTixDQUFDQSxJQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFBSyxTQUFLLEVBQUVDLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEdBQXpCO0FBQThCLFVBQU0sRUFBRUYsSUFBSSxDQUFDQyxNQUFMLEdBQWMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFFRyxRQUFSO0FBQWtCLGFBQVMsc0JBQWVHLElBQUksQ0FBQ0MsQ0FBcEIsZUFBMEJELElBQUksQ0FBQ0UsQ0FBL0IsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxPQUFHLEVBQUVILFNBQVI7QUFBbUIsYUFBUyxzQkFBZU4sSUFBSSxDQUFDRSxLQUFMLEdBQWEsRUFBNUIsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQXRIRDs7R0FBTUosSzs7S0FBQUEsSztBQXdIU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmEwMzY1NzcyMTEwMzQ1MjA1YWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tIFwiZDMtc3ZnLWxlZ2VuZFwiO1xuaW1wb3J0IHsgZnVuYyB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmludGVyZmFjZSBWYWx1ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGRhdGE6IFZhbHVlW107XG4gIGRpbXM6IHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IHJhZGl1czogbnVtYmVyIH07XG59XG5cbmNvbnN0IENoYXJ0ID0gKHtcbiAgZGF0YSxcbiAgZGltcyA9IHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAsIHJhZGl1czogMTUwIH0sXG59OiBDaGFydFByb3BzKSA9PiB7XG4gIGNvbnN0IGdyYXBoUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxlZ2VuZFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGNlbnQgPSB7IHg6IGRpbXMud2lkdGggLyAyICsgNSwgeTogZGltcy5oZWlnaHQgLyAyICsgNSB9O1xuICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkM1tcInNjaGVtZVNldDNcIl0pO1xuICBjb25zdCBsZWdlbmQgPSBsZWdlbmRDb2xvcigpLnNoYXBlKFwiY2lyY2xlXCIpLnNoYXBlUGFkZGluZygxMCkuc2NhbGUoY29sb3IpO1xuXG4gIGNvbnN0IHBpZSA9IGQzXG4gICAgLnBpZTxWYWx1ZT4oKVxuICAgIC5zb3J0KG51bGwpXG4gICAgLnZhbHVlKChkKSA9PiBkLmNvc3QpO1xuXG4gIGNvbnN0IGFyY1BhdGggPSBkM1xuICAgIC5hcmM8ZDMuUGllQXJjRGF0dW08VmFsdWU+PigpXG4gICAgLm91dGVyUmFkaXVzKGRpbXMucmFkaXVzKVxuICAgIC5pbm5lclJhZGl1cyhkaW1zLnJhZGl1cyAvIDIpO1xuXG4gIGNvbnN0IGFyY1R3ZWVuRW50ZXIgPSAoZCkgPT4ge1xuICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLmVuZEFuZ2xlLCBkLnN0YXJ0QW5nbGUpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xuXG4gICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFyY1R3ZWVuVXBkYXRlKGQpIHtcbiAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XG5cbiAgICB0aGlzLl9jdXJyZW50ID0gaSgxKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgcmV0dXJuIGFyY1BhdGgoaSh0KSk7XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGFyY1R3ZWVuRXhpdCA9IChkKSA9PiB7XG4gICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuc3RhcnRBbmdsZSwgZC5lbmRBbmdsZSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XG5cbiAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xuICAgIH07XG4gIH07XG4gIC8vIHVwZGF0ZSBkb21cbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBncmFwaCA9IGQzLnNlbGVjdChncmFwaFJlZi5jdXJyZW50KTtcbiAgICBjb25zdCBwYXRocyA9IGdyYXBoLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShwaWUoZGF0YSkpO1xuXG4gICAgLy8gY29uZmlndXJlIGNvbG9yc1xuICAgIGNvbG9yLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XG5cbiAgICAvLyBhdHRhY2ggbGVnZW5kXG4gICAgZDMuc2VsZWN0KGxlZ2VuZFJlZi5jdXJyZW50KVxuICAgICAgLmNhbGwobGVnZW5kKVxuICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG5cbiAgICAvLyBoYW5kbGUgZXhpdCBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmV4aXQoKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVuRXhpdClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlblVwZGF0ZSk7XG5cbiAgICAvLyBoYW5kbGUgZW50ZXIgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiBjb2xvcihkLmRhdGEubmFtZSkpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzW1wiX2N1cnJlbnRcIl0gPSBkO1xuICAgICAgfSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbkVudGVyKTtcblxuICAgIC8vIGFkZCBldmVudHNcbiAgICBncmFwaFxuICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSkudHJhbnNpdGlvbigpLmR1cmF0aW9uKDMwMCkuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBjb2xvcihkLmRhdGEubmFtZSkpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cbiAgICAgIDxnIHJlZj17Z3JhcGhSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnQueH0sICR7Y2VudC55fSlgfSAvPlxuICAgICAgPGcgcmVmPXtsZWdlbmRSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RpbXMud2lkdGggKyA0MH0sIDEwKWB9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=