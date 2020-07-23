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
      var _i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.endAngle, d.startAngle);

      return function (t) {
        d.startAngle = _i(t);
        return arcPath(d);
      };
    },
    update: function update(d, i, n) {
      var _i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](n[i]._current, d);

      n[i]._current = _i(1);
      return function (t) {
        return arcPath(_i(t));
      };
    },
    exit: function exit(d) {
      var _i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.startAngle, d.endAngle);

      return function (t) {
        d.startAngle = _i(t);
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

    paths.transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("d", arcPath).attr("fill", function (d) {
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
    update(data);
  }, [data]);
  return __jsx("svg", {
    width: dims.width + 150,
    height: dims.height + 150,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJfaSIsImVuZEFuZ2xlIiwic3RhcnRBbmdsZSIsInQiLCJ1cGRhdGUiLCJpIiwibiIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImFwcGVuZCIsIm9uIiwic2hvdyIsImhpZGUiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJDLFlBQ2dCLFFBRGhCQSxZQUNnQjtBQUNoQixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCO0FB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SSxDQUFDQyxNQUFMLEdBQWMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFFSSxRQUFSO0FBQWtCLGFBQVMsc0JBQWVHLElBQUksQ0FBQ0MsQ0FBcEIsZUFBMEJELElBQUksQ0FBQ0UsQ0FBL0IsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxPQUFHLEVBQUVILFNBQVI7QUFBbUIsYUFBUyxzQkFBZVAsSUFBSSxDQUFDRSxLQUFMLEdBQWEsRUFBNUIsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQTdJRDs7R0FBTUosSzs7S0FBQUEsSztBQStJU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjI5MzEwY2NkOTk5ZDAzYWNkMTA3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IGQzVGlwIGZyb20gXCJkMy10aXBcIjtcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSBcImQzLXN2Zy1sZWdlbmRcIjtcblxuaW50ZXJmYWNlIFZhbHVlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFydFByb3BzIHtcbiAgZGF0YTogVmFsdWVbXTtcbiAgZGltcz86IHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IHJhZGl1czogbnVtYmVyIH07XG4gIG9uU2xpY2VDbGljazogKGRhdGEpID0+IFByb21pc2U8YW55Pjtcbn1cblxuY29uc3QgQ2hhcnQgPSAoe1xuICBkYXRhLFxuICBkaW1zID0geyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCwgcmFkaXVzOiAxNTAgfSxcbiAgb25TbGljZUNsaWNrLFxufTogQ2hhcnRQcm9wcykgPT4ge1xuICBjb25zdCBncmFwaFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsZWdlbmRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjZW50ID0geyB4OiBkaW1zLndpZHRoIC8gMiArIDUsIHk6IGRpbXMuaGVpZ2h0IC8gMiArIDUgfTtcbiAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDNbXCJzY2hlbWVTZXQzXCJdKTtcbiAgY29uc3QgbGVnZW5kID0gbGVnZW5kQ29sb3IoKS5zaGFwZShcImNpcmNsZVwiKS5zaGFwZVBhZGRpbmcoMTApLnNjYWxlKGNvbG9yKTtcblxuICBjb25zdCBwaWUgPSBkM1xuICAgIC5waWU8VmFsdWU+KClcbiAgICAuc29ydChudWxsKVxuICAgIC52YWx1ZSgoZCkgPT4gZC5jb3N0KTtcblxuICBjb25zdCBhcmNQYXRoID0gZDNcbiAgICAuYXJjPGQzLlBpZUFyY0RhdHVtPFZhbHVlPj4oKVxuICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcbiAgICAuaW5uZXJSYWRpdXMoZGltcy5yYWRpdXMgLyAyKTtcblxuICAvLyBhcmMgdHdlZW5zXG4gIGNvbnN0IGFyY1R3ZWVucyA9IHtcbiAgICBlbnRlcihkKSB7XG4gICAgICBjb25zdCBfaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUsIGQuc3RhcnRBbmdsZSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBfaSh0KTtcblxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICB1cGRhdGUoZCwgaSwgbikge1xuICAgICAgY29uc3QgX2kgPSBkMy5pbnRlcnBvbGF0ZShuW2ldLl9jdXJyZW50LCBkKTtcblxuICAgICAgbltpXS5fY3VycmVudCA9IF9pKDEpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoX2kodCkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGV4aXQoZCkge1xuICAgICAgY29uc3QgX2kgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gX2kodCk7XG5cbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICB9O1xuICAgIH0sXG4gIH07XG5cbiAgLy8gdXBkYXRlIGRvbVxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IHBhdGhzID0gZ3JhcGguc2VsZWN0QWxsKFwicGF0aFwiKS5kYXRhKHBpZShkYXRhKSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgdG9vbHRpcCA9IGQzVGlwKClcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXAgY2FyZFwiKVxuICAgICAgLmh0bWwoKGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweDsgYmFja2dyb3VuZDogIzMzMzsgY29sb3I6ICNmZmZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke2QuZGF0YS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29zdFwiPiR7ZC5kYXRhLmNvc3R9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIiBzdHlsZT1cImNvbG9yOiBob3RwaW5rOyBmb250LXNpemU6IC44ZW1cIj5DbGljayBzbGljZSB0byBkZWxldGU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9KTtcblxuICAgIC8vIGF0dGFjaCB0b29sdGlwXG4gICAgZ3JhcGguY2FsbCh0b29sdGlwKTtcblxuICAgIC8vIGNvbmZpZ3VyZSBjb2xvcnNcbiAgICBjb2xvci5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xuXG4gICAgLy8gYXR0YWNoIGxlZ2VuZFxuICAgIGQzLnNlbGVjdChsZWdlbmRSZWYuY3VycmVudClcbiAgICAgIC5jYWxsKGxlZ2VuZClcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuXG4gICAgLy8gaGFuZGxlIGV4aXQgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5leGl0KClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZXhpdClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xuICAgIHBhdGhzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLnVwZGF0ZSk7XG5cbiAgICAvLyBoYW5kbGUgZW50ZXIgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJkXCIsIGFyY1BhdGgpXG4gICAgICAuYXR0cihcImZpbGxcIiwgKGQpID0+IGNvbG9yKGQuZGF0YS5uYW1lKSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZW50ZXIpO1xuXG4gICAgLy8gYWRkIGV2ZW50c1xuICAgIGdyYXBoXG4gICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgIHRvb2x0aXAuc2hvdyhkLCBuW2ldKTtcblxuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+LCBpLCBuKSA9PiB7XG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xuXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgY29sb3IoZC5kYXRhLm5hbWUpKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJjbGlja1wiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+KSA9PiB7XG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xuXG4gICAgICAgIG9uU2xpY2VDbGljayhkLmRhdGEpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cbiAgICAgIDxnIHJlZj17Z3JhcGhSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnQueH0sICR7Y2VudC55fSlgfSAvPlxuICAgICAgPGcgcmVmPXtsZWdlbmRSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RpbXMud2lkdGggKyA0MH0sIDEwKWB9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=