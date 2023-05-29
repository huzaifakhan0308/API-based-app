"use strict";
(self["webpackChunkAPI_BASED_APP_"] = self["webpackChunkAPI_BASED_APP_"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/image/image3.jpg */ "./src/assets/image/image3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Combo&family=Poppins&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n}\r\n\r\n.background {\r\n  background-image:\r\n    linear-gradient(to bottom, rgba(190, 158, 202, 0.6), rgba(225, 238, 239, 0.8)),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.container {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  position: absolute;\r\n  position: fixed;\r\n}\r\n\r\n.container-appear {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-reservation-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: rgba(255, 255, 255, 0.961);\r\n  color: black;\r\n  padding: 1vh;\r\n  border: 2px solid rgb(0, 0, 0);\r\n  position: relative;\r\n  position: absolute;\r\n  position: fixed;\r\n  width: 90%;\r\n  height: 90vh;\r\n  margin: 1vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.reservation-page-close-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 90%;\r\n  width: 5vh;\r\n  height: 5vh;\r\n  cursor: pointer;\r\n  position: absolute;\r\n}\r\n\r\n.popup-reservation-img-div {\r\n  width: 50vh;\r\n  height: 30vh;\r\n}\r\n\r\n.name-inst-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.area-category-div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 80vh;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n}\r\n\r\n.reservations-conatainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.reservations-div {\r\n  height: 11vh;\r\n  overflow-y: scroll;\r\n  border: 1px solid rgb(2, 2, 2);\r\n  padding: 0 0 0 10px;\r\n}\r\n\r\n.reservations {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.popup-reservation-container form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 40vh;\r\n  margin-top: 2vh;\r\n}\r\n\r\n.popup-reservation-container form input {\r\n  margin-bottom: 1vh;\r\n  padding: 2.5px 0 2.5px 5px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  height: 10vh;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: x-large;\r\n  column-gap: 5%;\r\n  margin-bottom: 20px;\r\n  justify-items: center;\r\n  background-color: rgba(255, 255, 255, 0.763);\r\n}\r\n\r\n.meal-logo-div {\r\n  margin-left: 5vh;\r\n  height: 100%;\r\n  width: 10vh;\r\n}\r\n\r\nheader span {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: x-large;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 10vh;\r\n  border: 1px solid rgb(0, 0, 0);\r\n  background-color: rgba(255, 255, 255, 0.763);\r\n  margin-top: 20px;\r\n}\r\n\r\n.meal-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 15px;\r\n}\r\n\r\n.like-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.meal-img {\r\n  width: 100%;\r\n  height: 30vh;\r\n}\r\n\r\n.meals {\r\n  display: flex;\r\n  column-gap: 15%;\r\n  flex-wrap: wrap;\r\n  height: 100%;\r\n  width: 100%;\r\n  row-gap: 19px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.popup {\r\n  display: none;\r\n  position: fixed;\r\n  background: #ffffffe6;\r\n  width: 85%;\r\n  height: 85%;\r\n  z-index: 200;\r\n  top: 0;\r\n  left: 0;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  border: 4px solid black;\r\n  margin: 5%;\r\n}\r\n\r\n.closeBtn {\r\n  position: sticky;\r\n  float: right;\r\n  height: 25px;\r\n  width: 25px;\r\n  cursor: pointer;\r\n  margin-left: 90%;\r\n}\r\n\r\n.popupcontent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 25px;\r\n  font-size: larger;\r\n  text-align: center;\r\n}\r\n\r\n.detail-flex {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipe {\r\n  width: 80vh;\r\n  font-size: 18px;\r\n  margin: auto;\r\n}\r\n\r\n.instructions {\r\n  width: 60%;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.img-large {\r\n  width: 50vh;\r\n  height: 30vh;\r\n}\r\n\r\n.submitBtn {\r\n  width: 40%;\r\n  margin-left: 20%;\r\n  padding: 5px;\r\n  font-size: large;\r\n}\r\n\r\n#commentDiv {\r\n  display: flex;\r\n  max-height: 100px;\r\n  overflow-y: scroll;\r\n  font-size: large;\r\n  border: 1px solid black;\r\n}\r\n\r\n.commentChild-P {\r\n  display: flex;\r\n  padding-left: 5px;\r\n}\r\n\r\n.inputstyle {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50vh;\r\n  margin-bottom: 15px;\r\n  font-size: 15px;\r\n  padding: 2.5px 0 2.5px 5px;\r\n}\r\n\r\n.commentText {\r\n  padding: 4px;\r\n  height: 100px;\r\n}\r\n\r\n.byName {\r\n  margin-left: 5px;\r\n}\r\n\r\n.detailstyle {\r\n  font-size: 21px;\r\n  font-weight: 600;\r\n}\r\n\r\n.popupbg {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: none;\r\n}\r\n\r\n.comBtn,\r\n.resBtn {\r\n  align-items: center;\r\n  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);\r\n  border: 0;\r\n  border-radius: 8px;\r\n  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  display: flex;\r\n  font-family: Phantomsans, sans-serif;\r\n  font-size: 20px;\r\n  justify-content: center;\r\n  line-height: 1em;\r\n  max-width: 100%;\r\n  min-width: 140px;\r\n  padding: 8px 24px;\r\n  text-decoration: none;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n}\r\n\r\n.comBtn:active,\r\n.resBtn:active,\r\n.comBtn:hover,\r\n.resBtn:hover {\r\n  outline: 0;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Combo&family=Poppins&display=swap');\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nhtml {\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n}\r\n\r\n.background {\r\n  background-image:\r\n    linear-gradient(to bottom, rgba(190, 158, 202, 0.6), rgba(225, 238, 239, 0.8)),\r\n    url('./assets/image/image3.jpg');\r\n  background-size: 100% 100%;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.container {\r\n  display: none;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n  position: absolute;\r\n  position: fixed;\r\n}\r\n\r\n.container-appear {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-reservation-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: rgba(255, 255, 255, 0.961);\r\n  color: black;\r\n  padding: 1vh;\r\n  border: 2px solid rgb(0, 0, 0);\r\n  position: relative;\r\n  position: absolute;\r\n  position: fixed;\r\n  width: 90%;\r\n  height: 90vh;\r\n  margin: 1vh;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.reservation-page-close-btn {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 90%;\r\n  width: 5vh;\r\n  height: 5vh;\r\n  cursor: pointer;\r\n  position: absolute;\r\n}\r\n\r\n.popup-reservation-img-div {\r\n  width: 50vh;\r\n  height: 30vh;\r\n}\r\n\r\n.name-inst-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.area-category-div {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  width: 80vh;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n}\r\n\r\n.reservations-conatainer {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.reservations-div {\r\n  height: 11vh;\r\n  overflow-y: scroll;\r\n  border: 1px solid rgb(2, 2, 2);\r\n  padding: 0 0 0 10px;\r\n}\r\n\r\n.reservations {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\n.popup-reservation-container form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 40vh;\r\n  margin-top: 2vh;\r\n}\r\n\r\n.popup-reservation-container form input {\r\n  margin-bottom: 1vh;\r\n  padding: 2.5px 0 2.5px 5px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: row;\r\n  width: 100%;\r\n  height: 10vh;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: x-large;\r\n  column-gap: 5%;\r\n  margin-bottom: 20px;\r\n  justify-items: center;\r\n  background-color: rgba(255, 255, 255, 0.763);\r\n}\r\n\r\n.meal-logo-div {\r\n  margin-left: 5vh;\r\n  height: 100%;\r\n  width: 10vh;\r\n}\r\n\r\nheader span {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  font-size: x-large;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 10vh;\r\n  border: 1px solid rgb(0, 0, 0);\r\n  background-color: rgba(255, 255, 255, 0.763);\r\n  margin-top: 20px;\r\n}\r\n\r\n.meal-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 15px;\r\n}\r\n\r\n.like-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.like {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.meal-img {\r\n  width: 100%;\r\n  height: 30vh;\r\n}\r\n\r\n.meals {\r\n  display: flex;\r\n  column-gap: 15%;\r\n  flex-wrap: wrap;\r\n  height: 100%;\r\n  width: 100%;\r\n  row-gap: 19px;\r\n  justify-content: space-around;\r\n}\r\n\r\n.popup {\r\n  display: none;\r\n  position: fixed;\r\n  background: #ffffffe6;\r\n  width: 85%;\r\n  height: 85%;\r\n  z-index: 200;\r\n  top: 0;\r\n  left: 0;\r\n  overflow-y: scroll;\r\n  overflow-x: hidden;\r\n  border: 4px solid black;\r\n  margin: 5%;\r\n}\r\n\r\n.closeBtn {\r\n  position: sticky;\r\n  float: right;\r\n  height: 25px;\r\n  width: 25px;\r\n  cursor: pointer;\r\n  margin-left: 90%;\r\n}\r\n\r\n.popupcontent {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 25px;\r\n  font-size: larger;\r\n  text-align: center;\r\n}\r\n\r\n.detail-flex {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.recipe {\r\n  width: 80vh;\r\n  font-size: 18px;\r\n  margin: auto;\r\n}\r\n\r\n.instructions {\r\n  width: 60%;\r\n  margin: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.img-large {\r\n  width: 50vh;\r\n  height: 30vh;\r\n}\r\n\r\n.submitBtn {\r\n  width: 40%;\r\n  margin-left: 20%;\r\n  padding: 5px;\r\n  font-size: large;\r\n}\r\n\r\n#commentDiv {\r\n  display: flex;\r\n  max-height: 100px;\r\n  overflow-y: scroll;\r\n  font-size: large;\r\n  border: 1px solid black;\r\n}\r\n\r\n.commentChild-P {\r\n  display: flex;\r\n  padding-left: 5px;\r\n}\r\n\r\n.inputstyle {\r\n  display: block;\r\n  margin: auto;\r\n  width: 50vh;\r\n  margin-bottom: 15px;\r\n  font-size: 15px;\r\n  padding: 2.5px 0 2.5px 5px;\r\n}\r\n\r\n.commentText {\r\n  padding: 4px;\r\n  height: 100px;\r\n}\r\n\r\n.byName {\r\n  margin-left: 5px;\r\n}\r\n\r\n.detailstyle {\r\n  font-size: 21px;\r\n  font-weight: 600;\r\n}\r\n\r\n.popupbg {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 2;\r\n  height: 100%;\r\n  width: 100%;\r\n  display: none;\r\n}\r\n\r\n.comBtn,\r\n.resBtn {\r\n  align-items: center;\r\n  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);\r\n  border: 0;\r\n  border-radius: 8px;\r\n  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n  display: flex;\r\n  font-family: Phantomsans, sans-serif;\r\n  font-size: 20px;\r\n  justify-content: center;\r\n  line-height: 1em;\r\n  max-width: 100%;\r\n  min-width: 140px;\r\n  padding: 8px 24px;\r\n  text-decoration: none;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  white-space: nowrap;\r\n  cursor: pointer;\r\n}\r\n\r\n.comBtn:active,\r\n.resBtn:active,\r\n.comBtn:hover,\r\n.resBtn:hover {\r\n  outline: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ "./src/modules/api.js");
/* harmony import */ var _modules_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/user.js */ "./src/modules/user.js");
/* harmony import */ var _modules_images_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/images.js */ "./src/modules/images.js");
/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/reservation.js */ "./src/modules/reservation.js");






/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addLike": () => (/* binding */ addLike),
/* harmony export */   "getComment": () => (/* binding */ getComment),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "getMealsInfo": () => (/* binding */ getMealsInfo),
/* harmony export */   "getRecipe": () => (/* binding */ getRecipe),
/* harmony export */   "getReservations": () => (/* binding */ getReservations),
/* harmony export */   "getStrInstruction": () => (/* binding */ getStrInstruction),
/* harmony export */   "ides": () => (/* binding */ ides),
/* harmony export */   "postReservations": () => (/* binding */ postReservations)
/* harmony export */ });
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.js */ "./src/modules/ui.js");
/* harmony import */ var _reservation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservation.js */ "./src/modules/reservation.js");



const id = 'tKVlvnEbmf4TMWB77SE7';
const urlMealrecipe = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const urlAllMeals = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
const invApiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${id}/likes`;
const ides = ['52959', '52819', '52944', '53043', '52802', '52918'];

const getLikes = async () => {
  try {
    const allLikes = await fetch(invApiUrl, {
      method: 'Get',
    });
    return allLikes.json();
  } catch (error) {
    return error;
  }
};

const postReservations = async (data) => {
  let reservation = '';
  try {
    reservation = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/reservations/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      },
    );
    // eslint-disable-next-line no-empty
  } catch (error) {}
  return reservation;
};

const getReservations = async (id) => {
  const ID = id.toString();
  try {
    const reservation = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/reservations?item_id=${ID}`,
      {
        method: 'Get',
      },
    );
    const res = await reservation.json();
    return res;
  } catch (error) {
    return error;
  }
};

const getStrInstruction = async (id) => {
  const ID = id.toString();
  try {
    const reservation = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${ID}`,
      {
        method: 'Get',
      },
    );
    const res = await reservation.json();
    return res.meals[0];
  } catch (error) {
    return error;
  }
};

const getMealsInfo = async () => {
  const allMeals = await fetch(urlAllMeals, {
    method: 'Get',
  });
  const likes = await getLikes();
  const meals = await allMeals.json();
  (0,_ui_js__WEBPACK_IMPORTED_MODULE_0__["default"])(meals.meals, likes);
  (0,_reservation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(meals.meals);
};

const addLike = async (index) => {
  try {
    const userPost = await fetch(invApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${ides[index]}`,
      }),
    });
    return userPost;
  } catch (error) {
    return error;
  }
};

const getRecipe = async (id) => {
  const url = urlMealrecipe + id;
  const comments = await fetch(url, {
    method: 'Get',
  });
  const commentsResponse = await comments.json();
  return commentsResponse;
};

const getComment = async (id) => {
  const comments = await fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=${id}`,
    {
      method: 'Get',
    },
  );
  const commentsResponse = await comments.json();
  return commentsResponse;
};




/***/ }),

/***/ "./src/modules/calmeals.js":
/*!*********************************!*\
  !*** ./src/modules/calmeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calMeals = () => document.querySelector('.meals').childElementCount;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calMeals);


/***/ }),

/***/ "./src/modules/commentdisplay.js":
/*!***************************************!*\
  !*** ./src/modules/commentdisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=';
const commentDisplay = async (id) => {
  const url = commentUrl + id;
  const response = await fetch(url, {
    method: 'Get',
  });
  const comments = await response.json();
  const div = document.createElement('div');
  comments.forEach((element) => {
    const p = document.createElement('p');
    p.innerHTML = `${element.creation_date}  ${element.username}: ${element.comment}`;
    div.appendChild(p);
  });
  return div;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentDisplay);

/***/ }),

/***/ "./src/modules/commentpopup.js":
/*!*************************************!*\
  !*** ./src/modules/commentpopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import commentDisplay from './commentdisplay.js';
// import { getComment } from './api.js'
const popupContent = document.querySelector('.popupcontent');
const popup = document.getElementById('popup');
const urlMealrecipe = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const getRecipe = async (id) => {
  const url = urlMealrecipe + id;
  const comments = await fetch(url, {
    method: 'Get',
  });
  const meal = await comments.json();
  popupContent.innerHTML = '';
  const closeBtn = document.createElement('i');
  closeBtn.className = 'closeBtn fa fa-times fa-4x';
  closeBtn.id = meal.meals[0].idMeal;
  popupContent.appendChild(closeBtn);
  const popupbg = document.createElement('div');
  popupbg.className = 'popupbg';
  const image = document.createElement('img');
  const src = meal.meals[0].strMealThumb;
  image.className = 'img-large';
  image.src = src;
  popupContent.appendChild(image);
  const heading = document.createElement('h3');
  heading.className = 'heading';
  heading.innerHTML = meal.meals[0].strMeal;
  popupContent.appendChild(heading);
  const detailDiv = document.createElement('div');
  detailDiv.className = 'detail-flex';
  popupContent.appendChild(detailDiv);
  const areaP = document.createElement('p');
  areaP.className = 'detailstyle';
  areaP.innerHTML = `Area:    ${meal.meals[0].strArea}`;
  const paragraph = document.createElement('p');
  // if (meal.meals[0].strInstructions.length > 500) {
  //   meal.meals[0].strInstructions = meal.meals[0].strInstructions.substring(0,500) + '...';
  // }
  paragraph.className = 'recipe';
  paragraph.innerHTML = meal.meals[0].strInstructions;
  popupContent.appendChild(paragraph);
  const categoryP = document.createElement('p');
  categoryP.className = 'detailstyle';
  categoryP.innerHTML = `Category:   ${meal.meals[0].strCategory}`;
  detailDiv.appendChild(areaP);
  detailDiv.appendChild(categoryP);
  const subHeading = document.createElement('h4');
  subHeading.className = 'subheading';
  subHeading.innerHTML = 'Comments';
  popupContent.appendChild(subHeading);
  const commentsDiv = document.createElement('div');
  commentsDiv.id = 'commentDiv';
  popupContent.appendChild(commentsDiv);
  const subHeading2 = document.createElement('h4');
  subHeading2.className = 'subheading2';
  subHeading2.innerHTML = 'Add A Comment';
  popupContent.appendChild(subHeading2);
  const formDiv = document.createElement('div');
  formDiv.className = 'form-div';
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  const commentName = document.createElement('input');
  commentName.className = 'inputstyle';
  commentName.setAttribute('type', 'text');
  commentName.setAttribute('id', 'commentname');
  commentName.setAttribute('placeholder', 'Your Name');
  const commentText = document.createElement('input');
  commentText.setAttribute('type', 'textarea');
  commentText.setAttribute('id', 'commentsubject');
  commentText.setAttribute('placeholder', 'Your Insights');
  commentText.className = 'inputstyle commentText';
  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('value', 'Submit');
  submitBtn.className = 'submitBtn';
  form.appendChild(commentName);
  form.appendChild(commentText);
  form.appendChild(submitBtn);
  formDiv.appendChild(form);
  popupContent.appendChild(formDiv);
  document.body.appendChild(popupbg);
  popup.style.display = 'block';
  popupbg.style.display = 'block';
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popup.style.display = 'none';
    popupbg.style.display = 'none';
  });
  // const displayedcomments = commentDisplay(id);
  // console.log(displayedcomments);
  const commentUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments?item_id=';
  const commentDisplay = async (id) => {
    const url = commentUrl + id;
    const response = await fetch(url, {
      method: 'Get',
    });
    const comments = await response.json();
    const div = document.createElement('div');
    div.className = 'commentdivstyle';
    comments.forEach((element) => {
      const p = document.createElement('p');
      p.classList = 'commentChild-P';
      p.innerHTML = `${element.creation_date}  ${element.username}: ${element.comment}`;
      div.appendChild(p);
    });
    subHeading.innerHTML = `Comments (${comments.length})`;
    commentsDiv.appendChild(div);
    subHeading.innerHTML = `Comments(${comments.length})`;
  };
  commentDisplay(id);
  const commentPost = async () => {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tKVlvnEbmf4TMWB77SE7/comments/',
      {
        method: 'Post',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: Number(id),
          username: commentName.value,
          comment: commentText.value,
        }),
      },
    );
    form.reset();
    getRecipe(id);
    return response;
  };
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (commentName.value !== '' || commentText.value !== '') {
      commentPost(id);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRecipe);

/***/ }),

/***/ "./src/modules/images.js":
/*!*******************************!*\
  !*** ./src/modules/images.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_icons_meal_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/meal-logo.png */ "./src/assets/icons/meal-logo.png");


const mealLogo1 = new Image();
mealLogo1.src = _assets_icons_meal_logo_png__WEBPACK_IMPORTED_MODULE_0__;
document.querySelector('.meal-logo-div').append(mealLogo1);


/***/ }),

/***/ "./src/modules/resObj.js":
/*!*******************************!*\
  !*** ./src/modules/resObj.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Object {
  constructor(index, name, startDate, endDate) {
    this.item_id = index;
    this.username = name;
    this.date_start = startDate;
    this.date_end = endDate;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object);

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _resObj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resObj.js */ "./src/modules/resObj.js");


const API = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");

const popupContainer = document.querySelector('.container');
const resPageCloseBtn = document.querySelector('.reservation-page-close-btn');
const popupResImgDiv = document.querySelector('.popup-reservation-img-div');
const name = document.querySelector('.name');
const instruction = document.querySelector('.instructions');
const area = document.querySelector('.area');
const category = document.querySelector('.category');
const meals = document.querySelector('.meals');

const element = (data) => {
  document.querySelector('.reservations-div').innerHTML = '';
  if (Array.isArray(data)) {
    document.querySelector('.res-count').innerHTML = `(${data.length})`;
    data.forEach((element) => {
      const div = document.createElement('div');
      div.classList = 'reservations';
      const startDate = document.createElement('h4');
      startDate.innerHTML = element.date_start;
      const endDate = document.createElement('h4');
      endDate.innerHTML = `~${element.date_end}`;
      const name = document.createElement('h3');
      name.classList = 'byName';
      name.innerHTML = `by ${element.username}`;
      div.append(startDate, endDate, name);
      document.querySelector('.reservations-div').appendChild(div);
    });
  } else {
    document.querySelector('.res-count').innerHTML = '(0)';
  }
};

const nameInput = document.querySelector('.Your-name');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');

let index = '';

let array = [];

const resBtn = (data) => {
  array = data;
};

meals.addEventListener('click', async (event) => {
  if (event.target.className === 'resBtn') {
    nameInput.value = '';
    startDate.value = '';
    endDate.value = '';
    index = parseInt(event.target.parentElement.id, 10);
    const meals = await API.getStrInstruction(index);
    const ID = event.target.id;
    popupContainer.classList.add('container-appear');
    const resPageImg = new Image();
    resPageImg.src = array[ID].strMealThumb;
    popupResImgDiv.innerHTML = '';
    popupResImgDiv.append(resPageImg);
    name.innerHTML = array[ID].strMeal;
    area.innerHTML = `Area: ${meals.strArea}`;
    category.innerHTML = `Category: ${meals.strCategory}`;
    instruction.innerHTML = meals.strInstructions;
    const reservation = await API.getReservations(index);
    element(reservation);
  }
});

resPageCloseBtn.addEventListener('click', () => {
  popupContainer.classList.remove('container-appear');
});

document.querySelector('.form-btn').addEventListener('click', async () => {
  if (nameInput.value !== '' && startDate.value !== '' && endDate.value !== '') {
    const obj = new _resObj_js__WEBPACK_IMPORTED_MODULE_0__["default"](
      index,
      nameInput.value,
      startDate.value,
      endDate.value,
    );
    await API.postReservations(obj);
    const reservation = await API.getReservations(index);
    element(reservation);
    nameInput.value = '';
    startDate.value = '';
    endDate.value = '';
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resBtn);


/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _calmeals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calmeals.js */ "./src/modules/calmeals.js");


const meals = document.querySelector('.meals');
const mealsCounter = document.querySelector('.meals-counter');
const ui = (data, likeNbrs = []) => {
  meals.innerHTML = '';
  data.forEach((meal, index) => {
    if (index <= 5) {
      if (meal.strMeal.length > 25) {
        meal.strMeal = `${meal.strMeal.substring(0, 15)}...`;
      }
      const li = document.createElement('li');
      li.className = 'meal-container';
      li.id = `${meal.idMeal}`;
      const image = document.createElement('img');
      const src = meal.strMealThumb;
      image.className = 'meal-img';
      image.src = src;

      const div = document.createElement('div');
      div.className = 'like-container';
      const header = document.createElement('h5');
      header.innerHTML = meal.strMeal;
      header.className = 'card-header';

      const likeDiv = document.createElement('div');
      likeDiv.className = 'like';
      const heartIcon = document.createElement('i');
      heartIcon.className = 'fa fa-heart-o like-icon';
      const likeTxt = document.createElement('h7');
      likeTxt.className = 'like-txt';
      likeTxt.innerHTML = `${likeNbrs[index].likes} likes`;
      likeTxt.id = index;

      likeDiv.appendChild(heartIcon);
      likeDiv.appendChild(likeTxt);

      div.appendChild(header);
      div.appendChild(likeDiv);

      const comBtn = document.createElement('button');
      comBtn.className = 'comBtn';
      comBtn.id = meal.idMeal;
      comBtn.innerHTML = 'Comments';

      const resBtn = document.createElement('button');
      resBtn.className = 'resBtn';
      resBtn.id = `${index}`;
      resBtn.innerHTML = 'Reservations';

      li.appendChild(image);
      li.appendChild(div);
      li.appendChild(comBtn);
      li.appendChild(resBtn);
      meals.appendChild(li);
    }
  });

  mealsCounter.innerHTML = `Meals(${(0,_calmeals_js__WEBPACK_IMPORTED_MODULE_0__["default"])()})`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);


/***/ }),

/***/ "./src/modules/user.js":
/*!*****************************!*\
  !*** ./src/modules/user.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./src/modules/api.js");
/* harmony import */ var _commentpopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentpopup.js */ "./src/modules/commentpopup.js");
/* harmony import */ var _commentdisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentdisplay.js */ "./src/modules/commentdisplay.js");




const meals = document.querySelector('.meals');
window.addEventListener('load', () => {
  (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getMealsInfo)();
});

meals.addEventListener('click', async (e) => {
  // trash icon
  if (e.target.closest('.like-icon')) {
    const likeText = e.target.closest('.like-icon').nextElementSibling;
    const likeIcon = e.target.closest('.like-icon');
    const { id } = likeText;
    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addLike)(id);
    const likeNbr = parseInt(likeText.innerHTML, 10) + 1;
    likeText.innerHTML = `${likeNbr} likes`;
    likeIcon.className = 'fa fa-heart';
  }
});

meals.addEventListener('click', (e) => {
  if (e.target.closest('.comBtn')) {
    const btn = e.target;
    const { id } = btn;
    (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(id);
    (0,_commentpopup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id);
    (0,_commentdisplay_js__WEBPACK_IMPORTED_MODULE_2__["default"])(id);
  }
});


/***/ }),

/***/ "./src/assets/icons/meal-logo.png":
/*!****************************************!*\
  !*** ./src/assets/icons/meal-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5584b9143d4985aaa509.png";

/***/ }),

/***/ "./src/assets/image/image3.jpg":
/*!*************************************!*\
  !*** ./src/assets/image/image3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "71533b90a5bb18008fca.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILG9DQUFvQyx3REFBUSxHQUFHO0FBQy9DOztBQUVBLGlFQUFlLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0QyQztBQUNuQjtBQUNPOztBQUVqRDtBQUNBO0FBQ0EsRUFBRSxxREFBWTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQixJQUFJLGdEQUFPO0FBQ1g7QUFDQSw0QkFBNEIsU0FBUztBQUNyQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxZQUFZLEtBQUs7QUFDakIsSUFBSSxtREFBVTtBQUNkLElBQUksNERBQVM7QUFDYixJQUFJLDhEQUFjO0FBQ2xCO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL3NyYy9tb2R1bGVzL2NhbG1lYWxzLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vc3JjL21vZHVsZXMvY29tbWVudGRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvbW9kdWxlcy9jb21tZW50cG9wdXAuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvbW9kdWxlcy9pbWFnZXMuanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvbW9kdWxlcy9yZXNPYmouanMiLCJ3ZWJwYWNrOi8vQVBJLUJBU0VELUFQUC0vLi9zcmMvbW9kdWxlcy9yZXNlcnZhdGlvbi5qcyIsIndlYnBhY2s6Ly9BUEktQkFTRUQtQVBQLS8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL0FQSS1CQVNFRC1BUFAtLy4vc3JjL21vZHVsZXMvdXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvaW1hZ2UvaW1hZ2UzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29tYm8mZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE5MCwgMTU4LCAyMDIsIDAuNiksIHJnYmEoMjI1LCAyMzgsIDIzOSwgMC44KSksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYXBwZWFyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1yZXNlcnZhdGlvbi1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk2MSk7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBwYWRkaW5nOiAxdmg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgbWFyZ2luOiAxdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbi1wYWdlLWNsb3NlLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDkwJTtcXHJcXG4gIHdpZHRoOiA1dmg7XFxyXFxuICBoZWlnaHQ6IDV2aDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXJlc2VydmF0aW9uLWltZy1kaXYge1xcclxcbiAgd2lkdGg6IDUwdmg7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLWluc3QtZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFyZWEtY2F0ZWdvcnktZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDgwdmg7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zLWNvbmF0YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zLWRpdiB7XFxyXFxuICBoZWlnaHQ6IDExdmg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMiwgMiwgMik7XFxyXFxuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLXJlc2VydmF0aW9uLWNvbnRhaW5lciBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgd2lkdGg6IDQwdmg7XFxyXFxuICBtYXJnaW4tdG9wOiAydmg7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1yZXNlcnZhdGlvbi1jb250YWluZXIgZm9ybSBpbnB1dCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxdmg7XFxyXFxuICBwYWRkaW5nOiAyLjVweCAwIDIuNXB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcbiAgY29sdW1uLWdhcDogNSU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2Myk7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWxvZ28tZGl2IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1dmg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHNwYW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjMpO1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcm93LWdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5saWtlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAzMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGNvbHVtbi1nYXA6IDE1JTtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcm93LWdhcDogMTlweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmZlNjtcXHJcXG4gIHdpZHRoOiA4NSU7XFxyXFxuICBoZWlnaHQ6IDg1JTtcXHJcXG4gIHotaW5kZXg6IDIwMDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICBib3JkZXI6IDRweCBzb2xpZCBibGFjaztcXHJcXG4gIG1hcmdpbjogNSU7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZUJ0biB7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgd2lkdGg6IDI1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtYXJnaW4tbGVmdDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDI1cHg7XFxyXFxuICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1mbGV4IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2lwZSB7XFxyXFxuICB3aWR0aDogODB2aDtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmluc3RydWN0aW9ucyB7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy1sYXJnZSB7XFxyXFxuICB3aWR0aDogNTB2aDtcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1Ym1pdEJ0biB7XFxyXFxuICB3aWR0aDogNDAlO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbiNjb21tZW50RGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRDaGlsZC1QIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0c3R5bGUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICB3aWR0aDogNTB2aDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBwYWRkaW5nOiAyLjVweCAwIDIuNXB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnRUZXh0IHtcXHJcXG4gIHBhZGRpbmc6IDRweDtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ieU5hbWUge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHN0eWxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjFweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cGJnIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tQnRuLFxcclxcbi5yZXNCdG4ge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDRkZWcsICNhZjQwZmYsICM1YjQyZjMgNTAlLCAjMDBkZGViKTtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTUxLCA2NSwgMjUyLCAwLjIpIDAgMTVweCAzMHB4IC01cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZm9udC1mYW1pbHk6IFBoYW50b21zYW5zLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMWVtO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgbWluLXdpZHRoOiAxNDBweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAyNHB4O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tQnRuOmFjdGl2ZSxcXHJcXG4ucmVzQnRuOmFjdGl2ZSxcXHJcXG4uY29tQnRuOmhvdmVyLFxcclxcbi5yZXNCdG46aG92ZXIge1xcclxcbiAgb3V0bGluZTogMDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFOzsyQ0FFa0M7RUFDbEMsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDRDQUE0QztFQUM1QyxZQUFZO0VBQ1osWUFB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QXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLHdFQUF3RTtFQUN4RSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG9EQUFvRDtFQUNwRCxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUsVUFBVTtBQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWJvJmZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2dyb3VuZCB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDE5MCwgMTU4LCAyMDIsIDAuNiksIHJnYmEoMjI1LCAyMzgsIDIzOSwgMC44KSksXFxyXFxuICAgIHVybCgnLi9hc3NldHMvaW1hZ2UvaW1hZ2UzLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFwcGVhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtcmVzZXJ2YXRpb24tY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NjEpO1xcclxcbiAgY29sb3I6IGJsYWNrO1xcclxcbiAgcGFkZGluZzogMXZoO1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDAsIDAsIDApO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG4gIG1hcmdpbjogMXZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzZXJ2YXRpb24tcGFnZS1jbG9zZS1idG4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA5MCU7XFxyXFxuICB3aWR0aDogNXZoO1xcclxcbiAgaGVpZ2h0OiA1dmg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1yZXNlcnZhdGlvbi1pbWctZGl2IHtcXHJcXG4gIHdpZHRoOiA1MHZoO1xcclxcbiAgaGVpZ2h0OiAzMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1pbnN0LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcmVhLWNhdGVnb3J5LWRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiA4MHZoO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucy1jb25hdGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucy1kaXYge1xcclxcbiAgaGVpZ2h0OiAxMXZoO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIsIDIsIDIpO1xcclxcbiAgcGFkZGluZzogMCAwIDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9ucyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1yZXNlcnZhdGlvbi1jb250YWluZXIgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHdpZHRoOiA0MHZoO1xcclxcbiAgbWFyZ2luLXRvcDogMnZoO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtcmVzZXJ2YXRpb24tY29udGFpbmVyIGZvcm0gaW5wdXQge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXZoO1xcclxcbiAgcGFkZGluZzogMi41cHggMCAyLjVweCA1cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMHZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG4gIGNvbHVtbi1nYXA6IDUlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjMpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1sb2dvLWRpdiB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXZoO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgd2lkdGg6IDEwdmg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzYzKTtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHJvdy1nYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5saWtlLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlrZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWxzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBjb2x1bW4tZ2FwOiAxNSU7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHJvdy1nYXA6IDE5cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmZTY7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgaGVpZ2h0OiA4NSU7XFxyXFxuICB6LWluZGV4OiAyMDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxyXFxuICBtYXJnaW46IDUlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2xvc2VCdG4ge1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG4gIGhlaWdodDogMjVweDtcXHJcXG4gIHdpZHRoOiAyNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgZm9udC1zaXplOiBsYXJnZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtZmxleCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNpcGUge1xcclxcbiAgd2lkdGg6IDgwdmg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbnMge1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbWctbGFyZ2Uge1xcclxcbiAgd2lkdGg6IDUwdmg7XFxyXFxuICBoZWlnaHQ6IDMwdmg7XFxyXFxufVxcclxcblxcclxcbi5zdWJtaXRCdG4ge1xcclxcbiAgd2lkdGg6IDQwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAyMCU7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudERpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LWhlaWdodDogMTAwcHg7XFxyXFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50Q2hpbGQtUCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dHN0eWxlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgd2lkdGg6IDUwdmg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgcGFkZGluZzogMi41cHggMCAyLjVweCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50VGV4dCB7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnlOYW1lIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWxzdHlsZSB7XFxyXFxuICBmb250LXNpemU6IDIxcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBiZyB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbUJ0bixcXHJcXG4ucmVzQnRuIHtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ0ZGVnLCAjYWY0MGZmLCAjNWI0MmYzIDUwJSwgIzAwZGRlYik7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDE1MSwgNjUsIDI1MiwgMC4yKSAwIDE1cHggMzBweCAtNXB4O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQaGFudG9tc2Fucywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDFlbTtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1pbi13aWR0aDogMTQwcHg7XFxyXFxuICBwYWRkaW5nOiA4cHggMjRweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbUJ0bjphY3RpdmUsXFxyXFxuLnJlc0J0bjphY3RpdmUsXFxyXFxuLmNvbUJ0bjpob3ZlcixcXHJcXG4ucmVzQnRuOmhvdmVyIHtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL2FwaS5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy91c2VyLmpzJztcbmltcG9ydCAnLi9tb2R1bGVzL2ltYWdlcy5qcyc7XG5pbXBvcnQgJy4vbW9kdWxlcy9yZXNlcnZhdGlvbi5qcyc7IiwiaW1wb3J0IHVpIGZyb20gJy4vdWkuanMnO1xyXG5pbXBvcnQgcmVzQnRuIGZyb20gJy4vcmVzZXJ2YXRpb24uanMnO1xyXG5cclxuY29uc3QgaWQgPSAndEtWbHZuRWJtZjRUTVdCNzdTRTcnO1xyXG5jb25zdCB1cmxNZWFscmVjaXBlID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JztcclxuY29uc3QgdXJsQWxsTWVhbHMgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz1TZWFmb29kJztcclxuY29uc3QgaW52QXBpVXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7aWR9L2xpa2VzYDtcclxuZXhwb3J0IGNvbnN0IGlkZXMgPSBbJzUyOTU5JywgJzUyODE5JywgJzUyOTQ0JywgJzUzMDQzJywgJzUyODAyJywgJzUyOTE4J107XHJcblxyXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgYWxsTGlrZXMgPSBhd2FpdCBmZXRjaChpbnZBcGlVcmwsIHtcclxuICAgICAgbWV0aG9kOiAnR2V0JyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGFsbExpa2VzLmpzb24oKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHBvc3RSZXNlcnZhdGlvbnMgPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gIGxldCByZXNlcnZhdGlvbiA9ICcnO1xyXG4gIHRyeSB7XHJcbiAgICByZXNlcnZhdGlvbiA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdEtWbHZuRWJtZjRUTVdCNzdTRTcvcmVzZXJ2YXRpb25zLycsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZW1wdHlcclxuICB9IGNhdGNoIChlcnJvcikge31cclxuICByZXR1cm4gcmVzZXJ2YXRpb247XHJcbn07XHJcblxyXG5jb25zdCBnZXRSZXNlcnZhdGlvbnMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBJRCA9IGlkLnRvU3RyaW5nKCk7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy90S1Zsdm5FYm1mNFRNV0I3N1NFNy9yZXNlcnZhdGlvbnM/aXRlbV9pZD0ke0lEfWAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdHZXQnLFxyXG4gICAgICB9LFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc2VydmF0aW9uLmpzb24oKTtcclxuICAgIHJldHVybiByZXM7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRTdHJJbnN0cnVjdGlvbiA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IElEID0gaWQudG9TdHJpbmcoKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzZXJ2YXRpb24gPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9sb29rdXAucGhwP2k9JHtJRH1gLFxyXG4gICAgICB7XHJcbiAgICAgICAgbWV0aG9kOiAnR2V0JyxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCByZXNlcnZhdGlvbi5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzLm1lYWxzWzBdO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0TWVhbHNJbmZvID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFsbE1lYWxzID0gYXdhaXQgZmV0Y2godXJsQWxsTWVhbHMsIHtcclxuICAgIG1ldGhvZDogJ0dldCcsXHJcbiAgfSk7XHJcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBnZXRMaWtlcygpO1xyXG4gIGNvbnN0IG1lYWxzID0gYXdhaXQgYWxsTWVhbHMuanNvbigpO1xyXG4gIHVpKG1lYWxzLm1lYWxzLCBsaWtlcyk7XHJcbiAgcmVzQnRuKG1lYWxzLm1lYWxzKTtcclxufTtcclxuXHJcbmNvbnN0IGFkZExpa2UgPSBhc3luYyAoaW5kZXgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlclBvc3QgPSBhd2FpdCBmZXRjaChpbnZBcGlVcmwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaXRlbV9pZDogYCR7aWRlc1tpbmRleF19YCxcclxuICAgICAgfSksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiB1c2VyUG9zdDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFJlY2lwZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IHVybE1lYWxyZWNpcGUgKyBpZDtcclxuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiAnR2V0JyxcclxuICB9KTtcclxuICBjb25zdCBjb21tZW50c1Jlc3BvbnNlID0gYXdhaXQgY29tbWVudHMuanNvbigpO1xyXG4gIHJldHVybiBjb21tZW50c1Jlc3BvbnNlO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q29tbWVudCA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdEtWbHZuRWJtZjRUTVdCNzdTRTcvY29tbWVudHM/aXRlbV9pZD0ke2lkfWAsXHJcbiAgICB7XHJcbiAgICAgIG1ldGhvZDogJ0dldCcsXHJcbiAgICB9LFxyXG4gICk7XHJcbiAgY29uc3QgY29tbWVudHNSZXNwb25zZSA9IGF3YWl0IGNvbW1lbnRzLmpzb24oKTtcclxuICByZXR1cm4gY29tbWVudHNSZXNwb25zZTtcclxufTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0Q29tbWVudCxcclxuICBnZXRSZWNpcGUsXHJcbiAgcG9zdFJlc2VydmF0aW9ucyxcclxuICBnZXRSZXNlcnZhdGlvbnMsXHJcbiAgZ2V0U3RySW5zdHJ1Y3Rpb24sXHJcbiAgZ2V0TWVhbHNJbmZvLFxyXG4gIGFkZExpa2UsXHJcbiAgZ2V0TGlrZXMsXHJcbn07XHJcbiIsImNvbnN0IGNhbE1lYWxzID0gKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzJykuY2hpbGRFbGVtZW50Q291bnQ7XG5leHBvcnQgZGVmYXVsdCBjYWxNZWFscztcbiIsImNvbnN0IGNvbW1lbnRVcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdEtWbHZuRWJtZjRUTVdCNzdTRTcvY29tbWVudHM/aXRlbV9pZD0nO1xuY29uc3QgY29tbWVudERpc3BsYXkgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdXJsID0gY29tbWVudFVybCArIGlkO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZDogJ0dldCcsXG4gIH0pO1xuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gYCR7ZWxlbWVudC5jcmVhdGlvbl9kYXRlfSAgJHtlbGVtZW50LnVzZXJuYW1lfTogJHtlbGVtZW50LmNvbW1lbnR9YDtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gIH0pO1xuICByZXR1cm4gZGl2O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tbWVudERpc3BsYXk7IiwiLy8gaW1wb3J0IGNvbW1lbnREaXNwbGF5IGZyb20gJy4vY29tbWVudGRpc3BsYXkuanMnO1xyXG4vLyBpbXBvcnQgeyBnZXRDb21tZW50IH0gZnJvbSAnLi9hcGkuanMnXHJcbmNvbnN0IHBvcHVwQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cGNvbnRlbnQnKTtcclxuY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXAnKTtcclxuY29uc3QgdXJsTWVhbHJlY2lwZSA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEvbG9va3VwLnBocD9pPSc7XHJcbmNvbnN0IGdldFJlY2lwZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IHVybCA9IHVybE1lYWxyZWNpcGUgKyBpZDtcclxuICBjb25zdCBjb21tZW50cyA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgbWV0aG9kOiAnR2V0JyxcclxuICB9KTtcclxuICBjb25zdCBtZWFsID0gYXdhaXQgY29tbWVudHMuanNvbigpO1xyXG4gIHBvcHVwQ29udGVudC5pbm5lckhUTUwgPSAnJztcclxuICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAnY2xvc2VCdG4gZmEgZmEtdGltZXMgZmEtNHgnO1xyXG4gIGNsb3NlQnRuLmlkID0gbWVhbC5tZWFsc1swXS5pZE1lYWw7XHJcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcclxuICBjb25zdCBwb3B1cGJnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcG9wdXBiZy5jbGFzc05hbWUgPSAncG9wdXBiZyc7XHJcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICBjb25zdCBzcmMgPSBtZWFsLm1lYWxzWzBdLnN0ck1lYWxUaHVtYjtcclxuICBpbWFnZS5jbGFzc05hbWUgPSAnaW1nLWxhcmdlJztcclxuICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcclxuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBoZWFkaW5nLmNsYXNzTmFtZSA9ICdoZWFkaW5nJztcclxuICBoZWFkaW5nLmlubmVySFRNTCA9IG1lYWwubWVhbHNbMF0uc3RyTWVhbDtcclxuICBwb3B1cENvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XHJcbiAgY29uc3QgZGV0YWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGV0YWlsRGl2LmNsYXNzTmFtZSA9ICdkZXRhaWwtZmxleCc7XHJcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGRldGFpbERpdik7XHJcbiAgY29uc3QgYXJlYVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgYXJlYVAuY2xhc3NOYW1lID0gJ2RldGFpbHN0eWxlJztcclxuICBhcmVhUC5pbm5lckhUTUwgPSBgQXJlYTogICAgJHttZWFsLm1lYWxzWzBdLnN0ckFyZWF9YDtcclxuICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgLy8gaWYgKG1lYWwubWVhbHNbMF0uc3RySW5zdHJ1Y3Rpb25zLmxlbmd0aCA+IDUwMCkge1xyXG4gIC8vICAgbWVhbC5tZWFsc1swXS5zdHJJbnN0cnVjdGlvbnMgPSBtZWFsLm1lYWxzWzBdLnN0ckluc3RydWN0aW9ucy5zdWJzdHJpbmcoMCw1MDApICsgJy4uLic7XHJcbiAgLy8gfVxyXG4gIHBhcmFncmFwaC5jbGFzc05hbWUgPSAncmVjaXBlJztcclxuICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gbWVhbC5tZWFsc1swXS5zdHJJbnN0cnVjdGlvbnM7XHJcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgY29uc3QgY2F0ZWdvcnlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNhdGVnb3J5UC5jbGFzc05hbWUgPSAnZGV0YWlsc3R5bGUnO1xyXG4gIGNhdGVnb3J5UC5pbm5lckhUTUwgPSBgQ2F0ZWdvcnk6ICAgJHttZWFsLm1lYWxzWzBdLnN0ckNhdGVnb3J5fWA7XHJcbiAgZGV0YWlsRGl2LmFwcGVuZENoaWxkKGFyZWFQKTtcclxuICBkZXRhaWxEaXYuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlQKTtcclxuICBjb25zdCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICBzdWJIZWFkaW5nLmNsYXNzTmFtZSA9ICdzdWJoZWFkaW5nJztcclxuICBzdWJIZWFkaW5nLmlubmVySFRNTCA9ICdDb21tZW50cyc7XHJcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKHN1YkhlYWRpbmcpO1xyXG4gIGNvbnN0IGNvbW1lbnRzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29tbWVudHNEaXYuaWQgPSAnY29tbWVudERpdic7XHJcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGNvbW1lbnRzRGl2KTtcclxuICBjb25zdCBzdWJIZWFkaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgc3ViSGVhZGluZzIuY2xhc3NOYW1lID0gJ3N1YmhlYWRpbmcyJztcclxuICBzdWJIZWFkaW5nMi5pbm5lckhUTUwgPSAnQWRkIEEgQ29tbWVudCc7XHJcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKHN1YkhlYWRpbmcyKTtcclxuICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZm9ybURpdi5jbGFzc05hbWUgPSAnZm9ybS1kaXYnO1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdwb3N0Jyk7XHJcbiAgY29uc3QgY29tbWVudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNvbW1lbnROYW1lLmNsYXNzTmFtZSA9ICdpbnB1dHN0eWxlJztcclxuICBjb21tZW50TmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gIGNvbW1lbnROYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tbWVudG5hbWUnKTtcclxuICBjb21tZW50TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1lvdXIgTmFtZScpO1xyXG4gIGNvbnN0IGNvbW1lbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb21tZW50VGV4dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKTtcclxuICBjb21tZW50VGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbW1lbnRzdWJqZWN0Jyk7XHJcbiAgY29tbWVudFRleHQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIEluc2lnaHRzJyk7XHJcbiAgY29tbWVudFRleHQuY2xhc3NOYW1lID0gJ2lucHV0c3R5bGUgY29tbWVudFRleHQnO1xyXG4gIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcclxuICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKTtcclxuICBzdWJtaXRCdG4uY2xhc3NOYW1lID0gJ3N1Ym1pdEJ0bic7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChjb21tZW50TmFtZSk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChjb21tZW50VGV4dCk7XHJcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xyXG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XHJcbiAgcG9wdXBDb250ZW50LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocG9wdXBiZyk7XHJcbiAgcG9wdXAuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgcG9wdXBiZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBwb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgcG9wdXBiZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0pO1xyXG4gIC8vIGNvbnN0IGRpc3BsYXllZGNvbW1lbnRzID0gY29tbWVudERpc3BsYXkoaWQpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRpc3BsYXllZGNvbW1lbnRzKTtcclxuICBjb25zdCBjb21tZW50VXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3RLVmx2bkVibWY0VE1XQjc3U0U3L2NvbW1lbnRzP2l0ZW1faWQ9JztcclxuICBjb25zdCBjb21tZW50RGlzcGxheSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgY29uc3QgdXJsID0gY29tbWVudFVybCArIGlkO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiAnR2V0JyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc05hbWUgPSAnY29tbWVudGRpdnN0eWxlJztcclxuICAgIGNvbW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgcC5jbGFzc0xpc3QgPSAnY29tbWVudENoaWxkLVAnO1xyXG4gICAgICBwLmlubmVySFRNTCA9IGAke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gICR7ZWxlbWVudC51c2VybmFtZX06ICR7ZWxlbWVudC5jb21tZW50fWA7XHJcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIH0pO1xyXG4gICAgc3ViSGVhZGluZy5pbm5lckhUTUwgPSBgQ29tbWVudHMgKCR7Y29tbWVudHMubGVuZ3RofSlgO1xyXG4gICAgY29tbWVudHNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIHN1YkhlYWRpbmcuaW5uZXJIVE1MID0gYENvbW1lbnRzKCR7Y29tbWVudHMubGVuZ3RofSlgO1xyXG4gIH07XHJcbiAgY29tbWVudERpc3BsYXkoaWQpO1xyXG4gIGNvbnN0IGNvbW1lbnRQb3N0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3RLVmx2bkVibWY0VE1XQjc3U0U3L2NvbW1lbnRzLycsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6ICdQb3N0JyxcclxuICAgICAgICBtb2RlOiAnY29ycycsXHJcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGl0ZW1faWQ6IE51bWJlcihpZCksXHJcbiAgICAgICAgICB1c2VybmFtZTogY29tbWVudE5hbWUudmFsdWUsXHJcbiAgICAgICAgICBjb21tZW50OiBjb21tZW50VGV4dC52YWx1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSxcclxuICAgICk7XHJcbiAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICBnZXRSZWNpcGUoaWQpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gIH07XHJcbiAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChjb21tZW50TmFtZS52YWx1ZSAhPT0gJycgfHwgY29tbWVudFRleHQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGNvbW1lbnRQb3N0KGlkKTtcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZ2V0UmVjaXBlOyIsImltcG9ydCBtZWFsTG9nbyBmcm9tICcuLi9hc3NldHMvaWNvbnMvbWVhbC1sb2dvLnBuZyc7XHJcblxyXG5jb25zdCBtZWFsTG9nbzEgPSBuZXcgSW1hZ2UoKTtcclxubWVhbExvZ28xLnNyYyA9IG1lYWxMb2dvO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbC1sb2dvLWRpdicpLmFwcGVuZChtZWFsTG9nbzEpO1xyXG4iLCJjbGFzcyBPYmplY3Qge1xuICBjb25zdHJ1Y3RvcihpbmRleCwgbmFtZSwgc3RhcnREYXRlLCBlbmREYXRlKSB7XG4gICAgdGhpcy5pdGVtX2lkID0gaW5kZXg7XG4gICAgdGhpcy51c2VybmFtZSA9IG5hbWU7XG4gICAgdGhpcy5kYXRlX3N0YXJ0ID0gc3RhcnREYXRlO1xuICAgIHRoaXMuZGF0ZV9lbmQgPSBlbmREYXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9iamVjdDsiLCJpbXBvcnQgT2JqZWN0IGZyb20gJy4vcmVzT2JqLmpzJztcclxuXHJcbmNvbnN0IEFQSSA9IHJlcXVpcmUoJy4vYXBpLmpzJyk7XHJcblxyXG5jb25zdCBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcclxuY29uc3QgcmVzUGFnZUNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2VydmF0aW9uLXBhZ2UtY2xvc2UtYnRuJyk7XHJcbmNvbnN0IHBvcHVwUmVzSW1nRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLXJlc2VydmF0aW9uLWltZy1kaXYnKTtcclxuY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XHJcbmNvbnN0IGluc3RydWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RydWN0aW9ucycpO1xyXG5jb25zdCBhcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFyZWEnKTtcclxuY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnknKTtcclxuY29uc3QgbWVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMnKTtcclxuXHJcbmNvbnN0IGVsZW1lbnQgPSAoZGF0YSkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbnMtZGl2JykuaW5uZXJIVE1MID0gJyc7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXMtY291bnQnKS5pbm5lckhUTUwgPSBgKCR7ZGF0YS5sZW5ndGh9KWA7XHJcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGRpdi5jbGFzc0xpc3QgPSAncmVzZXJ2YXRpb25zJztcclxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgc3RhcnREYXRlLmlubmVySFRNTCA9IGVsZW1lbnQuZGF0ZV9zdGFydDtcclxuICAgICAgY29uc3QgZW5kRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgIGVuZERhdGUuaW5uZXJIVE1MID0gYH4ke2VsZW1lbnQuZGF0ZV9lbmR9YDtcclxuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgIG5hbWUuY2xhc3NMaXN0ID0gJ2J5TmFtZSc7XHJcbiAgICAgIG5hbWUuaW5uZXJIVE1MID0gYGJ5ICR7ZWxlbWVudC51c2VybmFtZX1gO1xyXG4gICAgICBkaXYuYXBwZW5kKHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgbmFtZSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNlcnZhdGlvbnMtZGl2JykuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzLWNvdW50JykuaW5uZXJIVE1MID0gJygwKSc7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLllvdXItbmFtZScpO1xyXG5jb25zdCBzdGFydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZGF0ZScpO1xyXG5jb25zdCBlbmREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1kYXRlJyk7XHJcblxyXG5sZXQgaW5kZXggPSAnJztcclxuXHJcbmxldCBhcnJheSA9IFtdO1xyXG5cclxuY29uc3QgcmVzQnRuID0gKGRhdGEpID0+IHtcclxuICBhcnJheSA9IGRhdGE7XHJcbn07XHJcblxyXG5tZWFscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAncmVzQnRuJykge1xyXG4gICAgbmFtZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICBzdGFydERhdGUudmFsdWUgPSAnJztcclxuICAgIGVuZERhdGUudmFsdWUgPSAnJztcclxuICAgIGluZGV4ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQsIDEwKTtcclxuICAgIGNvbnN0IG1lYWxzID0gYXdhaXQgQVBJLmdldFN0ckluc3RydWN0aW9uKGluZGV4KTtcclxuICAgIGNvbnN0IElEID0gZXZlbnQudGFyZ2V0LmlkO1xyXG4gICAgcG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWFwcGVhcicpO1xyXG4gICAgY29uc3QgcmVzUGFnZUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcmVzUGFnZUltZy5zcmMgPSBhcnJheVtJRF0uc3RyTWVhbFRodW1iO1xyXG4gICAgcG9wdXBSZXNJbWdEaXYuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwb3B1cFJlc0ltZ0Rpdi5hcHBlbmQocmVzUGFnZUltZyk7XHJcbiAgICBuYW1lLmlubmVySFRNTCA9IGFycmF5W0lEXS5zdHJNZWFsO1xyXG4gICAgYXJlYS5pbm5lckhUTUwgPSBgQXJlYTogJHttZWFscy5zdHJBcmVhfWA7XHJcbiAgICBjYXRlZ29yeS5pbm5lckhUTUwgPSBgQ2F0ZWdvcnk6ICR7bWVhbHMuc3RyQ2F0ZWdvcnl9YDtcclxuICAgIGluc3RydWN0aW9uLmlubmVySFRNTCA9IG1lYWxzLnN0ckluc3RydWN0aW9ucztcclxuICAgIGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgQVBJLmdldFJlc2VydmF0aW9ucyhpbmRleCk7XHJcbiAgICBlbGVtZW50KHJlc2VydmF0aW9uKTtcclxuICB9XHJcbn0pO1xyXG5cclxucmVzUGFnZUNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHBvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhaW5lci1hcHBlYXInKTtcclxufSk7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcclxuICBpZiAobmFtZUlucHV0LnZhbHVlICE9PSAnJyAmJiBzdGFydERhdGUudmFsdWUgIT09ICcnICYmIGVuZERhdGUudmFsdWUgIT09ICcnKSB7XHJcbiAgICBjb25zdCBvYmogPSBuZXcgT2JqZWN0KFxyXG4gICAgICBpbmRleCxcclxuICAgICAgbmFtZUlucHV0LnZhbHVlLFxyXG4gICAgICBzdGFydERhdGUudmFsdWUsXHJcbiAgICAgIGVuZERhdGUudmFsdWUsXHJcbiAgICApO1xyXG4gICAgYXdhaXQgQVBJLnBvc3RSZXNlcnZhdGlvbnMob2JqKTtcclxuICAgIGNvbnN0IHJlc2VydmF0aW9uID0gYXdhaXQgQVBJLmdldFJlc2VydmF0aW9ucyhpbmRleCk7XHJcbiAgICBlbGVtZW50KHJlc2VydmF0aW9uKTtcclxuICAgIG5hbWVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgc3RhcnREYXRlLnZhbHVlID0gJyc7XHJcbiAgICBlbmREYXRlLnZhbHVlID0gJyc7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlc0J0bjtcclxuIiwiaW1wb3J0IGNhbE1lYWxzIGZyb20gJy4vY2FsbWVhbHMuanMnO1xuXG5jb25zdCBtZWFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZWFscycpO1xuY29uc3QgbWVhbHNDb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lYWxzLWNvdW50ZXInKTtcbmNvbnN0IHVpID0gKGRhdGEsIGxpa2VOYnJzID0gW10pID0+IHtcbiAgbWVhbHMuaW5uZXJIVE1MID0gJyc7XG4gIGRhdGEuZm9yRWFjaCgobWVhbCwgaW5kZXgpID0+IHtcbiAgICBpZiAoaW5kZXggPD0gNSkge1xuICAgICAgaWYgKG1lYWwuc3RyTWVhbC5sZW5ndGggPiAyNSkge1xuICAgICAgICBtZWFsLnN0ck1lYWwgPSBgJHttZWFsLnN0ck1lYWwuc3Vic3RyaW5nKDAsIDE1KX0uLi5gO1xuICAgICAgfVxuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGkuY2xhc3NOYW1lID0gJ21lYWwtY29udGFpbmVyJztcbiAgICAgIGxpLmlkID0gYCR7bWVhbC5pZE1lYWx9YDtcbiAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICBjb25zdCBzcmMgPSBtZWFsLnN0ck1lYWxUaHVtYjtcbiAgICAgIGltYWdlLmNsYXNzTmFtZSA9ICdtZWFsLWltZyc7XG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XG5cbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgZGl2LmNsYXNzTmFtZSA9ICdsaWtlLWNvbnRhaW5lcic7XG4gICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgaGVhZGVyLmlubmVySFRNTCA9IG1lYWwuc3RyTWVhbDtcbiAgICAgIGhlYWRlci5jbGFzc05hbWUgPSAnY2FyZC1oZWFkZXInO1xuXG4gICAgICBjb25zdCBsaWtlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBsaWtlRGl2LmNsYXNzTmFtZSA9ICdsaWtlJztcbiAgICAgIGNvbnN0IGhlYXJ0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgIGhlYXJ0SWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtaGVhcnQtbyBsaWtlLWljb24nO1xuICAgICAgY29uc3QgbGlrZVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g3Jyk7XG4gICAgICBsaWtlVHh0LmNsYXNzTmFtZSA9ICdsaWtlLXR4dCc7XG4gICAgICBsaWtlVHh0LmlubmVySFRNTCA9IGAke2xpa2VOYnJzW2luZGV4XS5saWtlc30gbGlrZXNgO1xuICAgICAgbGlrZVR4dC5pZCA9IGluZGV4O1xuXG4gICAgICBsaWtlRGl2LmFwcGVuZENoaWxkKGhlYXJ0SWNvbik7XG4gICAgICBsaWtlRGl2LmFwcGVuZENoaWxkKGxpa2VUeHQpO1xuXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgIGRpdi5hcHBlbmRDaGlsZChsaWtlRGl2KTtcblxuICAgICAgY29uc3QgY29tQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBjb21CdG4uY2xhc3NOYW1lID0gJ2NvbUJ0bic7XG4gICAgICBjb21CdG4uaWQgPSBtZWFsLmlkTWVhbDtcbiAgICAgIGNvbUJ0bi5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuXG4gICAgICBjb25zdCByZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHJlc0J0bi5jbGFzc05hbWUgPSAncmVzQnRuJztcbiAgICAgIHJlc0J0bi5pZCA9IGAke2luZGV4fWA7XG4gICAgICByZXNCdG4uaW5uZXJIVE1MID0gJ1Jlc2VydmF0aW9ucyc7XG5cbiAgICAgIGxpLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICBsaS5hcHBlbmRDaGlsZChjb21CdG4pO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQocmVzQnRuKTtcbiAgICAgIG1lYWxzLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gIH0pO1xuXG4gIG1lYWxzQ291bnRlci5pbm5lckhUTUwgPSBgTWVhbHMoJHtjYWxNZWFscygpfSlgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdWk7XG4iLCJpbXBvcnQgeyBnZXRDb21tZW50LCBnZXRNZWFsc0luZm8sIGFkZExpa2UgfSBmcm9tICcuL2FwaS5qcyc7XG5pbXBvcnQgZ2V0UmVjaXBlIGZyb20gJy4vY29tbWVudHBvcHVwLmpzJztcbmltcG9ydCBjb21tZW50RGlzcGxheSBmcm9tICcuL2NvbW1lbnRkaXNwbGF5LmpzJztcblxuY29uc3QgbWVhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVhbHMnKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBnZXRNZWFsc0luZm8oKTtcbn0pO1xuXG5tZWFscy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIC8vIHRyYXNoIGljb25cbiAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5saWtlLWljb24nKSkge1xuICAgIGNvbnN0IGxpa2VUZXh0ID0gZS50YXJnZXQuY2xvc2VzdCgnLmxpa2UtaWNvbicpLm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBsaWtlSWNvbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5saWtlLWljb24nKTtcbiAgICBjb25zdCB7IGlkIH0gPSBsaWtlVGV4dDtcbiAgICBhZGRMaWtlKGlkKTtcbiAgICBjb25zdCBsaWtlTmJyID0gcGFyc2VJbnQobGlrZVRleHQuaW5uZXJIVE1MLCAxMCkgKyAxO1xuICAgIGxpa2VUZXh0LmlubmVySFRNTCA9IGAke2xpa2VOYnJ9IGxpa2VzYDtcbiAgICBsaWtlSWNvbi5jbGFzc05hbWUgPSAnZmEgZmEtaGVhcnQnO1xuICB9XG59KTtcblxubWVhbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmNvbUJ0bicpKSB7XG4gICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XG4gICAgY29uc3QgeyBpZCB9ID0gYnRuO1xuICAgIGdldENvbW1lbnQoaWQpO1xuICAgIGdldFJlY2lwZShpZCk7XG4gICAgY29tbWVudERpc3BsYXkoaWQpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==