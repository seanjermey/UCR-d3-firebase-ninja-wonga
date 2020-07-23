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
    enter: function enter(d, i, n) {
      var _i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](n.length > 1 ? 0 : d.endAngle, d.startAngle);

      return function (t) {
        d.startAngle = _i(t);
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

    paths.transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

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
      tooltip.hide();
      onSliceClick(d.data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    update(data.reverse());
  }, [data]);
  return __jsx("svg", {
    width: dims.width + 150,
    height: dims.height + 150,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwibiIsIl9pIiwibGVuZ3RoIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImFwcGVuZCIsImVhY2giLCJvbiIsInNob3ciLCJoaWRlIiwidXNlRWZmZWN0IiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBYUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSx1QkFGaEJDLElBRWdCO0FBQUEsTUFGaEJBLElBRWdCLDBCQUZUO0FBQUVDLFVBQU0sRUFBRSxHQUFWO0FBQWVDLFNBQUssRUFBRSxHQUF0QjtBQUEyQkMsVUFBTSxFQUFFO0FBQW5DLEdBRVM7QUFBQSxNQURoQkMsWUFDZ0IsUUFEaEJBLFlBQ2dCO0FBQ2hCLE1BQU1D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RCxDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUssU0FBSyxFQUFFQyxJQUFJLENBQUNFLEtBQUwsR0FBYSxHQUF6QjtBQUE4QixVQUFNLEVBQUVGLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBRUksUUFBUjtBQUFrQixhQUFTLHNCQUFlRyxJQUFJLENBQUNDLENBQXBCLGVBQTBCRCxJQUFJLENBQUNFLENBQS9CLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsT0FBRyxFQUFFSCxTQUFSO0FBQW1CLGFBQVMsc0JBQWVQLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEVBQTVCLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0EvSUQ7O0dBQU1KLEs7O0tBQUFBLEs7QUFpSlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kODdiZTE2YmE4MTBhN2I1Njc2ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCBkM1RpcCBmcm9tIFwiZDMtdGlwXCI7XG5pbXBvcnQgeyBsZWdlbmRDb2xvciB9IGZyb20gXCJkMy1zdmctbGVnZW5kXCI7XG5cbmludGVyZmFjZSBWYWx1ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGRhdGE6IFZhbHVlW107XG4gIGRpbXM/OiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyByYWRpdXM6IG51bWJlciB9O1xuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XG59XG5cbmNvbnN0IENoYXJ0ID0gKHtcbiAgZGF0YSxcbiAgZGltcyA9IHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAsIHJhZGl1czogMTUwIH0sXG4gIG9uU2xpY2VDbGljayxcbn06IENoYXJ0UHJvcHMpID0+IHtcbiAgY29uc3QgZ3JhcGhSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY2VudCA9IHsgeDogZGltcy53aWR0aCAvIDIgKyA1LCB5OiBkaW1zLmhlaWdodCAvIDIgKyA1IH07XG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XG4gIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZENvbG9yKCkuc2hhcGUoXCJjaXJjbGVcIikuc2hhcGVQYWRkaW5nKDEwKS5zY2FsZShjb2xvcik7XG5cbiAgY29uc3QgcGllID0gZDNcbiAgICAucGllPFZhbHVlPigpXG4gICAgLnNvcnQobnVsbClcbiAgICAudmFsdWUoKGQpID0+IGQuY29zdCk7XG5cbiAgY29uc3QgYXJjUGF0aCA9IGQzXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcbiAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXG4gICAgLmlubmVyUmFkaXVzKGRpbXMucmFkaXVzIC8gMik7XG5cbiAgLy8gYXJjIHR3ZWVuc1xuICBjb25zdCBhcmNUd2VlbnMgPSB7XG4gICAgZW50ZXIoZCwgaSwgbikge1xuICAgICAgY29uc3QgX2kgPSBkMy5pbnRlcnBvbGF0ZShuLmxlbmd0aCA+IDEgPyAwIDogZC5lbmRBbmdsZSwgZC5zdGFydEFuZ2xlKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IF9pKHQpO1xuXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHVwZGF0ZShkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XG5cbiAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDEpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoaSh0KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgZXhpdChkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XG5cbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICB9O1xuICAgIH0sXG4gIH07XG5cbiAgLy8gdXBkYXRlIGRvbVxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IHBhdGhzID0gZ3JhcGguc2VsZWN0QWxsKFwicGF0aFwiKS5kYXRhKHBpZShkYXRhKSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgdG9vbHRpcCA9IGQzVGlwKClcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXAgY2FyZFwiKVxuICAgICAgLmh0bWwoKGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweDsgYmFja2dyb3VuZDogIzMzMzsgY29sb3I6ICNmZmZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke2QuZGF0YS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29zdFwiPiR7ZC5kYXRhLmNvc3R9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIiBzdHlsZT1cImNvbG9yOiBob3RwaW5rOyBmb250LXNpemU6IC44ZW1cIj5DbGljayBzbGljZSB0byBkZWxldGU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9KTtcblxuICAgIC8vIGF0dGFjaCB0b29sdGlwXG4gICAgZ3JhcGguY2FsbCh0b29sdGlwKTtcblxuICAgIC8vIGNvbmZpZ3VyZSBjb2xvcnNcbiAgICBjb2xvci5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xuXG4gICAgLy8gYXR0YWNoIGxlZ2VuZFxuICAgIGQzLnNlbGVjdChsZWdlbmRSZWYuY3VycmVudClcbiAgICAgIC5jYWxsKGxlZ2VuZClcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuXG4gICAgLy8gaGFuZGxlIGV4aXQgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5leGl0KClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZXhpdClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xuICAgIHBhdGhzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLnVwZGF0ZSk7XG5cbiAgICAvLyBoYW5kbGUgZW50ZXIgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiBjb2xvcihkLmRhdGEubmFtZSkpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzW1wiX2N1cnJlbnRcIl0gPSBkO1xuICAgICAgfSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZW50ZXIpO1xuXG4gICAgLy8gYWRkIGV2ZW50c1xuICAgIGdyYXBoXG4gICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgIHRvb2x0aXAuc2hvdyhkLCBuW2ldKTtcblxuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+LCBpLCBuKSA9PiB7XG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xuXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgY29sb3IoZC5kYXRhLm5hbWUpKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJjbGlja1wiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+KSA9PiB7XG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xuXG4gICAgICAgIG9uU2xpY2VDbGljayhkLmRhdGEpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YS5yZXZlcnNlKCkpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17ZGltcy53aWR0aCArIDE1MH0gaGVpZ2h0PXtkaW1zLmhlaWdodCArIDE1MH0+XG4gICAgICA8ZyByZWY9e2dyYXBoUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjZW50Lnh9LCAke2NlbnQueX0pYH0gLz5cbiAgICAgIDxnIHJlZj17bGVnZW5kUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtkaW1zLndpZHRoICsgNDB9LCAxMClgfSAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9