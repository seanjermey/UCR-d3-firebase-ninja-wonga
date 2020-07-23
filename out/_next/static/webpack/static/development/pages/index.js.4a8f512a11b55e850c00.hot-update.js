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
/* harmony import */ var d3_tip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-tip */ "./node_modules/d3-tip/index.js");
/* harmony import */ var d3_svg_legend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-svg-legend */ "./node_modules/d3-svg-legend/indexRollupNext.js");
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
  var legend = Object(d3_svg_legend__WEBPACK_IMPORTED_MODULE_3__["legendColor"])().shape("circle").shapePadding(10).scale(color);
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
    var paths = graph.selectAll("path").data(pie(data));
    var tooltip = Object(d3_tip__WEBPACK_IMPORTED_MODULE_2__["default"])().attr("class", "tip card").html(function (d) {
      return "<div>\n              <div className=\"name\">".concat(d.data.name, "</div>\n            </div>");
    }); // attach tooltip

    graph.call(tooltip); // configure colors

    color.domain(data.map(function (d) {
      return d.name;
    })); // attach legend

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](legendRef.current).call(legend).selectAll("text").attr("fill", "#fff"); // handle exit dom paths

    paths.exit().transition().duration(750).attrTween("d", arcTweens.exit).remove(); // handle current dom paths

    paths.attr("d", arcPath).transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("fill", function (d) {
      return color(d.data.name);
    }).each(function (d) {
      this["_current"] = d;
    }).transition().duration(750).attrTween("d", arcTweens.enter); // add events

    graph.selectAll("path").on("mouseover", function (d, i, n) {
      tooltip.show(d, n[i]);
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition("changeSliceFill").duration(300).attr("fill", "#fff");
    }).on("mouseout", function (d, i, n) {
      tooltip.hide();
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
      lineNumber: 152,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImFwcGVuZCIsImVhY2giLCJvbiIsIm4iLCJzaG93IiwiaGlkZSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBYUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSx1QkFGaEJDLElBRWdCO0FBQUEsTUFGaEJBLElBRWdCLDBCQUZUO0FBQUVDLFVBQU0sRUFBRSxHQUFWO0FBQWVDLFNBQUssRUFBRSxHQUF0QjtBQUEyQkMsVUFBTSxFQUFFO0FBQW5DLEdBRVM7QUFBQSxNQURoQkMsWUFDZ0IsUUFEaEJBLFlBQ2dCO0FBQ2hCLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7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RyxFQUFFSSxRQUFSO0FBQWtCLGFBQVMsc0JBQWVHLElBQUksQ0FBQ0MsQ0FBcEIsZUFBMEJELElBQUksQ0FBQ0UsQ0FBL0IsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxPQUFHLEVBQUVILFNBQVI7QUFBbUIsYUFBUyxzQkFBZVAsSUFBSSxDQUFDRSxLQUFMLEdBQWEsRUFBNUIsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQTVJRDs7R0FBTUosSzs7S0FBQUEsSztBQThJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjRhOGY1MTJhMTFiNTVlODUwYzAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IGQzVGlwIGZyb20gXCJkMy10aXBcIjtcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSBcImQzLXN2Zy1sZWdlbmRcIjtcblxuaW50ZXJmYWNlIFZhbHVlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFydFByb3BzIHtcbiAgZGF0YTogVmFsdWVbXTtcbiAgZGltcz86IHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IHJhZGl1czogbnVtYmVyIH07XG4gIG9uU2xpY2VDbGljazogKGRhdGEpID0+IFByb21pc2U8YW55Pjtcbn1cblxuY29uc3QgQ2hhcnQgPSAoe1xuICBkYXRhLFxuICBkaW1zID0geyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCwgcmFkaXVzOiAxNTAgfSxcbiAgb25TbGljZUNsaWNrLFxufTogQ2hhcnRQcm9wcykgPT4ge1xuICBjb25zdCBncmFwaFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsZWdlbmRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjZW50ID0geyB4OiBkaW1zLndpZHRoIC8gMiArIDUsIHk6IGRpbXMuaGVpZ2h0IC8gMiArIDUgfTtcbiAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDNbXCJzY2hlbWVTZXQzXCJdKTtcbiAgY29uc3QgbGVnZW5kID0gbGVnZW5kQ29sb3IoKS5zaGFwZShcImNpcmNsZVwiKS5zaGFwZVBhZGRpbmcoMTApLnNjYWxlKGNvbG9yKTtcblxuICBjb25zdCBwaWUgPSBkM1xuICAgIC5waWU8VmFsdWU+KClcbiAgICAuc29ydChudWxsKVxuICAgIC52YWx1ZSgoZCkgPT4gZC5jb3N0KTtcblxuICBjb25zdCBhcmNQYXRoID0gZDNcbiAgICAuYXJjPGQzLlBpZUFyY0RhdHVtPFZhbHVlPj4oKVxuICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcbiAgICAuaW5uZXJSYWRpdXMoZGltcy5yYWRpdXMgLyAyKTtcblxuICAvLyBhcmMgdHdlZW5zXG4gIGNvbnN0IGFyY1R3ZWVucyA9IHtcbiAgICBlbnRlcihkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5lbmRBbmdsZSwgZC5zdGFydEFuZ2xlKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XG5cbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgdXBkYXRlKGQpIHtcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZSh0aGlzLl9jdXJyZW50LCBkKTtcblxuICAgICAgdGhpcy5fY3VycmVudCA9IGkoMSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gYXJjUGF0aChpKHQpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBleGl0KGQpIHtcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcblxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcblxuICAvLyB1cGRhdGUgZG9tXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgZ3JhcGggPSBkMy5zZWxlY3QoZ3JhcGhSZWYuY3VycmVudCk7XG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKGRhdGEpKTtcblxuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1RpcCgpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidGlwIGNhcmRcIilcbiAgICAgIC5odG1sKChkKSA9PiB7XG4gICAgICAgIHJldHVybiBgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+JHtkLmRhdGEubmFtZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9KTtcblxuICAgIC8vIGF0dGFjaCB0b29sdGlwXG4gICAgZ3JhcGguY2FsbCh0b29sdGlwKTtcblxuICAgIC8vIGNvbmZpZ3VyZSBjb2xvcnNcbiAgICBjb2xvci5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xuXG4gICAgLy8gYXR0YWNoIGxlZ2VuZFxuICAgIGQzLnNlbGVjdChsZWdlbmRSZWYuY3VycmVudClcbiAgICAgIC5jYWxsKGxlZ2VuZClcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuXG4gICAgLy8gaGFuZGxlIGV4aXQgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5leGl0KClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZXhpdClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMudXBkYXRlKTtcblxuICAgIC8vIGhhbmRsZSBlbnRlciBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDMpXG4gICAgICAuYXR0cihcImZpbGxcIiwgKGQpID0+IGNvbG9yKGQuZGF0YS5uYW1lKSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHRoaXNbXCJfY3VycmVudFwiXSA9IGQ7XG4gICAgICB9KVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5lbnRlcik7XG5cbiAgICAvLyBhZGQgZXZlbnRzXG4gICAgZ3JhcGhcbiAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGksIG4pID0+IHtcbiAgICAgICAgdG9vbHRpcC5zaG93KGQsIG5baV0pO1xuXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4sIGksIG4pID0+IHtcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XG5cbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBjb2xvcihkLmRhdGEubmFtZSkpO1xuICAgICAgfSlcbiAgICAgIC5vbihcImNsaWNrXCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4pID0+IG9uU2xpY2VDbGljayhkLmRhdGEpKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e2RpbXMud2lkdGggKyAxNTB9IGhlaWdodD17ZGltcy5oZWlnaHQgKyAxNTB9PlxuICAgICAgPGcgcmVmPXtncmFwaFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWB9IC8+XG4gICAgICA8ZyByZWY9e2xlZ2VuZFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ZGltcy53aWR0aCArIDQwfSwgMTApYH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==