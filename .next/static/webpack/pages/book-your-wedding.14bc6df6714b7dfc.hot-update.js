"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/book-your-wedding",{

/***/ "./src/components/ReviewForm.js":
/*!**************************************!*\
  !*** ./src/components/ReviewForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Form = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(function(event) {\n            var response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        return [\n                            4,\n                            fetch(\"/api/reviews\", {\n                                method: \"POST\",\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                },\n                                body: JSON.stringify({\n                                    name: name,\n                                    email: email\n                                })\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        if (response.ok) {\n                        // Handle successful form submission\n                        } else {\n                        // Handle failed form submission\n                        }\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Name:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: name,\n                        onChange: function(event) {\n                            return setName(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                children: [\n                    \"Email:\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        value: email,\n                        onChange: function(event) {\n                            return setEmail(event.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Form, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = Form;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7QUFBaUM7QUFFakMsSUFBTUMsSUFBSSxHQUFHLFdBQU07O0lBQ2pCLElBQXdCRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTdCRSxJQUFJLEdBQWFGLEdBQVksR0FBekIsRUFBRUcsT0FBTyxHQUFJSCxHQUFZLEdBQWhCO0lBQ3BCLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CSSxLQUFLLEdBQWNKLElBQVksR0FBMUIsRUFBRUssUUFBUSxHQUFJTCxJQUFZLEdBQWhCO0lBRXRCLElBQU1NLFlBQVk7bUJBQUcsNkZBQU9DLEtBQUssRUFBSztnQkFHOUJDLFFBQVE7Ozs7d0JBRmRELEtBQUssQ0FBQ0UsY0FBYyxFQUFFLENBQUM7d0JBRU47OzRCQUFNQyxLQUFLLENBQUMsY0FBYyxFQUFFO2dDQUMzQ0MsTUFBTSxFQUFFLE1BQU07Z0NBQ2RDLE9BQU8sRUFBRTtvQ0FDUCxjQUFjLEVBQUUsa0JBQWtCO2lDQUNuQztnQ0FDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztvQ0FBRWIsSUFBSSxFQUFKQSxJQUFJO29DQUFFRSxLQUFLLEVBQUxBLEtBQUs7aUNBQUUsQ0FBQzs2QkFDdEMsQ0FBQzswQkFBQTs7d0JBTklJLFFBQVEsR0FBRyxhQU1mO3dCQUVGLElBQUlBLFFBQVEsQ0FBQ1EsRUFBRSxFQUFFO3dCQUNmLG9DQUFvQzt3QkFDdEMsT0FBTzt3QkFDTCxnQ0FBZ0M7d0JBQ2xDLENBQUM7Ozs7OztRQUNILENBQUM7d0JBaEJLVixZQUFZLENBQVVDLEtBQUs7OztPQWdCaEM7SUFFRCxxQkFDRSw4REFBQ1UsTUFBSTtRQUFDQyxRQUFRLEVBQUVaLFlBQVk7OzBCQUMxQiw4REFBQ2EsT0FBSzs7b0JBQUMsT0FFTDtrQ0FBQSw4REFBQ0MsT0FBSzt3QkFBQ0MsSUFBSSxFQUFDLE1BQU07d0JBQUNDLEtBQUssRUFBRXBCLElBQUk7d0JBQUVxQixRQUFRLEVBQUUsU0FBQ2hCLEtBQUs7bUNBQUtKLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDaUIsTUFBTSxDQUFDRixLQUFLLENBQUM7eUJBQUE7Ozs7OzZCQUFJOzs7Ozs7cUJBQzlFOzBCQUNSLDhEQUFDSCxPQUFLOztvQkFBQyxRQUVMO2tDQUFBLDhEQUFDQyxPQUFLO3dCQUFDQyxJQUFJLEVBQUMsT0FBTzt3QkFBQ0MsS0FBSyxFQUFFbEIsS0FBSzt3QkFBRW1CLFFBQVEsRUFBRSxTQUFDaEIsS0FBSzttQ0FBS0YsUUFBUSxDQUFDRSxLQUFLLENBQUNpQixNQUFNLENBQUNGLEtBQUssQ0FBQzt5QkFBQTs7Ozs7NkJBQUk7Ozs7OztxQkFDakY7MEJBQ1IsOERBQUNHLFFBQU07Z0JBQUNKLElBQUksRUFBQyxRQUFROzBCQUFDLFFBQU07Ozs7O3FCQUFTOzs7Ozs7YUFDaEMsQ0FDUDtBQUNKLENBQUM7R0FuQ0twQixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFxQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXZpZXdGb3JtLmpzPzdiMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvcmV2aWV3cycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwgfSksXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzZnVsIGZvcm0gc3VibWlzc2lvblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBIYW5kbGUgZmFpbGVkIGZvcm0gc3VibWlzc2lvblxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgPGxhYmVsPlxuICAgICAgICBOYW1lOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgRW1haWw6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm0iLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInJlc3BvbnNlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ReviewForm.js\n"));

/***/ })

});