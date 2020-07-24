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
    var paths = graph.selectAll("path").data(d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().sort(null).value(function (d) {
      return d.cost;
    })(data)); // @ts-ignore

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
    }).each(function (d) {
      this["_current"] = d;
    }).transition().duration(650).attrTween("d", arcTweens.enter); // add events

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
      lineNumber: 160,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJhcmNQYXRoIiwib3V0ZXJSYWRpdXMiLCJpbm5lclJhZGl1cyIsImFyY1R3ZWVucyIsImVudGVyIiwiZCIsImkiLCJlbmRBbmdsZSIsInN0YXJ0QW5nbGUiLCJ0IiwidXBkYXRlIiwiX2N1cnJlbnQiLCJleGl0IiwiZ3JhcGgiLCJjdXJyZW50IiwicGF0aHMiLCJzZWxlY3RBbGwiLCJzb3J0IiwidmFsdWUiLCJjb3N0IiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImFwcGVuZCIsImVhY2giLCJvbiIsIm4iLCJzaG93IiwiaGlkZSIsInVzZUVmZmVjdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFhQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLHVCQUZoQkMsSUFFZ0I7QUFBQSxNQUZoQkEsSUFFZ0IsMEJBRlQ7QUFBRUMsVUFBTSxFQUFFLEdBQVY7QUFBZUMsU0FBSyxFQUFFLEdBQXRCO0FBQTJCQyxVQUFNLEVBQUU7QUFBbkMsR0FFUztBQUFBLE1BRGhCQyxZQUNnQixRQURoQkEsWUFDZ0I7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QUFyQixDQUE1QjtBQUVBLFdBQU87QUFBQSxhQUFNNEQsYUFBYSxDQUFDRixRQUFELENBQW5CO0FBQUEsS0FBUDtBQUNELEdBTlEsRUFNTixDQUFDMUQsSUFBRCxDQU5NLENBQVQ7QUFRQSxTQUNFO0FBQUssU0FBSyxFQUFFQyxJQUFJLENBQUNFLEtBQUwsR0FBYSxHQUF6QjtBQUE4QixVQUFNLEVBQUVGLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBRUksUUFBUjtBQUFrQixhQUFTLHNCQUFlRyxJQUFJLENBQUNDLENBQXBCLGVBQTBCRCxJQUFJLENBQUNFLENBQS9CLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsT0FBRyxFQUFFSCxTQUFSO0FBQW1CLGFBQVMsc0JBQWVQLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEVBQTVCLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FwSkQ7O0dBQU1KLEs7O0tBQUFBLEs7QUFzSlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5jZjJlMWIwM2IxNTg2NmM5MmMxNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCBkM1RpcCBmcm9tIFwiZDMtdGlwXCI7XG5pbXBvcnQgeyBsZWdlbmRDb2xvciB9IGZyb20gXCJkMy1zdmctbGVnZW5kXCI7XG5cbmludGVyZmFjZSBWYWx1ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGRhdGE6IFZhbHVlW107XG4gIGRpbXM/OiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyByYWRpdXM6IG51bWJlciB9O1xuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XG59XG5cbmNvbnN0IENoYXJ0ID0gKHtcbiAgZGF0YSxcbiAgZGltcyA9IHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAsIHJhZGl1czogMTUwIH0sXG4gIG9uU2xpY2VDbGljayxcbn06IENoYXJ0UHJvcHMpID0+IHtcbiAgY29uc3QgZ3JhcGhSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY2VudCA9IHsgeDogZGltcy53aWR0aCAvIDIgKyA1LCB5OiBkaW1zLmhlaWdodCAvIDIgKyA1IH07XG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XG4gIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZENvbG9yKCkuc2hhcGUoXCJjaXJjbGVcIikuc2hhcGVQYWRkaW5nKDEwKS5zY2FsZShjb2xvcik7XG5cbiAgY29uc3QgYXJjUGF0aCA9IGQzXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcbiAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXG4gICAgLmlubmVyUmFkaXVzKGRpbXMucmFkaXVzIC8gMik7XG5cbiAgLy8gYXJjIHR3ZWVuc1xuICBjb25zdCBhcmNUd2VlbnMgPSB7XG4gICAgZW50ZXIoZCkge1xuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUgLSAwLjEsIGQuc3RhcnRBbmdsZSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xuXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHVwZGF0ZShkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XG5cbiAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDEpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoaSh0KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgZXhpdChkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XG5cbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICB9O1xuICAgIH0sXG4gIH07XG5cbiAgLy8gdXBkYXRlIGRvbVxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IHBhdGhzID0gZ3JhcGguc2VsZWN0QWxsKFwicGF0aFwiKS5kYXRhKFxuICAgICAgZDNcbiAgICAgICAgLnBpZTxWYWx1ZT4oKVxuICAgICAgICAuc29ydChudWxsKVxuICAgICAgICAudmFsdWUoKGQpID0+IGQuY29zdCkoZGF0YSlcbiAgICApO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1RpcCgpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidGlwIGNhcmRcIilcbiAgICAgIC5odG1sKChkKSA9PiB7XG4gICAgICAgIHJldHVybiBgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHg7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHtkLmRhdGEubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvc3RcIj4ke2QuZGF0YS5jb3N0fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgc3R5bGU9XCJjb2xvcjogaG90cGluazsgZm9udC1zaXplOiAuOGVtXCI+Q2xpY2sgc2xpY2UgdG8gZGVsZXRlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgfSk7XG5cbiAgICAvLyBhdHRhY2ggdG9vbHRpcFxuICAgIGdyYXBoLmNhbGwodG9vbHRpcCk7XG5cbiAgICAvLyBjb25maWd1cmUgY29sb3JzXG4gICAgY29sb3IuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLm5hbWUpKTtcblxuICAgIC8vIGF0dGFjaCBsZWdlbmRcbiAgICBkMy5zZWxlY3QobGVnZW5kUmVmLmN1cnJlbnQpXG4gICAgICAuY2FsbChsZWdlbmQpXG4gICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcblxuICAgIC8vIGhhbmRsZSBleGl0IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuZXhpdCgpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmV4aXQpXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgICAvLyBoYW5kbGUgY3VycmVudCBkb20gcGF0aHNcbiAgICBwYXRocy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKS5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy51cGRhdGUpO1xuXG4gICAgLy8gaGFuZGxlIGVudGVyIGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmNcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI2ZmZlwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgIC5hdHRyKFwiZFwiLCBhcmNQYXRoKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiBjb2xvcihkLmRhdGEubmFtZSkpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzW1wiX2N1cnJlbnRcIl0gPSBkO1xuICAgICAgfSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig2NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZW50ZXIpO1xuXG4gICAgLy8gYWRkIGV2ZW50c1xuICAgIGdyYXBoXG4gICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpLCBuKSA9PiB7XG4gICAgICAgIHRvb2x0aXAuc2hvdyhkLCBuW2ldKTtcblxuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+LCBpLCBuKSA9PiB7XG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xuXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgY29sb3IoZC5kYXRhLm5hbWUpKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJjbGlja1wiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+KSA9PiB7XG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xuXG4gICAgICAgIG9uU2xpY2VDbGljayhkLmRhdGEpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHVwZGF0ZShkYXRhKSwgNzUwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e2RpbXMud2lkdGggKyAxNTB9IGhlaWdodD17ZGltcy5oZWlnaHQgKyAxNTB9PlxuICAgICAgPGcgcmVmPXtncmFwaFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWB9IC8+XG4gICAgICA8ZyByZWY9e2xlZ2VuZFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ZGltcy53aWR0aCArIDQwfSwgMTApYH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==