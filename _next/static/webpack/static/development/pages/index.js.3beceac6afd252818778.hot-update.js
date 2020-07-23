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
/* harmony import */ var d3_tip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-tip */ "./node_modules/d3-tip/index.js");
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
  var legend = Object(d3_svg_legend__WEBPACK_IMPORTED_MODULE_2__["legendColor"])().shape("circle").shapePadding(10).scale(color);
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
  }; // tooltip
  // update dom

  var update = function update(data) {
    var graph = d3__WEBPACK_IMPORTED_MODULE_1__["select"](graphRef.current);
    var paths = graph.selectAll("path").data(pie(data)); // configure colors

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
      lineNumber: 138,
      columnNumber: 5
    }
  }, __jsx("g", {
    ref: graphRef,
    transform: "translate(".concat(cent.x, ", ").concat(cent.y, ")"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }
  }), __jsx("g", {
    ref: legendRef,
    transform: "translate(".concat(dims.width + 40, ", 10)"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
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

/***/ }),

/***/ "./node_modules/d3-tip/index.js":
/*!**************************************!*\
  !*** ./node_modules/d3-tip/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "./node_modules/d3-collection/src/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/**
 * d3.tip
 * Copyright (c) 2013-2017 Justin Palmer
 *
 * Tooltips for d3.js SVG visualizations
 */
// eslint-disable-next-line no-extra-semi


// Public - constructs a new tooltip
//
// Returns a tip
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var direction   = d3TipDirection,
      offset      = d3TipOffset,
      html        = d3TipHTML,
      rootElement = document.body,
      node        = initNode(),
      svg         = null,
      point       = null,
      target      = null

  function tip(vis) {
    svg = getSVGNode(vis)
    if (!svg) return
    point = svg.createSVGPoint()
    rootElement.appendChild(node)
  }

  // Public - show the tooltip on the screen
  //
  // Returns a tip
  tip.show = function() {
    var args = Array.prototype.slice.call(arguments)
    if (args[args.length - 1] instanceof SVGElement) target = args.pop()

    var content = html.apply(this, args),
        poffset = offset.apply(this, args),
        dir     = direction.apply(this, args),
        nodel   = getNodeEl(),
        i       = directions.length,
        coords,
        scrollTop  = document.documentElement.scrollTop ||
      rootElement.scrollTop,
        scrollLeft = document.documentElement.scrollLeft ||
      rootElement.scrollLeft

    nodel.html(content)
      .style('opacity', 1).style('pointer-events', 'all')

    while (i--) nodel.classed(directions[i], false)
    coords = directionCallbacks.get(dir).apply(this)
    nodel.classed(dir, true)
      .style('top', (coords.top + poffset[0]) + scrollTop + 'px')
      .style('left', (coords.left + poffset[1]) + scrollLeft + 'px')

    return tip
  }

  // Public - hide the tooltip
  //
  // Returns a tip
  tip.hide = function() {
    var nodel = getNodeEl()
    nodel.style('opacity', 0).style('pointer-events', 'none')
    return tip
  }

  // Public: Proxy attr calls to the d3 tip container.
  // Sets or gets attribute value.
  //
  // n - name of the attribute
  // v - value of the attribute
  //
  // Returns tip or attribute value
  // eslint-disable-next-line no-unused-vars
  tip.attr = function(n, v) {
    if (arguments.length < 2 && typeof n === 'string') {
      return getNodeEl().attr(n)
    }

    var args =  Array.prototype.slice.call(arguments)
    d3_selection__WEBPACK_IMPORTED_MODULE_1__["selection"].prototype.attr.apply(getNodeEl(), args)
    return tip
  }

  // Public: Proxy style calls to the d3 tip container.
  // Sets or gets a style value.
  //
  // n - name of the property
  // v - value of the property
  //
  // Returns tip or style property value
  // eslint-disable-next-line no-unused-vars
  tip.style = function(n, v) {
    if (arguments.length < 2 && typeof n === 'string') {
      return getNodeEl().style(n)
    }

    var args = Array.prototype.slice.call(arguments)
    d3_selection__WEBPACK_IMPORTED_MODULE_1__["selection"].prototype.style.apply(getNodeEl(), args)
    return tip
  }

  // Public: Set or get the direction of the tooltip
  //
  // v - One of n(north), s(south), e(east), or w(west), nw(northwest),
  //     sw(southwest), ne(northeast) or se(southeast)
  //
  // Returns tip or direction
  tip.direction = function(v) {
    if (!arguments.length) return direction
    direction = v == null ? v : functor(v)

    return tip
  }

  // Public: Sets or gets the offset of the tip
  //
  // v - Array of [x, y] offset
  //
  // Returns offset or
  tip.offset = function(v) {
    if (!arguments.length) return offset
    offset = v == null ? v : functor(v)

    return tip
  }

  // Public: sets or gets the html value of the tooltip
  //
  // v - String value of the tip
  //
  // Returns html value or tip
  tip.html = function(v) {
    if (!arguments.length) return html
    html = v == null ? v : functor(v)

    return tip
  }

  // Public: sets or gets the root element anchor of the tooltip
  //
  // v - root element of the tooltip
  //
  // Returns root node of tip
  tip.rootElement = function(v) {
    if (!arguments.length) return rootElement
    rootElement = v == null ? v : functor(v)

    return tip
  }

  // Public: destroys the tooltip and removes it from the DOM
  //
  // Returns a tip
  tip.destroy = function() {
    if (node) {
      getNodeEl().remove()
      node = null
    }
    return tip
  }

  function d3TipDirection() { return 'n' }
  function d3TipOffset() { return [0, 0] }
  function d3TipHTML() { return ' ' }

  var directionCallbacks = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])({
        n:  directionNorth,
        s:  directionSouth,
        e:  directionEast,
        w:  directionWest,
        nw: directionNorthWest,
        ne: directionNorthEast,
        sw: directionSouthWest,
        se: directionSouthEast
      }),
      directions = directionCallbacks.keys()

  function directionNorth() {
    var bbox = getScreenBBox(this)
    return {
      top:  bbox.n.y - node.offsetHeight,
      left: bbox.n.x - node.offsetWidth / 2
    }
  }

  function directionSouth() {
    var bbox = getScreenBBox(this)
    return {
      top:  bbox.s.y,
      left: bbox.s.x - node.offsetWidth / 2
    }
  }

  function directionEast() {
    var bbox = getScreenBBox(this)
    return {
      top:  bbox.e.y - node.offsetHeight / 2,
      left: bbox.e.x
    }
  }

  function directionWest() {
    var bbox = getScreenBBox(this)
    return {
      top:  bbox.w.y - node.offsetHeight / 2,
      left: bbox.w.x - node.offsetWidth
    }
  }

  function directionNorthWest() {
    var bbox = getScreenBBox(this)
    return {
      top:  bbox.nw.y - node.offsetHeight,
      left: bbox.nw.x - node.offsetWidth
    }
  }

  function directionNorthEast() {
    var bbox = getScreenBBox(this)
    return {
      top:  bbox.ne.y - node.offsetHeight,
      left: bbox.ne.x
    }
  }

  function directionSouthWest() {
    var bbox = getScreenBBox(this)
    return {
      top:  bbox.sw.y,
      left: bbox.sw.x - node.offsetWidth
    }
  }

  function directionSouthEast() {
    var bbox = getScreenBBox(this)
    return {
      top:  bbox.se.y,
      left: bbox.se.x
    }
  }

  function initNode() {
    var div = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(document.createElement('div'))
    div
      .style('position', 'absolute')
      .style('top', 0)
      .style('opacity', 0)
      .style('pointer-events', 'none')
      .style('box-sizing', 'border-box')

    return div.node()
  }

  function getSVGNode(element) {
    var svgNode = element.node()
    if (!svgNode) return null
    if (svgNode.tagName.toLowerCase() === 'svg') return svgNode
    return svgNode.ownerSVGElement
  }

  function getNodeEl() {
    if (node == null) {
      node = initNode()
      // re-add node to DOM
      rootElement.appendChild(node)
    }
    return Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])(node)
  }

  // Private - gets the screen coordinates of a shape
  //
  // Given a shape on the screen, will return an SVGPoint for the directions
  // n(north), s(south), e(east), w(west), ne(northeast), se(southeast),
  // nw(northwest), sw(southwest).
  //
  //    +-+-+
  //    |   |
  //    +   +
  //    |   |
  //    +-+-+
  //
  // Returns an Object {n, s, e, w, nw, sw, ne, se}
  function getScreenBBox(targetShape) {
    var targetel   = target || targetShape

    while (targetel.getScreenCTM == null && targetel.parentNode != null) {
      targetel = targetel.parentNode
    }

    var bbox       = {},
        matrix     = targetel.getScreenCTM(),
        tbbox      = targetel.getBBox(),
        width      = tbbox.width,
        height     = tbbox.height,
        x          = tbbox.x,
        y          = tbbox.y

    point.x = x
    point.y = y
    bbox.nw = point.matrixTransform(matrix)
    point.x += width
    bbox.ne = point.matrixTransform(matrix)
    point.y += height
    bbox.se = point.matrixTransform(matrix)
    point.x -= width
    bbox.sw = point.matrixTransform(matrix)
    point.y -= height / 2
    bbox.w = point.matrixTransform(matrix)
    point.x += width
    bbox.e = point.matrixTransform(matrix)
    point.x -= width / 2
    point.y -= height / 2
    bbox.n = point.matrixTransform(matrix)
    point.y += height
    bbox.s = point.matrixTransform(matrix)

    return bbox
  }

  // Private - replace D3JS 3.X d3.functor() function
  function functor(v) {
    return typeof v === 'function' ? v : function() {
      return v
    }
  }

  return tip
});


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZDMtdGlwL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNoYXJ0IiwiZGF0YSIsImRpbXMiLCJoZWlnaHQiLCJ3aWR0aCIsInJhZGl1cyIsIm9uU2xpY2VDbGljayIsImdyYXBoUmVmIiwidXNlUmVmIiwibGVnZW5kUmVmIiwiY2VudCIsIngiLCJ5IiwiY29sb3IiLCJkMyIsImxlZ2VuZCIsImxlZ2VuZENvbG9yIiwic2hhcGUiLCJzaGFwZVBhZGRpbmciLCJzY2FsZSIsInBpZSIsInNvcnQiLCJ2YWx1ZSIsImQiLCJjb3N0IiwiYXJjUGF0aCIsIm91dGVyUmFkaXVzIiwiaW5uZXJSYWRpdXMiLCJhcmNUd2VlbnMiLCJlbnRlciIsImkiLCJlbmRBbmdsZSIsInN0YXJ0QW5nbGUiLCJ0IiwidXBkYXRlIiwiX2N1cnJlbnQiLCJleGl0IiwiZ3JhcGgiLCJjdXJyZW50IiwicGF0aHMiLCJzZWxlY3RBbGwiLCJkb21haW4iLCJtYXAiLCJuYW1lIiwiY2FsbCIsImF0dHIiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJhdHRyVHdlZW4iLCJyZW1vdmUiLCJhcHBlbmQiLCJlYWNoIiwib24iLCJuIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFhQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUlJO0FBQUE7O0FBQUEsTUFIaEJDLElBR2dCLFFBSGhCQSxJQUdnQjtBQUFBLHVCQUZoQkMsSUFFZ0I7QUFBQSxNQUZoQkEsSUFFZ0IsMEJBRlQ7QUFBRUMsVUFBTSxFQUFFLEdBQVY7QUFBZUMsU0FBSyxFQUFFLEdBQXRCO0FBQTJCQyxVQUFNLEVBQUU7QUFBbkMsR0FFUztBQUFBLE1BRGhCQyxZQUNnQixRQURoQkEsWUFDZ0I7QUFDaEIsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxF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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21DO0FBQ2E7QUFDaEQ7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFTO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFTO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLHdCQUF3Qjs7QUFFeEIsMkJBQTJCLHlEQUFHO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDJEQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJEQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjNiZWNlYWM2YWZkMjUyODE4Nzc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IHsgbGVnZW5kQ29sb3IgfSBmcm9tIFwiZDMtc3ZnLWxlZ2VuZFwiO1xuaW1wb3J0IFwiZDMtdGlwXCI7XG5cbmludGVyZmFjZSBWYWx1ZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhcnRQcm9wcyB7XG4gIGRhdGE6IFZhbHVlW107XG4gIGRpbXM/OiB7IGhlaWdodDogbnVtYmVyOyB3aWR0aDogbnVtYmVyOyByYWRpdXM6IG51bWJlciB9O1xuICBvblNsaWNlQ2xpY2s6IChkYXRhKSA9PiBQcm9taXNlPGFueT47XG59XG5cbmNvbnN0IENoYXJ0ID0gKHtcbiAgZGF0YSxcbiAgZGltcyA9IHsgaGVpZ2h0OiAzMDAsIHdpZHRoOiAzMDAsIHJhZGl1czogMTUwIH0sXG4gIG9uU2xpY2VDbGljayxcbn06IENoYXJ0UHJvcHMpID0+IHtcbiAgY29uc3QgZ3JhcGhSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgbGVnZW5kUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgY2VudCA9IHsgeDogZGltcy53aWR0aCAvIDIgKyA1LCB5OiBkaW1zLmhlaWdodCAvIDIgKyA1IH07XG4gIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKGQzW1wic2NoZW1lU2V0M1wiXSk7XG4gIGNvbnN0IGxlZ2VuZCA9IGxlZ2VuZENvbG9yKCkuc2hhcGUoXCJjaXJjbGVcIikuc2hhcGVQYWRkaW5nKDEwKS5zY2FsZShjb2xvcik7XG5cbiAgY29uc3QgcGllID0gZDNcbiAgICAucGllPFZhbHVlPigpXG4gICAgLnNvcnQobnVsbClcbiAgICAudmFsdWUoKGQpID0+IGQuY29zdCk7XG5cbiAgY29uc3QgYXJjUGF0aCA9IGQzXG4gICAgLmFyYzxkMy5QaWVBcmNEYXR1bTxWYWx1ZT4+KClcbiAgICAub3V0ZXJSYWRpdXMoZGltcy5yYWRpdXMpXG4gICAgLmlubmVyUmFkaXVzKGRpbXMucmFkaXVzIC8gMik7XG5cbiAgLy8gYXJjIHR3ZWVuc1xuICBjb25zdCBhcmNUd2VlbnMgPSB7XG4gICAgZW50ZXIoZCkge1xuICAgICAgY29uc3QgaSA9IGQzLmludGVycG9sYXRlKGQuZW5kQW5nbGUsIGQuc3RhcnRBbmdsZSk7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICBkLnN0YXJ0QW5nbGUgPSBpKHQpO1xuXG4gICAgICAgIHJldHVybiBhcmNQYXRoKGQpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIHVwZGF0ZShkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUodGhpcy5fY3VycmVudCwgZCk7XG5cbiAgICAgIHRoaXMuX2N1cnJlbnQgPSBpKDEpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoaSh0KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgZXhpdChkKSB7XG4gICAgICBjb25zdCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlLCBkLmVuZEFuZ2xlKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGQuc3RhcnRBbmdsZSA9IGkodCk7XG5cbiAgICAgICAgcmV0dXJuIGFyY1BhdGgoZCk7XG4gICAgICB9O1xuICAgIH0sXG4gIH07XG4gIC8vIHRvb2x0aXBcblxuICAvLyB1cGRhdGUgZG9tXG4gIGNvbnN0IHVwZGF0ZSA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgZ3JhcGggPSBkMy5zZWxlY3QoZ3JhcGhSZWYuY3VycmVudCk7XG4gICAgY29uc3QgcGF0aHMgPSBncmFwaC5zZWxlY3RBbGwoXCJwYXRoXCIpLmRhdGEocGllKGRhdGEpKTtcblxuICAgIC8vIGNvbmZpZ3VyZSBjb2xvcnNcbiAgICBjb2xvci5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQubmFtZSkpO1xuXG4gICAgLy8gYXR0YWNoIGxlZ2VuZFxuICAgIGQzLnNlbGVjdChsZWdlbmRSZWYuY3VycmVudClcbiAgICAgIC5jYWxsKGxlZ2VuZClcbiAgICAgIC5zZWxlY3RBbGwoXCJ0ZXh0XCIpXG4gICAgICAuYXR0cihcImZpbGxcIiwgXCIjZmZmXCIpO1xuXG4gICAgLy8gaGFuZGxlIGV4aXQgZG9tIHBhdGhzXG4gICAgcGF0aHNcbiAgICAgIC5leGl0KClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMuZXhpdClcbiAgICAgIC5yZW1vdmUoKTtcblxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRvbSBwYXRoc1xuICAgIHBhdGhzXG4gICAgICAuYXR0cihcImRcIiwgYXJjUGF0aClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbig3NTApXG4gICAgICAuYXR0clR3ZWVuKFwiZFwiLCBhcmNUd2VlbnMudXBkYXRlKTtcblxuICAgIC8vIGhhbmRsZSBlbnRlciBkb20gcGF0aHNcbiAgICBwYXRoc1xuICAgICAgLmVudGVyKClcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXJjXCIpXG4gICAgICAuYXR0cihcInN0cm9rZVwiLCBcIiNmZmZcIilcbiAgICAgIC5hdHRyKFwic3Ryb2tlLXdpZHRoXCIsIDMpXG4gICAgICAuYXR0cihcImZpbGxcIiwgKGQpID0+IGNvbG9yKGQuZGF0YS5uYW1lKSlcbiAgICAgIC5lYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHRoaXNbXCJfY3VycmVudFwiXSA9IGQ7XG4gICAgICB9KVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKDc1MClcbiAgICAgIC5hdHRyVHdlZW4oXCJkXCIsIGFyY1R3ZWVucy5lbnRlcik7XG5cbiAgICAvLyBhZGQgZXZlbnRzXG4gICAgZ3JhcGhcbiAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgKGQsIGksIG4pID0+IHtcbiAgICAgICAgZDMuc2VsZWN0KG5baV0pXG4gICAgICAgICAgLnRyYW5zaXRpb24oXCJjaGFuZ2VTbGljZUZpbGxcIilcbiAgICAgICAgICAuZHVyYXRpb24oMzAwKVxuICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiNmZmZcIik7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPiwgaSwgbikgPT4ge1xuICAgICAgICBkMy5zZWxlY3QobltpXSlcbiAgICAgICAgICAudHJhbnNpdGlvbihcImNoYW5nZVNsaWNlRmlsbFwiKVxuICAgICAgICAgIC5kdXJhdGlvbigzMDApXG4gICAgICAgICAgLmF0dHIoXCJmaWxsXCIsIGNvbG9yKGQuZGF0YS5uYW1lKSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwiY2xpY2tcIiwgKGQ6IGQzLlBpZUFyY0RhdHVtPFZhbHVlPikgPT4gb25TbGljZUNsaWNrKGQuZGF0YSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdXBkYXRlKGRhdGEpO1xuICB9LCBbZGF0YV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHN2ZyB3aWR0aD17ZGltcy53aWR0aCArIDE1MH0gaGVpZ2h0PXtkaW1zLmhlaWdodCArIDE1MH0+XG4gICAgICA8ZyByZWY9e2dyYXBoUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtjZW50Lnh9LCAke2NlbnQueX0pYH0gLz5cbiAgICAgIDxnIHJlZj17bGVnZW5kUmVmfSB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHtkaW1zLndpZHRoICsgNDB9LCAxMClgfSAvPlxuICAgIDwvc3ZnPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iLCIvKipcbiAqIGQzLnRpcFxuICogQ29weXJpZ2h0IChjKSAyMDEzLTIwMTcgSnVzdGluIFBhbG1lclxuICpcbiAqIFRvb2x0aXBzIGZvciBkMy5qcyBTVkcgdmlzdWFsaXphdGlvbnNcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV4dHJhLXNlbWlcbmltcG9ydCB7IG1hcCB9IGZyb20gJ2QzLWNvbGxlY3Rpb24nXG5pbXBvcnQgeyBzZWxlY3Rpb24sIHNlbGVjdCB9IGZyb20gJ2QzLXNlbGVjdGlvbidcbi8vIFB1YmxpYyAtIGNvbnN0cnVjdHMgYSBuZXcgdG9vbHRpcFxuLy9cbi8vIFJldHVybnMgYSB0aXBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICB2YXIgZGlyZWN0aW9uICAgPSBkM1RpcERpcmVjdGlvbixcbiAgICAgIG9mZnNldCAgICAgID0gZDNUaXBPZmZzZXQsXG4gICAgICBodG1sICAgICAgICA9IGQzVGlwSFRNTCxcbiAgICAgIHJvb3RFbGVtZW50ID0gZG9jdW1lbnQuYm9keSxcbiAgICAgIG5vZGUgICAgICAgID0gaW5pdE5vZGUoKSxcbiAgICAgIHN2ZyAgICAgICAgID0gbnVsbCxcbiAgICAgIHBvaW50ICAgICAgID0gbnVsbCxcbiAgICAgIHRhcmdldCAgICAgID0gbnVsbFxuXG4gIGZ1bmN0aW9uIHRpcCh2aXMpIHtcbiAgICBzdmcgPSBnZXRTVkdOb2RlKHZpcylcbiAgICBpZiAoIXN2ZykgcmV0dXJuXG4gICAgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKVxuICAgIHJvb3RFbGVtZW50LmFwcGVuZENoaWxkKG5vZGUpXG4gIH1cblxuICAvLyBQdWJsaWMgLSBzaG93IHRoZSB0b29sdGlwIG9uIHRoZSBzY3JlZW5cbiAgLy9cbiAgLy8gUmV0dXJucyBhIHRpcFxuICB0aXAuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgIGlmIChhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB0YXJnZXQgPSBhcmdzLnBvcCgpXG5cbiAgICB2YXIgY29udGVudCA9IGh0bWwuYXBwbHkodGhpcywgYXJncyksXG4gICAgICAgIHBvZmZzZXQgPSBvZmZzZXQuYXBwbHkodGhpcywgYXJncyksXG4gICAgICAgIGRpciAgICAgPSBkaXJlY3Rpb24uYXBwbHkodGhpcywgYXJncyksXG4gICAgICAgIG5vZGVsICAgPSBnZXROb2RlRWwoKSxcbiAgICAgICAgaSAgICAgICA9IGRpcmVjdGlvbnMubGVuZ3RoLFxuICAgICAgICBjb29yZHMsXG4gICAgICAgIHNjcm9sbFRvcCAgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8XG4gICAgICByb290RWxlbWVudC5zY3JvbGxUb3AsXG4gICAgICAgIHNjcm9sbExlZnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCB8fFxuICAgICAgcm9vdEVsZW1lbnQuc2Nyb2xsTGVmdFxuXG4gICAgbm9kZWwuaHRtbChjb250ZW50KVxuICAgICAgLnN0eWxlKCdvcGFjaXR5JywgMSkuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ2FsbCcpXG5cbiAgICB3aGlsZSAoaS0tKSBub2RlbC5jbGFzc2VkKGRpcmVjdGlvbnNbaV0sIGZhbHNlKVxuICAgIGNvb3JkcyA9IGRpcmVjdGlvbkNhbGxiYWNrcy5nZXQoZGlyKS5hcHBseSh0aGlzKVxuICAgIG5vZGVsLmNsYXNzZWQoZGlyLCB0cnVlKVxuICAgICAgLnN0eWxlKCd0b3AnLCAoY29vcmRzLnRvcCArIHBvZmZzZXRbMF0pICsgc2Nyb2xsVG9wICsgJ3B4JylcbiAgICAgIC5zdHlsZSgnbGVmdCcsIChjb29yZHMubGVmdCArIHBvZmZzZXRbMV0pICsgc2Nyb2xsTGVmdCArICdweCcpXG5cbiAgICByZXR1cm4gdGlwXG4gIH1cblxuICAvLyBQdWJsaWMgLSBoaWRlIHRoZSB0b29sdGlwXG4gIC8vXG4gIC8vIFJldHVybnMgYSB0aXBcbiAgdGlwLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZWwgPSBnZXROb2RlRWwoKVxuICAgIG5vZGVsLnN0eWxlKCdvcGFjaXR5JywgMCkuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKVxuICAgIHJldHVybiB0aXBcbiAgfVxuXG4gIC8vIFB1YmxpYzogUHJveHkgYXR0ciBjYWxscyB0byB0aGUgZDMgdGlwIGNvbnRhaW5lci5cbiAgLy8gU2V0cyBvciBnZXRzIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgLy9cbiAgLy8gbiAtIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICAvLyB2IC0gdmFsdWUgb2YgdGhlIGF0dHJpYnV0ZVxuICAvL1xuICAvLyBSZXR1cm5zIHRpcCBvciBhdHRyaWJ1dGUgdmFsdWVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHRpcC5hdHRyID0gZnVuY3Rpb24obiwgdikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMiAmJiB0eXBlb2YgbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBnZXROb2RlRWwoKS5hdHRyKG4pXG4gICAgfVxuXG4gICAgdmFyIGFyZ3MgPSAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgIHNlbGVjdGlvbi5wcm90b3R5cGUuYXR0ci5hcHBseShnZXROb2RlRWwoKSwgYXJncylcbiAgICByZXR1cm4gdGlwXG4gIH1cblxuICAvLyBQdWJsaWM6IFByb3h5IHN0eWxlIGNhbGxzIHRvIHRoZSBkMyB0aXAgY29udGFpbmVyLlxuICAvLyBTZXRzIG9yIGdldHMgYSBzdHlsZSB2YWx1ZS5cbiAgLy9cbiAgLy8gbiAtIG5hbWUgb2YgdGhlIHByb3BlcnR5XG4gIC8vIHYgLSB2YWx1ZSBvZiB0aGUgcHJvcGVydHlcbiAgLy9cbiAgLy8gUmV0dXJucyB0aXAgb3Igc3R5bGUgcHJvcGVydHkgdmFsdWVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIHRpcC5zdHlsZSA9IGZ1bmN0aW9uKG4sIHYpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIgJiYgdHlwZW9mIG4gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gZ2V0Tm9kZUVsKCkuc3R5bGUobilcbiAgICB9XG5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICBzZWxlY3Rpb24ucHJvdG90eXBlLnN0eWxlLmFwcGx5KGdldE5vZGVFbCgpLCBhcmdzKVxuICAgIHJldHVybiB0aXBcbiAgfVxuXG4gIC8vIFB1YmxpYzogU2V0IG9yIGdldCB0aGUgZGlyZWN0aW9uIG9mIHRoZSB0b29sdGlwXG4gIC8vXG4gIC8vIHYgLSBPbmUgb2Ygbihub3J0aCksIHMoc291dGgpLCBlKGVhc3QpLCBvciB3KHdlc3QpLCBudyhub3J0aHdlc3QpLFxuICAvLyAgICAgc3coc291dGh3ZXN0KSwgbmUobm9ydGhlYXN0KSBvciBzZShzb3V0aGVhc3QpXG4gIC8vXG4gIC8vIFJldHVybnMgdGlwIG9yIGRpcmVjdGlvblxuICB0aXAuZGlyZWN0aW9uID0gZnVuY3Rpb24odikge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIGRpcmVjdGlvblxuICAgIGRpcmVjdGlvbiA9IHYgPT0gbnVsbCA/IHYgOiBmdW5jdG9yKHYpXG5cbiAgICByZXR1cm4gdGlwXG4gIH1cblxuICAvLyBQdWJsaWM6IFNldHMgb3IgZ2V0cyB0aGUgb2Zmc2V0IG9mIHRoZSB0aXBcbiAgLy9cbiAgLy8gdiAtIEFycmF5IG9mIFt4LCB5XSBvZmZzZXRcbiAgLy9cbiAgLy8gUmV0dXJucyBvZmZzZXQgb3JcbiAgdGlwLm9mZnNldCA9IGZ1bmN0aW9uKHYpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiBvZmZzZXRcbiAgICBvZmZzZXQgPSB2ID09IG51bGwgPyB2IDogZnVuY3Rvcih2KVxuXG4gICAgcmV0dXJuIHRpcFxuICB9XG5cbiAgLy8gUHVibGljOiBzZXRzIG9yIGdldHMgdGhlIGh0bWwgdmFsdWUgb2YgdGhlIHRvb2x0aXBcbiAgLy9cbiAgLy8gdiAtIFN0cmluZyB2YWx1ZSBvZiB0aGUgdGlwXG4gIC8vXG4gIC8vIFJldHVybnMgaHRtbCB2YWx1ZSBvciB0aXBcbiAgdGlwLmh0bWwgPSBmdW5jdGlvbih2KSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gaHRtbFxuICAgIGh0bWwgPSB2ID09IG51bGwgPyB2IDogZnVuY3Rvcih2KVxuXG4gICAgcmV0dXJuIHRpcFxuICB9XG5cbiAgLy8gUHVibGljOiBzZXRzIG9yIGdldHMgdGhlIHJvb3QgZWxlbWVudCBhbmNob3Igb2YgdGhlIHRvb2x0aXBcbiAgLy9cbiAgLy8gdiAtIHJvb3QgZWxlbWVudCBvZiB0aGUgdG9vbHRpcFxuICAvL1xuICAvLyBSZXR1cm5zIHJvb3Qgbm9kZSBvZiB0aXBcbiAgdGlwLnJvb3RFbGVtZW50ID0gZnVuY3Rpb24odikge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHJvb3RFbGVtZW50XG4gICAgcm9vdEVsZW1lbnQgPSB2ID09IG51bGwgPyB2IDogZnVuY3Rvcih2KVxuXG4gICAgcmV0dXJuIHRpcFxuICB9XG5cbiAgLy8gUHVibGljOiBkZXN0cm95cyB0aGUgdG9vbHRpcCBhbmQgcmVtb3ZlcyBpdCBmcm9tIHRoZSBET01cbiAgLy9cbiAgLy8gUmV0dXJucyBhIHRpcFxuICB0aXAuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChub2RlKSB7XG4gICAgICBnZXROb2RlRWwoKS5yZW1vdmUoKVxuICAgICAgbm9kZSA9IG51bGxcbiAgICB9XG4gICAgcmV0dXJuIHRpcFxuICB9XG5cbiAgZnVuY3Rpb24gZDNUaXBEaXJlY3Rpb24oKSB7IHJldHVybiAnbicgfVxuICBmdW5jdGlvbiBkM1RpcE9mZnNldCgpIHsgcmV0dXJuIFswLCAwXSB9XG4gIGZ1bmN0aW9uIGQzVGlwSFRNTCgpIHsgcmV0dXJuICcgJyB9XG5cbiAgdmFyIGRpcmVjdGlvbkNhbGxiYWNrcyA9IG1hcCh7XG4gICAgICAgIG46ICBkaXJlY3Rpb25Ob3J0aCxcbiAgICAgICAgczogIGRpcmVjdGlvblNvdXRoLFxuICAgICAgICBlOiAgZGlyZWN0aW9uRWFzdCxcbiAgICAgICAgdzogIGRpcmVjdGlvbldlc3QsXG4gICAgICAgIG53OiBkaXJlY3Rpb25Ob3J0aFdlc3QsXG4gICAgICAgIG5lOiBkaXJlY3Rpb25Ob3J0aEVhc3QsXG4gICAgICAgIHN3OiBkaXJlY3Rpb25Tb3V0aFdlc3QsXG4gICAgICAgIHNlOiBkaXJlY3Rpb25Tb3V0aEVhc3RcbiAgICAgIH0pLFxuICAgICAgZGlyZWN0aW9ucyA9IGRpcmVjdGlvbkNhbGxiYWNrcy5rZXlzKClcblxuICBmdW5jdGlvbiBkaXJlY3Rpb25Ob3J0aCgpIHtcbiAgICB2YXIgYmJveCA9IGdldFNjcmVlbkJCb3godGhpcylcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAgYmJveC5uLnkgLSBub2RlLm9mZnNldEhlaWdodCxcbiAgICAgIGxlZnQ6IGJib3gubi54IC0gbm9kZS5vZmZzZXRXaWR0aCAvIDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXJlY3Rpb25Tb3V0aCgpIHtcbiAgICB2YXIgYmJveCA9IGdldFNjcmVlbkJCb3godGhpcylcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAgYmJveC5zLnksXG4gICAgICBsZWZ0OiBiYm94LnMueCAtIG5vZGUub2Zmc2V0V2lkdGggLyAyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlyZWN0aW9uRWFzdCgpIHtcbiAgICB2YXIgYmJveCA9IGdldFNjcmVlbkJCb3godGhpcylcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiAgYmJveC5lLnkgLSBub2RlLm9mZnNldEhlaWdodCAvIDIsXG4gICAgICBsZWZ0OiBiYm94LmUueFxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRpcmVjdGlvbldlc3QoKSB7XG4gICAgdmFyIGJib3ggPSBnZXRTY3JlZW5CQm94KHRoaXMpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogIGJib3gudy55IC0gbm9kZS5vZmZzZXRIZWlnaHQgLyAyLFxuICAgICAgbGVmdDogYmJveC53LnggLSBub2RlLm9mZnNldFdpZHRoXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlyZWN0aW9uTm9ydGhXZXN0KCkge1xuICAgIHZhciBiYm94ID0gZ2V0U2NyZWVuQkJveCh0aGlzKVxuICAgIHJldHVybiB7XG4gICAgICB0b3A6ICBiYm94Lm53LnkgLSBub2RlLm9mZnNldEhlaWdodCxcbiAgICAgIGxlZnQ6IGJib3gubncueCAtIG5vZGUub2Zmc2V0V2lkdGhcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkaXJlY3Rpb25Ob3J0aEVhc3QoKSB7XG4gICAgdmFyIGJib3ggPSBnZXRTY3JlZW5CQm94KHRoaXMpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogIGJib3gubmUueSAtIG5vZGUub2Zmc2V0SGVpZ2h0LFxuICAgICAgbGVmdDogYmJveC5uZS54XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlyZWN0aW9uU291dGhXZXN0KCkge1xuICAgIHZhciBiYm94ID0gZ2V0U2NyZWVuQkJveCh0aGlzKVxuICAgIHJldHVybiB7XG4gICAgICB0b3A6ICBiYm94LnN3LnksXG4gICAgICBsZWZ0OiBiYm94LnN3LnggLSBub2RlLm9mZnNldFdpZHRoXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZGlyZWN0aW9uU291dGhFYXN0KCkge1xuICAgIHZhciBiYm94ID0gZ2V0U2NyZWVuQkJveCh0aGlzKVxuICAgIHJldHVybiB7XG4gICAgICB0b3A6ICBiYm94LnNlLnksXG4gICAgICBsZWZ0OiBiYm94LnNlLnhcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0Tm9kZSgpIHtcbiAgICB2YXIgZGl2ID0gc2VsZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgIGRpdlxuICAgICAgLnN0eWxlKCdwb3NpdGlvbicsICdhYnNvbHV0ZScpXG4gICAgICAuc3R5bGUoJ3RvcCcsIDApXG4gICAgICAuc3R5bGUoJ29wYWNpdHknLCAwKVxuICAgICAgLnN0eWxlKCdwb2ludGVyLWV2ZW50cycsICdub25lJylcbiAgICAgIC5zdHlsZSgnYm94LXNpemluZycsICdib3JkZXItYm94JylcblxuICAgIHJldHVybiBkaXYubm9kZSgpXG4gIH1cblxuICBmdW5jdGlvbiBnZXRTVkdOb2RlKGVsZW1lbnQpIHtcbiAgICB2YXIgc3ZnTm9kZSA9IGVsZW1lbnQubm9kZSgpXG4gICAgaWYgKCFzdmdOb2RlKSByZXR1cm4gbnVsbFxuICAgIGlmIChzdmdOb2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHJldHVybiBzdmdOb2RlXG4gICAgcmV0dXJuIHN2Z05vZGUub3duZXJTVkdFbGVtZW50XG4gIH1cblxuICBmdW5jdGlvbiBnZXROb2RlRWwoKSB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgbm9kZSA9IGluaXROb2RlKClcbiAgICAgIC8vIHJlLWFkZCBub2RlIHRvIERPTVxuICAgICAgcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSlcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdChub2RlKVxuICB9XG5cbiAgLy8gUHJpdmF0ZSAtIGdldHMgdGhlIHNjcmVlbiBjb29yZGluYXRlcyBvZiBhIHNoYXBlXG4gIC8vXG4gIC8vIEdpdmVuIGEgc2hhcGUgb24gdGhlIHNjcmVlbiwgd2lsbCByZXR1cm4gYW4gU1ZHUG9pbnQgZm9yIHRoZSBkaXJlY3Rpb25zXG4gIC8vIG4obm9ydGgpLCBzKHNvdXRoKSwgZShlYXN0KSwgdyh3ZXN0KSwgbmUobm9ydGhlYXN0KSwgc2Uoc291dGhlYXN0KSxcbiAgLy8gbncobm9ydGh3ZXN0KSwgc3coc291dGh3ZXN0KS5cbiAgLy9cbiAgLy8gICAgKy0rLStcbiAgLy8gICAgfCAgIHxcbiAgLy8gICAgKyAgICtcbiAgLy8gICAgfCAgIHxcbiAgLy8gICAgKy0rLStcbiAgLy9cbiAgLy8gUmV0dXJucyBhbiBPYmplY3Qge24sIHMsIGUsIHcsIG53LCBzdywgbmUsIHNlfVxuICBmdW5jdGlvbiBnZXRTY3JlZW5CQm94KHRhcmdldFNoYXBlKSB7XG4gICAgdmFyIHRhcmdldGVsICAgPSB0YXJnZXQgfHwgdGFyZ2V0U2hhcGVcblxuICAgIHdoaWxlICh0YXJnZXRlbC5nZXRTY3JlZW5DVE0gPT0gbnVsbCAmJiB0YXJnZXRlbC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgIHRhcmdldGVsID0gdGFyZ2V0ZWwucGFyZW50Tm9kZVxuICAgIH1cblxuICAgIHZhciBiYm94ICAgICAgID0ge30sXG4gICAgICAgIG1hdHJpeCAgICAgPSB0YXJnZXRlbC5nZXRTY3JlZW5DVE0oKSxcbiAgICAgICAgdGJib3ggICAgICA9IHRhcmdldGVsLmdldEJCb3goKSxcbiAgICAgICAgd2lkdGggICAgICA9IHRiYm94LndpZHRoLFxuICAgICAgICBoZWlnaHQgICAgID0gdGJib3guaGVpZ2h0LFxuICAgICAgICB4ICAgICAgICAgID0gdGJib3gueCxcbiAgICAgICAgeSAgICAgICAgICA9IHRiYm94LnlcblxuICAgIHBvaW50LnggPSB4XG4gICAgcG9pbnQueSA9IHlcbiAgICBiYm94Lm53ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG1hdHJpeClcbiAgICBwb2ludC54ICs9IHdpZHRoXG4gICAgYmJveC5uZSA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShtYXRyaXgpXG4gICAgcG9pbnQueSArPSBoZWlnaHRcbiAgICBiYm94LnNlID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG1hdHJpeClcbiAgICBwb2ludC54IC09IHdpZHRoXG4gICAgYmJveC5zdyA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShtYXRyaXgpXG4gICAgcG9pbnQueSAtPSBoZWlnaHQgLyAyXG4gICAgYmJveC53ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG1hdHJpeClcbiAgICBwb2ludC54ICs9IHdpZHRoXG4gICAgYmJveC5lID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKG1hdHJpeClcbiAgICBwb2ludC54IC09IHdpZHRoIC8gMlxuICAgIHBvaW50LnkgLT0gaGVpZ2h0IC8gMlxuICAgIGJib3gubiA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShtYXRyaXgpXG4gICAgcG9pbnQueSArPSBoZWlnaHRcbiAgICBiYm94LnMgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0obWF0cml4KVxuXG4gICAgcmV0dXJuIGJib3hcbiAgfVxuXG4gIC8vIFByaXZhdGUgLSByZXBsYWNlIEQzSlMgMy5YIGQzLmZ1bmN0b3IoKSBmdW5jdGlvblxuICBmdW5jdGlvbiBmdW5jdG9yKHYpIHtcbiAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbicgPyB2IDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdlxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aXBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=