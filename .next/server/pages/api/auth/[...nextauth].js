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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@moralisweb3/next":
/*!************************************!*\
  !*** external "@moralisweb3/next" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/next");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @moralisweb3/next */ \"@moralisweb3/next\");\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_next__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        (0,_moralisweb3_next__WEBPACK_IMPORTED_MODULE_1__.MoralisNextAuthProvider)()\n    ],\n    // adding user info to the user session object\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                token.user = user;\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user = token.user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQzJCO0FBRTVELGlFQUFlQSxnREFBUUEsQ0FBQztJQUN0QkUsV0FBVztRQUFDRCwwRUFBdUJBO0tBQUc7SUFDdEMsOENBQThDO0lBQzlDRSxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRSxFQUFFO1lBQ3pCLElBQUlBLE1BQU07Z0JBQ1JELE1BQU1DLElBQUksR0FBR0E7WUFDZixDQUFDO1lBQ0QsT0FBT0Q7UUFDVDtRQUNBLE1BQU1FLFNBQVEsRUFBRUEsUUFBTyxFQUFFRixNQUFLLEVBQUUsRUFBRTtZQUNoQ0UsUUFBUUQsSUFBSSxHQUFHRCxNQUFNQyxJQUFJO1lBQ3pCLE9BQU9DO1FBQ1Q7SUFDRjtBQUNGLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhY2FvLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IHsgTW9yYWxpc05leHRBdXRoUHJvdmlkZXIgfSBmcm9tICdAbW9yYWxpc3dlYjMvbmV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgcHJvdmlkZXJzOiBbTW9yYWxpc05leHRBdXRoUHJvdmlkZXIoKV0sXG4gIC8vIGFkZGluZyB1c2VyIGluZm8gdG8gdGhlIHVzZXIgc2Vzc2lvbiBvYmplY3RcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4udXNlciA9IHVzZXI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgc2Vzc2lvbi51c2VyID0gdG9rZW4udXNlcjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJNb3JhbGlzTmV4dEF1dGhQcm92aWRlciIsInByb3ZpZGVycyIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();