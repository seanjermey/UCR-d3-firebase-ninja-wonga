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
                      setData(function (data) {
                        return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data), [doc]);
                      });
                      break;

                    case "modified":
                      setData(function (data) {
                        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data.map(function (d) {
                          return d.id === doc.id ? doc : d;
                        }));
                      });
                      break;

                    case "removed":
                      setData(function (data) {
                        return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(data.filter(function (d) {
                          return d.id !== doc.id;
                        }));
                      });
                      break;
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
      lineNumber: 36,
      columnNumber: 5
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: function onSubmit(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).add(d);
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
  }, data && __jsx(_components_chart__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: data,
    onSliceClick: function onSliceClick(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).doc(d.id)["delete"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjb2xsZWN0aW9uUGF0aCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJvblNuYXBzaG90IiwicmVzIiwiZG9jQ2hhbmdlcyIsImZvckVhY2giLCJjaGFuZ2UiLCJkb2MiLCJpZCIsInR5cGUiLCJtYXAiLCJkIiwiZmlsdGVyIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLGNBQWMsR0FBRyxVQUF2Qjs7QUFEd0Isa0JBRUFDLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFakJDLElBRmlCO0FBQUEsTUFFWEMsT0FGVzs7QUFJeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw4REFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFBOEJPLFVBQTlCO0FBQUEsa01BQXlDLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkNBLG1CQUFHLENBQUNDLFVBQUosR0FBaUJDLE9BQWpCLENBQXlCLFVBQUNDLE1BQUQsRUFBWTtBQUNuQyxzQkFBTUMsR0FBRyxtQ0FBUUQsTUFBTSxDQUFDQyxHQUFQLENBQVdWLElBQVgsRUFBUjtBQUEyQlcsc0JBQUUsRUFBRUYsTUFBTSxDQUFDQyxHQUFQLENBQVdDO0FBQTFDLG9CQUFUOztBQUVBLDBCQUFRRixNQUFNLENBQUNHLElBQWY7QUFDRSx5QkFBSyxPQUFMO0FBQ0VYLDZCQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLHNJQUFjQSxJQUFkLElBQW9CVSxHQUFwQjtBQUFBLHVCQUFELENBQVA7QUFDQTs7QUFFRix5QkFBSyxVQUFMO0FBQ0VULDZCQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLDRIQUNIQSxJQUFJLENBQUNhLEdBQUwsQ0FBUyxVQUFDQyxDQUFEO0FBQUEsaUNBQVFBLENBQUMsQ0FBQ0gsRUFBRixLQUFTRCxHQUFHLENBQUNDLEVBQWIsR0FBa0JELEdBQWxCLEdBQXdCSSxDQUFoQztBQUFBLHlCQUFULENBREc7QUFBQSx1QkFBRCxDQUFQO0FBR0E7O0FBRUYseUJBQUssU0FBTDtBQUNFYiw2QkFBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSw0SEFBY0EsSUFBSSxDQUFDZSxNQUFMLENBQVksVUFBQ0QsQ0FBRDtBQUFBLGlDQUFPQSxDQUFDLENBQUNILEVBQUYsS0FBU0QsR0FBRyxDQUFDQyxFQUFwQjtBQUFBLHlCQUFaLENBQWQ7QUFBQSx1QkFBRCxDQUFQO0FBQ0E7QUFiSjtBQWVELGlCQWxCRDs7QUFEdUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBekM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFxQkQsR0F0QlEsRUFzQk4sRUF0Qk0sQ0FBVDtBQXdCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFFLGFBRFQ7QUFFRSxlQUFXLEVBQUUscUNBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxZQUFRLEVBQUUsa0JBQUNHLENBQUQ7QUFBQSxhQUFPWCwwREFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFBOEJrQixHQUE5QixDQUFrQ0YsQ0FBbEMsQ0FBUDtBQUFBLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZCxJQUFJLElBQ0gsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBRUEsSUFEUjtBQUVFLGdCQUFZLEVBQUUsc0JBQUNjLENBQUQ7QUFBQSxhQUNaWCwwREFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFBOEJZLEdBQTlCLENBQWtDSSxDQUFDLENBQUNILEVBQXBDLGFBRFk7QUFBQSxLQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FKRixDQURGLENBTEYsQ0FERjtBQXlCRCxDQXJERDs7R0FBTWQsVzs7S0FBQUEsVztBQXVEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmNmYzYxNDU4OTYyMjE3MTRhNzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlLWZpcmVzdG9yZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1cIjtcbmltcG9ydCBDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFydFwiO1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29sbGVjdGlvblBhdGggPSBcImV4cGVuc2VzXCI7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpLm9uU25hcHNob3QoYXN5bmMgKHJlcykgPT4ge1xuICAgICAgcmVzLmRvY0NoYW5nZXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcbiAgICAgICAgY29uc3QgZG9jID0geyAuLi5jaGFuZ2UuZG9jLmRhdGEoKSwgaWQ6IGNoYW5nZS5kb2MuaWQgfTtcblxuICAgICAgICBzd2l0Y2ggKGNoYW5nZS50eXBlKSB7XG4gICAgICAgICAgY2FzZSBcImFkZGVkXCI6XG4gICAgICAgICAgICBzZXREYXRhKChkYXRhKSA9PiBbLi4uZGF0YSwgZG9jXSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgXCJtb2RpZmllZFwiOlxuICAgICAgICAgICAgc2V0RGF0YSgoZGF0YSkgPT4gW1xuICAgICAgICAgICAgICAuLi5kYXRhLm1hcCgoZCkgPT4gKGQuaWQgPT09IGRvYy5pZCA/IGRvYyA6IGQpKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwicmVtb3ZlZFwiOlxuICAgICAgICAgICAgc2V0RGF0YSgoZGF0YSkgPT4gWy4uLmRhdGEuZmlsdGVyKChkKSA9PiBkLmlkICE9PSBkb2MuaWQpXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyXG4gICAgICAgIHRpdGxlPXtcIk5pbmphIFdvbmdhXCJ9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtcIk1vbnRobHkgbW9uZXkgdHJhY2tlciBmb3IgbmluamFzLi4uXCJ9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNlwiPlxuICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9eyhkKSA9PiBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKS5hZGQoZCl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG01IHB1c2gtbTFcIj5cbiAgICAgICAgICAgIHtkYXRhICYmIChcbiAgICAgICAgICAgICAgPENoYXJ0XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICBvblNsaWNlQ2xpY2s9eyhkKSA9PlxuICAgICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uUGF0aCkuZG9jKGQuaWQpLmRlbGV0ZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==