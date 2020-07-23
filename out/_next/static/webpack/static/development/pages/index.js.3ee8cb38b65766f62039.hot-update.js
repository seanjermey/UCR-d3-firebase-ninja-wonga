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

    paths.attr("d", arcPath).transition().delay(250).transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImRlbGF5IiwiYXBwZW5kIiwiZWFjaCIsIm9uIiwibiIsInNob3ciLCJoaWRlIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFhQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLHVCQUZoQkMsSUFFZ0I7QUFBQSxNQUZoQkEsSUFFZ0IsMEJBRlQ7QUFBRUMsVUFBTSxFQUFFLEdBQVY7QUFBZUMsU0FBSyxFQUFFLEdBQXRCO0FBQTJCQyxVQUFNLEVBQUU7QUFBbkMsR0FFUztBQUFBLE1BRGhCQyxZQUNnQixRQURoQkEsWUFDZ0I7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQyxvREFB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RUMsSUFBSSxDQUFDRSxLQUFMLEdBQWEsR0FBekI7QUFBOEIsVUFBTSxFQUFFRixJQUFJLENBQUNDLE1BQUwsR0FBYyxHQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxPQUFHLEVBQUVJLFFBQVI7QUFBa0IsYUFBUyxzQkFBZUcsSUFBSSxDQUFDQyxDQUFwQixlQUEwQkQsSUFBSSxDQUFDRSxDQUEvQixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLE9BQUcsRUFBRUgsU0FBUjtBQUFtQixhQUFTLHNCQUFlUCxJQUFJLENBQUNFLEtBQUwsR0FBYSxFQUE1QixVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBckpEOztHQUFNSixLOztLQUFBQSxLO0FBdUpTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2VlOGNiMzhiNjU3NjZmNjIwMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcclxuaW1wb3J0IGQzVGlwIGZyb20gXCJkMy10aXBcIjtcclxuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tIFwiZDMtc3ZnLWxlZ2VuZFwiO1xyXG5cclxuaW50ZXJmYWNlIFZhbHVlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY29zdDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XHJcbiAgZGF0YTogVmFsdWVbXTtcclxuICBkaW1zPzogeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgcmFkaXVzOiBudW1iZXIgfTtcclxuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcbmNvbnN0IENoYXJ0ID0gKHtcclxuICBkYXRhLFxyXG4gIGRpbXMgPSB7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwLCByYWRpdXM6IDE1MCB9LFxyXG4gIG9uU2xpY2VDbGljayxcclxufTogQ2hhcnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGdyYXBoUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGNlbnQgPSB7IHg6IGRpbXMud2lkdGggLyAyICsgNSwgeTogZGltcy5oZWlnaHQgLyAyICsgNSB9O1xyXG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XHJcbiAgY29uc3QgbGVnZW5kID0gbGVnZW5kQ29sb3IoKS5zaGFwZShcImNpcmNsZVwiKS5zaGFwZVBhZGRpbmcoMTApLnNjYWxlKGNvbG9yKTtcclxuXHJcbiAgY29uc3QgcGllID0gZDNcclxuICAgIC5waWU8VmFsdWU+KClcclxuICAgIC5zb3J0KG51bGwpXHJcbiAgICAudmFsdWUoKGQpID0+IGQuY29zdCk7XHJcblxyXG4gIGNvbnN0IGFyY1BhdGggPSBkM1xyXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcclxuICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcclxuICAgIC5pbm5lclJhZGl1cyhkaW1zLnJhZGl1cyAvIDIpO1xyXG5cclxuICAvLyBhcmMgdHdlZW5zXHJcbiAgY29uc3QgYXJjVHdlZW5zID0ge1xyXG4gICAgZW50ZXIoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5lbmRBbmdsZSwgZC5zdGFydEFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZSh0aGlzLl9jdXJyZW50LCBkKTtcclxuXHJcbiAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDEpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoaSh0KSk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgZXhpdChkKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIC8vIHVwZGF0ZSBkb21cclxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgZ3JhcGggPSBkMy5zZWxlY3QoZ3JhcGhSZWYuY3VycmVudCk7XHJcbiAgICBjb25zdCBwYXRocyA9IGdyYXBoLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShwaWUoZGF0YSkpO1xyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1RpcCgpXHJcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXAgY2FyZFwiKVxyXG4gICAgICAuaHRtbCgoZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHg7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke2QuZGF0YS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3N0XCI+JHtkLmRhdGEuY29zdH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgc3R5bGU9XCJjb2xvcjogaG90cGluazsgZm9udC1zaXplOiAuOGVtXCI+Q2xpY2sgc2xpY2UgdG8gZGVsZXRlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIGF0dGFjaCB0b29sdGlwXHJcbiAgICBncmFwaC5jYWxsKHRvb2x0aXApO1xyXG5cclxuICAgIC8vIGNvbmZpZ3VyZSBjb2xvcnNcclxuICAgIGNvbG9yLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XHJcblxyXG4gICAgLy8gYXR0YWNoIGxlZ2VuZFxyXG4gICAgZDMuc2VsZWN0KGxlZ2VuZFJlZi5jdXJyZW50KVxyXG4gICAgICAuY2FsbChsZWdlbmQpXHJcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXHJcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XHJcblxyXG4gICAgLy8gaGFuZGxlIGV4aXQgZG9tIHBhdGhzXHJcbiAgICBwYXRoc1xyXG4gICAgICAuZXhpdCgpXHJcbiAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgLmR1cmF0aW9uKDc1MClcclxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmV4aXQpXHJcbiAgICAgIC5yZW1vdmUoKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgY3VycmVudCBkb20gcGF0aHNcclxuICAgIHBhdGhzXHJcbiAgICAgIC5hdHRyKFwiZFwiLCBhcmNQYXRoKVxyXG4gICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgIC5kZWxheSgyNTApXHJcbiAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgLmR1cmF0aW9uKDc1MClcclxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLnVwZGF0ZSk7XHJcblxyXG4gICAgLy8gaGFuZGxlIGVudGVyIGRvbSBwYXRoc1xyXG4gICAgcGF0aHNcclxuICAgICAgLmVudGVyKClcclxuICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxyXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcclxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcclxuICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiBjb2xvcihkLmRhdGEubmFtZSkpXHJcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgdGhpc1tcIl9jdXJyZW50XCJdID0gZDtcclxuICAgICAgfSlcclxuICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAuZHVyYXRpb24oNzUwKVxyXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZW50ZXIpO1xyXG5cclxuICAgIC8vIGFkZCBldmVudHNcclxuICAgIGdyYXBoXHJcbiAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXHJcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSwgbikgPT4ge1xyXG4gICAgICAgIHRvb2x0aXAuc2hvdyhkLCBuW2ldKTtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXHJcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcclxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4sIGksIG4pID0+IHtcclxuICAgICAgICB0b29sdGlwLmhpZGUoKTtcclxuXHJcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXHJcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxyXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcclxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBjb2xvcihkLmRhdGEubmFtZSkpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJjbGlja1wiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+KSA9PiB7XHJcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XHJcblxyXG4gICAgICAgIG9uU2xpY2VDbGljayhkLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdXBkYXRlKGRhdGEpO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cclxuICAgICAgPGcgcmVmPXtncmFwaFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWB9IC8+XHJcbiAgICAgIDxnIHJlZj17bGVnZW5kUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtkaW1zLndpZHRoICsgNDB9LCAxMClgfSAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9