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
      var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.endAngle - 0.1, d.startAngle);
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
    var paths = graph.selectAll("path").data(pie(data)); // @ts-ignore

    var tooltip = Object(d3_tip__WEBPACK_IMPORTED_MODULE_2__["default"])().attr("class", "tip card").html(function (d) {
      return "<div style=\"padding: 10px; background: #333; color: #fff\">\n              <div class=\"name\">".concat(d.data.name, "</div>\n              <div class=\"cost\">").concat(d.data.cost, "</div>\n              <div class=\"delete\" style=\"color: hotpink; font-size: .8em\">Click slice to delete</div>\n            </div>");
    }); // attach tooltip

    graph.call(tooltip);
    tooltip.hide(); // configure colors

    color.domain(data.map(function (d) {
      return d.name;
    })); // attach legend

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](legendRef.current).call(legend).selectAll("text").attr("fill", "#fff"); // handle exit dom paths

    paths.exit().transition("changeSliceAngle").duration(750).attrTween("d", arcTweens.exit).remove(); // handle current dom paths

    paths.transition("changeSliceAngle").duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("d", arcPath).attr("fill", function (d) {
      return color(d.data.name);
    }).each(function (d) {
      this["_current"] = d;
    }).transition("changeSliceAngle").duration(750).attrTween("d", arcTweens.enter); // add events

    graph.selectAll("path").on("mouseover", function (d, i, n) {
      tooltip.show(d, n[i]);
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition("changeSliceFill").duration(300).attr("fill", "#fff");
    }).on("mouseout", function (d, i, n) {
      tooltip.hide();
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition("changeSliceFill").duration(300).attr("fill", color(d.data.name));
    }).on("click", function (d) {
      tooltip.hide();
      onSliceClick(d.data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    update(data);
    var interval = setInterval(function () {
      return update(data);
    }, 750);
    return function () {
      return clearInterval(interval);
    };
  }, [data]);
  return __jsx("svg", {
    width: dims.width + 150,
    height: dims.height + 150,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImhpZGUiLCJkb21haW4iLCJtYXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhdHRyVHdlZW4iLCJyZW1vdmUiLCJhcHBlbmQiLCJlYWNoIiwib24iLCJuIiwic2hvdyIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFhQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLHVCQUZoQkMsSUFFZ0I7QUFBQSxNQUZoQkEsSUFFZ0IsMEJBRlQ7QUFBRUMsVUFBTSxFQUFFLEdBQVY7QUFBZUMsU0FBSyxFQUFFLEdBQXRCO0FBQTJCQyxVQUFNLEVBQUU7QUFBbkMsR0FFUztBQUFBLE1BRGhCQyxZQUNnQixRQURoQkEs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Q0FBTjtBQUVBLFFBQU0yRCxRQUFRLEdBQUdDLFdBQVcsQ0FBQztBQUFBLGFBQU0zQixNQUFNLENBQUNqQyxJQUFELENBQVo7QUFBQSxLQUFELEVBQXFCLEdBQXJCLENBQTVCO0FBRUEsV0FBTztBQUFBLGFBQU02RCxhQUFhLENBQUNGLFFBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0FOUSxFQU1OLENBQUMzRCxJQUFELENBTk0sQ0FBVDtBQVFBLFNBQ0U7QUFBSyxTQUFLLEVBQUVDLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEdBQXpCO0FBQThCLFVBQU0sRUFBRUYsSUFBSSxDQUFDQyxNQUFMLEdBQWMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFFSSxRQUFSO0FBQWtCLGFBQVMsc0JBQWVHLElBQUksQ0FBQ0MsQ0FBcEIsZUFBMEJELElBQUksQ0FBQ0UsQ0FBL0IsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxPQUFHLEVBQUVILFNBQVI7QUFBbUIsYUFBUyxzQkFBZVAsSUFBSSxDQUFDRSxLQUFMLEdBQWEsRUFBNUIsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQXpKRDs7R0FBTUosSzs7S0FBQUEsSztBQTJKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjEwNjc1MmFiNjllYmU2ZGEzMTEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IGQzVGlwIGZyb20gXCJkMy10aXBcIjtcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSBcImQzLXN2Zy1sZWdlbmRcIjtcblxuaW50ZXJmYWNlIFZhbHVlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFydFByb3BzIHtcbiAgZGF0YTogVmFsdWVbXTtcbiAgZGltcz86IHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IHJhZGl1czogbnVtYmVyIH07XG4gIG9uU2xpY2VDbGljazogKGRhdGEpID0+IFByb21pc2U8YW55Pjtcbn1cblxuY29uc3QgQ2hhcnQgPSAoe1xuICBkYXRhLFxuICBkaW1zID0geyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCwgcmFkaXVzOiAxNTAgfSxcbiAgb25TbGljZUNsaWNrLFxufTogQ2hhcnRQcm9wcykgPT4ge1xuICBjb25zdCBncmFwaFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsZWdlbmRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjZW50ID0geyB4OiBkaW1zLndpZHRoIC8gMiArIDUsIHk6IGRpbXMuaGVpZ2h0IC8gMiArIDUgfTtcbiAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDNbXCJzY2hlbWVTZXQzXCJdKTtcbiAgY29uc3QgbGVnZW5kID0gbGVnZW5kQ29sb3IoKS5zaGFwZShcImNpcmNsZVwiKS5zaGFwZVBhZGRpbmcoMTApLnNjYWxlKGNvbG9yKTtcblxuICBjb25zdCBwaWUgPSBkM1xuICAgIC5waWU8VmFsdWU+KClcbiAgICAuc29ydChudWxsKVxuICAgIC52YWx1ZSgoZCkgPT4gZC5jb3N0KTtcblxuICBjb25zdCBhcmNQYXRoID0gZDNcbiAgICAuYXJjPGQzLlBpZUFyY0RhdHVtPFZhbHVlPj4oKVxuICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcbiAgICAuaW5uZXJSYWRpdXMoZGltcy5yYWRpdXMgLyAyKTtcblxuICAvLyBhcmMgdHdlZW5zXG4gIGNvbnN0IGFyY1R3ZWVucyA9IHtcbiAgICBlbnRlcihkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5lbmRBbmdsZSAtIDAuMSwgZC5zdGFydEFuZ2xlKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XG5cbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgdXBkYXRlKGQpIHtcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZSh0aGlzLl9jdXJyZW50LCBkKTtcblxuICAgICAgdGhpcy5fY3VycmVudCA9IGkoMSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gYXJjUGF0aChpKHQpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBleGl0KGQpIHtcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcblxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcblxuICAvLyB1cGRhdGUgZG9tXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgZ3JhcGggPSBkMy5zZWxlY3QoZ3JhcGhSZWYuY3VycmVudCk7XG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKGRhdGEpKTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB0b29sdGlwID0gZDNUaXAoKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpcCBjYXJkXCIpXG4gICAgICAuaHRtbCgoZCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7ZC5kYXRhLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3N0XCI+JHtkLmRhdGEuY29zdH08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIHN0eWxlPVwiY29sb3I6IGhvdHBpbms7IGZvbnQtc2l6ZTogLjhlbVwiPkNsaWNrIHNsaWNlIHRvIGRlbGV0ZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIH0pO1xuXG4gICAgLy8gYXR0YWNoIHRvb2x0aXBcbiAgICBncmFwaC5jYWxsKHRvb2x0aXApO1xuXG4gICAgdG9vbHRpcC5oaWRlKCk7XG5cbiAgICAvLyBjb25maWd1cmUgY29sb3JzXG4gICAgY29sb3IuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLm5hbWUpKTtcblxuICAgIC8vIGF0dGFjaCBsZWdlbmRcbiAgICBkMy5zZWxlY3QobGVnZW5kUmVmLmN1cnJlbnQpXG4gICAgICAuY2FsbChsZWdlbmQpXG4gICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcblxuICAgIC8vIGhhbmRsZSBleGl0IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuZXhpdCgpXG4gICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlQW5nbGVcIilcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZXhpdClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlQW5nbGVcIilcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMudXBkYXRlKTtcblxuICAgIC8vIGhhbmRsZSBlbnRlciBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDMpXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gY29sb3IoZC5kYXRhLm5hbWUpKVxuICAgICAgLmVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdGhpc1tcIl9jdXJyZW50XCJdID0gZDtcbiAgICAgIH0pXG4gICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlQW5nbGVcIilcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZW50ZXIpO1xuXG4gICAgLy8gYWRkIGV2ZW50c1xuICAgIGdyYXBoXG4gICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgIHRvb2x0aXAuc2hvdyhkLCBuW2ldKTtcblxuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+LCBpLCBuKSA9PiB7XG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xuXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgY29sb3IoZC5kYXRhLm5hbWUpKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJjbGlja1wiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+KSA9PiB7XG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xuXG4gICAgICAgIG9uU2xpY2VDbGljayhkLmRhdGEpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHVwZGF0ZShkYXRhKSwgNzUwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e2RpbXMud2lkdGggKyAxNTB9IGhlaWdodD17ZGltcy5oZWlnaHQgKyAxNTB9PlxuICAgICAgPGcgcmVmPXtncmFwaFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWB9IC8+XG4gICAgICA8ZyByZWY9e2xlZ2VuZFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ZGltcy53aWR0aCArIDQwfSwgMTApYH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==