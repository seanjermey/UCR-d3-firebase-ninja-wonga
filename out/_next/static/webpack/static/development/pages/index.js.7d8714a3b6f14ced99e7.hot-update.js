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
            if (data.find(function (d) {
              return d.id === doc.id;
            }).length === 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOlsiTGFuZGluZ1BhZ2UiLCJjb2xsZWN0aW9uUGF0aCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJkYiIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwicmVzIiwiZG9jcyIsIm1hcCIsImRvYyIsImlkIiwib25TbmFwc2hvdCIsImRvY0NoYW5nZXMiLCJmb3JFYWNoIiwiY2hhbmdlIiwidHlwZSIsImZpbmQiLCJkIiwibGVuZ3RoIiwiZmlsdGVyIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUN4QixNQUFNQyxjQUFjLEdBQUcsVUFBdkI7O0FBRHdCLGtCQUVBQyxzREFBUSxDQUFDLEVBQUQsQ0FGUjtBQUFBLE1BRWpCQyxJQUZpQjtBQUFBLE1BRVhDLE9BRlc7O0FBSXhCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsOERBQUUsQ0FBQ0MsVUFBSCxDQUFjTixjQUFkLEVBQ0dPLEdBREgsR0FFR0MsSUFGSCxDQUVRLFVBQUNDLEdBQUQsRUFBUztBQUNiTixhQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLGVBQ05PLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxHQUFULENBQWEsVUFBQ0MsR0FBRDtBQUFBLGlEQUFlQSxHQUFHLENBQUNWLElBQUosRUFBZjtBQUEyQlcsY0FBRSxFQUFFRCxHQUFHLENBQUNDO0FBQW5DO0FBQUEsU0FBYixDQURNO0FBQUEsT0FBRCxDQUFQO0FBR0QsS0FOSDtBQVFBUiw4REFBRSxDQUFDQyxVQUFILENBQWNOLGNBQWQsRUFBOEJjLFVBQTlCLENBQXlDLFVBQUNMLEdBQUQsRUFBUztBQUNoREEsU0FBRyxDQUFDTSxVQUFKLEdBQWlCQyxPQUFqQixDQUF5QixVQUFDQyxNQUFELEVBQVk7QUFDbkMsWUFBTUwsR0FBRyxtQ0FBUUssTUFBTSxDQUFDTCxHQUFQLENBQVdWLElBQVgsRUFBUjtBQUEyQlcsWUFBRSxFQUFFSSxNQUFNLENBQUNMLEdBQVAsQ0FBV0M7QUFBMUMsVUFBVDs7QUFFQSxnQkFBUUksTUFBTSxDQUFDQyxJQUFmO0FBQ0UsZUFBSyxPQUFMO0FBQ0UsZ0JBQUloQixJQUFJLENBQUNpQixJQUFMLENBQVUsVUFBQ0MsQ0FBRDtBQUFBLHFCQUFPQSxDQUFDLENBQUNQLEVBQUYsS0FBU0QsR0FBRyxDQUFDQyxFQUFwQjtBQUFBLGFBQVYsRUFBa0NRLE1BQWxDLEtBQTZDLENBQWpELEVBQW9EO0FBQ2xEbEIscUJBQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsOEhBQWNBLElBQWQsSUFBb0JVLEdBQXBCO0FBQUEsZUFBRCxDQUFQO0FBQ0Q7O0FBQ0Q7O0FBRUYsZUFBSyxVQUFMO0FBQ0VULG1CQUFPLENBQUMsVUFBQ0QsSUFBRDtBQUFBLGtIQUNIQSxJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFDUyxDQUFEO0FBQUEsdUJBQVFBLENBQUMsQ0FBQ1AsRUFBRixLQUFTRCxHQUFHLENBQUNDLEVBQWIsR0FBa0JELEdBQWxCLEdBQXdCUSxDQUFoQztBQUFBLGVBQVQsQ0FERztBQUFBLGFBQUQsQ0FBUDtBQUdBOztBQUVGLGVBQUssU0FBTDtBQUNFakIsbUJBQU8sQ0FBQyxVQUFDRCxJQUFEO0FBQUEsa0hBQWNBLElBQUksQ0FBQ29CLE1BQUwsQ0FBWSxVQUFDRixDQUFEO0FBQUEsdUJBQU9BLENBQUMsQ0FBQ1AsRUFBRixLQUFTRCxHQUFHLENBQUNDLEVBQXBCO0FBQUEsZUFBWixDQUFkO0FBQUEsYUFBRCxDQUFQO0FBQ0E7QUFmSjtBQWlCRCxPQXBCRDtBQXFCRCxLQXRCRDtBQXVCRCxHQWhDUSxFQWdDTixFQWhDTSxDQUFUO0FBa0NBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFDRSxTQUFLLEVBQUUsYUFEVDtBQUVFLGVBQVcsRUFBRSxxQ0FGZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRSxrQkFBQ08sQ0FBRDtBQUFBLGFBQU9mLDBEQUFFLENBQUNDLFVBQUgsQ0FBY04sY0FBZCxFQUE4QnVCLEdBQTlCLENBQWtDSCxDQUFsQyxDQUFQO0FBQUEsS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBRWxCLElBRFI7QUFFRSxnQkFBWSxFQUFFLHNCQUFDa0IsQ0FBRDtBQUFBLGFBQ1pmLDBEQUFFLENBQUNDLFVBQUgsQ0FBY04sY0FBZCxFQUE4QlksR0FBOUIsQ0FBa0NRLENBQUMsQ0FBQ1AsRUFBcEMsYUFEWTtBQUFBLEtBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBREYsQ0FMRixDQURGO0FBdUJELENBN0REOztHQUFNZCxXOztLQUFBQSxXO0FBK0RTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuN2Q4NzE0YTNiNmYxNGNlZDk5ZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi91dGlscy9jcmVhdGUtZmlyZXN0b3JlXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybVwiO1xuaW1wb3J0IENoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2NoYXJ0XCI7XG5cbmNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb2xsZWN0aW9uUGF0aCA9IFwiZXhwZW5zZXNcIjtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uUGF0aClcbiAgICAgIC5nZXQoKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXREYXRhKChkYXRhKSA9PlxuICAgICAgICAgIHJlcy5kb2NzLm1hcCgoZG9jKSA9PiAoeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pKVxuICAgICAgICApO1xuICAgICAgfSk7XG5cbiAgICBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKS5vblNuYXBzaG90KChyZXMpID0+IHtcbiAgICAgIHJlcy5kb2NDaGFuZ2VzKCkuZm9yRWFjaCgoY2hhbmdlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvYyA9IHsgLi4uY2hhbmdlLmRvYy5kYXRhKCksIGlkOiBjaGFuZ2UuZG9jLmlkIH07XG5cbiAgICAgICAgc3dpdGNoIChjaGFuZ2UudHlwZSkge1xuICAgICAgICAgIGNhc2UgXCJhZGRlZFwiOlxuICAgICAgICAgICAgaWYgKGRhdGEuZmluZCgoZCkgPT4gZC5pZCA9PT0gZG9jLmlkKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgc2V0RGF0YSgoZGF0YSkgPT4gWy4uLmRhdGEsIGRvY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlIFwibW9kaWZpZWRcIjpcbiAgICAgICAgICAgIHNldERhdGEoKGRhdGEpID0+IFtcbiAgICAgICAgICAgICAgLi4uZGF0YS5tYXAoKGQpID0+IChkLmlkID09PSBkb2MuaWQgPyBkb2MgOiBkKSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBcInJlbW92ZWRcIjpcbiAgICAgICAgICAgIHNldERhdGEoKGRhdGEpID0+IFsuLi5kYXRhLmZpbHRlcigoZCkgPT4gZC5pZCAhPT0gZG9jLmlkKV0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlclxuICAgICAgICB0aXRsZT17XCJOaW5qYSBXb25nYVwifVxuICAgICAgICBkZXNjcmlwdGlvbj17XCJNb250aGx5IG1vbmV5IHRyYWNrZXIgZm9yIG5pbmphcy4uLlwifVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMTIgbTZcIj5cbiAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXsoZCkgPT4gZGIuY29sbGVjdGlvbihjb2xsZWN0aW9uUGF0aCkuYWRkKGQpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMxMiBtNSBwdXNoLW0xXCI+XG4gICAgICAgICAgICA8Q2hhcnRcbiAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgb25TbGljZUNsaWNrPXsoZCkgPT5cbiAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb25QYXRoKS5kb2MoZC5pZCkuZGVsZXRlKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==