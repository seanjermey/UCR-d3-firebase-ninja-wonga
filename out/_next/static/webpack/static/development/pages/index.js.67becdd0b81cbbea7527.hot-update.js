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

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](legendRef.current).call(legend).selectAll("text").attr("fill", "#fff"); // handle current dom paths

    paths.attr("d", function (d) {
      return arcPath(d);
    }).transition("updateSliceAngle").delay(250).duration(750).attrTween("d", arcTweens.update); // handle exit dom paths

    paths.exit().transition("updateSliceAngle").delay(250).duration(750).attrTween("d", arcTweens.exit).remove(); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("fill", function (d) {
      return color(d.data.name);
    }).each(function (d) {
      this["_current"] = d;
    }).transition("updateSliceAngle").delay(250).duration(750).attrTween("d", arcTweens.enter); // add events

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
      lineNumber: 162,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwiYXR0clR3ZWVuIiwicmVtb3ZlIiwiYXBwZW5kIiwiZWFjaCIsIm9uIiwibiIsInNob3ciLCJoaWRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFhQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLHVCQUZoQkMsSUFFZ0I7QUFBQSxNQUZoQkEsSUFFZ0IsMEJBRlQ7QUFBRUMsVUFBTSxFQUFFLEdBQVY7QUFBZUMsU0FBSyxFQUFFLEdBQXRCO0FBQTJCQyxVQUFNLEVBQUU7QUFBbkMsR0FFUztBQUFBLE1BRGhCQyxZQUNnQixRQURoQkEsWUFDZ0I7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQyxvREFB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RkQ7O0FBc0ZBMkQseURBQVMsQ0FBQyxZQUFNO0FBQ2QxQixVQUFNLENBQUNqQyxJQUFELENBQU47QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsSUFBRCxDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUssU0FBSyxFQUFFQyxJQUFJLENBQUNFLEtBQUwsR0FBYSxHQUF6QjtBQUE4QixVQUFNLEVBQUVGLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBRUksUUFBUjtBQUFrQixhQUFTLHNCQUFlRyxJQUFJLENBQUNDLENBQXBCLGVBQTBCRCxJQUFJLENBQUNFLENBQS9CLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsT0FBRyxFQUFFSCxTQUFSO0FBQW1CLGFBQVMsc0JBQWVQLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEVBQTVCLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0F0SkQ7O0dBQU1KLEs7O0tBQUFBLEs7QUF3SlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42N2JlY2RkMGI4MWNiYmVhNzUyNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCBkM1RpcCBmcm9tIFwiZDMtdGlwXCI7XG5pbXBvcnQgeyBsZWdlbmRDb2xvciB9IGZyb20gXCJkMy1zdmctbGVnZW5kXCI7XG5cbmludGVyZmFjZSBWYWx1ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGRhdGE6IFZhbHVlW107XG4gIGRpbXM/OiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyByYWRpdXM6IG51bWJlciB9O1xuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XG59XG5cbmNvbnN0IENoYXJ0ID0gKHtcbiAgZGF0YSxcbiAgZGltcyA9IHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAsIHJhZGl1czogMTUwIH0sXG4gIG9uU2xpY2VDbGljayxcbn06IENoYXJ0UHJvcHMpID0+IHtcbiAgY29uc3QgZ3JhcGhSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY2VudCA9IHsgeDogZGltcy53aWR0aCAvIDIgKyA1LCB5OiBkaW1zLmhlaWdodCAvIDIgKyA1IH07XG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XG4gIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZENvbG9yKCkuc2hhcGUoXCJjaXJjbGVcIikuc2hhcGVQYWRkaW5nKDEwKS5zY2FsZShjb2xvcik7XG5cbiAgY29uc3QgcGllID0gZDNcbiAgICAucGllPFZhbHVlPigpXG4gICAgLnNvcnQobnVsbClcbiAgICAudmFsdWUoKGQpID0+IGQuY29zdCk7XG5cbiAgY29uc3QgYXJjUGF0aCA9IGQzXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcbiAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXG4gICAgLmlubmVyUmFkaXVzKGRpbXMucmFkaXVzIC8gMik7XG5cbiAgLy8gYXJjIHR3ZWVuc1xuICBjb25zdCBhcmNUd2VlbnMgPSB7XG4gICAgZW50ZXIoZCkge1xuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUsIGQuc3RhcnRBbmdsZSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xuXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGQpIHtcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZSh0aGlzLl9jdXJyZW50LCBkKTtcblxuICAgICAgdGhpcy5fY3VycmVudCA9IGkoMSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gYXJjUGF0aChpKHQpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBleGl0KGQpIHtcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcblxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcblxuICAvLyB1cGRhdGUgZG9tXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgZ3JhcGggPSBkMy5zZWxlY3QoZ3JhcGhSZWYuY3VycmVudCk7XG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKGRhdGEpKTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB0b29sdGlwID0gZDNUaXAoKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpcCBjYXJkXCIpXG4gICAgICAuaHRtbCgoZCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7ZC5kYXRhLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3N0XCI+JHtkLmRhdGEuY29zdH08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIHN0eWxlPVwiY29sb3I6IGhvdHBpbms7IGZvbnQtc2l6ZTogLjhlbVwiPkNsaWNrIHNsaWNlIHRvIGRlbGV0ZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIH0pO1xuXG4gICAgLy8gYXR0YWNoIHRvb2x0aXBcbiAgICBncmFwaC5jYWxsKHRvb2x0aXApO1xuXG4gICAgLy8gY29uZmlndXJlIGNvbG9yc1xuICAgIGNvbG9yLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XG5cbiAgICAvLyBhdHRhY2ggbGVnZW5kXG4gICAgZDMuc2VsZWN0KGxlZ2VuZFJlZi5jdXJyZW50KVxuICAgICAgLmNhbGwobGVnZW5kKVxuICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG5cbiAgICAvLyBoYW5kbGUgY3VycmVudCBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmF0dHIoXCJkXCIsIChkKSA9PiBhcmNQYXRoKGQpKVxuICAgICAgLnRyYW5zaXRpb24oXCJ1cGRhdGVTbGljZUFuZ2xlXCIpXG4gICAgICAuZGVsYXkoMjUwKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy51cGRhdGUpO1xuXG4gICAgLy8gaGFuZGxlIGV4aXQgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5leGl0KClcbiAgICAgIC50cmFuc2l0aW9uKFwidXBkYXRlU2xpY2VBbmdsZVwiKVxuICAgICAgLmRlbGF5KDI1MClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZXhpdClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIGhhbmRsZSBlbnRlciBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDMpXG4gICAgICAuYXR0cihcImZpbGxcIiwgKGQpID0+IGNvbG9yKGQuZGF0YS5uYW1lKSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHRoaXNbXCJfY3VycmVudFwiXSA9IGQ7XG4gICAgICB9KVxuICAgICAgLnRyYW5zaXRpb24oXCJ1cGRhdGVTbGljZUFuZ2xlXCIpXG4gICAgICAuZGVsYXkoMjUwKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5lbnRlcik7XG5cbiAgICAvLyBhZGQgZXZlbnRzXG4gICAgZ3JhcGhcbiAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGksIG4pID0+IHtcbiAgICAgICAgdG9vbHRpcC5zaG93KGQsIG5baV0pO1xuXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4sIGksIG4pID0+IHtcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XG5cbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBjb2xvcihkLmRhdGEubmFtZSkpO1xuICAgICAgfSlcbiAgICAgIC5vbihcImNsaWNrXCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4pID0+IHtcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XG5cbiAgICAgICAgb25TbGljZUNsaWNrKGQuZGF0YSk7XG4gICAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZShkYXRhKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e2RpbXMud2lkdGggKyAxNTB9IGhlaWdodD17ZGltcy5oZWlnaHQgKyAxNTB9PlxuICAgICAgPGcgcmVmPXtncmFwaFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWB9IC8+XG4gICAgICA8ZyByZWY9e2xlZ2VuZFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ZGltcy53aWR0aCArIDQwfSwgMTApYH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==