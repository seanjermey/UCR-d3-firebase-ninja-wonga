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
      console.log({
        tween: "enter",
        start: d.endAngle - 0.1,
        end: d.startAngle
      });
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
      console.log({
        tween: "enter",
        start: d.endAngle,
        end: d.startAngle
      });
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

    paths.transition().delay(10).duration(740).attrTween("d", arcTweens.update); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("d", arcPath).attr("fill", function (d) {
      return color(d.data.name);
    }).each(function (d) {
      this["_current"] = d;
    }).transition().delay(10).duration(740).attrTween("d", arcTweens.enter); // add events

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
      lineNumber: 170,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpIiwiZW5kQW5nbGUiLCJzdGFydEFuZ2xlIiwiY29uc29sZSIsImxvZyIsInR3ZWVuIiwic3RhcnQiLCJlbmQiLCJ0IiwidXBkYXRlIiwiX2N1cnJlbnQiLCJleGl0IiwiZ3JhcGgiLCJjdXJyZW50IiwicGF0aHMiLCJzZWxlY3RBbGwiLCJ0b29sdGlwIiwiZDNUaXAiLCJhdHRyIiwiaHRtbCIsIm5hbWUiLCJjYWxsIiwiZG9tYWluIiwibWFwIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYXR0clR3ZWVuIiwicmVtb3ZlIiwiZGVsYXkiLCJhcHBlbmQiLCJlYWNoIiwib24iLCJuIiwic2hvdyIsImhpZGUiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJDLFlBQ2dCLFFB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R0dQLElBSEgsQ0FHUSxNQUhSLEVBR2dCbkMsS0FBSyxDQUFDVSxDQUFDLENBQUN0QixJQUFGLENBQU9pRCxJQUFSLENBSHJCO0FBSUQsS0FqQkgsRUFrQkdXLEVBbEJILENBa0JNLE9BbEJOLEVBa0JlLFVBQUN0QyxDQUFELEVBQThCO0FBQ3pDdUIsYUFBTyxDQUFDa0IsSUFBUjtBQUVBMUQsa0JBQVksQ0FBQ2lCLENBQUMsQ0FBQ3RCLElBQUgsQ0FBWjtBQUNELEtBdEJIO0FBdUJELEdBL0VEOztBQWlGQWdFLHlEQUFTLENBQUMsWUFBTTtBQUNkMUIsVUFBTSxDQUFDdEMsSUFBRCxDQUFOO0FBQ0QsR0FGUSxFQUVOLENBQUNBLElBQUQsQ0FGTSxDQUFUO0FBSUEsU0FDRTtBQUFLLFNBQUssRUFBRUMsSUFBSSxDQUFDRSxLQUFMLEdBQWEsR0FBekI7QUFBOEIsVUFBTSxFQUFFRixJQUFJLENBQUNDLE1BQUwsR0FBYyxHQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxPQUFHLEVBQUVJLFFBQVI7QUFBa0IsYUFBUyxzQkFBZUcsSUFBSSxDQUFDQyxDQUFwQixlQUEwQkQsSUFBSSxDQUFDRSxDQUEvQixNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFHLE9BQUcsRUFBRUgsU0FBUjtBQUFtQixhQUFTLHNCQUFlUCxJQUFJLENBQUNFLEtBQUwsR0FBYSxFQUE1QixVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERjtBQU1ELENBOUpEOztHQUFNSixLOztLQUFBQSxLO0FBZ0tTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYzg1OTlmYWExZmEzMTI4MzhjNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcclxuaW1wb3J0IGQzVGlwIGZyb20gXCJkMy10aXBcIjtcclxuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tIFwiZDMtc3ZnLWxlZ2VuZFwiO1xyXG5cclxuaW50ZXJmYWNlIFZhbHVlIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY29zdDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XHJcbiAgZGF0YTogVmFsdWVbXTtcclxuICBkaW1zPzogeyBoZWlnaHQ6IG51bWJlcjsgd2lkdGg6IG51bWJlcjsgcmFkaXVzOiBudW1iZXIgfTtcclxuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcbmNvbnN0IENoYXJ0ID0gKHtcclxuICBkYXRhLFxyXG4gIGRpbXMgPSB7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwLCByYWRpdXM6IDE1MCB9LFxyXG4gIG9uU2xpY2VDbGljayxcclxufTogQ2hhcnRQcm9wcykgPT4ge1xyXG4gIGNvbnN0IGdyYXBoUmVmID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGNlbnQgPSB7IHg6IGRpbXMud2lkdGggLyAyICsgNSwgeTogZGltcy5oZWlnaHQgLyAyICsgNSB9O1xyXG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XHJcbiAgY29uc3QgbGVnZW5kID0gbGVnZW5kQ29sb3IoKS5zaGFwZShcImNpcmNsZVwiKS5zaGFwZVBhZGRpbmcoMTApLnNjYWxlKGNvbG9yKTtcclxuXHJcbiAgY29uc3QgcGllID0gZDNcclxuICAgIC5waWU8VmFsdWU+KClcclxuICAgIC5zb3J0KG51bGwpXHJcbiAgICAudmFsdWUoKGQpID0+IGQuY29zdCk7XHJcblxyXG4gIGNvbnN0IGFyY1BhdGggPSBkM1xyXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcclxuICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcclxuICAgIC5pbm5lclJhZGl1cyhkaW1zLnJhZGl1cyAvIDIpO1xyXG5cclxuICAvLyBhcmMgdHdlZW5zXHJcbiAgY29uc3QgYXJjVHdlZW5zID0ge1xyXG4gICAgZW50ZXIoZCkge1xyXG4gICAgICAvLyBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoMCwgZC5zdGFydEFuZ2xlKTtcclxuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUgLSAwLjEsIGQuc3RhcnRBbmdsZSk7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyh7XHJcbiAgICAgICAgdHdlZW46IFwiZW50ZXJcIixcclxuICAgICAgICBzdGFydDogZC5lbmRBbmdsZSAtIDAuMSxcclxuICAgICAgICBlbmQ6IGQuc3RhcnRBbmdsZSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XHJcblxyXG4gICAgICB0aGlzLl9jdXJyZW50ID0gaSgxKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGkodCkpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGV4aXQoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKHtcclxuICAgICAgICB0d2VlbjogXCJlbnRlclwiLFxyXG4gICAgICAgIHN0YXJ0OiBkLmVuZEFuZ2xlLFxyXG4gICAgICAgIGVuZDogZC5zdGFydEFuZ2xlLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvLyB1cGRhdGUgZG9tXHJcbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKGRhdGEpKTtcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCB0b29sdGlwID0gZDNUaXAoKVxyXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidGlwIGNhcmRcIilcclxuICAgICAgLmh0bWwoKGQpID0+IHtcclxuICAgICAgICByZXR1cm4gYDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHtkLmRhdGEubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29zdFwiPiR7ZC5kYXRhLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIHN0eWxlPVwiY29sb3I6IGhvdHBpbms7IGZvbnQtc2l6ZTogLjhlbVwiPkNsaWNrIHNsaWNlIHRvIGRlbGV0ZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBhdHRhY2ggdG9vbHRpcFxyXG4gICAgZ3JhcGguY2FsbCh0b29sdGlwKTtcclxuXHJcbiAgICAvLyBjb25maWd1cmUgY29sb3JzXHJcbiAgICBjb2xvci5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xyXG5cclxuICAgIC8vIGF0dGFjaCBsZWdlbmRcclxuICAgIGQzLnNlbGVjdChsZWdlbmRSZWYuY3VycmVudClcclxuICAgICAgLmNhbGwobGVnZW5kKVxyXG4gICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxyXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xyXG5cclxuICAgIC8vIGhhbmRsZSBleGl0IGRvbSBwYXRoc1xyXG4gICAgcGF0aHNcclxuICAgICAgLmV4aXQoKVxyXG4gICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgIC5kdXJhdGlvbig3NTApXHJcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5leGl0KVxyXG4gICAgICAucmVtb3ZlKCk7XHJcblxyXG4gICAgLy8gaGFuZGxlIGN1cnJlbnQgZG9tIHBhdGhzXHJcbiAgICBwYXRocy50cmFuc2l0aW9uKCkuZGVsYXkoMTApLmR1cmF0aW9uKDc0MCkuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMudXBkYXRlKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgZW50ZXIgZG9tIHBhdGhzXHJcbiAgICBwYXRoc1xyXG4gICAgICAuZW50ZXIoKVxyXG4gICAgICAuYXBwZW5kKFwicGF0aFwiKVxyXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpXHJcbiAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwiI2ZmZlwiKVxyXG4gICAgICAuYXR0cihcInN0cm9rZS13aWR0aFwiLCAzKVxyXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcclxuICAgICAgLmF0dHIoXCJmaWxsXCIsIChkKSA9PiBjb2xvcihkLmRhdGEubmFtZSkpXHJcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgdGhpc1tcIl9jdXJyZW50XCJdID0gZDtcclxuICAgICAgfSlcclxuICAgICAgLnRyYW5zaXRpb24oKVxyXG4gICAgICAuZGVsYXkoMTApXHJcbiAgICAgIC5kdXJhdGlvbig3NDApXHJcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5lbnRlcik7XHJcblxyXG4gICAgLy8gYWRkIGV2ZW50c1xyXG4gICAgZ3JhcGhcclxuICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcclxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpLCBuKSA9PiB7XHJcbiAgICAgICAgdG9vbHRpcC5zaG93KGQsIG5baV0pO1xyXG5cclxuICAgICAgICBkMy5zZWxlY3QobltpXSlcclxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXHJcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxyXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPiwgaSwgbikgPT4ge1xyXG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xyXG5cclxuICAgICAgICBkMy5zZWxlY3QobltpXSlcclxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXHJcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxyXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbG9yKGQuZGF0YS5uYW1lKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcImNsaWNrXCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4pID0+IHtcclxuICAgICAgICB0b29sdGlwLmhpZGUoKTtcclxuXHJcbiAgICAgICAgb25TbGljZUNsaWNrKGQuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGRhdGUoZGF0YSk7XHJcbiAgfSwgW2RhdGFdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9e2RpbXMud2lkdGggKyAxNTB9IGhlaWdodD17ZGltcy5oZWlnaHQgKyAxNTB9PlxyXG4gICAgICA8ZyByZWY9e2dyYXBoUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjZW50Lnh9LCAke2NlbnQueX0pYH0gLz5cclxuICAgICAgPGcgcmVmPXtsZWdlbmRSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RpbXMud2lkdGggKyA0MH0sIDEwKWB9IC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=