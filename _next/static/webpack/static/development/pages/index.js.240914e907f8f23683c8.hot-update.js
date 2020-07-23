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
/* harmony import */ var d3_svg_legend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-svg-legend */ "./node_modules/d3-svg-legend/indexRollupNext.js");
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
  } : _ref$dims;
  var graphRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var legendRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var cent = {
    x: dims.width / 2 + 5,
    y: dims.height / 2 + 5
  };
  var color = d3__WEBPACK_IMPORTED_MODULE_1__["scaleOrdinal"](d3__WEBPACK_IMPORTED_MODULE_1__["schemeSet3"]);
  var legend = Object(d3_svg_legend__WEBPACK_IMPORTED_MODULE_2__["legendColor"])().shape("circle").shapePadding(10).scale(color);
  var pie = d3__WEBPACK_IMPORTED_MODULE_1__["pie"]().sort(null).value(function (d) {
    return d.cost;
  });
  var arcPath = d3__WEBPACK_IMPORTED_MODULE_1__["arc"]().outerRadius(dims.radius).innerRadius(dims.radius / 2);

  var arcTweenEnter = function arcTweenEnter(d) {
    var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.endAngle, d.startAngle);
    return function (t) {
      d.startAngle = i(t);
      return arcPath(d);
    };
  };

  function arcTweenUpdate(d) {
    var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](this._current, d);
    this._current = i(1);
    return function (t) {
      return arcPath(i(t));
    };
  }

  var arcTweenExit = function arcTweenExit(d) {
    var i = d3__WEBPACK_IMPORTED_MODULE_1__["interpolate"](d.startAngle, d.endAngle);
    return function (t) {
      d.startAngle = i(t);
      return arcPath(d);
    };
  }; // event handlers


  var handleMouseOverEvent = function handleMouseOverEvent(d, i, n) {
    console.log(n[i]);
    d3__WEBPACK_IMPORTED_MODULE_1__["select"](n[i]).transition().duration(300).attr("fill", "#fff");
  }; // update dom


  var update = function update(data) {
    var graph = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graphRef.current).selectAll("path");
    var paths = graph.data(pie(data)); // configure colors

    color.domain(data.map(function (d) {
      return d.name;
    })); // attach legend

    d3__WEBPACK_IMPORTED_MODULE_1__["select"](legendRef.current).call(legend).selectAll("text").attr("fill", "#fff"); // handle exit dom paths

    paths.exit().transition().duration(750).attrTween("d", arcTweenExit).remove(); // handle current dom paths

    paths.attr("d", arcPath).transition().duration(750).attrTween("d", arcTweenUpdate); // handle enter dom paths

    paths.enter().append("path").attr("class", "arc").attr("stroke", "#fff").attr("stroke-width", 3).attr("fill", function (d) {
      return color(d.data.name);
    }).each(function (d) {
      this["_current"] = d;
    }).transition().duration(750).attrTween("d", arcTweenEnter); // add events

    graph.selectAll("path").on("mouseover");
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
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCJdLCJuYW1lcyI6WyJDaGFydCIsImRhdGEiLCJkaW1zIiwiaGVpZ2h0Iiwid2lkdGgiLCJyYWRpdXMiLCJncmFwaFJlZiIsInVzZVJlZiIsImxlZ2VuZFJlZiIsImNlbnQiLCJ4IiwieSIsImNvbG9yIiwiZDMiLCJsZWdlbmQiLCJsZWdlbmRDb2xvciIsInNoYXBlIiwic2hhcGVQYWRkaW5nIiwic2NhbGUiLCJwaWUiLCJzb3J0IiwidmFsdWUiLCJkIiwiY29zdCIsImFyY1BhdGgiLCJvdXRlclJhZGl1cyIsImlubmVyUmFkaXVzIiwiYXJjVHdlZW5FbnRlciIsImkiLCJlbmRBbmdsZSIsInN0YXJ0QW5nbGUiLCJ0IiwiYXJjVHdlZW5VcGRhdGUiLCJfY3VycmVudCIsImFyY1R3ZWVuRXhpdCIsImhhbmRsZU1vdXNlT3ZlckV2ZW50IiwibiIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhdHRyIiwidXBkYXRlIiwiZ3JhcGgiLCJjdXJyZW50Iiwic2VsZWN0QWxsIiwicGF0aHMiLCJkb21haW4iLCJtYXAiLCJuYW1lIiwiY2FsbCIsImV4aXQiLCJhdHRyVHdlZW4iLCJyZW1vdmUiLCJlbnRlciIsImFwcGVuZCIsImVhY2giLCJvbiIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBYUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FHSTtBQUFBOztBQUFBLE1BRmhCQyxJQUVnQixRQUZoQkEsSUFFZ0I7QUFBQSx1QkFEaEJDLElBQ2dCO0FBQUEsTUFEaEJBLElBQ2dCLDBCQURUO0FBQUVDLFVBQU0sRUFBRSxHQUFWO0FBQWVDLFNBQUssRUFBRSxHQUF0QjtBQUEyQkMsVUFBTSxFQUFFO0FBQW5DLEdBQ1M7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBLE1BQU1DLFNBQVMs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SyxDQUFDRSxTQUFOLENBQWdCLE1BQWhCLEVBQXdCWSxFQUF4QixDQUEyQixXQUEzQjtBQUNELEdBN0NEOztBQStDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RoQixVQUFNLENBQUN6QyxJQUFELENBQU47QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsSUFBRCxDQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUssU0FBSyxFQUFFQyxJQUFJLENBQUNFLEtBQUwsR0FBYSxHQUF6QjtBQUE4QixVQUFNLEVBQUVGLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLE9BQUcsRUFBRUcsUUFBUjtBQUFrQixhQUFTLHNCQUFlRyxJQUFJLENBQUNDLENBQXBCLGVBQTBCRCxJQUFJLENBQUNFLENBQS9CLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUcsT0FBRyxFQUFFSCxTQUFSO0FBQW1CLGFBQVMsc0JBQWVOLElBQUksQ0FBQ0UsS0FBTCxHQUFhLEVBQTVCLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FwSEQ7O0dBQU1KLEs7O0tBQUFBLEs7QUFzSFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yNDA5MTRlOTA3ZjhmMjM2ODNjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCB7IGxlZ2VuZENvbG9yIH0gZnJvbSBcImQzLXN2Zy1sZWdlbmRcIjtcbmltcG9ydCB7IGZ1bmMgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbnRlcmZhY2UgVmFsdWUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvc3Q6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIENoYXJ0UHJvcHMge1xuICBkYXRhOiBWYWx1ZVtdO1xuICBkaW1zOiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyByYWRpdXM6IG51bWJlciB9O1xufVxuXG5jb25zdCBDaGFydCA9ICh7XG4gIGRhdGEsXG4gIGRpbXMgPSB7IGhlaWdodDogMzAwLCB3aWR0aDogMzAwLCByYWRpdXM6IDE1MCB9LFxufTogQ2hhcnRQcm9wcykgPT4ge1xuICBjb25zdCBncmFwaFJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBsZWdlbmRSZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBjZW50ID0geyB4OiBkaW1zLndpZHRoIC8gMiArIDUsIHk6IGRpbXMuaGVpZ2h0IC8gMiArIDUgfTtcbiAgY29uc3QgY29sb3IgPSBkMy5zY2FsZU9yZGluYWwoZDNbXCJzY2hlbWVTZXQzXCJdKTtcbiAgY29uc3QgbGVnZW5kID0gbGVnZW5kQ29sb3IoKS5zaGFwZShcImNpcmNsZVwiKS5zaGFwZVBhZGRpbmcoMTApLnNjYWxlKGNvbG9yKTtcblxuICBjb25zdCBwaWUgPSBkM1xuICAgIC5waWU8VmFsdWU+KClcbiAgICAuc29ydChudWxsKVxuICAgIC52YWx1ZSgoZCkgPT4gZC5jb3N0KTtcblxuICBjb25zdCBhcmNQYXRoID0gZDNcbiAgICAuYXJjPGQzLlBpZUFyY0RhdHVtPFZhbHVlPj4oKVxuICAgIC5vdXRlclJhZGl1cyhkaW1zLnJhZGl1cylcbiAgICAuaW5uZXJSYWRpdXMoZGltcy5yYWRpdXMgLyAyKTtcblxuICBjb25zdCBhcmNUd2VlbkVudGVyID0gKGQpID0+IHtcbiAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5lbmRBbmdsZSwgZC5zdGFydEFuZ2xlKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgZC5zdGFydEFuZ2xlID0gaSh0KTtcblxuICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBhcmNUd2VlblVwZGF0ZShkKSB7XG4gICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKHRoaXMuX2N1cnJlbnQsIGQpO1xuXG4gICAgdGhpcy5fY3VycmVudCA9IGkoMSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgIHJldHVybiBhcmNQYXRoKGkodCkpO1xuICAgIH07XG4gIH1cblxuICBjb25zdCBhcmNUd2VlbkV4aXQgPSAoZCkgPT4ge1xuICAgIGNvbnN0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUsIGQuZW5kQW5nbGUpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xuXG4gICAgICByZXR1cm4gYXJjUGF0aChkKTtcbiAgICB9O1xuICB9O1xuXG4gIC8vIGV2ZW50IGhhbmRsZXJzXG4gIGNvbnN0IGhhbmRsZU1vdXNlT3ZlckV2ZW50ID0gKGQsIGksIG4pID0+IHtcbiAgICBjb25zb2xlLmxvZyhuW2ldKTtcblxuICAgIGQzLnNlbGVjdChuW2ldKS50cmFuc2l0aW9uKCkuZHVyYXRpb24oMzAwKS5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG4gIH07XG5cbiAgLy8gdXBkYXRlIGRvbVxuICBjb25zdCB1cGRhdGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGdyYXBoID0gZDMuc2VsZWN0KGdyYXBoUmVmLmN1cnJlbnQpLnNlbGVjdEFsbChcInBhdGhcIik7XG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5kYXRhKHBpZShkYXRhKSk7XG5cbiAgICAvLyBjb25maWd1cmUgY29sb3JzXG4gICAgY29sb3IuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLm5hbWUpKTtcblxuICAgIC8vIGF0dGFjaCBsZWdlbmRcbiAgICBkMy5zZWxlY3QobGVnZW5kUmVmLmN1cnJlbnQpXG4gICAgICAuY2FsbChsZWdlbmQpXG4gICAgICAuc2VsZWN0QWxsKFwidGV4dFwiKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiI2ZmZlwiKTtcblxuICAgIC8vIGhhbmRsZSBleGl0IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuZXhpdCgpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oNzUwKVxuICAgICAgLmF0dHJUd2VlbihcImRcIiwgYXJjVHdlZW5FeGl0KVxuICAgICAgLnJlbW92ZSgpO1xuXG4gICAgLy8gaGFuZGxlIGN1cnJlbnQgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5hdHRyKFwiZFwiLCBhcmNQYXRoKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVuVXBkYXRlKTtcblxuICAgIC8vIGhhbmRsZSBlbnRlciBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDMpXG4gICAgICAuYXR0cihcImZpbGxcIiwgKGQpID0+IGNvbG9yKGQuZGF0YS5uYW1lKSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHRoaXNbXCJfY3VycmVudFwiXSA9IGQ7XG4gICAgICB9KVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVuRW50ZXIpO1xuXG4gICAgLy8gYWRkIGV2ZW50c1xuICAgIGdyYXBoLnNlbGVjdEFsbChcInBhdGhcIikub24oXCJtb3VzZW92ZXJcIik7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB1cGRhdGUoZGF0YSk7XG4gIH0sIFtkYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnIHdpZHRoPXtkaW1zLndpZHRoICsgMTUwfSBoZWlnaHQ9e2RpbXMuaGVpZ2h0ICsgMTUwfT5cbiAgICAgIDxnIHJlZj17Z3JhcGhSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnQueH0sICR7Y2VudC55fSlgfSAvPlxuICAgICAgPGcgcmVmPXtsZWdlbmRSZWZ9IHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2RpbXMud2lkdGggKyA0MH0sIDEwKWB9IC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=