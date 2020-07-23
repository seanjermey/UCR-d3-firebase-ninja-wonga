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
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var LandingPage = function LandingPage() {
  _s();

  var collectionPath = "expenses";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).get().then(function (res) {
      setData(function (data) {
        return res.docs.map(function (doc) {
          return _objectSpread(_objectSpread({}, doc.data()), {}, {
            id: doc.id
          });
        });
      });
    });
    _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).onSnapshot( /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
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
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "Ninja Wonga",
    description: "Monthly money tracker for ninjas...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "container section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col s12 m6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onSubmit: function onSubmit(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_5__["db"].collection(collectionPath).add(d);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "col s12 m5 push-m1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjb2xsZWN0aW9uUGF0aCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicmVzIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwib25TbmFwc2hvdCIsImRvY0NoYW5nZXMiLCJmb3JFYWNoIiwiY2hhbmdlIiwidHlwZSIsImQiLCJmaWx0ZXIiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsY0FBYyxHQUFHLFVBQXZCOztBQUR3QixrQkFFQUMsc0RBQVEsQ0FBQyxFQUFELENBRlI7QUFBQSxNQUVqQkMsSUFGaUI7QUFBQSxNQUVYQyxPQUZXOztBQUl4QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLDhEQUFFLENBQUNDLFVBQUgsQ0FBY04sY0FBZCxFQUNHTyxHQURILEdBRUdDLElBRkgsQ0FFUSxVQUFDQyxHQUFELEVBQVM7QUFDYk4sYUFBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSxlQUNOTyxHQUFHLENBQUNDLElBQUosQ0FBU0MsR0FBVCxDQUFhLFVBQUNDLEdBQUQ7QUFBQSxpREFBZUEsR0FBRyxDQUFDVixJQUFKLEVBQWY7QUFBMkJXLGNBQUUsRUFBRUQsR0FBRyxDQUFDQztBQUFuQztBQUFBLFNBQWIsQ0FETTtBQUFBLE9BQUQsQ0FBUDtBQUdELEtBTkg7QUFRQVIsOERBQUUsQ0FBQ0MsVUFBSCxDQUFjTixjQUFkLEVBQThCYyxVQUE5QjtBQUFBLGtNQUF5QyxpQkFBT0wsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3ZDQSxtQkFBRyxDQUFDTSxVQUFKLEdBQWlCQyxPQUFqQixDQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDbkMsc0JBQU1MLEdBQUcsbUNBQVFLLE1BQU0sQ0FBQ0wsR0FBUCxDQUFXVixJQUFYLEVBQVI7QUFBMkJXLHNCQUFFLEVBQUVJLE1BQU0sQ0FBQ0wsR0FBUCxDQUFXQztBQUExQyxvQkFBVDs7QUFFQSwwQkFBUUksTUFBTSxDQUFDQyxJQUFmO0FBQ0UseUJBQUssT0FBTDtBQUNFLDZCQUFPZixPQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLHNJQUFjQSxJQUFkLElBQW9CVSxHQUFwQjtBQUFBLHVCQUFELENBQWQ7O0FBRUYseUJBQUssVUFBTDtBQUNFLDZCQUFPVCxPQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLDRIQUNWQSxJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFDUSxDQUFEO0FBQUEsaUNBQVFBLENBQUMsQ0FBQ04sRUFBRixLQUFTRCxHQUFHLENBQUNDLEVBQWIsR0FBa0JELEdBQWxCLEdBQXdCTyxDQUFoQztBQUFBLHlCQUFULENBRFU7QUFBQSx1QkFBRCxDQUFkOztBQUlGLHlCQUFLLFNBQUw7QUFDRSw2QkFBT2hCLE9BQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsNEhBQWNBLElBQUksQ0FBQ2tCLE1BQUwsQ0FBWSxVQUFDRCxDQUFEO0FBQUEsaUNBQU9BLENBQUMsQ0FBQ04sRUFBRixLQUFTRCxHQUFHLENBQUNDLEVBQXBCO0FBQUEseUJBQVosQ0FBZDtBQUFBLHVCQUFELENBQWQ7QUFWSjtBQVlELGlCQWZEOztBQUR1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF6Qzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCRCxHQTNCUSxFQTJCTixFQTNCTSxDQUFUO0FBNkJBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxTQUFLLEVBQUUsYUFEVDtBQUVFLGVBQVcsRUFBRSxxQ0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRSxrQkFBQ00sQ0FBRDtBQUFBLGFBQU9kLDBEQUFFLENBQUNDLFVBQUgsQ0FBY04sY0FBZCxFQUE4QnFCLEdBQTlCLENBQWtDRixDQUFsQyxDQUFQO0FBQUEsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBRWpCLElBRFI7QUFFRSxnQkFBWSxFQUFFLHNCQUFDaUIsQ0FBRDtBQUFBLGFBQ1pkLDBEQUFFLENBQUNDLFVBQUgsQ0FBY04sY0FBZCxFQUE4QlksR0FBOUIsQ0FBa0NPLENBQUMsQ0FBQ04sRUFBcEMsYUFEWTtBQUFBLEtBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREYsQ0FMRixDQURGO0FBdUJELENBeEREOztHQUFNZCxXOztLQUFBQSxXO0FBMERTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNWNlZTNjZDVhZWU2ZjAzMzI5YzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZS1maXJlc3RvcmVcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybVwiO1xyXG5pbXBvcnQgQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2hhcnRcIjtcclxuXHJcbmNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbGxlY3Rpb25QYXRoID0gXCJleHBlbnNlc1wiO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpXHJcbiAgICAgIC5nZXQoKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0RGF0YSgoZGF0YSkgPT5cclxuICAgICAgICAgIHJlcy5kb2NzLm1hcCgoZG9jKSA9PiAoeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpLm9uU25hcHNob3QoYXN5bmMgKHJlcykgPT4ge1xyXG4gICAgICByZXMuZG9jQ2hhbmdlcygpLmZvckVhY2goKGNoYW5nZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGRvYyA9IHsgLi4uY2hhbmdlLmRvYy5kYXRhKCksIGlkOiBjaGFuZ2UuZG9jLmlkIH07XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY2hhbmdlLnR5cGUpIHtcclxuICAgICAgICAgIGNhc2UgXCJhZGRlZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gc2V0RGF0YSgoZGF0YSkgPT4gWy4uLmRhdGEsIGRvY10pO1xyXG5cclxuICAgICAgICAgIGNhc2UgXCJtb2RpZmllZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gc2V0RGF0YSgoZGF0YSkgPT4gW1xyXG4gICAgICAgICAgICAgIC4uLmRhdGEubWFwKChkKSA9PiAoZC5pZCA9PT0gZG9jLmlkID8gZG9jIDogZCkpLFxyXG4gICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICBjYXNlIFwicmVtb3ZlZFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gc2V0RGF0YSgoZGF0YSkgPT4gWy4uLmRhdGEuZmlsdGVyKChkKSA9PiBkLmlkICE9PSBkb2MuaWQpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICB0aXRsZT17XCJOaW5qYSBXb25nYVwifVxyXG4gICAgICAgIGRlc2NyaXB0aW9uPXtcIk1vbnRobHkgbW9uZXkgdHJhY2tlciBmb3IgbmluamFzLi4uXCJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNlY3Rpb25cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG02XCI+XHJcbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXsoZCkgPT4gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uUGF0aCkuYWRkKGQpfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTUgcHVzaC1tMVwiPlxyXG4gICAgICAgICAgICA8Q2hhcnRcclxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgIG9uU2xpY2VDbGljaz17KGQpID0+XHJcbiAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKS5kb2MoZC5pZCkuZGVsZXRlKClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ1BhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=