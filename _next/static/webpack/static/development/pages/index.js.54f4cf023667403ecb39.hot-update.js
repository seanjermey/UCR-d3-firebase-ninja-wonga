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

  var timeout;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
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
      lineNumber: 168,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJfaSIsImVuZEFuZ2xlIiwic3RhcnRBbmdsZSIsInQiLCJ1cGRhdGUiLCJpIiwibiIsIl9jdXJyZW50IiwiZXhpdCIsImdyYXBoIiwiY3VycmVudCIsInBhdGhzIiwic2VsZWN0QWxsIiwidG9vbHRpcCIsImQzVGlwIiwiYXR0ciIsImh0bWwiLCJuYW1lIiwiY2FsbCIsImRvbWFpbiIsIm1hcCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImF0dHJUd2VlbiIsInJlbW92ZSIsImFwcGVuZCIsImVhY2giLCJvbiIsInNob3ciLCJoaWRlIiwidGltZW91dCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJDLFlBQ2dCLFFBRGhC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LElBQVI7QUFFQXJELGtCQUFZLENBQUNpQixDQUFDLENBQUN0QixJQUFILENBQVo7QUFDRCxLQXRCSDtBQXVCRCxHQXBGRDs7QUFzRkEsTUFBSTJELE9BQUo7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RELFdBQU8sR0FBR0UsVUFBVSxDQUFDLFlBQU07QUFDekI1QixZQUFNLENBQUNqQyxJQUFELENBQU47QUFFQThELGtCQUFZLENBQUNILE9BQUQsQ0FBWjtBQUNELEtBSm1CLEVBSWpCLEdBSmlCLENBQXBCO0FBS0QsR0FOUSxFQU1OLENBQUMzRCxJQUFELENBTk0sQ0FBVDtBQVFBLFNBQ0U7QUFBSyxTQUFLLEVBQUVDLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEdBQXpCO0FBQThCLFVBQU0sRUFBRUYsSUFBSSxDQUFDQyxNQUFMLEdBQWMsR0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFFSSxRQUFSO0FBQWtCLGFBQVMsc0JBQWVHLElBQUksQ0FBQ0MsQ0FBcEIsZUFBMEJELElBQUksQ0FBQ0UsQ0FBL0IsTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBRyxPQUFHLEVBQUVILFNBQVI7QUFBbUIsYUFBUyxzQkFBZVAsSUFBSSxDQUFDRSxLQUFMLEdBQWEsRUFBNUIsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRCxDQTVKRDs7R0FBTUosSzs7S0FBQUEsSztBQThKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU0ZjRjZjAyMzY2NzQwM2VjYjM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IGQzVGlwIGZyb20gXCJkMy10aXBcIjtcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSBcImQzLXN2Zy1sZWdlbmRcIjtcblxuaW50ZXJmYWNlIFZhbHVlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBDaGFydFByb3BzIHtcbiAgZGF0YTogVmFsdWVbXTtcbiAgZGltcz86IHsgaGVpZ2h0OiBudW1iZXI7IHdpZHRoOiBudW1iZXI7IHJhZGl1czogbnVtYmVyIH07XG4gIG9uU2xpY2VDbGljazogKGRhdGEpID0+IFByb21pc2U8YW55Pjtcbn1cblxuY29uc3QgQ2hhcnQgPSAoe1xuICBkYXRhLFxuICBkaW1zID0geyBoZWlnaHQ6IDMwMCwgd2lkdGg6IDMwMCwgcmFkaXVzOiAxNTAgfSxcbiAgb25TbGljZUNsaWNrLFxufTogQ2hhcnRQcm9wcykgPT4ge1xuICBjb25zdCBncmFwaFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsZWdlbmRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjZW50ID0geyB4OiBkaW1zLndpZHRoIC8gMiArIDUsIHk6IGRpbXMuaGVpZ2h0IC8gMiArIDUgfTtcbiAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDNbXCJzY2hlbWVTZXQzXCJdKTtcbiAgY29uc3QgbGVnZW5kID0gbGVnZW5kQ29sb3IoKS5zaGFwZShcImNpcmNsZVwiKS5zaGFwZVBhZGRpbmcoMTApLnNjYWxlKGNvbG9yKTtcblxuICBjb25zdCBwaWUgPSBkM1xuICAgIC5waWU8VmFsdWU+KClcbiAgICAuc29ydChudWxsKVxuICAgIC52YWx1ZSgoZCkgPT4gZC5jb3N0KTtcblxuICBjb25zdCBhcmNQYXRoID0gZDNcbiAgICAuYXJjPGQzLlBpZUFyY0RhdHVtPFZhbHVlPj4oKVxuICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcbiAgICAuaW5uZXJSYWRpdXMoZGltcy5yYWRpdXMgLyAyKTtcblxuICAvLyBhcmMgdHdlZW5zXG4gIGNvbnN0IGFyY1R3ZWVucyA9IHtcbiAgICBlbnRlcihkKSB7XG4gICAgICBjb25zdCBfaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUsIGQuc3RhcnRBbmdsZSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBfaSh0KTtcblxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICB1cGRhdGUoZCwgaSwgbikge1xuICAgICAgY29uc3QgX2kgPSBkMy5pbnRlcnBvbGF0ZSh0aGlzLl9jdXJyZW50LCBkKTtcblxuICAgICAgbltpXS5fY3VycmVudCA9IF9pKDEpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoX2kodCkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIGV4aXQoZCkge1xuICAgICAgY29uc3QgX2kgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgZC5zdGFydEFuZ2xlID0gX2kodCk7XG5cbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICB9O1xuICAgIH0sXG4gIH07XG5cbiAgLy8gdXBkYXRlIGRvbVxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IHBhdGhzID0gZ3JhcGguc2VsZWN0QWxsKFwicGF0aFwiKS5kYXRhKHBpZShkYXRhKSk7XG5cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgdG9vbHRpcCA9IGQzVGlwKClcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0aXAgY2FyZFwiKVxuICAgICAgLmh0bWwoKGQpID0+IHtcbiAgICAgICAgcmV0dXJuIGA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweDsgYmFja2dyb3VuZDogIzMzMzsgY29sb3I6ICNmZmZcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj4ke2QuZGF0YS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29zdFwiPiR7ZC5kYXRhLmNvc3R9PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWxldGVcIiBzdHlsZT1cImNvbG9yOiBob3RwaW5rOyBmb250LXNpemU6IC44ZW1cIj5DbGljayBzbGljZSB0byBkZWxldGU8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICB9KTtcblxuICAgIC8vIGF0dGFjaCB0b29sdGlwXG4gICAgZ3JhcGguY2FsbCh0b29sdGlwKTtcblxuICAgIC8vIGNvbmZpZ3VyZSBjb2xvcnNcbiAgICBjb2xvci5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xuXG4gICAgLy8gYXR0YWNoIGxlZ2VuZFxuICAgIGQzLnNlbGVjdChsZWdlbmRSZWYuY3VycmVudClcbiAgICAgIC5jYWxsKGxlZ2VuZClcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuXG4gICAgLy8gaGFuZGxlIGV4aXQgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5leGl0KClcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmMgZXhpdFwiKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5leGl0KVxuICAgICAgLnJlbW92ZSgpO1xuXG4gICAgLy8gaGFuZGxlIGN1cnJlbnQgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmMgdXBkYXRlXCIpXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMudXBkYXRlKTtcblxuICAgIC8vIGhhbmRsZSBlbnRlciBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjIGVudGVyXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDMpXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCAoZCkgPT4gY29sb3IoZC5kYXRhLm5hbWUpKVxuICAgICAgLmVhY2goKGQsIGksIG4pID0+IHtcbiAgICAgICAgbltpXVtcIl9jdXJyZW50XCJdID0gZDtcbiAgICAgIH0pXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5zLmVudGVyKTtcblxuICAgIC8vIGFkZCBldmVudHNcbiAgICBncmFwaFxuICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCAoZCwgaSwgbikgPT4ge1xuICAgICAgICB0b29sdGlwLnNob3coZCwgbltpXSk7XG5cbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPiwgaSwgbikgPT4ge1xuICAgICAgICB0b29sdGlwLmhpZGUoKTtcblxuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbG9yKGQuZGF0YS5uYW1lKSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPikgPT4ge1xuICAgICAgICB0b29sdGlwLmhpZGUoKTtcblxuICAgICAgICBvblNsaWNlQ2xpY2soZC5kYXRhKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGxldCB0aW1lb3V0O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdXBkYXRlKGRhdGEpO1xuXG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfSwgNzUwKTtcbiAgfSwgW2RhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxzdmcgd2lkdGg9e2RpbXMud2lkdGggKyAxNTB9IGhlaWdodD17ZGltcy5oZWlnaHQgKyAxNTB9PlxuICAgICAgPGcgcmVmPXtncmFwaFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWB9IC8+XG4gICAgICA8ZyByZWY9e2xlZ2VuZFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7ZGltcy53aWR0aCArIDQwfSwgMTApYH0gLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==