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
      var _i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](this._current, d);

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

    paths.exit().attr("class", "arc exit").transition().duration(750).attrTween("d", arcTweens.exit).remove(); // handle current dom paths

    paths.attr("class", "arc update").attr("d", arcPath).transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc enter").attr("stroke", "#fff").attr("stroke-width", 3).attr("d", arcPath).attr("fill", function (d) {
      return color(d.data.name);
    }).each(function (d, i, n) {
      n[i]["_current"] = d;
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

  var timeout = undefined;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (typeof timeout !== "undefined") {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      update(data);
      clearTimeout(timeout);
    }, 750);
  }, [data]);
  return __jsx("svg", {
    width: dims.width + 150,
    height: dims.height + 150,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJfaSIsImVuZEFuZ2xlIiwic3RhcnRBbmdsZSIsInQiLCJ1cGRhdGUiLCJpIiwibiIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImFwcGVuZCIsImVhY2giLCJvbiIsInNob3ciLCJoaWRlIiwidGltZW91dCIsInVuZGVmaW5lZCIsInVzZUVmZmVjdCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJD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LGFBQU8sQ0FBQ2dCLElBQVI7QUFFQXJELGtCQUFZLENBQUNpQixDQUFDLENBQUN0QixJQUFILENBQVo7QUFDRCxLQXRCSDtBQXVCRCxHQXBGRDs7QUFzRkEsTUFBSTJELE9BQU8sR0FBR0MsU0FBZDtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLE9BQU9GLE9BQVAsS0FBbUIsV0FBdkIsRUFBb0M7QUFDbENHLGtCQUFZLENBQUNILE9BQUQsQ0FBWjtBQUNEOztBQUVEQSxXQUFPLEdBQUdJLFVBQVUsQ0FBQyxZQUFNO0FBQ3pCOUIsWUFBTSxDQUFDakMsSUFBRCxDQUFOO0FBRUE4RCxrQkFBWSxDQUFDSCxPQUFELENBQVo7QUFDRCxLQUptQixFQUlqQixHQUppQixDQUFwQjtBQUtELEdBVlEsRUFVTixDQUFDM0QsSUFBRCxDQVZNLENBQVQ7QUFZQSxTQUNFO0FBQUssU0FBSyxFQUFFQyxJQUFJLENBQUNFLEtBQUwsR0FBYSxHQUF6QjtBQUE4QixVQUFNLEVBQUVGLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBRUksUUFBUjtBQUFrQixhQUFTLHNCQUFlRyxJQUFJLENBQUNDLENBQXBCLGVBQTBCRCxJQUFJLENBQUNFLENBQS9CLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsT0FBRyxFQUFFSCxTQUFSO0FBQW1CLGFBQVMsc0JBQWVQLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEVBQTVCLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FoS0Q7O0dBQU1KLEs7O0tBQUFBLEs7QUFrS1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43YzE4OTMwYmQ5NGU5ZTkzM2E1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCBkM1RpcCBmcm9tIFwiZDMtdGlwXCI7XG5pbXBvcnQgeyBsZWdlbmRDb2xvciB9IGZyb20gXCJkMy1zdmctbGVnZW5kXCI7XG5cbmludGVyZmFjZSBWYWx1ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGRhdGE6IFZhbHVlW107XG4gIGRpbXM/OiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyByYWRpdXM6IG51bWJlciB9O1xuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XG59XG5cbmNvbnN0IENoYXJ0ID0gKHtcbiAgZGF0YSxcbiAgZGltcyA9IHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAsIHJhZGl1czogMTUwIH0sXG4gIG9uU2xpY2VDbGljayxcbn06IENoYXJ0UHJvcHMpID0+IHtcbiAgY29uc3QgZ3JhcGhSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY2VudCA9IHsgeDogZGltcy53aWR0aCAvIDIgKyA1LCB5OiBkaW1zLmhlaWdodCAvIDIgKyA1IH07XG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XG4gIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZENvbG9yKCkuc2hhcGUoXCJjaXJjbGVcIikuc2hhcGVQYWRkaW5nKDEwKS5zY2FsZShjb2xvcik7XG5cbiAgY29uc3QgcGllID0gZDNcbiAgICAucGllPFZhbHVlPigpXG4gICAgLnNvcnQobnVsbClcbiAgICAudmFsdWUoKGQpID0+IGQuY29zdCk7XG5cbiAgY29uc3QgYXJjUGF0aCA9IGQzXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcbiAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXG4gICAgLmlubmVyUmFkaXVzKGRpbXMucmFkaXVzIC8gMik7XG5cbiAgLy8gYXJjIHR3ZWVuc1xuICBjb25zdCBhcmNUd2VlbnMgPSB7XG4gICAgZW50ZXIoZCkge1xuICAgICAgY29uc3QgX2kgPSBkMy5pbnRlcnBvbGF0ZShkLmVuZEFuZ2xlLCBkLnN0YXJ0QW5nbGUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gX2kodCk7XG5cbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgdXBkYXRlKGQsIGksIG4pIHtcbiAgICAgIGNvbnN0IF9pID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XG5cbiAgICAgIG5baV0uX2N1cnJlbnQgPSBfaSgxKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBhcmNQYXRoKF9pKHQpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBleGl0KGQpIHtcbiAgICAgIGNvbnN0IF9pID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IF9pKHQpO1xuXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xuICAgICAgfTtcbiAgICB9LFxuICB9O1xuXG4gIC8vIHVwZGF0ZSBkb21cbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBncmFwaCA9IGQzLnNlbGVjdChncmFwaFJlZi5jdXJyZW50KTtcbiAgICBjb25zdCBwYXRocyA9IGdyYXBoLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShwaWUoZGF0YSkpO1xuXG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1RpcCgpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidGlwIGNhcmRcIilcbiAgICAgIC5odG1sKChkKSA9PiB7XG4gICAgICAgIHJldHVybiBgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHg7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHtkLmRhdGEubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvc3RcIj4ke2QuZGF0YS5jb3N0fTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgc3R5bGU9XCJjb2xvcjogaG90cGluazsgZm9udC1zaXplOiAuOGVtXCI+Q2xpY2sgc2xpY2UgdG8gZGVsZXRlPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgfSk7XG5cbiAgICAvLyBhdHRhY2ggdG9vbHRpcFxuICAgIGdyYXBoLmNhbGwodG9vbHRpcCk7XG5cbiAgICAvLyBjb25maWd1cmUgY29sb3JzXG4gICAgY29sb3IuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLm5hbWUpKTtcblxuICAgIC8vIGF0dGFjaCBsZWdlbmRcbiAgICBkMy5zZWxlY3QobGVnZW5kUmVmLmN1cnJlbnQpXG4gICAgICAuY2FsbChsZWdlbmQpXG4gICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcblxuICAgIC8vIGhhbmRsZSBleGl0IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuZXhpdCgpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjIGV4aXRcIilcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZXhpdClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjIHVwZGF0ZVwiKVxuICAgICAgLmF0dHIoXCJkXCIsIGFyY1BhdGgpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLnVwZGF0ZSk7XG5cbiAgICAvLyBoYW5kbGUgZW50ZXIgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyYyBlbnRlclwiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJkXCIsIGFyY1BhdGgpXG4gICAgICAuYXR0cihcImZpbGxcIiwgKGQpID0+IGNvbG9yKGQuZGF0YS5uYW1lKSlcbiAgICAgIC5lYWNoKChkLCBpLCBuKSA9PiB7XG4gICAgICAgIG5baV1bXCJfY3VycmVudFwiXSA9IGQ7XG4gICAgICB9KVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5lbnRlcik7XG5cbiAgICAvLyBhZGQgZXZlbnRzXG4gICAgZ3JhcGhcbiAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGksIG4pID0+IHtcbiAgICAgICAgdG9vbHRpcC5zaG93KGQsIG5baV0pO1xuXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4sIGksIG4pID0+IHtcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XG5cbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBjb2xvcihkLmRhdGEubmFtZSkpO1xuICAgICAgfSlcbiAgICAgIC5vbihcImNsaWNrXCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4pID0+IHtcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XG5cbiAgICAgICAgb25TbGljZUNsaWNrKGQuZGF0YSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBsZXQgdGltZW91dCA9IHVuZGVmaW5lZDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgdGltZW91dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHVwZGF0ZShkYXRhKTtcblxuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIH0sIDc1MCk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cbiAgICAgIDxnIHJlZj17Z3JhcGhSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnQueH0sICR7Y2VudC55fSlgfSAvPlxuICAgICAgPGcgcmVmPXtsZWdlbmRSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RpbXMud2lkdGggKyA0MH0sIDEwKWB9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=