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
      // const i = d3.interpolate(0, d.startAngle);
      var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.endAngle - 0.1, d.startAngle);
      console.log(d.endAngle - 0.1);
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
      lineNumber: 159,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwiY29uc29sZSIsImxvZyIsInQiLCJ1cGRhdGUiLCJfY3VycmVudCIsImV4aXQiLCJncmFwaCIsImN1cnJlbnQiLCJwYXRocyIsInNlbGVjdEFsbCIsInRvb2x0aXAiLCJkM1RpcCIsImF0dHIiLCJodG1sIiwibmFtZSIsImNhbGwiLCJkb21haW4iLCJtYXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhdHRyVHdlZW4iLCJyZW1vdmUiLCJhcHBlbmQiLCJlYWNoIiwib24iLCJuIiwic2hvdyIsImhpZGUiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJDLFlBQ2dCLFFBRGhCQSxZQUNnQjtBQUNoQixNQUFNQyxRQUFRLEdB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USxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLFNBQUssRUFBRUMsSUFBSSxDQUFDRSxLQUFMLEdBQWEsR0FBekI7QUFBOEIsVUFBTSxFQUFFRixJQUFJLENBQUNDLE1BQUwsR0FBYyxHQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxPQUFHLEVBQUVJLFFBQVI7QUFBa0IsYUFBUyxzQkFBZUcsSUFBSSxDQUFDQyxDQUFwQixlQUEwQkQsSUFBSSxDQUFDRSxDQUEvQixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLE9BQUcsRUFBRUgsU0FBUjtBQUFtQixhQUFTLHNCQUFlUCxJQUFJLENBQUNFLEtBQUwsR0FBYSxFQUE1QixVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBbkpEOztHQUFNSixLOztLQUFBQSxLO0FBcUpTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYzRkZjlkZGEyOTI4ZjNhNzI4ZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcclxuaW1wb3J0IGQzVGlwIGZyb20gXCJkMy10aXBcIjtcclxuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tIFwiZDMtc3ZnLWxlZ2VuZFwiO1xyXG5cclxuaW50ZXJmYWNlIFZhbHVlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY29zdDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XHJcbiAgZGF0YTogVmFsdWVbXTtcclxuICBkaW1zPzogeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgcmFkaXVzOiBudW1iZXIgfTtcclxuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcbmNvbnN0IENoYXJ0ID0gKHtcclxuICBkYXRhLFxyXG4gIGRpbXMgPSB7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwLCByYWRpdXM6IDE1MCB9LFxyXG4gIG9uU2xpY2VDbGljayxcclxufTogQ2hhcnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGdyYXBoUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGNlbnQgPSB7IHg6IGRpbXMud2lkdGggLyAyICsgNSwgeTogZGltcy5oZWlnaHQgLyAyICsgNSB9O1xyXG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XHJcbiAgY29uc3QgbGVnZW5kID0gbGVnZW5kQ29sb3IoKS5zaGFwZShcImNpcmNsZVwiKS5zaGFwZVBhZGRpbmcoMTApLnNjYWxlKGNvbG9yKTtcclxuXHJcbiAgY29uc3QgcGllID0gZDNcclxuICAgIC5waWU8VmFsdWU+KClcclxuICAgIC5zb3J0KG51bGwpXHJcbiAgICAudmFsdWUoKGQpID0+IGQuY29zdCk7XHJcblxyXG4gIGNvbnN0IGFyY1BhdGggPSBkM1xyXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcclxuICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcclxuICAgIC5pbm5lclJhZGl1cyhkaW1zLnJhZGl1cyAvIDIpO1xyXG5cclxuICAvLyBhcmMgdHdlZW5zXHJcbiAgY29uc3QgYXJjVHdlZW5zID0ge1xyXG4gICAgZW50ZXIoZCkge1xyXG4gICAgICAvLyBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoMCwgZC5zdGFydEFuZ2xlKTtcclxuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUgLSAwLjEsIGQuc3RhcnRBbmdsZSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhkLmVuZEFuZ2xlIC0gMC4xKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZShkKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZSh0aGlzLl9jdXJyZW50LCBkKTtcclxuXHJcbiAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDEpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoaSh0KSk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgZXhpdChkKSB7XHJcbiAgICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xyXG5cclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XHJcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIC8vIHVwZGF0ZSBkb21cclxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xyXG4gICAgY29uc3QgZ3JhcGggPSBkMy5zZWxlY3QoZ3JhcGhSZWYuY3VycmVudCk7XHJcbiAgICBjb25zdCBwYXRocyA9IGdyYXBoLnNlbGVjdEFsbChcInBhdGhcIikuZGF0YShwaWUoZGF0YSkpO1xyXG5cclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGNvbnN0IHRvb2x0aXAgPSBkM1RpcCgpXHJcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXAgY2FyZFwiKVxyXG4gICAgICAuaHRtbCgoZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHg7IGJhY2tncm91bmQ6ICMzMzM7IGNvbG9yOiAjZmZmXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke2QuZGF0YS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3N0XCI+JHtkLmRhdGEuY29zdH08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVsZXRlXCIgc3R5bGU9XCJjb2xvcjogaG90cGluazsgZm9udC1zaXplOiAuOGVtXCI+Q2xpY2sgc2xpY2UgdG8gZGVsZXRlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8vIGF0dGFjaCB0b29sdGlwXHJcbiAgICBncmFwaC5jYWxsKHRvb2x0aXApO1xyXG5cclxuICAgIC8vIGNvbmZpZ3VyZSBjb2xvcnNcclxuICAgIGNvbG9yLmRvbWFpbihkYXRhLm1hcCgoZCkgPT4gZC5uYW1lKSk7XHJcblxyXG4gICAgLy8gYXR0YWNoIGxlZ2VuZFxyXG4gICAgZDMuc2VsZWN0KGxlZ2VuZFJlZi5jdXJyZW50KVxyXG4gICAgICAuY2FsbChsZWdlbmQpXHJcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXHJcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XHJcblxyXG4gICAgLy8gaGFuZGxlIGV4aXQgZG9tIHBhdGhzXHJcbiAgICBwYXRoc1xyXG4gICAgICAuZXhpdCgpXHJcbiAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgLmR1cmF0aW9uKDc1MClcclxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmV4aXQpXHJcbiAgICAgIC5yZW1vdmUoKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgY3VycmVudCBkb20gcGF0aHNcclxuICAgIHBhdGhzLnRyYW5zaXRpb24oKS5kdXJhdGlvbig3NTApLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLnVwZGF0ZSk7XHJcblxyXG4gICAgLy8gaGFuZGxlIGVudGVyIGRvbSBwYXRoc1xyXG4gICAgcGF0aHNcclxuICAgICAgLmVudGVyKClcclxuICAgICAgLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImFyY1wiKVxyXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcclxuICAgICAgLmF0dHIoXCJzdHJva2Utd2lkdGhcIiwgMylcclxuICAgICAgLmF0dHIoXCJkXCIsIGFyY1BhdGgpXHJcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gY29sb3IoZC5kYXRhLm5hbWUpKVxyXG4gICAgICAuZWFjaChmdW5jdGlvbiAoZCkge1xyXG4gICAgICAgIHRoaXNbXCJfY3VycmVudFwiXSA9IGQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50cmFuc2l0aW9uKClcclxuICAgICAgLmR1cmF0aW9uKDc1MClcclxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmVudGVyKTtcclxuXHJcbiAgICAvLyBhZGQgZXZlbnRzXHJcbiAgICBncmFwaFxyXG4gICAgICAuc2VsZWN0QWxsKFwicGF0aFwiKVxyXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGksIG4pID0+IHtcclxuICAgICAgICB0b29sdGlwLnNob3coZCwgbltpXSk7XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcclxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXHJcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAub24oXCJtb3VzZW91dFwiLCAoZDogZDMuUGllQXJjRGF0dW08VmFsdWU+LCBpLCBuKSA9PiB7XHJcbiAgICAgICAgdG9vbHRpcC5oaWRlKCk7XHJcblxyXG4gICAgICAgIGQzLnNlbGVjdChuW2ldKVxyXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcclxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXHJcbiAgICAgICAgICAuYXR0cihcImZpbGxcIiwgY29sb3IoZC5kYXRhLm5hbWUpKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwiY2xpY2tcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPikgPT4ge1xyXG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xyXG5cclxuICAgICAgICBvblNsaWNlQ2xpY2soZC5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZShkYXRhKTtcclxuICB9LCBbZGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD17ZGltcy53aWR0aCArIDE1MH0gaGVpZ2h0PXtkaW1zLmhlaWdodCArIDE1MH0+XHJcbiAgICAgIDxnIHJlZj17Z3JhcGhSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnQueH0sICR7Y2VudC55fSlgfSAvPlxyXG4gICAgICA8ZyByZWY9e2xlZ2VuZFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ZGltcy53aWR0aCArIDQwfSwgMTApYH0gLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==