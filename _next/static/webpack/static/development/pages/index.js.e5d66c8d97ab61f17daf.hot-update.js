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
  } : _ref$dims,
      onSliceClick = _ref.onSliceClick;
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
  var arcPath = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().outerRadius(dims.radius).innerRadius(dims.radius / 2); // arc tweens

  var arcTweens = {
    enter: function enter(d) {
      var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.endAngle, d.startAngle);
      return function (t) {
        d.startAngle = i(t);
        return arcPath(d);
      };
    },
    update: function update(d) {
      var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](this._current, d);
      this._current = i(1);
      return function (t) {
        return arcPath(i(t));
      };
    },
    exit: function exit(d) {
      var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.startAngle, d.endAngle);
      return function (t) {
        d.startAngle = i(t);
        return arcPath(d);
      };
    }
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
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition("changeSliceFill").duration(300).attr("fill", "#fff");
    }).on("mouseout", function (d, i, n) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition("changeSliceFill").duration(300).attr("fill", color(d.data.name));
    }).on("click", function (d) {
      return onSliceClick(d.data);
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
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwiZG9tYWluIiwibWFwIiwibmFtZSIsImNhbGwiLCJhdHRyIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXR0clR3ZWVuIiwiYXJjVHdlZW5FeGl0IiwicmVtb3ZlIiwiYXJjVHdlZW5VcGRhdGUiLCJhcHBlbmQiLCJlYWNoIiwiYXJjVHdlZW5FbnRlciIsIm9uIiwibiIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBY0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSx1QkFGaEJDLElBRWdCO0FBQUEsTUFGaEJBLElBRWdCLDBCQUZUO0FBQUVDLFVBQU0sRUFBRSxHQUFWO0FBQWVDLFNBQUssRUFBRSxHQUF0QjtBQUEyQkMsVUFBTSxFQUFFO0FBQW5DLEdBRVM7QUFBQSxNQURoQkMsWUFDZ0IsUUFEaEJBLFlBQ2dCO0FBQ2hCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFB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bmRleC5qcy5lNWQ2NmM4ZDk3YWI2MWYxN2RhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSBcImQzLXN2Zy1sZWdlbmRcIjtcbmltcG9ydCB7IFBpZUFyY0RhdHVtIH0gZnJvbSBcImQzXCI7XG5cbmludGVyZmFjZSBWYWx1ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGRhdGE6IFZhbHVlW107XG4gIGRpbXM/OiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyByYWRpdXM6IG51bWJlciB9O1xuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XG59XG5cbmNvbnN0IENoYXJ0ID0gKHtcbiAgZGF0YSxcbiAgZGltcyA9IHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAsIHJhZGl1czogMTUwIH0sXG4gIG9uU2xpY2VDbGljayxcbn06IENoYXJ0UHJvcHMpID0+IHtcbiAgY29uc3QgZ3JhcGhSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY2VudCA9IHsgeDogZGltcy53aWR0aCAvIDIgKyA1LCB5OiBkaW1zLmhlaWdodCAvIDIgKyA1IH07XG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XG4gIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZENvbG9yKCkuc2hhcGUoXCJjaXJjbGVcIikuc2hhcGVQYWRkaW5nKDEwKS5zY2FsZShjb2xvcik7XG5cbiAgY29uc3QgcGllID0gZDNcbiAgICAucGllPFZhbHVlPigpXG4gICAgLnNvcnQobnVsbClcbiAgICAudmFsdWUoKGQpID0+IGQuY29zdCk7XG5cbiAgY29uc3QgYXJjUGF0aCA9IGQzXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcbiAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXG4gICAgLmlubmVyUmFkaXVzKGRpbXMucmFkaXVzIC8gMik7XG5cbiAgLy8gYXJjIHR3ZWVuc1xuICBjb25zdCBhcmNUd2VlbnMgPSB7XG4gICAgZW50ZXIoZCkge1xuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUsIGQuc3RhcnRBbmdsZSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xuXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHVwZGF0ZShkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XG5cbiAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDEpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoaSh0KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgZXhpdChkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XG5cbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICB9O1xuICAgIH0sXG4gIH07XG4gIC8vIHVwZGF0ZSBkb21cbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBncmFwaCA9IGQzLnNlbGVjdChncmFwaFJlZi5jdXJyZW50KTtcbiAgICBjb25zdCBwYXRocyA9IGdyYXBoLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShwaWUoZGF0YSkpO1xuXG4gICAgLy8gY29uZmlndXJlIGNvbG9yc1xuICAgIGNvbG9yLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XG5cbiAgICAvLyBhdHRhY2ggbGVnZW5kXG4gICAgZDMuc2VsZWN0KGxlZ2VuZFJlZi5jdXJyZW50KVxuICAgICAgLmNhbGwobGVnZW5kKVxuICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG5cbiAgICAvLyBoYW5kbGUgZXhpdCBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmV4aXQoKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVuRXhpdClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlblVwZGF0ZSk7XG5cbiAgICAvLyBoYW5kbGUgZW50ZXIgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiBjb2xvcihkLmRhdGEubmFtZSkpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzW1wiX2N1cnJlbnRcIl0gPSBkO1xuICAgICAgfSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbkVudGVyKTtcblxuICAgIC8vIGFkZCBldmVudHNcbiAgICBncmFwaFxuICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZDogUGllQXJjRGF0dW08VmFsdWU+LCBpLCBuKSA9PiB7XG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgY29sb3IoZC5kYXRhLm5hbWUpKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJjbGlja1wiLCAoZDogUGllQXJjRGF0dW08VmFsdWU+KSA9PiBvblNsaWNlQ2xpY2soZC5kYXRhKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cbiAgICAgIDxnIHJlZj17Z3JhcGhSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnQueH0sICR7Y2VudC55fSlgfSAvPlxuICAgICAgPGcgcmVmPXtsZWdlbmRSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RpbXMud2lkdGggKyA0MH0sIDEwKWB9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=