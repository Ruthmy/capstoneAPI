/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Global Styles */\\n\\nhtml {\\n  box-sizing: border-box;\\n  line-height: 1.15;\\n  -webkit-text-size-adjust: 100%;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  box-sizing: inherit;\\n\\n  /* outline: 1px solid red !important; */\\n}\\n\\n:root {\\n  /* Set your variables here */\\n  --font: 'Montserrat', sans-serif;\\n  --nav: 'Press Start 2P', cursive;\\n  --text: #070707;\\n  --background: #f3f4f6;\\n  --card: white;\\n  --cardtext: #33333f;\\n  --footer: rgb(223, 223, 223);\\n}\\n\\n/* General styles */\\n\\nbody {\\n  color: var(--text);\\n  font-family: var(--font);\\n  background-color: var(--background);\\n}\\n\\nmain {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 3rem 2rem 5rem 2rem;\\n  align-items: center;\\n}\\n\\n/* Text styles */\\n\\nh1 {\\n  font-size: 2.5rem;\\n  font-weight: 500;\\n  line-height: 1;\\n  text-align: center;\\n  padding: 1vh;\\n}\\n\\nh3 {\\n  font-size: 1.15rem;\\n}\\n\\np {\\n  font-size: 1rem;\\n}\\n\\np[class*=\\\"pk-\\\"] {\\n  text-align: center;\\n}\\n\\na {\\n  color: inherit;\\n  text-decoration: none;\\n  font-size: 1rem;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\nsamp {\\n  font-family: var(--nav);\\n}\\n\\n/* Header / Navbar */\\n\\nheader {\\n  display: flex;\\n  flex-direction: row;\\n  height: 1.5rem;\\n  padding: 2rem 3vw 2rem 3vw;\\n  justify-content: space-between;\\n  align-items: center;\\n  font-family: var(--nav);\\n}\\n\\nheader img {\\n  height: 3rem;\\n  width: 3rem;\\n}\\n\\nheader ul {\\n  display: flex;\\n  flex-direction: row;\\n  gap: 1.5rem;\\n}\\n\\n.links-out {\\n  color: rgb(119, 119, 119);\\n}\\n\\n/* Cards style */\\n\\nsection.cards {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  padding-top: 1.5rem;\\n  width: 100%;\\n  justify-content: space-between;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  position: relative;\\n  background: var(--card);\\n  border-radius: 1.5rem;\\n  border: transparent;\\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\\n  width: 15rem;\\n  height: 12rem;\\n  margin: 4rem 0.8rem 0.8rem 0.8rem;\\n  padding: 1rem;\\n  transition: all;\\n  transition-duration: 0.7s;\\n}\\n\\n.card:hover {\\n  scale: 1.05;\\n}\\n\\n.card-image,\\n.card-header,\\n.card-body,\\n.card-button {\\n  display: inherit;\\n  width: 100%;\\n  justify-content: center;\\n}\\n\\nimg.card-image {\\n  width: 50%;\\n  position: absolute;\\n  left: 50%;\\n  transform: translate(-50%, -90%);\\n}\\n\\n.card-body {\\n  padding: 0.5rem;\\n}\\n\\nbutton[type=button] {\\n  color: white;\\n  background-color: royalblue;\\n  font-weight: bold;\\n  position: relative;\\n  cursor: pointer;\\n  margin: auto;\\n  padding: 1rem 2rem 1rem 2rem;\\n  border: none;\\n  box-shadow: 0.5rem 1rem 1rem -1rem rgba(0, 0, 0, 0.5);\\n  border-radius: 2rem;\\n}\\n\\n/* Footer */\\n\\nfooter {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 5rem;\\n  background-color: var(--footer);\\n  margin-top: auto;\\n  width: 100%;\\n}\\n\\nfooter a {\\n  text-decoration: underline;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.popup {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  z-index: 9999;\\n  background-color: #fff;\\n  padding: 1rem;\\n  border-radius: 0.5rem;\\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\\n  min-height: 80%;\\n  max-height: min-content;\\n  width: 50%;\\n  min-width: min-content;\\n}\\n\\n.popup-header {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.popup-body img {\\n  height: 14rem;\\n  align-self: center;\\n}\\n\\n.popup-body {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.pokemon-info {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n}\\n\\n.popup h2 {\\n  font-size: 24px;\\n  font-weight: bold;\\n  margin-top: 0;\\n}\\n\\n.popup p {\\n  font-size: 16px;\\n  margin-bottom: 10px;\\n}\\n\\n.popup button,\\nbutton[type=\\\"submit\\\"] {\\n  background-color: #4caf50;\\n  color: #fff;\\n  padding: 10px 20px;\\n  border: none;\\n  border-radius: 4px;\\n  cursor: pointer;\\n}\\n\\n.form-section,\\n.comme {\\n  width: 100%;\\n}\\n\\n.popup button:hover {\\n  background-color: #0d5410;\\n}\\n\\n.comment-section {\\n  height: 8rem;\\n  overflow-y: auto;\\n  padding: 1rem 0;\\n}\\n\\n.comment-section h3 {\\n  padding-bottom: 0.5rem;\\n}\\n\\n.comment-section form {\\n  margin-top: 0.5rem;\\n  display: flex;\\n  gap: 0.5rem;\\n}\\n\\ninput {\\n  margin-left: 31px;\\n}\\n\\ninput,\\ntextarea {\\n  width: 20rem;\\n  border: 2px solid #070707;\\n  height: 2rem;\\n}\\n\\n.comments {\\n  margin-top: 10px;\\n}\\n\\n.comment {\\n  margin-bottom: 10px;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n  padding: 10px;\\n}\\n\\n.comment-form {\\n  display: flex;\\n}\\n\\n.comment p {\\n  margin: 0;\\n}\\n\\n.comment .comment-author {\\n  font-weight: bold;\\n  margin-bottom: 5px;\\n}\\n\\n#Comments {\\n  text-align: center;\\n}\\n\\n.comme {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: center;\\n  padding: 0.8rem 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstoneapi/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://capstoneapi/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstoneapi/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstoneapi/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstoneapi/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstoneapi/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstoneapi/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstoneapi/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstoneapi/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstoneapi/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_pokemon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pokemon.js */ \"./src/modules/pokemon.js\");\n\n\n\n//# sourceURL=webpack://capstoneapi/./src/index.js?");

/***/ }),

/***/ "./src/modules/amountOfComments.js":
/*!*****************************************!*\
  !*** ./src/modules/amountOfComments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction amountOfComments(totalComments, pokemonID) {\n  const spanElement = document.querySelector(`.amount-${pokemonID}`);\n  spanElement.textContent = totalComments;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (amountOfComments);\n\n//# sourceURL=webpack://capstoneapi/./src/modules/amountOfComments.js?");

/***/ }),

/***/ "./src/modules/amountOfPokemons.js":
/*!*****************************************!*\
  !*** ./src/modules/amountOfPokemons.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// This part updates the total pokemon number in the nav.\nconst amountOfPokemons = (listOfPokemons) => {\n  const sampElement = document.querySelector('samp');\n  sampElement.textContent = listOfPokemons;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (amountOfPokemons);\n\n//# sourceURL=webpack://capstoneapi/./src/modules/amountOfPokemons.js?");

/***/ }),

/***/ "./src/modules/pokemon.js":
/*!********************************!*\
  !*** ./src/modules/pokemon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _amountOfComments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amountOfComments.js */ \"./src/modules/amountOfComments.js\");\n/* harmony import */ var _amountOfPokemons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amountOfPokemons.js */ \"./src/modules/amountOfPokemons.js\");\n// Homepage\n\n\n\n// Set the url for the API\nconst urlAPI = 'https://pokeapi.co/api/v2/pokemon/';\nconst urlInvolvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IWti9y6er0AcFVo2U2d3/';\n\n// Get the Comments from the API ------------------------------------------------------------------\n\nconst getComments = async (pokemonID) => {\n  const requestOptions = {\n    method: 'GET',\n    redirect: 'follow',\n  };\n\n  const response = await fetch(`${urlInvolvementAPI}comments/?item_id=${pokemonID}`, requestOptions);\n  const data = await response.json();\n  const comments = data[0];\n\n  if (data.length === 0) {\n    (0,_amountOfComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1, pokemonID);\n  } else if (data.length > 0) {\n    const totalComments = data.length;\n    (0,_amountOfComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(totalComments, pokemonID);\n  } else {\n    (0,_amountOfComments_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(0, pokemonID);\n  }\n\n  let commentsList;\n  if (comments !== undefined) {\n    commentsList = data.map((comment) => `\n        <li>\n          <p>${comment.comment}</p>\n          <p><em>${comment.username} - ${comment.creation_date}</em></p>\n        </li>\n      `).join('');\n  } else {\n    commentsList = '<li>No comments yet</li>';\n  }\n\n  // Update the comments list on the popup\n  const commentsListElement = document.getElementById(`comments-list-${pokemonID}`);\n  commentsListElement.innerHTML = commentsList;\n};\n\n// Create a new comment  ---------------------------------------------------------------------------\nconst sendComment = async (pokemonID) => {\n  const commentForm = document.getElementById(`comment-form-${pokemonID}`);\n  const usernameInput = commentForm.querySelector(`#username-${pokemonID}`);\n  const commentInput = commentForm.querySelector(`#comment-${pokemonID}`);\n  const errorElement = document.getElementById(`error-${pokemonID}`);\n\n  if (usernameInput.value !== '' && commentForm.value !== '') {\n    // POST Request\n    const requestOptions = {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify({\n        item_id: pokemonID,\n        username: usernameInput.value,\n        comment: commentInput.value,\n      }),\n    };\n\n    await fetch(`${urlInvolvementAPI}comments?item_id=${pokemonID}`, requestOptions);\n\n    // GET request to update comment list ---------------------------------------------------\n    getComments(pokemonID);\n\n    // To clean the form -----------------------------------------------------------------\n    commentForm.querySelector(`#username-${pokemonID}`).value = '';\n    commentForm.querySelector(`#comment-${pokemonID}`).value = '';\n  } else {\n    const messages = [];\n    if (usernameInput.value === '' && commentForm.value === '') {\n      messages.push('Please enter a username and a comment.');\n    } else if (commentForm.value === '' && usernameInput.value !== '') {\n      messages.push('Please enter a username.');\n    } else if (usernameInput.value === '' && commentForm.value !== '') {\n      messages.push('Please enter a comment.');\n    }\n\n    if (messages.length > 0) {\n      errorElement.innerText = messages.join(', ');\n      setTimeout(() => {\n        errorElement.remove();\n      }, 3000);\n    }\n  }\n};\n\n// Function to get the likes of each Pokemon  -----------------------------------------------------\nconst getLikesData = async () => {\n  const response = await fetch(`${urlInvolvementAPI}likes/`, { method: 'GET' });\n  const data = await response.json();\n  return data;\n};\n\n// Function to update the amount of likes for a specific pokemon  ----------------------------------\nconst updateLikeNumber = async (pokemonId) => {\n  const likesData = await getLikesData();\n  const item = likesData.find((item) => item.item_id === pokemonId);\n  const likes = item ? item.likes : 0;\n  return likes;\n};\n\n// Render results ----------------------------------------------------------------------------------\n\nconst renderPokemons = async (listOfPokemons) => {\n  // Get pokemon likes\n  const likesData = await getLikesData();\n  let likes = 0;\n  let pokemonDetail = '';\n  listOfPokemons.forEach((element, index) => {\n    const item = likesData.find((item) => item.item_id === `pk-${index + 1}`);\n    likes = item ? item.likes : 0;\n\n    pokemonDetail += `\n    <div class=\"card\" id=\"pk-${index + 1}\">\n      <img class=\"card-image\" src=\"${element.url}\" alt=\"${element.name}\">\n      <div class=\"card-header\">\n        <h3>${element.name}</h3>\n      </div>\n      <div class=\"card-body\">\n        <p></p>\n      </div>\n      <div class=\"card-button\">\n        <div clas=\"card-button-like\">\n          <button class=\"like\"><svg viewBox=\"0 0 17.503 15.625\" height=\"20.625\" width=\"20.503\" xmlns=\"http://www.w3.org/2000/svg\" class=\"icon\">\n          <path transform=\"translate(0 0)\" d=\"M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z\" id=\"Fill\"></path>\n          </svg>\n          </button>\n          <p class=\"pk-${index + 1}\">${likes}</p>\n        </div>\n        <button type=\"button\" class=\"full-rounded comment-btn\" id=\"comment\">Comments<div class=\"border full-rounded\"></div></button>\n      </div>\n    </div>\n    \n\n    <!-- Pop up window -->\n\n    \n    <div class=\"popup hidden\" id=\"${index + 1}\">\n      <div class=\"popup-header\">\n        <h2>${element.name}</h2>\n        <button class=\"close-popup\">X</button>\n      </div>\n      <div class=\"popup-body\">\n        <img src=\"${element.url}\" alt=\"${element.name}\">\n        <div class=\"pokemon-info\">\n          <p><strong>Type:</strong> ${element.type.name}</p>\n          <p><strong>Height:</strong> ${element.height}</p>\n          <p><strong>Weight:</strong> ${element.weight}</p>\n        </div>\n        <div class=\"comment-section\">\n\n          <h3>Comments (<span class=\"amount-pk-${index + 1}\"></span>)</h3>\n\n          <ul class=\"comments-list\" id=\"comments-list-pk-${index + 1}\">\n          \n          <!-- COMMENTS HERE -->\n          \n          </ul>\n        </div>\n        <div class=\"form-section\">\n          <form class=\"comment-form\" id=\"comment-form-pk-${index + 1}\">\n            <div class=\"comme\">\n              <div>\n                <label for=\"username\">Name:</label>\n                <input type=\"text\" id=\"username-pk-${index + 1}\" name=\"username\" required>\n              </div>\n              <div>\n                <label for=\"comments\">Comment:</label>\n                <textarea id=\"comment-pk-${index + 1}\" rows=\"4\" name=\"comment\" required></textarea>\n              </div>\n            </div>\n          </form>\n          <button type=\"button\" class=\"form-button\" id=\"pk-${index + 1}\">Add Comments</button>\n          <div id=\"error-pk-${index + 1}\"></div>\n        </div>\n      </div>\n    </div>\n    `;\n  });\n  // call the father element and insert the data\n  const section = document.querySelector('section.cards');\n  section.innerHTML = pokemonDetail;\n\n  // This section contains the like buttons functionality  --------------------------\n  const likeButtons = document.querySelectorAll('.like');\n\n  likeButtons.forEach((button) => {\n    button.addEventListener('click', async (event) => {\n      const pokemonCard = event.target.closest('.card');\n      const pokemonId = pokemonCard.getAttribute('id');\n      const requestBody = JSON.stringify({ item_id: pokemonId });\n      const requestOptions = {\n        method: 'POST',\n        headers: { 'Content-Type': 'application/json' },\n        body: requestBody,\n        redirect: 'follow',\n      };\n      fetch(`${urlInvolvementAPI}likes/`, requestOptions)\n        .then((response) => response.text())\n        .catch((error) => error);\n\n      // This part updates the number of likes displayed on the screen.\n      const pElement = document.querySelector(`.${pokemonId}`);\n      const newAmountOfLikes = await updateLikeNumber(pokemonId);\n      pElement.textContent = newAmountOfLikes + 1;\n    });\n  });\n\n  // This section contains the popup functionality  ---------------------------------\n  const cardsContainer = document.querySelectorAll('.comment-btn');\n\n  cardsContainer.forEach((item) => item.addEventListener('click', (event) => {\n    const popup = event.target.parentNode.parentNode.nextElementSibling;\n    getComments(`pk-${popup.id}`);\n    if (event.target.classList.contains('comment-btn')) {\n      popup.classList.toggle('hidden');\n    }\n    const closeBtn = popup.querySelector('.close-popup');\n    closeBtn.addEventListener('click', () => {\n      popup.classList.add('hidden');\n    });\n  }));\n\n  // This section contains the comment buttons functionality  ------------------------\n  const addCommentButtons = document.querySelectorAll('.form-button');\n\n  addCommentButtons.forEach((button) => {\n    button.addEventListener('click', (event) => {\n      event.preventDefault();\n      sendComment(button.id);\n    });\n  });\n};\n\nconst getData = async (callback) => {\n  try {\n    // Get the pokemon data from the pokeapi endpoint\n    const responsePokeAPI = await fetch(urlAPI, {\n      method: 'GET',\n    });\n    const dataPokemon = await responsePokeAPI.json();\n\n    // Get the pokemon's names and ids\n    const getPokemonBaseData = dataPokemon.results;\n\n    const promisesArray = getPokemonBaseData.map(async (i) => {\n      const res = await fetch(i.url);\n      const dataPokemon = await res.json();\n      return dataPokemon;\n    });\n\n    // Create an normal array from the promises array\n    const urlsInfoArray = await Promise.all(promisesArray);\n\n    // Construct the new array\n    const listOfPokemons = [];\n\n    for (let i = 0; i < getPokemonBaseData.length; i += 1) {\n      listOfPokemons[i] = {\n        name: getPokemonBaseData[i].name,\n        url: urlsInfoArray[i].sprites.front_default,\n        type: urlsInfoArray[i].types[0].type,\n        height: urlsInfoArray[i].height,\n        weight: urlsInfoArray[i].weight,\n      };\n    }\n    (0,_amountOfPokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(listOfPokemons.length);\n    return callback(listOfPokemons);\n  } catch (error) {\n    return error;\n  }\n};\n\ngetData(renderPokemons);\n\n\n//# sourceURL=webpack://capstoneapi/./src/modules/pokemon.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;