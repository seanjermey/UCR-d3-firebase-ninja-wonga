webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/create-firestore */ "./utils/create-firestore.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form */ "./components/form.tsx");
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/chart */ "./components/chart.tsx");



var _this = undefined,
    _jsxFileName = "C:\\Courses\\build-data-uis-with-d3-firebase\\ninja-wonga\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var LandingPage = function LandingPage() {
  _s();

  var collectionPath = "expenses";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__["db"].collection(collectionPath).onSnapshot(function (res) {
      res.docChanges().forEach(function (change) {
        var doc = _objectSpread(_objectSpread({}, change.doc.data()), {}, {
          id: change.doc.id
        });

        switch (change.type) {
          case "added":
            setData(function (data) {
              return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), [doc]);
            });
            break;

          case "modified":
            setData(function (data) {
              return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.map(function (d) {
                return d.id === doc.id ? doc : d;
              }));
            });
            break;

          case "removed":
            setData(function (data) {
              return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.filter(function (d) {
                return d.id !== doc.id;
              }));
            });
            break;
        }
      });
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Ninja Wonga",
    description: "Monthly money tracker for ninjas...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col s12 m6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: function onSubmit(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__["db"].collection(collectionPath).add(d);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col s12 m5 push-m1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, data && __jsx(_components_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data,
    onSliceClick: function onSliceClick(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__["db"].collection(collectionPath).doc(d.id)["delete"]();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  })))));
};

_s(LandingPage, "IEMTtLVFIuToo7X/raQbJAxzNQU=");

_c = LandingPage;
/* harmony default export */ __webpack_exports__["default"] = (LandingPage);

var _c;

$RefreshReg$(_c, "LandingPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjb2xsZWN0aW9uUGF0aCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwicmVzIiwiZG9jQ2hhbmdlcyIsImZvckVhY2giLCJjaGFuZ2UiLCJkb2MiLCJpZCIsInR5cGUiLCJtYXAiLCJkIiwiZmlsdGVyIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxjQUFjLEdBQUcsVUFBdkI7O0FBRHdCLGtCQUVBQyxzREFBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRWpCQyxJQUZpQjtBQUFBLE1BRVhDLE9BRlc7O0FBSXhCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsOERBQUUsQ0FBQ0MsVUFBSCxDQUFjTixjQUFkLEVBQThCTyxVQUE5QixDQUF5QyxVQUFDQyxHQUFELEVBQVM7QUFDaERBLFNBQUcsQ0FBQ0MsVUFBSixHQUFpQkMsT0FBakIsQ0FBeUIsVUFBQ0MsTUFBRCxFQUFZO0FBQ25DLFlBQU1DLEdBQUcsbUNBQVFELE1BQU0sQ0FBQ0MsR0FBUCxDQUFXVixJQUFYLEVBQVI7QUFBMkJXLFlBQUUsRUFBRUYsTUFBTSxDQUFDQyxHQUFQLENBQVdDO0FBQTFDLFVBQVQ7O0FBRUEsZ0JBQVFGLE1BQU0sQ0FBQ0csSUFBZjtBQUNFLGVBQUssT0FBTDtBQUNFWCxtQkFBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSw0SEFBY0EsSUFBZCxJQUFvQlUsR0FBcEI7QUFBQSxhQUFELENBQVA7QUFDQTs7QUFFRixlQUFLLFVBQUw7QUFDRVQsbUJBQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsa0hBQ0hBLElBQUksQ0FBQ2EsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQSx1QkFBUUEsQ0FBQyxDQUFDSCxFQUFGLEtBQVNELEdBQUcsQ0FBQ0MsRUFBYixHQUFrQkQsR0FBbEIsR0FBd0JJLENBQWhDO0FBQUEsZUFBVCxDQURHO0FBQUEsYUFBRCxDQUFQO0FBR0E7O0FBRUYsZUFBSyxTQUFMO0FBQ0ViLG1CQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLGtIQUFjQSxJQUFJLENBQUNlLE1BQUwsQ0FBWSxVQUFDRCxDQUFEO0FBQUEsdUJBQU9BLENBQUMsQ0FBQ0gsRUFBRixLQUFTRCxHQUFHLENBQUNDLEVBQXBCO0FBQUEsZUFBWixDQUFkO0FBQUEsYUFBRCxDQUFQO0FBQ0E7QUFiSjtBQWVELE9BbEJEO0FBbUJELEtBcEJEO0FBcUJELEdBdEJRLEVBc0JOLEVBdEJNLENBQVQ7QUF3QkEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUNFLFNBQUssRUFBRSxhQURUO0FBRUUsZUFBVyxFQUFFLHFDQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU0sWUFBUSxFQUFFLGtCQUFDRyxDQUFEO0FBQUEsYUFBT1gsMERBQUUsQ0FBQ0MsVUFBSCxDQUFjTixjQUFkLEVBQThCa0IsR0FBOUIsQ0FBa0NGLENBQWxDLENBQVA7QUFBQSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2QsSUFBSSxJQUNILE1BQUMseURBQUQ7QUFDRSxRQUFJLEVBQUVBLElBRFI7QUFFRSxnQkFBWSxFQUFFLHNCQUFDYyxDQUFEO0FBQUEsYUFDWlgsMERBQUUsQ0FBQ0MsVUFBSCxDQUFjTixjQUFkLEVBQThCWSxHQUE5QixDQUFrQ0ksQ0FBQyxDQUFDSCxFQUFwQyxhQURZO0FBQUEsS0FGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBSkYsQ0FERixDQUxGLENBREY7QUF5QkQsQ0FyREQ7O0dBQU1kLFc7O0tBQUFBLFc7QUF1RFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43YmMyMGYxZDcxNmZlYzZiM2Q0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZS1maXJlc3RvcmVcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhcnRcIjtcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbGxlY3Rpb25QYXRoID0gXCJleHBlbnNlc1wiO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKS5vblNuYXBzaG90KChyZXMpID0+IHtcbiAgICAgIHJlcy5kb2NDaGFuZ2VzKCkuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvYyA9IHsgLi4uY2hhbmdlLmRvYy5kYXRhKCksIGlkOiBjaGFuZ2UuZG9jLmlkIH07XG5cbiAgICAgICAgc3dpdGNoIChjaGFuZ2UudHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJhZGRlZFwiOlxuICAgICAgICAgICAgc2V0RGF0YSgoZGF0YSkgPT4gWy4uLmRhdGEsIGRvY10pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwibW9kaWZpZWRcIjpcbiAgICAgICAgICAgIHNldERhdGEoKGRhdGEpID0+IFtcbiAgICAgICAgICAgICAgLi4uZGF0YS5tYXAoKGQpID0+IChkLmlkID09PSBkb2MuaWQgPyBkb2MgOiBkKSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcInJlbW92ZWRcIjpcbiAgICAgICAgICAgIHNldERhdGEoKGRhdGEpID0+IFsuLi5kYXRhLmZpbHRlcigoZCkgPT4gZC5pZCAhPT0gZG9jLmlkKV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlclxuICAgICAgICB0aXRsZT17XCJOaW5qYSBXb25nYVwifVxuICAgICAgICBkZXNjcmlwdGlvbj17XCJNb250aGx5IG1vbmV5IHRyYWNrZXIgZm9yIG5pbmphcy4uLlwifVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTZcIj5cbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXsoZCkgPT4gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uUGF0aCkuYWRkKGQpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNSBwdXNoLW0xXCI+XG4gICAgICAgICAgICB7ZGF0YSAmJiAoXG4gICAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgb25TbGljZUNsaWNrPXsoZCkgPT5cbiAgICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpLmRvYyhkLmlkKS5kZWxldGUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=