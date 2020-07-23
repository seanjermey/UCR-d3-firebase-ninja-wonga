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
            return setData(function (data) {
              return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), [doc]);
            });

          case "modified":
            return setData(function (data) {
              return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.map(function (d) {
                return d.id === doc.id ? doc : d;
              }));
            });

          case "removed":
            return setData(function (data) {
              return Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.filter(function (d) {
                return d.id !== doc.id;
              }));
            });
        }
      });
    });
  }, []);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onSubmit: function onSubmit(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__["db"].collection(collectionPath).add(d);
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
  }, __jsx(_components_chart__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data,
    onSliceClick: function onSliceClick(d) {
      return _utils_create_firestore__WEBPACK_IMPORTED_MODULE_3__["db"].collection(collectionPath).doc(d.id)["delete"]();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjb2xsZWN0aW9uUGF0aCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicmVzIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwib25TbmFwc2hvdCIsImRvY0NoYW5nZXMiLCJmb3JFYWNoIiwiY2hhbmdlIiwidHlwZSIsImQiLCJmaWx0ZXIiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQ3hCLE1BQU1DLGNBQWMsR0FBRyxVQUF2Qjs7QUFEd0Isa0JBRUFDLHNEQUFRLENBQUMsRUFBRCxDQUZSO0FBQUEsTUFFakJDLElBRmlCO0FBQUEsTUFFWEMsT0FGVzs7QUFJeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyw4REFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFDR08sR0FESCxHQUVHQyxJQUZILENBRVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JOLGFBQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsZUFDTk8sR0FBRyxDQUFDQyxJQUFKLENBQVNDLEdBQVQsQ0FBYSxVQUFDQyxHQUFEO0FBQUEsaURBQWVBLEdBQUcsQ0FBQ1YsSUFBSixFQUFmO0FBQTJCVyxjQUFFLEVBQUVELEdBQUcsQ0FBQ0M7QUFBbkM7QUFBQSxTQUFiLENBRE07QUFBQSxPQUFELENBQVA7QUFHRCxLQU5IO0FBUUFSLDhEQUFFLENBQUNDLFVBQUgsQ0FBY04sY0FBZCxFQUE4QmMsVUFBOUIsQ0FBeUMsVUFBQ0wsR0FBRCxFQUFTO0FBQ2hEQSxTQUFHLENBQUNNLFVBQUosR0FBaUJDLE9BQWpCLENBQXlCLFVBQUNDLE1BQUQsRUFBWTtBQUNuQyxZQUFNTCxHQUFHLG1DQUFRSyxNQUFNLENBQUNMLEdBQVAsQ0FBV1YsSUFBWCxFQUFSO0FBQTJCVyxZQUFFLEVBQUVJLE1BQU0sQ0FBQ0wsR0FBUCxDQUFXQztBQUExQyxVQUFUOztBQUVBLGdCQUFRSSxNQUFNLENBQUNDLElBQWY7QUFDRSxlQUFLLE9BQUw7QUFDRSxtQkFBT2YsT0FBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSw0SEFBY0EsSUFBZCxJQUFvQlUsR0FBcEI7QUFBQSxhQUFELENBQWQ7O0FBRUYsZUFBSyxVQUFMO0FBQ0UsbUJBQU9ULE9BQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsa0hBQ1ZBLElBQUksQ0FBQ1MsR0FBTCxDQUFTLFVBQUNRLENBQUQ7QUFBQSx1QkFBUUEsQ0FBQyxDQUFDTixFQUFGLEtBQVNELEdBQUcsQ0FBQ0MsRUFBYixHQUFrQkQsR0FBbEIsR0FBd0JPLENBQWhDO0FBQUEsZUFBVCxDQURVO0FBQUEsYUFBRCxDQUFkOztBQUlGLGVBQUssU0FBTDtBQUNFLG1CQUFPaEIsT0FBTyxDQUFDLFVBQUNELElBQUQ7QUFBQSxrSEFBY0EsSUFBSSxDQUFDa0IsTUFBTCxDQUFZLFVBQUNELENBQUQ7QUFBQSx1QkFBT0EsQ0FBQyxDQUFDTixFQUFGLEtBQVNELEdBQUcsQ0FBQ0MsRUFBcEI7QUFBQSxlQUFaLENBQWQ7QUFBQSxhQUFELENBQWQ7QUFWSjtBQVlELE9BZkQ7QUFnQkQsS0FqQkQ7QUFrQkQsR0EzQlEsRUEyQk4sRUEzQk0sQ0FBVDtBQTZCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQ0UsU0FBSyxFQUFFLGFBRFQ7QUFFRSxlQUFXLEVBQUUscUNBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxZQUFRLEVBQUUsa0JBQUNNLENBQUQ7QUFBQSxhQUFPZCwwREFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFBOEJxQixHQUE5QixDQUFrQ0YsQ0FBbEMsQ0FBUDtBQUFBLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxRQUFJLEVBQUVqQixJQURSO0FBRUUsZ0JBQVksRUFBRSxzQkFBQ2lCLENBQUQ7QUFBQSxhQUNaZCwwREFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFBOEJZLEdBQTlCLENBQWtDTyxDQUFDLENBQUNOLEVBQXBDLGFBRFk7QUFBQSxLQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQURGLENBTEYsQ0FERjtBQXVCRCxDQXhERDs7R0FBTWQsVzs7S0FBQUEsVztBQTBEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmFkMGJiMjIzNDI3NzVhYTgzNDM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi91dGlscy9jcmVhdGUtZmlyZXN0b3JlXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm1cIjtcclxuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXJ0XCI7XHJcblxyXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb2xsZWN0aW9uUGF0aCA9IFwiZXhwZW5zZXNcIjtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKVxyXG4gICAgICAuZ2V0KClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldERhdGEoKGRhdGEpID0+XHJcbiAgICAgICAgICByZXMuZG9jcy5tYXAoKGRvYykgPT4gKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KSlcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKS5vblNuYXBzaG90KChyZXMpID0+IHtcclxuICAgICAgcmVzLmRvY0NoYW5nZXMoKS5mb3JFYWNoKChjaGFuZ2UpID0+IHtcclxuICAgICAgICBjb25zdCBkb2MgPSB7IC4uLmNoYW5nZS5kb2MuZGF0YSgpLCBpZDogY2hhbmdlLmRvYy5pZCB9O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNoYW5nZS50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlIFwiYWRkZWRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHNldERhdGEoKGRhdGEpID0+IFsuLi5kYXRhLCBkb2NdKTtcclxuXHJcbiAgICAgICAgICBjYXNlIFwibW9kaWZpZWRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHNldERhdGEoKGRhdGEpID0+IFtcclxuICAgICAgICAgICAgICAuLi5kYXRhLm1hcCgoZCkgPT4gKGQuaWQgPT09IGRvYy5pZCA/IGRvYyA6IGQpKSxcclxuICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgY2FzZSBcInJlbW92ZWRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHNldERhdGEoKGRhdGEpID0+IFsuLi5kYXRhLmZpbHRlcigoZCkgPT4gZC5pZCAhPT0gZG9jLmlkKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgdGl0bGU9e1wiTmluamEgV29uZ2FcIn1cclxuICAgICAgICBkZXNjcmlwdGlvbj17XCJNb250aGx5IG1vbmV5IHRyYWNrZXIgZm9yIG5pbmphcy4uLlwifVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzZWN0aW9uXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNlwiPlxyXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17KGQpID0+IGRiLmNvbGxlY3Rpb24oY29sbGVjdGlvblBhdGgpLmFkZChkKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczEyIG01IHB1c2gtbTFcIj5cclxuICAgICAgICAgICAgPENoYXJ0XHJcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICBvblNsaWNlQ2xpY2s9eyhkKSA9PlxyXG4gICAgICAgICAgICAgICAgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uUGF0aCkuZG9jKGQuaWQpLmRlbGV0ZSgpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9