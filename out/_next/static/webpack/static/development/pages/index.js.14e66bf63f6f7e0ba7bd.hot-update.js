webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/chart.tsx":
/*!******************************!*\
  !*** ./components/chart.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3_tip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-tip */ "./node_modules/d3-tip/index.js");
/* harmony import */ var d3_svg_legend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-svg-legend */ "./node_modules/d3-svg-legend/indexRollupNext.js");



var _this = undefined,
    _jsxFileName = "C:\\Courses\\build-data-uis-with-d3-firebase\\ninja-wonga\\components\\chart.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





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
  var graphRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var legendRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var cent = {
    x: dims.width / 2 + 5,
    y: dims.height / 2 + 5
  };
  var color = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_3__["schemeSet3"]);
  var legend = Object(d3_svg_legend__WEBPACK_IMPORTED_MODULE_5__["legendColor"])().shape("circle").shapePadding(10).scale(color);
  var pie = d3__WEBPACK_IMPORTED_MODULE_3__["pie"]().sort(null).value(function (d) {
    return d.cost;
  });
  var arcPath = d3__WEBPACK_IMPORTED_MODULE_3__["arc"]().outerRadius(dims.radius).innerRadius(dims.radius / 2); // arc tweens

  var arcTweens = {
    enter: function enter(d) {
      var i = d3__WEBPACK_IMPORTED_MODULE_3__["interpolate"](d.endAngle - 0.1, d.startAngle);
      return function (t) {
        d.startAngle = i(t);
        return arcPath(d);
      };
    },
    update: function update(d) {
      var i = d3__WEBPACK_IMPORTED_MODULE_3__["interpolate"](this._current, d);
      this._current = i(1);
      return function (t) {
        return arcPath(i(t));
      };
    },
    exit: function exit(d) {
      var i = d3__WEBPACK_IMPORTED_MODULE_3__["interpolate"](d.startAngle, d.endAngle);
      return function (t) {
        d.startAngle = i(t);
        return arcPath(d);
      };
    }
  }; // update dom

  var update = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
      var pieData, graph, paths, tooltip;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return pie(data);

            case 2:
              pieData = _context.sent;
              console.log({
                data: data,
                pie: pieData
              });
              graph = d3__WEBPACK_IMPORTED_MODULE_3__["select"](graphRef.current);
              paths = graph.selectAll("path").data(pieData); // @ts-ignore

              tooltip = Object(d3_tip__WEBPACK_IMPORTED_MODULE_4__["default"])().attr("class", "tip card").html(function (d) {
                return "<div style=\"padding: 10px; background: #333; color: #fff\">\n              <div class=\"name\">".concat(d.data.name, "</div>\n              <div class=\"cost\">").concat(d.data.cost, "</div>\n              <div class=\"delete\" style=\"color: hotpink; font-size: .8em\">Click slice to delete</div>\n            </div>");
              }); // attach tooltip

              graph.call(tooltip); // configure colors

              color.domain(data.map(function (d) {
                return d.name;
              })); // attach legend

              d3__WEBPACK_IMPORTED_MODULE_3__["select"](legendRef.current).call(legend).selectAll("text").attr("fill", "#fff"); // handle exit dom paths

              paths.exit().transition().duration(750).attrTween("d", arcTweens.exit).remove(); // handle current dom paths

              paths.transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

              paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("d", arcPath).attr("fill", function (d) {
                return color(d.data.name);
              }).each(function (d) {
                this["_current"] = d;
              }).transition().duration(650).attrTween("d", arcTweens.enter); // add events

              graph.selectAll("path").on("mouseover", function (d, i, n) {
                tooltip.show(d, n[i]);
                d3__WEBPACK_IMPORTED_MODULE_3__["select"](n[i]).transition("changeSliceFill").duration(300).attr("fill", "#fff");
              }).on("mouseout", function (d, i, n) {
                tooltip.hide();
                d3__WEBPACK_IMPORTED_MODULE_3__["select"](n[i]).transition("changeSliceFill").duration(300).attr("fill", color(d.data.name));
              }).on("click", function (d) {
                tooltip.hide();
                onSliceClick(d.data);
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function update(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsInBpZURhdGEiLCJjb25zb2xlIiwibG9nIiwiZ3JhcGgiLCJjdXJyZW50IiwicGF0aHMiLCJzZWxlY3RBbGwiLCJ0b29sdGlwIiwiZDNUaXAiLCJhdHRyIiwiaHRtbCIsIm5hbWUiLCJjYWxsIiwiZG9tYWluIiwibWFwIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXR0clR3ZWVuIiwicmVtb3ZlIiwiYXBwZW5kIiwiZWFjaCIsIm9uIiwibiIsInNob3ciLCJoaWRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFhQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLHVCQUZoQkMsSUFFZ0I7QUFBQSxNQUZoQkEsSUFFZ0IsMEJBRlQ7QUFBRUMsVUFBTSxFQUFFLEdBQVY7QUFBZUMsU0FBSyxFQUFFLEdBQXRCO0FBQTJCQyxVQUFNLEVBQUU7QUFBbkMsR0FFUztBQUFBLE1BRGhCQyxZQUNnQixRQURoQkEsWUFDZ0I7QUFD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YTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFOaUMsTUFBTTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQXVGQTRCLHlEQUFTLENBQUMsWUFBTTtBQUNkNUIsVUFBTSxDQUFDakMsSUFBRCxDQUFOO0FBQ0QsR0FGUSxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLFNBQUssRUFBRUMsSUFBSSxDQUFDRSxLQUFMLEdBQWEsR0FBekI7QUFBOEIsVUFBTSxFQUFFRixJQUFJLENBQUNDLE1BQUwsR0FBYyxHQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxPQUFHLEVBQUVJLFFBQVI7QUFBa0IsYUFBUyxzQkFBZUcsSUFBSSxDQUFDQyxDQUFwQixlQUEwQkQsSUFBSSxDQUFDRSxDQUEvQixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLE9BQUcsRUFBRUgsU0FBUjtBQUFtQixhQUFTLHNCQUFlUCxJQUFJLENBQUNFLEtBQUwsR0FBYSxFQUE1QixVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBdkpEOztHQUFNSixLOztLQUFBQSxLO0FBeUpTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTRlNjZiZjYzZjZmN2UwYmE3YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcclxuaW1wb3J0IGQzVGlwIGZyb20gXCJkMy10aXBcIjtcclxuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tIFwiZDMtc3ZnLWxlZ2VuZFwiO1xyXG5cclxuaW50ZXJmYWNlIFZhbHVlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY29zdDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XHJcbiAgZGF0YTogVmFsdWVbXTtcclxuICBkaW1zPzogeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgcmFkaXVzOiBudW1iZXIgfTtcclxuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcbmNvbnN0IENoYXJ0ID0gKHtcclxuICBkYXRhLFxyXG4gIGRpbXMgPSB7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwLCByYWRpdXM6IDE1MCB9LFxyXG4gIG9uU2xpY2VDbGljayxcclxufTogQ2hhcnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGdyYXBoUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGNlbnQgPSB7IHg6IGRpbXMud2lkdGggLyAyICsgNSwgeTogZGltcy5oZWlnaHQgLyAyICsgNSB9O1xyXG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XHJcbiAgY29uc3QgbGVnZW5kID0gbGVnZW5kQ29sb3IoKS5zaGFwZShcImNpcmNsZVwiKS5zaGFwZVBhZGRpbmcoMTApLnNjYWxlKGNvbG9yKTtcclxuXHJcbiAgY29uc3QgcGllID0gZDNcclxuICAgIC5waWU8VmFsdWU+KClcclxuICAgIC5zb3J0KG51bGwpXHJcbiAgICAudmFsdWUoKGQpID0+IGQuY29zdCk7XHJcblxyXG4gIGNvbnN0IGFyY1BhdGggPSBkM1xyXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcclxuICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcclxuICAgIC5pbm5lclJhZGl1cyhkaW1zLnJhZGl1cyAvIDIpO1xyXG5cclxuICAvLyBhcmMgdHdlZW5zXHJcbiAgY29uc3QgYXJjVHdlZW5zID0ge1xyXG4gICAgZW50ZXIoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5lbmRBbmdsZSAtIDAuMSwgZC5zdGFydEFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZSh0aGlzLl9jdXJyZW50LCBkKTtcclxuXHJcbiAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDEpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoaSh0KSk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgZXhpdChkKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIC8vIHVwZGF0ZSBkb21cclxuICBjb25zdCB1cGRhdGUgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgcGllRGF0YSA9IGF3YWl0IHBpZShkYXRhKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIHBpZTogcGllRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllRGF0YSk7XHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgdG9vbHRpcCA9IGQzVGlwKClcclxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpcCBjYXJkXCIpXHJcbiAgICAgIC5odG1sKChkKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweDsgYmFja2dyb3VuZDogIzMzMzsgY29sb3I6ICNmZmZcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7ZC5kYXRhLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvc3RcIj4ke2QuZGF0YS5jb3N0fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIiBzdHlsZT1cImNvbG9yOiBob3RwaW5rOyBmb250LXNpemU6IC44ZW1cIj5DbGljayBzbGljZSB0byBkZWxldGU8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgLy8gYXR0YWNoIHRvb2x0aXBcclxuICAgIGdyYXBoLmNhbGwodG9vbHRpcCk7XHJcblxyXG4gICAgLy8gY29uZmlndXJlIGNvbG9yc1xyXG4gICAgY29sb3IuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLm5hbWUpKTtcclxuXHJcbiAgICAvLyBhdHRhY2ggbGVnZW5kXHJcbiAgICBkMy5zZWxlY3QobGVnZW5kUmVmLmN1cnJlbnQpXHJcbiAgICAgIC5jYWxsKGxlZ2VuZClcclxuICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcclxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgZXhpdCBkb20gcGF0aHNcclxuICAgIHBhdGhzXHJcbiAgICAgIC5leGl0KClcclxuICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAuZHVyYXRpb24oNzUwKVxyXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZXhpdClcclxuICAgICAgLnJlbW92ZSgpO1xyXG5cclxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xyXG4gICAgcGF0aHMudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MCkuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMudXBkYXRlKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgZW50ZXIgZG9tIHBhdGhzXHJcbiAgICBwYXRoc1xyXG4gICAgICAuZW50ZXIoKVxyXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpXHJcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI2ZmZlwiKVxyXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxyXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcclxuICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiBjb2xvcihkLmRhdGEubmFtZSkpXHJcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgdGhpc1tcIl9jdXJyZW50XCJdID0gZDtcclxuICAgICAgfSlcclxuICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAuZHVyYXRpb24oNjUwKVxyXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZW50ZXIpO1xyXG5cclxuICAgIC8vIGFkZCBldmVudHNcclxuICAgIGdyYXBoXHJcbiAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXHJcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSwgbikgPT4ge1xyXG4gICAgICAgIHRvb2x0aXAuc2hvdyhkLCBuW2ldKTtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXHJcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcclxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4sIGksIG4pID0+IHtcclxuICAgICAgICB0b29sdGlwLmhpZGUoKTtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXHJcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcclxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBjb2xvcihkLmRhdGEubmFtZSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJjbGlja1wiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+KSA9PiB7XHJcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XHJcblxyXG4gICAgICAgIG9uU2xpY2VDbGljayhkLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlKGRhdGEpO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cclxuICAgICAgPGcgcmVmPXtncmFwaFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWB9IC8+XHJcbiAgICAgIDxnIHJlZj17bGVnZW5kUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtkaW1zLndpZHRoICsgNDB9LCAxMClgfSAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9