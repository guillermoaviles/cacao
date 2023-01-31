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
exports.id = "pages/signin";
exports.ids = ["pages/signin"];
exports.modules = {

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi/connectors/metaMask */ \"wagmi/connectors/metaMask\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @moralisweb3/next */ \"@moralisweb3/next\");\n/* harmony import */ var _moralisweb3_next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__]);\n([wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__, wagmi__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction SignIn() {\n    const { connectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useConnect)();\n    const { disconnectAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useDisconnect)();\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useAccount)();\n    const { signMessageAsync  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.useSignMessage)();\n    const { requestChallengeAsync  } = (0,_moralisweb3_next__WEBPACK_IMPORTED_MODULE_5__.useAuthRequestChallengeEvm)();\n    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const handleAuth = async ()=>{\n        if (isConnected) {\n            await disconnectAsync();\n        }\n        const { account , chain  } = await connectAsync({\n            connector: new wagmi_connectors_metaMask__WEBPACK_IMPORTED_MODULE_1__.MetaMaskConnector()\n        });\n        const { message  } = await requestChallengeAsync({\n            address: account,\n            chainId: chain.id\n        });\n        const signature = await signMessageAsync({\n            message\n        });\n        // redirect user after success authentication to '/user' page\n        const { url  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"moralis-auth\", {\n            message,\n            signature,\n            redirect: false,\n            callbackUrl: \"/user\"\n        });\n        /**\n         * instead of using signIn(..., redirect: \"/user\")\n         * we get the url from callback and push it to the router to avoid page refreshing\n         */ push(url);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Launch App\"\n            }, void 0, false, {\n                fileName: \"/Users/guillermoaviles/Code/web3/cacao/pages/signin.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAuth,\n                children: \"Authenticate via Metamask\"\n            }, void 0, false, {\n                fileName: \"/Users/guillermoaviles/Code/web3/cacao/pages/signin.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/guillermoaviles/Code/web3/cacao/pages/signin.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignIn);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduaW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThEO0FBQ3JCO0FBQ3FDO0FBQ3RDO0FBQ3VCO0FBRS9ELFNBQVNRLFNBQVM7SUFDZCxNQUFNLEVBQUVDLGFBQVksRUFBRSxHQUFHTixpREFBVUE7SUFDbkMsTUFBTSxFQUFFTyxnQkFBZSxFQUFFLEdBQUdMLG9EQUFhQTtJQUN6QyxNQUFNLEVBQUVNLFlBQVcsRUFBRSxHQUFHVCxpREFBVUE7SUFDbEMsTUFBTSxFQUFFVSxpQkFBZ0IsRUFBRSxHQUFHUixxREFBY0E7SUFDM0MsTUFBTSxFQUFFUyxzQkFBcUIsRUFBRSxHQUFHTiw2RUFBMEJBO0lBQzVELE1BQU0sRUFBRU8sS0FBSSxFQUFFLEdBQUdSLHNEQUFTQTtJQUUxQixNQUFNUyxhQUFhLFVBQVk7UUFDM0IsSUFBSUosYUFBYTtZQUNiLE1BQU1EO1FBQ1YsQ0FBQztRQUVELE1BQU0sRUFBRU0sUUFBTyxFQUFFQyxNQUFLLEVBQUUsR0FBRyxNQUFNUixhQUFhO1lBQUVTLFdBQVcsSUFBSWxCLHdFQUFpQkE7UUFBRztRQUVuRixNQUFNLEVBQUVtQixRQUFPLEVBQUUsR0FBRyxNQUFNTixzQkFBc0I7WUFBRU8sU0FBU0o7WUFBU0ssU0FBU0osTUFBTUssRUFBRTtRQUFDO1FBRXRGLE1BQU1DLFlBQVksTUFBTVgsaUJBQWlCO1lBQUVPO1FBQVE7UUFFbkQsNkRBQTZEO1FBQzdELE1BQU0sRUFBRUssSUFBRyxFQUFFLEdBQUcsTUFBTXZCLHVEQUFNQSxDQUFDLGdCQUFnQjtZQUFFa0I7WUFBU0k7WUFBV0UsVUFBVSxLQUFLO1lBQUVDLGFBQWE7UUFBUTtRQUN6Rzs7O1NBR0MsR0FDRFosS0FBS1U7SUFDVDtJQUVBLHFCQUNJLDhEQUFDRzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFPQyxTQUFTZjswQkFBWTs7Ozs7Ozs7Ozs7O0FBR3pDO0FBRUEsaUVBQWVQLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWNhby8uL3BhZ2VzL3NpZ25pbi5qcz83OGZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1ldGFNYXNrQ29ubmVjdG9yIH0gZnJvbSAnd2FnbWkvY29ubmVjdG9ycy9tZXRhTWFzayc7XG5pbXBvcnQgeyBzaWduSW4gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29ubmVjdCwgdXNlU2lnbk1lc3NhZ2UsIHVzZURpc2Nvbm5lY3QgfSBmcm9tICd3YWdtaSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VBdXRoUmVxdWVzdENoYWxsZW5nZUV2bSB9IGZyb20gJ0Btb3JhbGlzd2ViMy9uZXh0JztcblxuZnVuY3Rpb24gU2lnbkluKCkge1xuICAgIGNvbnN0IHsgY29ubmVjdEFzeW5jIH0gPSB1c2VDb25uZWN0KCk7XG4gICAgY29uc3QgeyBkaXNjb25uZWN0QXN5bmMgfSA9IHVzZURpc2Nvbm5lY3QoKTtcbiAgICBjb25zdCB7IGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG4gICAgY29uc3QgeyBzaWduTWVzc2FnZUFzeW5jIH0gPSB1c2VTaWduTWVzc2FnZSgpO1xuICAgIGNvbnN0IHsgcmVxdWVzdENoYWxsZW5nZUFzeW5jIH0gPSB1c2VBdXRoUmVxdWVzdENoYWxsZW5nZUV2bSgpO1xuICAgIGNvbnN0IHsgcHVzaCB9ID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoYW5kbGVBdXRoID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGRpc2Nvbm5lY3RBc3luYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgeyBhY2NvdW50LCBjaGFpbiB9ID0gYXdhaXQgY29ubmVjdEFzeW5jKHsgY29ubmVjdG9yOiBuZXcgTWV0YU1hc2tDb25uZWN0b3IoKSB9KTtcblxuICAgICAgICBjb25zdCB7IG1lc3NhZ2UgfSA9IGF3YWl0IHJlcXVlc3RDaGFsbGVuZ2VBc3luYyh7IGFkZHJlc3M6IGFjY291bnQsIGNoYWluSWQ6IGNoYWluLmlkIH0pO1xuXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IGF3YWl0IHNpZ25NZXNzYWdlQXN5bmMoeyBtZXNzYWdlIH0pO1xuXG4gICAgICAgIC8vIHJlZGlyZWN0IHVzZXIgYWZ0ZXIgc3VjY2VzcyBhdXRoZW50aWNhdGlvbiB0byAnL3VzZXInIHBhZ2VcbiAgICAgICAgY29uc3QgeyB1cmwgfSA9IGF3YWl0IHNpZ25JbignbW9yYWxpcy1hdXRoJywgeyBtZXNzYWdlLCBzaWduYXR1cmUsIHJlZGlyZWN0OiBmYWxzZSwgY2FsbGJhY2tVcmw6ICcvdXNlcicgfSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpbnN0ZWFkIG9mIHVzaW5nIHNpZ25JbiguLi4sIHJlZGlyZWN0OiBcIi91c2VyXCIpXG4gICAgICAgICAqIHdlIGdldCB0aGUgdXJsIGZyb20gY2FsbGJhY2sgYW5kIHB1c2ggaXQgdG8gdGhlIHJvdXRlciB0byBhdm9pZCBwYWdlIHJlZnJlc2hpbmdcbiAgICAgICAgICovXG4gICAgICAgIHB1c2godXJsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMz5MYXVuY2ggQXBwPC9oMz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQXV0aH0+QXV0aGVudGljYXRlIHZpYSBNZXRhbWFzazwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XG4iXSwibmFtZXMiOlsiTWV0YU1hc2tDb25uZWN0b3IiLCJzaWduSW4iLCJ1c2VBY2NvdW50IiwidXNlQ29ubmVjdCIsInVzZVNpZ25NZXNzYWdlIiwidXNlRGlzY29ubmVjdCIsInVzZVJvdXRlciIsInVzZUF1dGhSZXF1ZXN0Q2hhbGxlbmdlRXZtIiwiU2lnbkluIiwiY29ubmVjdEFzeW5jIiwiZGlzY29ubmVjdEFzeW5jIiwiaXNDb25uZWN0ZWQiLCJzaWduTWVzc2FnZUFzeW5jIiwicmVxdWVzdENoYWxsZW5nZUFzeW5jIiwicHVzaCIsImhhbmRsZUF1dGgiLCJhY2NvdW50IiwiY2hhaW4iLCJjb25uZWN0b3IiLCJtZXNzYWdlIiwiYWRkcmVzcyIsImNoYWluSWQiLCJpZCIsInNpZ25hdHVyZSIsInVybCIsInJlZGlyZWN0IiwiY2FsbGJhY2tVcmwiLCJkaXYiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signin.js\n");

/***/ }),

/***/ "@moralisweb3/next":
/*!************************************!*\
  !*** external "@moralisweb3/next" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@moralisweb3/next");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/connectors/metaMask":
/*!********************************************!*\
  !*** external "wagmi/connectors/metaMask" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("wagmi/connectors/metaMask");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signin.js"));
module.exports = __webpack_exports__;

})();