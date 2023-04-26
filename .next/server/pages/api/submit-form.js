"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/submit-form";
exports.ids = ["pages/api/submit-form"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/submit-form.js":
/*!**********************************!*\
  !*** ./pages/api/submit-form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    const formData = req.body;\n    const fs = __webpack_require__(/*! fs */ \"fs\");\n    const path = __webpack_require__(/*! path */ \"path\");\n    const filePath = path.join(process.cwd(), \"data\", \"reviews.json\");\n    // Check if the file exists, and create it if it doesn't\n    if (!fs.existsSync(filePath)) {\n        fs.writeFileSync(filePath, \"[]\");\n    }\n    // Read the existing data from the file\n    const fileData = fs.readFileSync(filePath);\n    const jsonData = JSON.parse(fileData);\n    // Append the new form data to the existing data\n    jsonData.push(formData);\n    // Write the updated data back to the file\n    fs.writeFileSync(filePath, JSON.stringify(jsonData));\n    res.status(200).json({\n        message: \"Form data submitted successfully!\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWl0LWZvcm0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDeEMsTUFBTUMsUUFBUSxHQUFHRixHQUFHLENBQUNHLElBQUk7SUFDekIsTUFBTUMsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLGNBQUksQ0FBQztJQUN4QixNQUFNQyxJQUFJLEdBQUdELG1CQUFPLENBQUMsa0JBQU0sQ0FBQztJQUM1QixNQUFNRSxRQUFRLEdBQUdELElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxPQUFPLENBQUNDLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUM7SUFFakUsd0RBQXdEO0lBQ3hELElBQUksQ0FBQ04sRUFBRSxDQUFDTyxVQUFVLENBQUNKLFFBQVEsQ0FBQyxFQUFFO1FBQzVCSCxFQUFFLENBQUNRLGFBQWEsQ0FBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCx1Q0FBdUM7SUFDdkMsTUFBTU0sUUFBUSxHQUFHVCxFQUFFLENBQUNVLFlBQVksQ0FBQ1AsUUFBUSxDQUFDO0lBQzFDLE1BQU1RLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNKLFFBQVEsQ0FBQztJQUVyQyxnREFBZ0Q7SUFDaERFLFFBQVEsQ0FBQ0csSUFBSSxDQUFDaEIsUUFBUSxDQUFDLENBQUM7SUFFeEIsMENBQTBDO0lBQzFDRSxFQUFFLENBQUNRLGFBQWEsQ0FBQ0wsUUFBUSxFQUFFUyxJQUFJLENBQUNHLFNBQVMsQ0FBQ0osUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVyRGQsR0FBRyxDQUFDbUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBRUMsT0FBTyxFQUFFLG1DQUFtQztLQUFFLENBQUMsQ0FBQztBQUN6RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3JnYXJpdW1uLy4vcGFnZXMvYXBpL3N1Ym1pdC1mb3JtLmpzPzk0YzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBmb3JtRGF0YSA9IHJlcS5ib2R5O1xuICBjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG4gIGNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG4gIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdkYXRhJywgJ3Jldmlld3MuanNvbicpO1xuXG4gIC8vIENoZWNrIGlmIHRoZSBmaWxlIGV4aXN0cywgYW5kIGNyZWF0ZSBpdCBpZiBpdCBkb2Vzbid0XG4gIGlmICghZnMuZXhpc3RzU3luYyhmaWxlUGF0aCkpIHtcbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCAnW10nKTtcbiAgfVxuXG4gIC8vIFJlYWQgdGhlIGV4aXN0aW5nIGRhdGEgZnJvbSB0aGUgZmlsZVxuICBjb25zdCBmaWxlRGF0YSA9IGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCk7XG4gIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShmaWxlRGF0YSk7XG5cbiAgLy8gQXBwZW5kIHRoZSBuZXcgZm9ybSBkYXRhIHRvIHRoZSBleGlzdGluZyBkYXRhXG4gIGpzb25EYXRhLnB1c2goZm9ybURhdGEpO1xuXG4gIC8vIFdyaXRlIHRoZSB1cGRhdGVkIGRhdGEgYmFjayB0byB0aGUgZmlsZVxuICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ0Zvcm0gZGF0YSBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5IScgfSk7XG59XG4iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImZvcm1EYXRhIiwiYm9keSIsImZzIiwicmVxdWlyZSIsInBhdGgiLCJmaWxlUGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZXhpc3RzU3luYyIsIndyaXRlRmlsZVN5bmMiLCJmaWxlRGF0YSIsInJlYWRGaWxlU3luYyIsImpzb25EYXRhIiwiSlNPTiIsInBhcnNlIiwicHVzaCIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/submit-form.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submit-form.js"));
module.exports = __webpack_exports__;

})();