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
    enter: function enter(d, index, n) {
      console.log(n);
      var i = n.length > 1 ? d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](0, d.startAngle) : d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.endAngle - 0.1, d.startAngle);
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

    paths.transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("d", arcPath).attr("fill", function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpbmRleCIsIm4iLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInQiLCJ1cGRhdGUiLCJfY3VycmVudCIsImV4aXQiLCJncmFwaCIsImN1cnJlbnQiLCJwYXRocyIsInNlbGVjdEFsbCIsInRvb2x0aXAiLCJkM1RpcCIsImF0dHIiLCJodG1sIiwibmFtZSIsImNhbGwiLCJkb21haW4iLCJtYXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhdHRyVHdlZW4iLCJyZW1vdmUiLCJhcHBlbmQiLCJlYWNoIiwib24iLCJzaG93IiwiaGlkZSIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBYUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FJSTtBQUFBOztBQUFBLE1BSGhCQyxJQUdnQixRQUhoQkEsSUFHZ0I7QUFBQSx1QkFGaEJDLElBRWdCO0FBQUEsTUFGaEJBLElBRWdCLDBCQUZUO0FBQUVDLFVBQU0sRUFBRSxHQUFWO0FBQWVDLFNBQUssRUFBRSxHQUF0QjtBQUEyQkMsVUFBTSxFQUFFO0FBQW5DLEdBRVM7QUFBQSxNQURoQkMsWUFDZ0IsUUFEaEJBLFlBQ2dCO0FB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QixJQUFILENBQVo7QUFDRCxLQXRCSDtBQXVCRCxHQTlFRDs7QUFnRkE4RCx5REFBUyxDQUFDLFlBQU07QUFDZHhCLFVBQU0sQ0FBQ3RDLElBQUQsQ0FBTjtBQUNELEdBRlEsRUFFTixDQUFDQSxJQUFELENBRk0sQ0FBVDtBQUlBLFNBQ0U7QUFBSyxTQUFLLEVBQUVDLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEdBQXpCO0FBQThCLFVBQU0sRUFBRUYsSUFBSSxDQUFDQyxNQUFMLEdBQWMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFFSSxRQUFSO0FBQWtCLGFBQVMsc0JBQWVHLElBQUksQ0FBQ0MsQ0FBcEIsZUFBMEJELElBQUksQ0FBQ0UsQ0FBL0IsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxPQUFHLEVBQUVILFNBQVI7QUFBbUIsYUFBUyxzQkFBZVAsSUFBSSxDQUFDRSxLQUFMLEdBQWEsRUFBNUIsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQXJKRDs7R0FBTUosSzs7S0FBQUEsSztBQXVKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmQ1NzQ1NjhjYTAxM2RmMzljNTIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XHJcbmltcG9ydCBkM1RpcCBmcm9tIFwiZDMtdGlwXCI7XHJcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSBcImQzLXN2Zy1sZWdlbmRcIjtcclxuXHJcbmludGVyZmFjZSBWYWx1ZSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNvc3Q6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xyXG4gIGRhdGE6IFZhbHVlW107XHJcbiAgZGltcz86IHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IHJhZGl1czogbnVtYmVyIH07XHJcbiAgb25TbGljZUNsaWNrOiAoZGF0YSkgPT4gUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5jb25zdCBDaGFydCA9ICh7XHJcbiAgZGF0YSxcclxuICBkaW1zID0geyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCwgcmFkaXVzOiAxNTAgfSxcclxuICBvblNsaWNlQ2xpY2ssXHJcbn06IENoYXJ0UHJvcHMpID0+IHtcclxuICBjb25zdCBncmFwaFJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IGxlZ2VuZFJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBjZW50ID0geyB4OiBkaW1zLndpZHRoIC8gMiArIDUsIHk6IGRpbXMuaGVpZ2h0IC8gMiArIDUgfTtcclxuICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkM1tcInNjaGVtZVNldDNcIl0pO1xyXG4gIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZENvbG9yKCkuc2hhcGUoXCJjaXJjbGVcIikuc2hhcGVQYWRkaW5nKDEwKS5zY2FsZShjb2xvcik7XHJcblxyXG4gIGNvbnN0IHBpZSA9IGQzXHJcbiAgICAucGllPFZhbHVlPigpXHJcbiAgICAuc29ydChudWxsKVxyXG4gICAgLnZhbHVlKChkKSA9PiBkLmNvc3QpO1xyXG5cclxuICBjb25zdCBhcmNQYXRoID0gZDNcclxuICAgIC5hcmM8ZDMuUGllQXJjRGF0dW08VmFsdWU+PigpXHJcbiAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXHJcbiAgICAuaW5uZXJSYWRpdXMoZGltcy5yYWRpdXMgLyAyKTtcclxuXHJcbiAgLy8gYXJjIHR3ZWVuc1xyXG4gIGNvbnN0IGFyY1R3ZWVucyA9IHtcclxuICAgIGVudGVyKGQsIGluZGV4LCBuKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG4pO1xyXG5cclxuICAgICAgY29uc3QgaSA9XHJcbiAgICAgICAgbi5sZW5ndGggPiAxXHJcbiAgICAgICAgICA/IGQzLmludGVycG9sYXRlKDAsIGQuc3RhcnRBbmdsZSlcclxuICAgICAgICAgIDogZDMuaW50ZXJwb2xhdGUoZC5lbmRBbmdsZSAtIDAuMSwgZC5zdGFydEFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZSh0aGlzLl9jdXJyZW50LCBkKTtcclxuXHJcbiAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDEpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoaSh0KSk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgZXhpdChkKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIC8vIHVwZGF0ZSBkb21cclxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgZ3JhcGggPSBkMy5zZWxlY3QoZ3JhcGhSZWYuY3VycmVudCk7XHJcbiAgICBjb25zdCBwYXRocyA9IGdyYXBoLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShwaWUoZGF0YSkpO1xyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1RpcCgpXHJcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXAgY2FyZFwiKVxyXG4gICAgICAuaHRtbCgoZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHg7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke2QuZGF0YS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3N0XCI+JHtkLmRhdGEuY29zdH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgc3R5bGU9XCJjb2xvcjogaG90cGluazsgZm9udC1zaXplOiAuOGVtXCI+Q2xpY2sgc2xpY2UgdG8gZGVsZXRlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIGF0dGFjaCB0b29sdGlwXHJcbiAgICBncmFwaC5jYWxsKHRvb2x0aXApO1xyXG5cclxuICAgIC8vIGNvbmZpZ3VyZSBjb2xvcnNcclxuICAgIGNvbG9yLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XHJcblxyXG4gICAgLy8gYXR0YWNoIGxlZ2VuZFxyXG4gICAgZDMuc2VsZWN0KGxlZ2VuZFJlZi5jdXJyZW50KVxyXG4gICAgICAuY2FsbChsZWdlbmQpXHJcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXHJcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XHJcblxyXG4gICAgLy8gaGFuZGxlIGV4aXQgZG9tIHBhdGhzXHJcbiAgICBwYXRoc1xyXG4gICAgICAuZXhpdCgpXHJcbiAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgLmR1cmF0aW9uKDc1MClcclxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmV4aXQpXHJcbiAgICAgIC5yZW1vdmUoKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgY3VycmVudCBkb20gcGF0aHNcclxuICAgIHBhdGhzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLnVwZGF0ZSk7XHJcblxyXG4gICAgLy8gaGFuZGxlIGVudGVyIGRvbSBwYXRoc1xyXG4gICAgcGF0aHNcclxuICAgICAgLmVudGVyKClcclxuICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxyXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcclxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcclxuICAgICAgLmF0dHIoXCJkXCIsIGFyY1BhdGgpXHJcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gY29sb3IoZC5kYXRhLm5hbWUpKVxyXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIHRoaXNbXCJfY3VycmVudFwiXSA9IGQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgLmR1cmF0aW9uKDc1MClcclxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmVudGVyKTtcclxuXHJcbiAgICAvLyBhZGQgZXZlbnRzXHJcbiAgICBncmFwaFxyXG4gICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxyXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGksIG4pID0+IHtcclxuICAgICAgICB0b29sdGlwLnNob3coZCwgbltpXSk7XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcclxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXHJcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+LCBpLCBuKSA9PiB7XHJcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcclxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXHJcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgY29sb3IoZC5kYXRhLm5hbWUpKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwiY2xpY2tcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPikgPT4ge1xyXG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xyXG5cclxuICAgICAgICBvblNsaWNlQ2xpY2soZC5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZShkYXRhKTtcclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD17ZGltcy53aWR0aCArIDE1MH0gaGVpZ2h0PXtkaW1zLmhlaWdodCArIDE1MH0+XHJcbiAgICAgIDxnIHJlZj17Z3JhcGhSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnQueH0sICR7Y2VudC55fSlgfSAvPlxyXG4gICAgICA8ZyByZWY9e2xlZ2VuZFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ZGltcy53aWR0aCArIDQwfSwgMTApYH0gLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==