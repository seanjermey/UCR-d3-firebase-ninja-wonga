webpackHotUpdate("static\\development\\pages\\index.js",{

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
    _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__["db"].collection(collectionPath).get().then(function (res) {
      setData(function (data) {
        return res.docs.map(function (doc) {
          return _objectSpread(_objectSpread({}, doc.data()), {}, {
            id: doc.id
          });
        });
      });
    });
    _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__["db"].collection(collectionPath).onSnapshot(function (res) {
      res.docChanges().forEach(function (change) {
        var doc = _objectSpread(_objectSpread({}, change.doc.data()), {}, {
          id: change.doc.id
        });

        switch (change.type) {
          case "added":
            if (!data.find(function (d) {
              return d.id === doc.id;
            })) {
              setData(function (data) {
                return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), [doc]);
              });
            }

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
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Ninja Wonga",
    description: "Monthly money tracker for ninjas...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col s12 m6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: function onSubmit(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__["db"].collection(collectionPath).add(d);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col s12 m5 push-m1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, __jsx(_components_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data,
    onSliceClick: function onSliceClick(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__["db"].collection(collectionPath).doc(d.id)["delete"]();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjb2xsZWN0aW9uUGF0aCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicmVzIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwib25TbmFwc2hvdCIsImRvY0NoYW5nZXMiLCJmb3JFYWNoIiwiY2hhbmdlIiwidHlwZSIsImZpbmQiLCJkIiwiZmlsdGVyIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxjQUFjLEdBQUcsVUFBdkI7O0FBRHdCLGtCQUVBQyxzREFBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRWpCQyxJQUZpQjtBQUFBLE1BRVhDLE9BRlc7O0FBSXhCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsOERBQUUsQ0FBQ0MsVUFBSCxDQUFjTixjQUFkLEVBQ0dPLEdBREgsR0FFR0MsSUFGSCxDQUVRLFVBQUNDLEdBQUQsRUFBUztBQUNiTixhQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLGVBQ05PLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxHQUFULENBQWEsVUFBQ0MsR0FBRDtBQUFBLGlEQUFlQSxHQUFHLENBQUNWLElBQUosRUFBZjtBQUEyQlcsY0FBRSxFQUFFRCxHQUFHLENBQUNDO0FBQW5DO0FBQUEsU0FBYixDQURNO0FBQUEsT0FBRCxDQUFQO0FBR0QsS0FOSDtBQVFBUiw4REFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFBOEJjLFVBQTlCLENBQXlDLFVBQUNMLEdBQUQsRUFBUztBQUNoREEsU0FBRyxDQUFDTSxVQUFKLEdBQWlCQyxPQUFqQixDQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDbkMsWUFBTUwsR0FBRyxtQ0FBUUssTUFBTSxDQUFDTCxHQUFQLENBQVdWLElBQVgsRUFBUjtBQUEyQlcsWUFBRSxFQUFFSSxNQUFNLENBQUNMLEdBQVAsQ0FBV0M7QUFBMUMsVUFBVDs7QUFFQSxnQkFBUUksTUFBTSxDQUFDQyxJQUFmO0FBQ0UsZUFBSyxPQUFMO0FBQ0UsZ0JBQUksQ0FBQ2hCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVSxVQUFDQyxDQUFEO0FBQUEscUJBQU9BLENBQUMsQ0FBQ1AsRUFBRixLQUFTRCxHQUFHLENBQUNDLEVBQXBCO0FBQUEsYUFBVixDQUFMLEVBQXdDO0FBQ3RDVixxQkFBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSw4SEFBY0EsSUFBZCxJQUFvQlUsR0FBcEI7QUFBQSxlQUFELENBQVA7QUFDRDs7QUFDRDs7QUFFRixlQUFLLFVBQUw7QUFDRVQsbUJBQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsa0hBQ0hBLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNTLENBQUQ7QUFBQSx1QkFBUUEsQ0FBQyxDQUFDUCxFQUFGLEtBQVNELEdBQUcsQ0FBQ0MsRUFBYixHQUFrQkQsR0FBbEIsR0FBd0JRLENBQWhDO0FBQUEsZUFBVCxDQURHO0FBQUEsYUFBRCxDQUFQO0FBR0E7O0FBRUYsZUFBSyxTQUFMO0FBQ0VqQixtQkFBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSxrSEFBY0EsSUFBSSxDQUFDbUIsTUFBTCxDQUFZLFVBQUNELENBQUQ7QUFBQSx1QkFBT0EsQ0FBQyxDQUFDUCxFQUFGLEtBQVNELEdBQUcsQ0FBQ0MsRUFBcEI7QUFBQSxlQUFaLENBQWQ7QUFBQSxhQUFELENBQVA7QUFDQTtBQWZKO0FBaUJELE9BcEJEO0FBcUJELEtBdEJEO0FBdUJELEdBaENRLEVBZ0NOLEVBaENNLENBQVQ7QUFrQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUNFLFNBQUssRUFBRSxhQURUO0FBRUUsZUFBVyxFQUFFLHFDQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU0sWUFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEsYUFBT2YsMERBQUUsQ0FBQ0MsVUFBSCxDQUFjTixjQUFkLEVBQThCc0IsR0FBOUIsQ0FBa0NGLENBQWxDLENBQVA7QUFBQSxLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQ0UsUUFBSSxFQUFFbEIsSUFEUjtBQUVFLGdCQUFZLEVBQUUsc0JBQUNrQixDQUFEO0FBQUEsYUFDWmYsMERBQUUsQ0FBQ0MsVUFBSCxDQUFjTixjQUFkLEVBQThCWSxHQUE5QixDQUFrQ1EsQ0FBQyxDQUFDUCxFQUFwQyxhQURZO0FBQUEsS0FGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FERixDQUxGLENBREY7QUF1QkQsQ0E3REQ7O0dBQU1kLFc7O0tBQUFBLFc7QUErRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kZDA2ZjkyZGExNWE5MzI4MTdmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZS1maXJlc3RvcmVcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtXCI7XG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhcnRcIjtcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbGxlY3Rpb25QYXRoID0gXCJleHBlbnNlc1wiO1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKVxuICAgICAgLmdldCgpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldERhdGEoKGRhdGEpID0+XG4gICAgICAgICAgcmVzLmRvY3MubWFwKChkb2MpID0+ICh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSkpXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpLm9uU25hcHNob3QoKHJlcykgPT4ge1xuICAgICAgcmVzLmRvY0NoYW5nZXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgY29uc3QgZG9jID0geyAuLi5jaGFuZ2UuZG9jLmRhdGEoKSwgaWQ6IGNoYW5nZS5kb2MuaWQgfTtcblxuICAgICAgICBzd2l0Y2ggKGNoYW5nZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImFkZGVkXCI6XG4gICAgICAgICAgICBpZiAoIWRhdGEuZmluZCgoZCkgPT4gZC5pZCA9PT0gZG9jLmlkKSkge1xuICAgICAgICAgICAgICBzZXREYXRhKChkYXRhKSA9PiBbLi4uZGF0YSwgZG9jXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJtb2RpZmllZFwiOlxuICAgICAgICAgICAgc2V0RGF0YSgoZGF0YSkgPT4gW1xuICAgICAgICAgICAgICAuLi5kYXRhLm1hcCgoZCkgPT4gKGQuaWQgPT09IGRvYy5pZCA/IGRvYyA6IGQpKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwicmVtb3ZlZFwiOlxuICAgICAgICAgICAgc2V0RGF0YSgoZGF0YSkgPT4gWy4uLmRhdGEuZmlsdGVyKChkKSA9PiBkLmlkICE9PSBkb2MuaWQpXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIHRpdGxlPXtcIk5pbmphIFdvbmdhXCJ9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtcIk1vbnRobHkgbW9uZXkgdHJhY2tlciBmb3IgbmluamFzLi4uXCJ9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNlwiPlxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhkKSA9PiBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKS5hZGQoZCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG01IHB1c2gtbTFcIj5cbiAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICBvblNsaWNlQ2xpY2s9eyhkKSA9PlxuICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpLmRvYyhkLmlkKS5kZWxldGUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9