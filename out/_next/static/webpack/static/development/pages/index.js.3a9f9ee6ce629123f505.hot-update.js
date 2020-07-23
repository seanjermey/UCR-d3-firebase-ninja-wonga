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
  var arcPath = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().outerRadius(dims.radius).innerRadius(dims.radius / 2);
  var tooltop = Object(d3_tip__WEBPACK_IMPORTED_MODULE_2__["default"])().attr("class", "tip card").html(function (d) {
    return "".concat(d.data.name);
  }); // arc tweens

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
    var paths = graph.selectAll("path").data(pie(data)); // attach tooltop

    graph.call(tooltop); // configure colors

    color.domain(data.map(function (d) {
      return d.name;
    })); // attach legend

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](legendRef.current).call(legend).selectAll("text").attr("fill", "#fff"); // handle exit dom paths

    paths.exit().transition().duration(750).attrTween("d", arcTweens.exit).remove(); // handle current dom paths

    paths.attr("d", arcPath).transition().duration(750).attrTween("d", arcTweens.update); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("fill", function (d) {
      return color(d.data.name);
    }).each(function (d) {
      this["_current"] = d;
    }).transition().duration(750).attrTween("d", arcTweens.enter); // add events

    graph.selectAll("path").on("mouseover", function (d, i, n) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition("changeSliceFill").duration(300).attr("fill", "#fff");
    }).on("mouseout", function (d, i, n) {
      d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition("changeSliceFill").duration(300).attr("fill", color(d.data.name));
    }).on("click", function (d) {
      return onSliceClick(d.data);
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
      lineNumber: 146,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwidG9vbHRvcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImFwcGVuZCIsImVhY2giLCJvbiIsIm4iLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJDLFlBQ2dCLFFBRGhCQSxZQUNnQjtBQUNoQixNQUFNQyxRQUFRLEdBQUdDLG9EQUFNLEVBQXZCO0FBQ0EsTUFBTUMsU0FB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QUFBLElBREYsRUFFRTtBQUFHLE9BQUcsRUFBRUgsU0FBUjtBQUFtQixhQUFTLHNCQUFlUCxJQUFJLENBQUNFLEtBQUwsR0FBYSxFQUE1QixVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBdElEOztHQUFNSixLOztLQUFBQSxLO0FBd0lTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2E5ZjllZTZjZTYyOTEyM2Y1MDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgZDNUaXAgZnJvbSBcImQzLXRpcFwiO1xuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tIFwiZDMtc3ZnLWxlZ2VuZFwiO1xuXG5pbnRlcmZhY2UgVmFsdWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvc3Q6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xuICBkYXRhOiBWYWx1ZVtdO1xuICBkaW1zPzogeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgcmFkaXVzOiBudW1iZXIgfTtcbiAgb25TbGljZUNsaWNrOiAoZGF0YSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG5jb25zdCBDaGFydCA9ICh7XG4gIGRhdGEsXG4gIGRpbXMgPSB7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwLCByYWRpdXM6IDE1MCB9LFxuICBvblNsaWNlQ2xpY2ssXG59OiBDaGFydFByb3BzKSA9PiB7XG4gIGNvbnN0IGdyYXBoUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxlZ2VuZFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGNlbnQgPSB7IHg6IGRpbXMud2lkdGggLyAyICsgNSwgeTogZGltcy5oZWlnaHQgLyAyICsgNSB9O1xuICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkM1tcInNjaGVtZVNldDNcIl0pO1xuICBjb25zdCBsZWdlbmQgPSBsZWdlbmRDb2xvcigpLnNoYXBlKFwiY2lyY2xlXCIpLnNoYXBlUGFkZGluZygxMCkuc2NhbGUoY29sb3IpO1xuXG4gIGNvbnN0IHBpZSA9IGQzXG4gICAgLnBpZTxWYWx1ZT4oKVxuICAgIC5zb3J0KG51bGwpXG4gICAgLnZhbHVlKChkKSA9PiBkLmNvc3QpO1xuXG4gIGNvbnN0IGFyY1BhdGggPSBkM1xuICAgIC5hcmM8ZDMuUGllQXJjRGF0dW08VmFsdWU+PigpXG4gICAgLm91dGVyUmFkaXVzKGRpbXMucmFkaXVzKVxuICAgIC5pbm5lclJhZGl1cyhkaW1zLnJhZGl1cyAvIDIpO1xuXG4gIGNvbnN0IHRvb2x0b3AgPSBkM1RpcCgpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpcCBjYXJkXCIpXG4gICAgLmh0bWwoKGQpID0+IHtcbiAgICAgIHJldHVybiBgJHtkLmRhdGEubmFtZX1gO1xuICAgIH0pO1xuXG4gIC8vIGFyYyB0d2VlbnNcbiAgY29uc3QgYXJjVHdlZW5zID0ge1xuICAgIGVudGVyKGQpIHtcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLmVuZEFuZ2xlLCBkLnN0YXJ0QW5nbGUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcblxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICB1cGRhdGUoZCkge1xuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKHRoaXMuX2N1cnJlbnQsIGQpO1xuXG4gICAgICB0aGlzLl9jdXJyZW50ID0gaSgxKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBhcmNQYXRoKGkodCkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGV4aXQoZCkge1xuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuc3RhcnRBbmdsZSwgZC5lbmRBbmdsZSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xuXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xuICAgICAgfTtcbiAgICB9LFxuICB9O1xuXG4gIC8vIHVwZGF0ZSBkb21cbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBncmFwaCA9IGQzLnNlbGVjdChncmFwaFJlZi5jdXJyZW50KTtcbiAgICBjb25zdCBwYXRocyA9IGdyYXBoLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShwaWUoZGF0YSkpO1xuXG4gICAgLy8gYXR0YWNoIHRvb2x0b3BcbiAgICBncmFwaC5jYWxsKHRvb2x0b3ApO1xuXG4gICAgLy8gY29uZmlndXJlIGNvbG9yc1xuICAgIGNvbG9yLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XG5cbiAgICAvLyBhdHRhY2ggbGVnZW5kXG4gICAgZDMuc2VsZWN0KGxlZ2VuZFJlZi5jdXJyZW50KVxuICAgICAgLmNhbGwobGVnZW5kKVxuICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG5cbiAgICAvLyBoYW5kbGUgZXhpdCBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmV4aXQoKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5leGl0KVxuICAgICAgLnJlbW92ZSgpO1xuXG4gICAgLy8gaGFuZGxlIGN1cnJlbnQgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5hdHRyKFwiZFwiLCBhcmNQYXRoKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy51cGRhdGUpO1xuXG4gICAgLy8gaGFuZGxlIGVudGVyIGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuZW50ZXIoKVxuICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmNcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI2ZmZlwiKVxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gY29sb3IoZC5kYXRhLm5hbWUpKVxuICAgICAgLmVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgdGhpc1tcIl9jdXJyZW50XCJdID0gZDtcbiAgICAgIH0pXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmVudGVyKTtcblxuICAgIC8vIGFkZCBldmVudHNcbiAgICBncmFwaFxuICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+LCBpLCBuKSA9PiB7XG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXG4gICAgICAgICAgLmR1cmF0aW9uKDMwMClcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgY29sb3IoZC5kYXRhLm5hbWUpKTtcbiAgICAgIH0pXG4gICAgICAub24oXCJjbGlja1wiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+KSA9PiBvblNsaWNlQ2xpY2soZC5kYXRhKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cbiAgICAgIDxnIHJlZj17Z3JhcGhSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnQueH0sICR7Y2VudC55fSlgfSAvPlxuICAgICAgPGcgcmVmPXtsZWdlbmRSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RpbXMud2lkdGggKyA0MH0sIDEwKWB9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=