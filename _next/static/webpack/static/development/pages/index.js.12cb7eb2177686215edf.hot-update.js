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
      console.log(this._current);
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

    paths.attr("d", arcPath).transition("updateSliceAngle").duration(750).attrTween("d", arcTweens.update); // handle exit dom paths

    paths.exit().transition("exitSliceAngle").duration(750).attrTween("d", arcTweens.exit).remove(); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("fill", function (d) {
      return color(d.data.name);
    }).each(function (d) {
      this["_current"] = d;
    }).transition("enterSliceAngle").duration(750).attrTween("d", arcTweens.enter); // add events

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwidCIsInVwZGF0ZSIsIl9jdXJyZW50IiwiY29uc29sZSIsImxvZyIsImV4aXQiLCJncmFwaCIsImN1cnJlbnQiLCJwYXRocyIsInNlbGVjdEFsbCIsInRvb2x0aXAiLCJkM1RpcCIsImF0dHIiLCJodG1sIiwibmFtZSIsImNhbGwiLCJkb21haW4iLCJtYXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhdHRyVHdlZW4iLCJyZW1vdmUiLCJhcHBlbmQiLCJlYWNoIiwib24iLCJuIiwic2hvdyIsImhpZGUiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJDLFlBQ2dCLFFBRGhCQSxZQUNnQjtBQUNoQixNQUFNQyxRQUFRLEdB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LENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLFNBQUssRUFBRUMsSUFBSSxDQUFDRSxLQUFMLEdBQWEsR0FBekI7QUFBOEIsVUFBTSxFQUFFRixJQUFJLENBQUNDLE1BQUwsR0FBYyxHQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxPQUFHLEVBQUVJLFFBQVI7QUFBa0IsYUFBUyxzQkFBZUcsSUFBSSxDQUFDQyxDQUFwQixlQUEwQkQsSUFBSSxDQUFDRSxDQUEvQixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLE9BQUcsRUFBRUgsU0FBUjtBQUFtQixhQUFTLHNCQUFlUCxJQUFJLENBQUNFLEtBQUwsR0FBYSxFQUE1QixVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBckpEOztHQUFNSixLOztLQUFBQSxLO0FBdUpTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTJjYjdlYjIxNzc2ODYyMTVlZGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgZDNUaXAgZnJvbSBcImQzLXRpcFwiO1xuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tIFwiZDMtc3ZnLWxlZ2VuZFwiO1xuXG5pbnRlcmZhY2UgVmFsdWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvc3Q6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xuICBkYXRhOiBWYWx1ZVtdO1xuICBkaW1zPzogeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgcmFkaXVzOiBudW1iZXIgfTtcbiAgb25TbGljZUNsaWNrOiAoZGF0YSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuXG5jb25zdCBDaGFydCA9ICh7XG4gIGRhdGEsXG4gIGRpbXMgPSB7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwLCByYWRpdXM6IDE1MCB9LFxuICBvblNsaWNlQ2xpY2ssXG59OiBDaGFydFByb3BzKSA9PiB7XG4gIGNvbnN0IGdyYXBoUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGxlZ2VuZFJlZiA9IHVzZVJlZigpO1xuXG4gIGNvbnN0IGNlbnQgPSB7IHg6IGRpbXMud2lkdGggLyAyICsgNSwgeTogZGltcy5oZWlnaHQgLyAyICsgNSB9O1xuICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbChkM1tcInNjaGVtZVNldDNcIl0pO1xuICBjb25zdCBsZWdlbmQgPSBsZWdlbmRDb2xvcigpLnNoYXBlKFwiY2lyY2xlXCIpLnNoYXBlUGFkZGluZygxMCkuc2NhbGUoY29sb3IpO1xuXG4gIGNvbnN0IHBpZSA9IGQzXG4gICAgLnBpZTxWYWx1ZT4oKVxuICAgIC5zb3J0KG51bGwpXG4gICAgLnZhbHVlKChkKSA9PiBkLmNvc3QpO1xuXG4gIGNvbnN0IGFyY1BhdGggPSBkM1xuICAgIC5hcmM8ZDMuUGllQXJjRGF0dW08VmFsdWU+PigpXG4gICAgLm91dGVyUmFkaXVzKGRpbXMucmFkaXVzKVxuICAgIC5pbm5lclJhZGl1cyhkaW1zLnJhZGl1cyAvIDIpO1xuXG4gIC8vIGFyYyB0d2VlbnNcbiAgY29uc3QgYXJjVHdlZW5zID0ge1xuICAgIGVudGVyKGQpIHtcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLmVuZEFuZ2xlLCBkLnN0YXJ0QW5nbGUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcblxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICB1cGRhdGUoZCkge1xuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKHRoaXMuX2N1cnJlbnQsIGQpO1xuXG4gICAgICB0aGlzLl9jdXJyZW50ID0gaSgxKTtcblxuICAgICAgY29uc29sZS5sb2codGhpcy5fY3VycmVudCk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gYXJjUGF0aChpKHQpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICBleGl0KGQpIHtcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcblxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICAgIH07XG4gICAgfSxcbiAgfTtcblxuICAvLyB1cGRhdGUgZG9tXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgZ3JhcGggPSBkMy5zZWxlY3QoZ3JhcGhSZWYuY3VycmVudCk7XG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKGRhdGEpKTtcblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB0b29sdGlwID0gZDNUaXAoKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInRpcCBjYXJkXCIpXG4gICAgICAuaHRtbCgoZCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPiR7ZC5kYXRhLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3N0XCI+JHtkLmRhdGEuY29zdH08L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIHN0eWxlPVwiY29sb3I6IGhvdHBpbms7IGZvbnQtc2l6ZTogLjhlbVwiPkNsaWNrIHNsaWNlIHRvIGRlbGV0ZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgIH0pO1xuXG4gICAgLy8gYXR0YWNoIHRvb2x0aXBcbiAgICBncmFwaC5jYWxsKHRvb2x0aXApO1xuXG4gICAgLy8gY29uZmlndXJlIGNvbG9yc1xuICAgIGNvbG9yLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XG5cbiAgICAvLyBhdHRhY2ggbGVnZW5kXG4gICAgZDMuc2VsZWN0KGxlZ2VuZFJlZi5jdXJyZW50KVxuICAgICAgLmNhbGwobGVnZW5kKVxuICAgICAgLnNlbGVjdEFsbChcInRleHRcIilcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG5cbiAgICAvLyBoYW5kbGUgY3VycmVudCBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmF0dHIoXCJkXCIsIGFyY1BhdGgpXG4gICAgICAudHJhbnNpdGlvbihcInVwZGF0ZVNsaWNlQW5nbGVcIilcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMudXBkYXRlKTtcblxuICAgIC8vIGhhbmRsZSBleGl0IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuZXhpdCgpXG4gICAgICAudHJhbnNpdGlvbihcImV4aXRTbGljZUFuZ2xlXCIpXG4gICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmV4aXQpXG4gICAgICAucmVtb3ZlKCk7XG5cbiAgICAvLyBoYW5kbGUgZW50ZXIgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5lbnRlcigpXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiBjb2xvcihkLmRhdGEubmFtZSkpXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCkge1xuICAgICAgICB0aGlzW1wiX2N1cnJlbnRcIl0gPSBkO1xuICAgICAgfSlcbiAgICAgIC50cmFuc2l0aW9uKFwiZW50ZXJTbGljZUFuZ2xlXCIpXG4gICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmVudGVyKTtcblxuICAgIC8vIGFkZCBldmVudHNcbiAgICBncmFwaFxuICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICB0b29sdGlwLnNob3coZCwgbltpXSk7XG5cbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPiwgaSwgbikgPT4ge1xuICAgICAgICB0b29sdGlwLmhpZGUoKTtcblxuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbG9yKGQuZGF0YS5uYW1lKSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPikgPT4ge1xuICAgICAgICB0b29sdGlwLmhpZGUoKTtcblxuICAgICAgICBvblNsaWNlQ2xpY2soZC5kYXRhKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlKGRhdGEpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17ZGltcy53aWR0aCArIDE1MH0gaGVpZ2h0PXtkaW1zLmhlaWdodCArIDE1MH0+XG4gICAgICA8ZyByZWY9e2dyYXBoUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjZW50Lnh9LCAke2NlbnQueX0pYH0gLz5cbiAgICAgIDxnIHJlZj17bGVnZW5kUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtkaW1zLndpZHRoICsgNDB9LCAxMClgfSAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9