webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/create-firestore */ "./utils/create-firestore.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/header */ "./components/header.tsx");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/form */ "./components/form.tsx");
/* harmony import */ var _components_chart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/chart */ "./components/chart.tsx");





var _this = undefined,
    _jsxFileName = "C:\\Courses\\build-data-uis-with-d3-firebase\\ninja-wonga\\pages\\index.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var LandingPage = function LandingPage() {
  _s();

  var collectionPath = "expenses";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).onSnapshot( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                res.docChanges().forEach(function (change) {
                  var doc = _objectSpread(_objectSpread({}, change.doc.data()), {}, {
                    id: change.doc.id
                  });

                  switch (change.type) {
                    case "added":
                      return setData(function (data) {
                        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data), [doc]);
                      });

                    case "modified":
                      return setData(function (data) {
                        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data.map(function (d) {
                          return d.id === doc.id ? doc : d;
                        }));
                      });

                    case "removed":
                      return setData(function (data) {
                        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data.filter(function (d) {
                          return d.id !== doc.id;
                        }));
                      });
                  }
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Ninja Wonga",
    description: "Monthly money tracker for ninjas...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col s12 m6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: function onSubmit(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).add(d);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col s12 m5 push-m1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx(_components_chart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    onSliceClick: function onSliceClick(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).doc(d.id)["delete"]();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjb2xsZWN0aW9uUGF0aCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwicmVzIiwiZG9jQ2hhbmdlcyIsImZvckVhY2giLCJjaGFuZ2UiLCJkb2MiLCJpZCIsInR5cGUiLCJtYXAiLCJkIiwiZmlsdGVyIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLGNBQWMsR0FBRyxVQUF2Qjs7QUFEd0Isa0JBRUFDLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFakJDLElBRmlCO0FBQUEsTUFFWEMsT0FGVzs7QUFJeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw4REFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFBOEJPLFVBQTlCO0FBQUEsa01BQXlDLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkNBLG1CQUFHLENBQUNDLFVBQUosR0FBaUJDLE9BQWpCLENBQXlCLFVBQUNDLE1BQUQsRUFBWTtBQUNuQyxzQkFBTUMsR0FBRyxtQ0FBUUQsTUFBTSxDQUFDQyxHQUFQLENBQVdWLElBQVgsRUFBUjtBQUEyQlcsc0JBQUUsRUFBRUYsTUFBTSxDQUFDQyxHQUFQLENBQVdDO0FBQTFDLG9CQUFUOztBQUVBLDBCQUFRRixNQUFNLENBQUNHLElBQWY7QUFDRSx5QkFBSyxPQUFMO0FBQ0UsNkJBQU9YLE9BQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsc0lBQWNBLElBQWQsSUFBb0JVLEdBQXBCO0FBQUEsdUJBQUQsQ0FBZDs7QUFFRix5QkFBSyxVQUFMO0FBQ0UsNkJBQU9ULE9BQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsNEhBQ1ZBLElBQUksQ0FBQ2EsR0FBTCxDQUFTLFVBQUNDLENBQUQ7QUFBQSxpQ0FBUUEsQ0FBQyxDQUFDSCxFQUFGLEtBQVNELEdBQUcsQ0FBQ0MsRUFBYixHQUFrQkQsR0FBbEIsR0FBd0JJLENBQWhDO0FBQUEseUJBQVQsQ0FEVTtBQUFBLHVCQUFELENBQWQ7O0FBSUYseUJBQUssU0FBTDtBQUNFLDZCQUFPYixPQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLDRIQUFjQSxJQUFJLENBQUNlLE1BQUwsQ0FBWSxVQUFDRCxDQUFEO0FBQUEsaUNBQU9BLENBQUMsQ0FBQ0gsRUFBRixLQUFTRCxHQUFHLENBQUNDLEVBQXBCO0FBQUEseUJBQVosQ0FBZDtBQUFBLHVCQUFELENBQWQ7QUFWSjtBQVlELGlCQWZEOztBQUR1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCRCxHQW5CUSxFQW1CTixFQW5CTSxDQUFUO0FBcUJBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxTQUFLLEVBQUUsYUFEVDtBQUVFLGVBQVcsRUFBRSxxQ0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRSxrQkFBQ0csQ0FBRDtBQUFBLGFBQU9YLDBEQUFFLENBQUNDLFVBQUgsQ0FBY04sY0FBZCxFQUE4QmtCLEdBQTlCLENBQWtDRixDQUFsQyxDQUFQO0FBQUEsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBRWQsSUFEUjtBQUVFLGdCQUFZLEVBQUUsc0JBQUNjLENBQUQ7QUFBQSxhQUNaWCwwREFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFBOEJZLEdBQTlCLENBQWtDSSxDQUFDLENBQUNILEVBQXBDLGFBRFk7QUFBQSxLQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGLENBTEYsQ0FERjtBQXVCRCxDQWhERDs7R0FBTWQsVzs7S0FBQUEsVztBQWtEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmIwYzc0ZWQ4NTRkMDgxMzM0MjgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlLWZpcmVzdG9yZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1cIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFydFwiO1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29sbGVjdGlvblBhdGggPSBcImV4cGVuc2VzXCI7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpLm9uU25hcHNob3QoYXN5bmMgKHJlcykgPT4ge1xuICAgICAgcmVzLmRvY0NoYW5nZXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgY29uc3QgZG9jID0geyAuLi5jaGFuZ2UuZG9jLmRhdGEoKSwgaWQ6IGNoYW5nZS5kb2MuaWQgfTtcblxuICAgICAgICBzd2l0Y2ggKGNoYW5nZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImFkZGVkXCI6XG4gICAgICAgICAgICByZXR1cm4gc2V0RGF0YSgoZGF0YSkgPT4gWy4uLmRhdGEsIGRvY10pO1xuXG4gICAgICAgICAgY2FzZSBcIm1vZGlmaWVkXCI6XG4gICAgICAgICAgICByZXR1cm4gc2V0RGF0YSgoZGF0YSkgPT4gW1xuICAgICAgICAgICAgICAuLi5kYXRhLm1hcCgoZCkgPT4gKGQuaWQgPT09IGRvYy5pZCA/IGRvYyA6IGQpKSxcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgY2FzZSBcInJlbW92ZWRcIjpcbiAgICAgICAgICAgIHJldHVybiBzZXREYXRhKChkYXRhKSA9PiBbLi4uZGF0YS5maWx0ZXIoKGQpID0+IGQuaWQgIT09IGRvYy5pZCldKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIHRpdGxlPXtcIk5pbmphIFdvbmdhXCJ9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtcIk1vbnRobHkgbW9uZXkgdHJhY2tlciBmb3IgbmluamFzLi4uXCJ9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNlwiPlxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhkKSA9PiBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKS5hZGQoZCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG01IHB1c2gtbTFcIj5cbiAgICAgICAgICAgIDxDaGFydFxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICBvblNsaWNlQ2xpY2s9eyhkKSA9PlxuICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpLmRvYyhkLmlkKS5kZWxldGUoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9