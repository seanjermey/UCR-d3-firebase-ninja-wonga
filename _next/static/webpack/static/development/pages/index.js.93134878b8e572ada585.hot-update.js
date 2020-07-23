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
    var paths = graph.selectAll("path").data(pie(data)); // @ts-ignore

    var tooltip = Object(d3_tip__WEBPACK_IMPORTED_MODULE_2__["default"])().attr("class", "tip card").html(function (d) {
      return "<div style=\"padding: 10px; background: #333; color: #fff\">\n              <div class=\"name\">".concat(d.data.name, "</div>\n              <div class=\"cost\">").concat(d.data.cost, "</div>\n              <div class=\"delete\" style=\"color: hotpink; font-size: .8em\">Click slice to delete</div>\n            </div>");
    }); // attach tooltip

    graph.call(tooltip); // configure colors

    color.domain(data.map(function (d) {
      return d.name;
    })); // attach legend

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](legendRef.current).call(legend).selectAll("text").attr("fill", "#fff"); // handle exit dom paths

    paths.exit().transition().duration(750).attrTween("d", arcTweens.exit).remove(); // handle current dom paths

    paths.attr("d", arcPath).transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

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
      lineNumber: 161,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImFwcGVuZCIsImVhY2giLCJvbiIsIm4iLCJzaG93IiwiaGlkZSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJDLFlBQ2dCLFFBRGhCQSxZQUNnQjtBQUNoQixNQUFNQyxRQUFRLEdB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QUFLLEVBQUVDLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEdBQXpCO0FBQThCLFVBQU0sRUFBRUYsSUFBSSxDQUFDQyxNQUFMLEdBQWMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFFSSxRQUFSO0FBQWtCLGFBQVMsc0JBQWVHLElBQUksQ0FBQ0MsQ0FBcEIsZUFBMEJELElBQUksQ0FBQ0UsQ0FBL0IsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxPQUFHLEVBQUVILFNBQVI7QUFBbUIsYUFBUyxzQkFBZVAsSUFBSSxDQUFDRSxLQUFMLEdBQWEsRUFBNUIsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQXJKRDs7R0FBTUosSzs7S0FBQUEsSztBQXVKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjkzMTM0ODc4YjhlNTcyYWRhNTg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XHJcbmltcG9ydCBkM1RpcCBmcm9tIFwiZDMtdGlwXCI7XHJcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSBcImQzLXN2Zy1sZWdlbmRcIjtcclxuXHJcbmludGVyZmFjZSBWYWx1ZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNvc3Q6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xyXG4gIGRhdGE6IFZhbHVlW107XHJcbiAgZGltcz86IHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IHJhZGl1czogbnVtYmVyIH07XHJcbiAgb25TbGljZUNsaWNrOiAoZGF0YSkgPT4gUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5jb25zdCBDaGFydCA9ICh7XHJcbiAgZGF0YSxcclxuICBkaW1zID0geyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCwgcmFkaXVzOiAxNTAgfSxcclxuICBvblNsaWNlQ2xpY2ssXHJcbn06IENoYXJ0UHJvcHMpID0+IHtcclxuICBjb25zdCBncmFwaFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGxlZ2VuZFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBjZW50ID0geyB4OiBkaW1zLndpZHRoIC8gMiArIDUsIHk6IGRpbXMuaGVpZ2h0IC8gMiArIDUgfTtcclxuICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkM1tcInNjaGVtZVNldDNcIl0pO1xyXG4gIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZENvbG9yKCkuc2hhcGUoXCJjaXJjbGVcIikuc2hhcGVQYWRkaW5nKDEwKS5zY2FsZShjb2xvcik7XHJcblxyXG4gIGNvbnN0IHBpZSA9IGQzXHJcbiAgICAucGllPFZhbHVlPigpXHJcbiAgICAuc29ydChudWxsKVxyXG4gICAgLnZhbHVlKChkKSA9PiBkLmNvc3QpO1xyXG5cclxuICBjb25zdCBhcmNQYXRoID0gZDNcclxuICAgIC5hcmM8ZDMuUGllQXJjRGF0dW08VmFsdWU+PigpXHJcbiAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXHJcbiAgICAuaW5uZXJSYWRpdXMoZGltcy5yYWRpdXMgLyAyKTtcclxuXHJcbiAgLy8gYXJjIHR3ZWVuc1xyXG4gIGNvbnN0IGFyY1R3ZWVucyA9IHtcclxuICAgIGVudGVyKGQpIHtcclxuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUsIGQuc3RhcnRBbmdsZSk7XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XHJcblxyXG4gICAgICB0aGlzLl9jdXJyZW50ID0gaSgxKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGkodCkpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGV4aXQoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvLyB1cGRhdGUgZG9tXHJcbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKGRhdGEpKTtcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCB0b29sdGlwID0gZDNUaXAoKVxyXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidGlwIGNhcmRcIilcclxuICAgICAgLmh0bWwoKGQpID0+IHtcclxuICAgICAgICByZXR1cm4gYDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHtkLmRhdGEubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29zdFwiPiR7ZC5kYXRhLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIHN0eWxlPVwiY29sb3I6IGhvdHBpbms7IGZvbnQtc2l6ZTogLjhlbVwiPkNsaWNrIHNsaWNlIHRvIGRlbGV0ZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBhdHRhY2ggdG9vbHRpcFxyXG4gICAgZ3JhcGguY2FsbCh0b29sdGlwKTtcclxuXHJcbiAgICAvLyBjb25maWd1cmUgY29sb3JzXHJcbiAgICBjb2xvci5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xyXG5cclxuICAgIC8vIGF0dGFjaCBsZWdlbmRcclxuICAgIGQzLnNlbGVjdChsZWdlbmRSZWYuY3VycmVudClcclxuICAgICAgLmNhbGwobGVnZW5kKVxyXG4gICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxyXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xyXG5cclxuICAgIC8vIGhhbmRsZSBleGl0IGRvbSBwYXRoc1xyXG4gICAgcGF0aHNcclxuICAgICAgLmV4aXQoKVxyXG4gICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgIC5kdXJhdGlvbig3NTApXHJcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5leGl0KVxyXG4gICAgICAucmVtb3ZlKCk7XHJcblxyXG4gICAgLy8gaGFuZGxlIGN1cnJlbnQgZG9tIHBhdGhzXHJcbiAgICBwYXRoc1xyXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcclxuICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAuZHVyYXRpb24oNzUwKVxyXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMudXBkYXRlKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgZW50ZXIgZG9tIHBhdGhzXHJcbiAgICBwYXRoc1xyXG4gICAgICAuZW50ZXIoKVxyXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIHRoaXNbXCJfY3VycmVudFwiXSA9IGQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmNcIilcclxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXHJcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDMpXHJcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gY29sb3IoZC5kYXRhLm5hbWUpKVxyXG4gICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgIC5kdXJhdGlvbig3NTApXHJcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5lbnRlcik7XHJcblxyXG4gICAgLy8gYWRkIGV2ZW50c1xyXG4gICAgZ3JhcGhcclxuICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcclxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpLCBuKSA9PiB7XHJcbiAgICAgICAgdG9vbHRpcC5zaG93KGQsIG5baV0pO1xyXG5cclxuICAgICAgICBkMy5zZWxlY3QobltpXSlcclxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXHJcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxyXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPiwgaSwgbikgPT4ge1xyXG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xyXG5cclxuICAgICAgICBkMy5zZWxlY3QobltpXSlcclxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXHJcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxyXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbG9yKGQuZGF0YS5uYW1lKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcImNsaWNrXCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4pID0+IHtcclxuICAgICAgICB0b29sdGlwLmhpZGUoKTtcclxuXHJcbiAgICAgICAgb25TbGljZUNsaWNrKGQuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICB1cGRhdGUoZGF0YSk7XHJcbiAgfSwgW2RhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9e2RpbXMud2lkdGggKyAxNTB9IGhlaWdodD17ZGltcy5oZWlnaHQgKyAxNTB9PlxyXG4gICAgICA8ZyByZWY9e2dyYXBoUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjZW50Lnh9LCAke2NlbnQueX0pYH0gLz5cclxuICAgICAgPGcgcmVmPXtsZWdlbmRSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RpbXMud2lkdGggKyA0MH0sIDEwKWB9IC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=