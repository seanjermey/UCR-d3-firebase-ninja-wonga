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
    update(data.reverse());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJvblNsaWNlQ2xpY2siLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5zIiwiZW50ZXIiLCJpbmRleCIsIm4iLCJjb25zb2xlIiwibG9nIiwiaSIsImxlbmd0aCIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInQiLCJ1cGRhdGUiLCJfY3VycmVudCIsImV4aXQiLCJncmFwaCIsImN1cnJlbnQiLCJwYXRocyIsInNlbGVjdEFsbCIsInRvb2x0aXAiLCJkM1RpcCIsImF0dHIiLCJodG1sIiwibmFtZSIsImNhbGwiLCJkb21haW4iLCJtYXAiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhdHRyVHdlZW4iLCJyZW1vdmUiLCJhcHBlbmQiLCJlYWNoIiwib24iLCJzaG93IiwiaGlkZSIsInVzZUVmZmVjdCIsInJldmVyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQWFBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BSUk7QUFBQTs7QUFBQSxNQUhoQkMsSUFHZ0IsUUFIaEJBLElBR2dCO0FBQUEsdUJBRmhCQyxJQUVnQjtBQUFBLE1BRmhCQSxJQUVnQiwwQkFGVDtBQUFFQyxVQUFNLEVBQUUsR0FBVjtBQUFlQyxTQUFLLEVBQUUsR0FBdEI7QUFBMkJDLFVBQU0sRUFBRTtBQUFuQyxHQUVTO0FBQUEsTUFEaEJDLFlBQ2dCLFFBRGhC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Q0FBQyxDQUFDdEIsSUFBSCxDQUFaO0FBQ0QsS0F0Qkg7QUF1QkQsR0E5RUQ7O0FBZ0ZBOEQseURBQVMsQ0FBQyxZQUFNO0FBQ2R4QixVQUFNLENBQUN0QyxJQUFJLENBQUMrRCxPQUFMLEVBQUQsQ0FBTjtBQUNELEdBRlEsRUFFTixDQUFDL0QsSUFBRCxDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUssU0FBSyxFQUFFQyxJQUFJLENBQUNFLEtBQUwsR0FBYSxHQUF6QjtBQUE4QixVQUFNLEVBQUVGLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBRUksUUFBUjtBQUFrQixhQUFTLHNCQUFlRyxJQUFJLENBQUNDLENBQXBCLGVBQTBCRCxJQUFJLENBQUNFLENBQS9CLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsT0FBRyxFQUFFSCxTQUFSO0FBQW1CLGFBQVMsc0JBQWVQLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEVBQTVCLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FySkQ7O0dBQU1KLEs7O0tBQUFBLEs7QUF1SlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yZjJlYzgxNjUzNTYzODFlY2FhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xyXG5pbXBvcnQgZDNUaXAgZnJvbSBcImQzLXRpcFwiO1xyXG5pbXBvcnQgeyBsZWdlbmRDb2xvciB9IGZyb20gXCJkMy1zdmctbGVnZW5kXCI7XHJcblxyXG5pbnRlcmZhY2UgVmFsdWUge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBjb3N0OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFydFByb3BzIHtcclxuICBkYXRhOiBWYWx1ZVtdO1xyXG4gIGRpbXM/OiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyByYWRpdXM6IG51bWJlciB9O1xyXG4gIG9uU2xpY2VDbGljazogKGRhdGEpID0+IFByb21pc2U8YW55PjtcclxufVxyXG5cclxuY29uc3QgQ2hhcnQgPSAoe1xyXG4gIGRhdGEsXHJcbiAgZGltcyA9IHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAsIHJhZGl1czogMTUwIH0sXHJcbiAgb25TbGljZUNsaWNrLFxyXG59OiBDaGFydFByb3BzKSA9PiB7XHJcbiAgY29uc3QgZ3JhcGhSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBsZWdlbmRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgY29uc3QgY2VudCA9IHsgeDogZGltcy53aWR0aCAvIDIgKyA1LCB5OiBkaW1zLmhlaWdodCAvIDIgKyA1IH07XHJcbiAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDNbXCJzY2hlbWVTZXQzXCJdKTtcclxuICBjb25zdCBsZWdlbmQgPSBsZWdlbmRDb2xvcigpLnNoYXBlKFwiY2lyY2xlXCIpLnNoYXBlUGFkZGluZygxMCkuc2NhbGUoY29sb3IpO1xyXG5cclxuICBjb25zdCBwaWUgPSBkM1xyXG4gICAgLnBpZTxWYWx1ZT4oKVxyXG4gICAgLnNvcnQobnVsbClcclxuICAgIC52YWx1ZSgoZCkgPT4gZC5jb3N0KTtcclxuXHJcbiAgY29uc3QgYXJjUGF0aCA9IGQzXHJcbiAgICAuYXJjPGQzLlBpZUFyY0RhdHVtPFZhbHVlPj4oKVxyXG4gICAgLm91dGVyUmFkaXVzKGRpbXMucmFkaXVzKVxyXG4gICAgLmlubmVyUmFkaXVzKGRpbXMucmFkaXVzIC8gMik7XHJcblxyXG4gIC8vIGFyYyB0d2VlbnNcclxuICBjb25zdCBhcmNUd2VlbnMgPSB7XHJcbiAgICBlbnRlcihkLCBpbmRleCwgbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhuKTtcclxuXHJcbiAgICAgIGNvbnN0IGkgPVxyXG4gICAgICAgIG4ubGVuZ3RoID4gMVxyXG4gICAgICAgICAgPyBkMy5pbnRlcnBvbGF0ZSgwLCBkLnN0YXJ0QW5nbGUpXHJcbiAgICAgICAgICA6IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUgLSAwLjEsIGQuc3RhcnRBbmdsZSk7XHJcblxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJjUGF0aChkKTtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGUoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XHJcblxyXG4gICAgICB0aGlzLl9jdXJyZW50ID0gaSgxKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGkodCkpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGV4aXQoZCkge1xyXG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcclxuXHJcbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICAvLyB1cGRhdGUgZG9tXHJcbiAgY29uc3QgdXBkYXRlID0gKGRhdGEpID0+IHtcclxuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKGRhdGEpKTtcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCB0b29sdGlwID0gZDNUaXAoKVxyXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidGlwIGNhcmRcIilcclxuICAgICAgLmh0bWwoKGQpID0+IHtcclxuICAgICAgICByZXR1cm4gYDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4OyBiYWNrZ3JvdW5kOiAjMzMzOyBjb2xvcjogI2ZmZlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+JHtkLmRhdGEubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29zdFwiPiR7ZC5kYXRhLmNvc3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlbGV0ZVwiIHN0eWxlPVwiY29sb3I6IGhvdHBpbms7IGZvbnQtc2l6ZTogLjhlbVwiPkNsaWNrIHNsaWNlIHRvIGRlbGV0ZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAvLyBhdHRhY2ggdG9vbHRpcFxyXG4gICAgZ3JhcGguY2FsbCh0b29sdGlwKTtcclxuXHJcbiAgICAvLyBjb25maWd1cmUgY29sb3JzXHJcbiAgICBjb2xvci5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xyXG5cclxuICAgIC8vIGF0dGFjaCBsZWdlbmRcclxuICAgIGQzLnNlbGVjdChsZWdlbmRSZWYuY3VycmVudClcclxuICAgICAgLmNhbGwobGVnZW5kKVxyXG4gICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxyXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xyXG5cclxuICAgIC8vIGhhbmRsZSBleGl0IGRvbSBwYXRoc1xyXG4gICAgcGF0aHNcclxuICAgICAgLmV4aXQoKVxyXG4gICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgIC5kdXJhdGlvbig3NTApXHJcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5leGl0KVxyXG4gICAgICAucmVtb3ZlKCk7XHJcblxyXG4gICAgLy8gaGFuZGxlIGN1cnJlbnQgZG9tIHBhdGhzXHJcbiAgICBwYXRocy50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKS5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy51cGRhdGUpO1xyXG5cclxuICAgIC8vIGhhbmRsZSBlbnRlciBkb20gcGF0aHNcclxuICAgIHBhdGhzXHJcbiAgICAgIC5lbnRlcigpXHJcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXHJcbiAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJhcmNcIilcclxuICAgICAgLmF0dHIoXCJzdHJva2VcIiwgXCIjZmZmXCIpXHJcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDMpXHJcbiAgICAgIC5hdHRyKFwiZFwiLCBhcmNQYXRoKVxyXG4gICAgICAuYXR0cihcImZpbGxcIiwgKGQpID0+IGNvbG9yKGQuZGF0YS5uYW1lKSlcclxuICAgICAgLmVhY2goZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICB0aGlzW1wiX2N1cnJlbnRcIl0gPSBkO1xyXG4gICAgICB9KVxyXG4gICAgICAudHJhbnNpdGlvbigpXHJcbiAgICAgIC5kdXJhdGlvbig3NTApXHJcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5lbnRlcik7XHJcblxyXG4gICAgLy8gYWRkIGV2ZW50c1xyXG4gICAgZ3JhcGhcclxuICAgICAgLnNlbGVjdEFsbChcInBhdGhcIilcclxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIChkLCBpLCBuKSA9PiB7XHJcbiAgICAgICAgdG9vbHRpcC5zaG93KGQsIG5baV0pO1xyXG5cclxuICAgICAgICBkMy5zZWxlY3QobltpXSlcclxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXHJcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxyXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcclxuICAgICAgfSlcclxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPiwgaSwgbikgPT4ge1xyXG4gICAgICAgIHRvb2x0aXAuaGlkZSgpO1xyXG5cclxuICAgICAgICBkMy5zZWxlY3QobltpXSlcclxuICAgICAgICAgIC50cmFuc2l0aW9uKFwiY2hhbmdlU2xpY2VGaWxsXCIpXHJcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxyXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbG9yKGQuZGF0YS5uYW1lKSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5vbihcImNsaWNrXCIsIChkOiBkMy5QaWVBcmNEYXR1bTxWYWx1ZT4pID0+IHtcclxuICAgICAgICB0b29sdGlwLmhpZGUoKTtcclxuXHJcbiAgICAgICAgb25TbGljZUNsaWNrKGQuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1cGRhdGUoZGF0YS5yZXZlcnNlKCkpO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cclxuICAgICAgPGcgcmVmPXtncmFwaFJlZn0gdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7Y2VudC54fSwgJHtjZW50Lnl9KWB9IC8+XHJcbiAgICAgIDxnIHJlZj17bGVnZW5kUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtkaW1zLndpZHRoICsgNDB9LCAxMClgfSAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9