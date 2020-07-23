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
    console.log(paths); // @ts-ignore

    var tooltip = Object(d3_tip__WEBPACK_IMPORTED_MODULE_2__["default"])().attr("class", "tip card").html(function (d) {
      return "<div style=\"padding: 10px; background: #333; color: #fff\">\n              <div class=\"name\">".concat(d.data.name, "</div>\n              <div class=\"cost\">").concat(d.data.cost, "</div>\n              <div class=\"delete\" style=\"color: hotpink; font-size: .8em\">Click slice to delete</div>\n            </div>");
    }); // attach tooltip

    graph.call(tooltip); // configure colors

    color.domain(data.map(function (d) {
      return d.name;
    })); // attach legend

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](legendRef.current).call(legend).selectAll("text").attr("fill", "#fff"); // handle exit dom paths

    paths.exit().transition().duration(750).attrTween("d", arcTweens.exit).remove(); // handle current dom paths

    paths // .attr("d", arcPath)
    .transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

    paths.enter().append("path").each(function (d) {
      this["_current"] = d;
    }).attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("fill", function (d) {
      return color(d.data.name);
    }).transition().duration(750).attrTween("d", arcTweens.enter); // add events

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
    console.log(data);
    update(data);
  }, [data]);
  return __jsx("svg", {
    width: dims.width + 150,
    height: dims.height + 150,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwiY29uc29sZSIsImxvZyIsInRvb2x0aXAiLCJkM1RpcCIsImF0dHIiLCJodG1sIiwibmFtZSIsImNhbGwiLCJkb21haW4iLCJtYXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhdHRyVHdlZW4iLCJyZW1vdmUiLCJhcHBlbmQiLCJlYWNoIiwib24iLCJuIiwic2hvdyIsImhpZGUiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJDLFlBQ2dCLFFBRGhCQSxZQUNnQjtBQUNoQixNQUFNQyxRQUFRLEdB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LFNBQ0U7QUFBSyxTQUFLLEVBQUVDLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEdBQXpCO0FBQThCLFVBQU0sRUFBRUYsSUFBSSxDQUFDQyxNQUFMLEdBQWMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFFSSxRQUFSO0FBQWtCLGFBQVMsc0JBQWVHLElBQUksQ0FBQ0MsQ0FBcEIsZUFBMEJELElBQUksQ0FBQ0UsQ0FBL0IsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxPQUFHLEVBQUVILFNBQVI7QUFBbUIsYUFBUyxzQkFBZVAsSUFBSSxDQUFDRSxLQUFMLEdBQWEsRUFBNUIsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQXZKRDs7R0FBTUosSzs7S0FBQUEsSztBQXlKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjAzY2U0NjE3MTQxMDI0OTU5ZmRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XHJcbmltcG9ydCBkM1RpcCBmcm9tIFwiZDMtdGlwXCI7XHJcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSBcImQzLXN2Zy1sZWdlbmRcIjtcclxuXHJcbmludGVyZmFjZSBWYWx1ZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNvc3Q6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xyXG4gIGRhdGE6IFZhbHVlW107XHJcbiAgZGltcz86IHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IHJhZGl1czogbnVtYmVyIH07XHJcbiAgb25TbGljZUNsaWNrOiAoZGF0YSkgPT4gUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5jb25zdCBDaGFydCA9ICh7XHJcbiAgZGF0YSxcclxuICBkaW1zID0geyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCwgcmFkaXVzOiAxNTAgfSxcclxuICBvblNsaWNlQ2xpY2ssXHJcbn06IENoYXJ0UHJvcHMpID0+IHtcclxuICBjb25zdCBncmFwaFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGxlZ2VuZFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBjZW50ID0geyB4OiBkaW1zLndpZHRoIC8gMiArIDUsIHk6IGRpbXMuaGVpZ2h0IC8gMiArIDUgfTtcclxuICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkM1tcInNjaGVtZVNldDNcIl0pO1xyXG4gIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZENvbG9yKCkuc2hhcGUoXCJjaXJjbGVcIikuc2hhcGVQYWRkaW5nKDEwKS5zY2FsZShjb2xvcik7XHJcblxyXG4gIGNvbnN0IHBpZSA9IGQzXHJcbiAgICAucGllPFZhbHVlPigpXHJcbiAgICAuc29ydChudWxsKVxyXG4gICAgLnZhbHVlKChkKSA9PiBkLmNvc3QpO1xyXG5cclxuICBjb25zdCBhcmNQYXRoID0gZDNcclxuICAgIC5hcmM8ZDMuUGllQXJjRGF0dW08VmFsdWU+PigpXHJcbiAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXHJcbiAgICAuaW5uZXJSYWRpdXMoZGltcy5yYWRpdXMgLyAyKTtcclxuXHJcbiAgLy8gYXJjIHR3ZWVuc1xyXG4gIGNvbnN0IGFyY1R3ZWVucyA9IHtcclxuICAgIGVudGVyKGQpIHtcclxuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUsIGQuc3RhcnRBbmdsZSk7XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XHJcblxyXG4gICAgICB0aGlzLl9jdXJyZW50ID0gaSgxKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGkodCkpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGV4aXQoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvLyB1cGRhdGUgZG9tXHJcbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKGRhdGEpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwYXRocyk7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgdG9vbHRpcCA9IGQzVGlwKClcclxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpcCBjYXJkXCIpXHJcbiAgICAgIC5odG1sKChkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweDsgYmFja2dyb3VuZDogIzMzMzsgY29sb3I6ICNmZmZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7ZC5kYXRhLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvc3RcIj4ke2QuZGF0YS5jb3N0fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIiBzdHlsZT1cImNvbG9yOiBob3RwaW5rOyBmb250LXNpemU6IC44ZW1cIj5DbGljayBzbGljZSB0byBkZWxldGU8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gYXR0YWNoIHRvb2x0aXBcclxuICAgIGdyYXBoLmNhbGwodG9vbHRpcCk7XHJcblxyXG4gICAgLy8gY29uZmlndXJlIGNvbG9yc1xyXG4gICAgY29sb3IuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLm5hbWUpKTtcclxuXHJcbiAgICAvLyBhdHRhY2ggbGVnZW5kXHJcbiAgICBkMy5zZWxlY3QobGVnZW5kUmVmLmN1cnJlbnQpXHJcbiAgICAgIC5jYWxsKGxlZ2VuZClcclxuICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcclxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgZXhpdCBkb20gcGF0aHNcclxuICAgIHBhdGhzXHJcbiAgICAgIC5leGl0KClcclxuICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAuZHVyYXRpb24oNzUwKVxyXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZXhpdClcclxuICAgICAgLnJlbW92ZSgpO1xyXG5cclxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xyXG4gICAgcGF0aHNcclxuICAgICAgLy8gLmF0dHIoXCJkXCIsIGFyY1BhdGgpXHJcbiAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgLmR1cmF0aW9uKDc1MClcclxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLnVwZGF0ZSk7XHJcblxyXG4gICAgLy8gaGFuZGxlIGVudGVyIGRvbSBwYXRoc1xyXG4gICAgcGF0aHNcclxuICAgICAgLmVudGVyKClcclxuICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgLmVhY2goZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICB0aGlzW1wiX2N1cnJlbnRcIl0gPSBkO1xyXG4gICAgICB9KVxyXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpXHJcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI2ZmZlwiKVxyXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxyXG4gICAgICAuYXR0cihcImZpbGxcIiwgKGQpID0+IGNvbG9yKGQuZGF0YS5uYW1lKSlcclxuICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAuZHVyYXRpb24oNzUwKVxyXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZW50ZXIpO1xyXG5cclxuICAgIC8vIGFkZCBldmVudHNcclxuICAgIGdyYXBoXHJcbiAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXHJcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSwgbikgPT4ge1xyXG4gICAgICAgIHRvb2x0aXAuc2hvdyhkLCBuW2ldKTtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXHJcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcclxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4sIGksIG4pID0+IHtcclxuICAgICAgICB0b29sdGlwLmhpZGUoKTtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXHJcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcclxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBjb2xvcihkLmRhdGEubmFtZSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJjbGlja1wiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+KSA9PiB7XHJcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XHJcblxyXG4gICAgICAgIG9uU2xpY2VDbGljayhkLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgdXBkYXRlKGRhdGEpO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cclxuICAgICAgPGcgcmVmPXtncmFwaFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWB9IC8+XHJcbiAgICAgIDxnIHJlZj17bGVnZW5kUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtkaW1zLndpZHRoICsgNDB9LCAxMClgfSAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9