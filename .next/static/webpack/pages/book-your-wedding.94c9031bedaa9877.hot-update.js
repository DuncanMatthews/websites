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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\nvar _s = $RefreshSig$();\n\nfunction Form() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), formData = ref[0], setFormData = ref[1];\n    var handleSubmit = function(event) {\n        event.preventDefault();\n        fetch(\"/api/submit-form\", {\n            method: \"POST\",\n            body: JSON.stringify(formData)\n        });\n    };\n    var handleInputChange = function(event) {\n        var _target = event.target, name = _target.name, value = _target.value;\n        setFormData(function(prevFormData) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, prevFormData), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({}, name, value));\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"reviews-form-label\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        \"Name:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"name\",\n                            value: formData.name || \"\",\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                            lineNumber: 27,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"reviews-form-label\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        \"Email:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"email\",\n                            name: \"email\",\n                            value: formData.email || \"\",\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"reviews-form-label\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        \"Write your review:\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"review\",\n                            name: \"review\",\n                            value: formData.review || \"\",\n                            onChange: handleInputChange\n                        }, void 0, false, {\n                            fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                    lineNumber: 47,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/duncan/Documents/Fernhall/src/components/ReviewForm.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXZpZXdGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQWlDO0FBRWxCLFNBQVNDLElBQUksR0FBRzs7SUFDN0IsSUFBZ0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFBckNFLFFBQVEsR0FBaUJGLEdBQVksR0FBN0IsRUFBRUcsV0FBVyxHQUFJSCxHQUFZLEdBQWhCO0lBRTVCLElBQU1JLFlBQVksR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDOUJBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDdkJDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtZQUN4QkMsTUFBTSxFQUFFLE1BQU07WUFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFNVSxpQkFBaUIsR0FBRyxTQUFDUCxLQUFLLEVBQUs7UUFDbkMsSUFBd0JBLE9BQVksR0FBWkEsS0FBSyxDQUFDUSxNQUFNLEVBQTVCQyxJQUFJLEdBQVlULE9BQVksQ0FBNUJTLElBQUksRUFBRUMsS0FBSyxHQUFLVixPQUFZLENBQXRCVSxLQUFLO1FBQ25CWixXQUFXLENBQUMsU0FBQ2EsWUFBWTttQkFBTSx3S0FDMUJBLFlBQVksR0FDZixxRkFBQ0YsSUFBSSxFQUFHQyxLQUFLLEVBQ2Q7U0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUQscUJBQ0UsOERBQUNFLE1BQUk7UUFBQ0MsUUFBUSxFQUFFZCxZQUFZOzswQkFDeEIsOERBQUNlLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxvQkFBb0I7MEJBQ3JDLDRFQUFDQyxPQUFLOzt3QkFBQyxPQUVMO3NDQUFBLDhEQUFDQyxPQUFLOzRCQUNKQyxJQUFJLEVBQUMsTUFBTTs0QkFDWFQsSUFBSSxFQUFDLE1BQU07NEJBQ1hDLEtBQUssRUFBRWIsUUFBUSxDQUFDWSxJQUFJLElBQUksRUFBRTs0QkFDMUJVLFFBQVEsRUFBRVosaUJBQWlCOzs7OztnQ0FDM0I7Ozs7Ozt3QkFDSTs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNPLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxvQkFBb0I7MEJBQ25DLDRFQUFDQyxPQUFLOzt3QkFBQyxRQUVMO3NDQUFBLDhEQUFDQyxPQUFLOzRCQUNKQyxJQUFJLEVBQUMsT0FBTzs0QkFDWlQsSUFBSSxFQUFDLE9BQU87NEJBQ1pDLEtBQUssRUFBRWIsUUFBUSxDQUFDdUIsS0FBSyxJQUFJLEVBQUU7NEJBQzNCRCxRQUFRLEVBQUVaLGlCQUFpQjs7Ozs7Z0NBQzNCOzs7Ozs7d0JBQ0k7Ozs7O29CQUNGOzBCQUNOLDhEQUFDTyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsb0JBQW9COzBCQUNuQyw0RUFBQ0MsT0FBSzs7d0JBQUMsb0JBRUw7c0NBQUEsOERBQUNDLE9BQUs7NEJBQ0pDLElBQUksRUFBQyxRQUFROzRCQUNiVCxJQUFJLEVBQUMsUUFBUTs0QkFDYkMsS0FBSyxFQUFFYixRQUFRLENBQUN3QixNQUFNLElBQUksRUFBRTs0QkFDNUJGLFFBQVEsRUFBRVosaUJBQWlCOzs7OztnQ0FDM0I7Ozs7Ozt3QkFDSTs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNlLFFBQU07Z0JBQUNKLElBQUksRUFBQyxRQUFROzBCQUFDLFFBQU07Ozs7O29CQUFTOzs7Ozs7WUFDaEMsQ0FDUDtBQUNKLENBQUM7R0F6RHVCdEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Jldmlld0Zvcm0uanM/N2IyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBmZXRjaCgnL2FwaS9zdWJtaXQtZm9ybScsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldEZvcm1EYXRhKChwcmV2Rm9ybURhdGEpID0+ICh7XG4gICAgICAuLi5wcmV2Rm9ybURhdGEsXG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3cy1mb3JtLWxhYmVsJz5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgTmFtZTpcbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEubmFtZSB8fCAnJ31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmV2aWV3cy1mb3JtLWxhYmVsJz5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgRW1haWw6XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWwgfHwgJyd9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3Jldmlld3MtZm9ybS1sYWJlbCc+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIFdyaXRlIHlvdXIgcmV2aWV3OlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwicmV2aWV3XCJcbiAgICAgICAgICBuYW1lPVwicmV2aWV3XCJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucmV2aWV3IHx8ICcnfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkZvcm0iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVJbnB1dENoYW5nZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZGb3JtRGF0YSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlbWFpbCIsInJldmlldyIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ReviewForm.js\n"));

/***/ })

});