/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    --water-blue: #3ea4f0;
    --water-blue-hover:#0a6bbf;
    --ship-color: #444444;
    --hit-color: #ff6b6b;
    --miss-color: #c5c5c5;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

.main-window{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

header{
    width: 100vw;
    min-width: 350px;
    text-align: center;
    border-bottom: grey solid 2px;
    align-self: center;
}

.title{
    font-size: 2rem;
    margin: 0;
    padding: 1rem;
    background-color: var(--water-blue);
}

#app{
    display: flex;
    flex-direction: column;
}

#new-game-btn{
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-top: 1rem;
    padding: 0.3rem;
    background-color: var(--water-blue);
    width: 8rem;
    align-self: center;
    border-radius: 5px;
    cursor: pointer;
}

#new-game-btn:hover{
    background-color: var(--water-blue-hover);
}

.game-container {
    display: flex;
    gap: 3rem;
    width: 80vw;
    justify-content: center;
    flex-flow: row wrap;
    margin-bottom: 2rem;
}

.board-container {
    text-align: center;
}

.board {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    border: 1px solid ;
    width: 350px;
    height: 350px;
}

.cell {
    background-color: var(--water-blue);
    border: 1px solid black;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: bold;
}

#enemy-board > .cell:hover{
    background-color: var(--water-blue-hover);
    cursor: pointer;
}

.ship {
    background-color: var(--ship-color);
}

.hit {
    background-color: var(--hit-color);
    color: #ffffff;
    cursor: default;
    pointer-events: none;
}

.miss {
    background-color: var(--miss-color);
    color: #000000;
    cursor: default;
    pointer-events: none;
}

#finale-result{
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    background-color: var(--water-blue);
    align-self: center;
    width: 20rem;
    border-radius: 5px;
}

/* Ship Placement window */
.placement-window {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    z-index: 1000;
}

.placement-cell {
    background-color: var(--water-blue);
    border: 1px solid black;
    aspect-ratio: 1;
    cursor: pointer;
}

.placement-cell.preview {
    background-color: rgba(0, 255, 0, 0.3);
}

.placement-cell.invalid-preview {
    background-color: rgb(255, 0, 0);
}

.placement-cell.ship-placed {
    background-color: var(--ship-color);
}

.placement-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.non-interactive {
    pointer-events: none;
    filter: blur(10px);
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,0BAA0B;IAC1B,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,8BAA8B;IAC9B,SAAS;IACT,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,mCAAmC;IACnC,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,uBAAuB;IACvB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,yCAAyC;IACzC,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kCAAkC;IAClC,cAAc;IACd,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,mCAAmC;IACnC,cAAc;IACd,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,mCAAmC;IACnC,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;AACtB;;AAEA,0BAA0B;AAC1B;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,uBAAuB;IACvB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB","sourcesContent":["*{\n    --water-blue: #3ea4f0;\n    --water-blue-hover:#0a6bbf;\n    --ship-color: #444444;\n    --hit-color: #ff6b6b;\n    --miss-color: #c5c5c5;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f0f0f0;\n}\n\n.main-window{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\nheader{\n    width: 100vw;\n    min-width: 350px;\n    text-align: center;\n    border-bottom: grey solid 2px;\n    align-self: center;\n}\n\n.title{\n    font-size: 2rem;\n    margin: 0;\n    padding: 1rem;\n    background-color: var(--water-blue);\n}\n\n#app{\n    display: flex;\n    flex-direction: column;\n}\n\n#new-game-btn{\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-align: center;\n    margin-top: 1rem;\n    padding: 0.3rem;\n    background-color: var(--water-blue);\n    width: 8rem;\n    align-self: center;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n#new-game-btn:hover{\n    background-color: var(--water-blue-hover);\n}\n\n.game-container {\n    display: flex;\n    gap: 3rem;\n    width: 80vw;\n    justify-content: center;\n    flex-flow: row wrap;\n    margin-bottom: 2rem;\n}\n\n.board-container {\n    text-align: center;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 1px solid ;\n    width: 350px;\n    height: 350px;\n}\n\n.cell {\n    background-color: var(--water-blue);\n    border: 1px solid black;\n    aspect-ratio: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 24px;\n    font-weight: bold;\n}\n\n#enemy-board > .cell:hover{\n    background-color: var(--water-blue-hover);\n    cursor: pointer;\n}\n\n.ship {\n    background-color: var(--ship-color);\n}\n\n.hit {\n    background-color: var(--hit-color);\n    color: #ffffff;\n    cursor: default;\n    pointer-events: none;\n}\n\n.miss {\n    background-color: var(--miss-color);\n    color: #000000;\n    cursor: default;\n    pointer-events: none;\n}\n\n#finale-result{\n    font-size: 3rem;\n    font-weight: bold;\n    text-align: center;\n    background-color: var(--water-blue);\n    align-self: center;\n    width: 20rem;\n    border-radius: 5px;\n}\n\n/* Ship Placement window */\n.placement-window {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.3);\n    z-index: 1000;\n}\n\n.placement-cell {\n    background-color: var(--water-blue);\n    border: 1px solid black;\n    aspect-ratio: 1;\n    cursor: pointer;\n}\n\n.placement-cell.preview {\n    background-color: rgba(0, 255, 0, 0.3);\n}\n\n.placement-cell.invalid-preview {\n    background-color: rgb(255, 0, 0);\n}\n\n.placement-cell.ship-placed {\n    background-color: var(--ship-color);\n}\n\n.placement-controls {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.non-interactive {\n    pointer-events: none;\n    filter: blur(10px);\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Project</title>
</head>
<body>
    <div class="main-window">
        <header>
            <h1 class="title">Battleship game</h1>
        </header>
        <main id="app">
            <div id="new-game-btn"> New Game </div>
            <h2 id="finale-result"></h2>
            <div class="game-container">
                <div class="board-container">
                    <h2>Player board</h2>
                    <div class="board" id="player">
                        <!-- 10x10 grid will be generated by JavaScript -->
                    </div>
                </div>
                <div class="board-container">
                    <h2>Enemy board</h2>
                    <div class="board" id="enemy">
                        <!-- 10x10 grid will be generated by JavaScript -->
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/scripts/Dom.ts":
/*!****************************!*\
  !*** ./src/scripts/Dom.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dom: () => (/* binding */ Dom)
/* harmony export */ });
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gameboard */ "./src/scripts/Gameboard.ts");
/* harmony import */ var _ShipPlacementWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShipPlacementWindow */ "./src/scripts/ShipPlacementWindow.ts");
/* harmony import */ var _EnemyAi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnemyAi */ "./src/scripts/EnemyAi.ts");



function Dom() {
    const GRID_SIZE = 10;
    let playerBoard;
    let enemyBoard;
    let aiPlayer;
    let isPlayerTurn;
    // Create a grid for the game board
    function createGrid(containerId, gameboard) {
        const container = document.getElementById(`${containerId}-board`);
        if (!container)
            return;
        container.innerHTML = ''; // Clear existing content
        container.classList.add('board');
        for (let col = 0; col < GRID_SIZE; col++) {
            for (let row = 0; row < GRID_SIZE; row++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.classList.add(`${containerId}-cell`);
                cell.dataset.row = row.toString();
                cell.dataset.col = col.toString();
                if (containerId === 'enemy')
                    cell.addEventListener('click', () => handleCellClick(col, row, gameboard, cell));
                container.appendChild(cell);
            }
        }
    }
    // Handle click events on the enemy board
    function handleCellClick(col, row, gameboard, cell) {
        if (!isPlayerTurn || cell.classList.contains('hit') || cell.classList.contains('miss')) {
            return; // Ignore clicks when it's not player's turn or on already attacked cells
        }
        isPlayerTurn = false; // Immediately set to false to prevent multiple clicks
        const result = gameboard.receiveAttack(col, row);
        updateCellAppearance(cell, result);
        if (result) {
            const ship = gameboard.getShipAt(col, row);
            if (ship && ship.isSunk()) {
                console.log(ship.getName() + ' is sunk');
                updateGrid('enemy', gameboard);
            }
            if (gameboard.allShipsSunk()) {
                GameFinale(gameboard);
                return;
            }
            // Player gets another turn
            setTimeout(() => {
                isPlayerTurn = true;
                playerTurn();
            }, 500);
        }
        else {
            setTimeout(aiTurn, 500);
        }
    }
    function playerTurn() {
        isPlayerTurn = true;
    }
    function aiTurn() {
        if (isPlayerTurn)
            return; // Safeguard against unexpected calls
        const [aiCol, aiRow] = aiPlayer.makeMove();
        const playerCell = document.querySelector(`.player-cell[data-col="${aiCol}"][data-row="${aiRow}"]`);
        // Check for ship and call receiveAttack BEFORE updating the cell appearance
        const hitShip = playerBoard.getShipAt(aiCol, aiRow);
        playerBoard.receiveAttack(aiCol, aiRow);
        if (hitShip) {
            // Update cell appearance for a hit
            playerCell.classList.remove('miss'); // Remove miss class if it was accidentally added
            playerCell.classList.add('hit');
            playerCell.textContent = '×';
            updateGrid('player', playerBoard);
            if (playerBoard.allShipsSunk()) {
                GameFinale(playerBoard);
                return;
            }
            // AI gets another turn
            setTimeout(aiTurn, 500);
        }
        else {
            // Update cell appearance for a miss
            playerCell.classList.add('miss');
            playerCell.textContent = '○';
            updateGrid('player', playerBoard);
            isPlayerTurn = true;
            playerTurn();
        }
    }
    //Adding miss class to cell that near the sunk ship
    function updateGrid(containerId, gameboard) {
        const container = document.getElementById(`${containerId}-board`);
        if (!container)
            return;
        const cells = container.querySelectorAll('.cell');
        // First update hits
        for (let col = 0; col < GRID_SIZE; col++) {
            for (let row = 0; row < GRID_SIZE; row++) {
                const ship = gameboard.getShipAt(col, row);
                if (ship) {
                    const index = col * GRID_SIZE + row;
                    const cell = cells[index];
                    if (cell.classList.contains('hit')) {
                        cell.textContent = '×';
                    }
                }
            }
        }
        // Then update misses
        const missedCells = gameboard.getAllMissedCells();
        missedCells.forEach(([col, row]) => {
            const index = col * GRID_SIZE + row;
            const cell = cells[index];
            if (!cell.classList.contains('hit')) { // Only add miss if it's not already marked as hit
                cell.classList.add('miss');
                cell.textContent = '○';
            }
        });
    }
    //Function to update cell appearance
    function updateCellAppearance(cell, isHit) {
        cell.classList.remove('hit', 'miss'); // Clear existing classes first
        if (isHit) {
            cell.classList.add('hit');
            cell.textContent = '×';
        }
        else {
            cell.classList.add('miss');
            cell.textContent = '○';
        }
    }
    // Create a new game board
    function createNewGameboard() {
        deletePrevBoards();
        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');
        const playerBoardContainer = createBoardContainer('Player');
        const EnemyBoardContainer = createBoardContainer('Enemy');
        gameContainer.appendChild(playerBoardContainer);
        gameContainer.appendChild(EnemyBoardContainer);
        const mainContent = document.getElementById('app') || document.body;
        mainContent.appendChild(gameContainer);
        playerBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard('player');
        enemyBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard('enemy');
        // Create the player's board first
        createGrid('player', playerBoard);
        // Place enemy ships randomly
        enemyBoard.placeShipsRandomly();
        // Open the ship placement window with properly typed callback
        (0,_ShipPlacementWindow__WEBPACK_IMPORTED_MODULE_1__.ShipPlacementWindow)(playerBoard, (updatedPlayerBoard) => {
            // Create the enemy board after ship placement is complete
            createGrid('enemy', enemyBoard);
            playerBoard = updatedPlayerBoard; // Update the playerBoard with the new board
            aiPlayer = new _EnemyAi__WEBPACK_IMPORTED_MODULE_2__.EnemyAi(playerBoard);
            isPlayerTurn = true;
        });
    }
    // Create a container for a game board
    function createBoardContainer(title) {
        const container = document.createElement('div');
        container.classList.add('board-container');
        const header = document.createElement('h2');
        header.textContent = `${title} board`;
        const board = document.createElement('div');
        board.id = `${title.toLowerCase()}-board`;
        board.classList.add('board');
        container.appendChild(header);
        container.appendChild(board);
        return container;
    }
    // Remove any existing game boards
    function deletePrevBoards() {
        let gameContainers = document.querySelectorAll('.game-container');
        gameContainers.forEach(container => {
            container.remove();
        });
    }
    // Initialize the game
    function startUp() {
        createNewGameboard();
        const newGameBtn = document.getElementById('new-game-btn');
        if (newGameBtn) {
            newGameBtn.addEventListener('click', createNewGameboard);
        }
        else {
            console.error("New game button not found");
        }
    }
    //Finish the game
    function GameFinale(gameboard) {
        const gameContainer = document.querySelector('.game-container');
        const finaleResult = document.getElementById('finale-result');
        const winner = gameboard.getName() === 'player' ? 'AI' : 'Player';
        finaleResult.textContent = `${winner} Wins`;
        alert(`${winner} wins!`);
        gameContainer.style.pointerEvents = 'none';
    }
    return {
        startUp
    };
}


/***/ }),

/***/ "./src/scripts/EnemyAi.ts":
/*!********************************!*\
  !*** ./src/scripts/EnemyAi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EnemyAi: () => (/* binding */ EnemyAi)
/* harmony export */ });
class EnemyAi {
    constructor(opponentBoard) {
        this.opponentBoard = opponentBoard;
        this.GRID_SIZE = 10;
        this.lastHit = null;
        this.potentialTargets = [];
        this.attackedCells = new Set();
    }
    makeMove() {
        let move;
        if (this.lastHit && this.potentialTargets.length > 0) {
            move = this.targetAdjacentCells();
        }
        else {
            move = this.randomMove();
        }
        this.attackedCells.add(`${move[0]},${move[1]}`);
        // Check if all ships are sunk
        if (this.opponentBoard.allShipsSunk()) {
            console.log("AI: All ships are sunk. Game over!");
        }
        return move;
    }
    targetAdjacentCells() {
        while (this.potentialTargets.length > 0) {
            const move = this.potentialTargets.pop();
            // Skip cells already attacked
            if (this.attackedCells.has(`${move[0]},${move[1]}`)) {
                continue;
            }
            // Attempt to attack the cell
            const result = this.opponentBoard.receiveAttack(move[0], move[1]);
            if (result) {
                // Successful hit
                if (this.opponentBoard.getShipAt(move[0], move[1]).isSunk()) {
                    this.lastHit = null;
                    this.potentialTargets = [];
                }
                else {
                    this.lastHit = move;
                    this.addAdjacentCells(move);
                }
            }
            return move;
        }
        // If no valid adjacent targets remain, reset and make a random move
        this.lastHit = null;
        return this.randomMove();
    }
    randomMove() {
        let move;
        do {
            move = [
                Math.floor(Math.random() * this.GRID_SIZE),
                Math.floor(Math.random() * this.GRID_SIZE)
            ];
        } while (this.attackedCells.has(`${move[0]},${move[1]}`));
        const result = this.opponentBoard.receiveAttack(move[0], move[1]);
        console.log(result);
        if (result) {
            this.lastHit = move;
            this.addAdjacentCells(move);
        }
        return move;
    }
    addAdjacentCells(move) {
        const [col, row] = move;
        const directions = [
            [col - 1, row], // Left
            [col + 1, row], // Right
            [col, row - 1], // Up
            [col, row + 1] // Down
        ];
        // Add valid and unvisited adjacent cells
        directions.forEach(([newCol, newRow]) => {
            if (newCol >= 0 && newCol < this.GRID_SIZE && // Within bounds horizontally
                newRow >= 0 && newRow < this.GRID_SIZE && // Within bounds vertically
                !this.attackedCells.has(`${newCol},${newRow}`) // Not already attacked
            ) {
                this.potentialTargets.push([newCol, newRow]);
            }
        });
    }
}


/***/ }),

/***/ "./src/scripts/Gameboard.ts":
/*!**********************************!*\
  !*** ./src/scripts/Gameboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/scripts/Ship.ts");

// Gameboard class represents the game board for a player
class Gameboard {
    constructor(name) {
        this.ships = [];
        this.GRID_SIZE = 10;
        this.name = name;
        this.board = [];
        this.missedShots = [];
        this.initialize();
    }
    initialize() {
        this.board = [];
        this.missedShots = [];
        for (let i = 0; i < this.GRID_SIZE; i++) {
            this.board[i] = [];
            this.missedShots[i] = [];
            for (let j = 0; j < this.GRID_SIZE; j++) {
                this.board[i][j] = null;
                this.missedShots[i][j] = null;
            }
        }
        this.ships = [];
    }
    getName() {
        return this.name;
    }
    // Place a ship on the board with additional checks
    placeShip(ship, column, row) {
        let places = [];
        if (ship.isVertical() === true) {
            // Check if ship placement is within bounds
            if (row + ship.getLength() > this.GRID_SIZE || column < 0 || row < 0)
                return false;
            // Check for overlap and one-cell distance
            for (let i = 0; i < ship.getLength(); i++) {
                if (!this.isCellAvailable(column, row + i))
                    return false;
            }
            // Place the ship after successful checks
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[column][row + i] = ship;
                places.push([column, row + i]);
            }
        }
        else {
            // Check if ship placement is within bounds
            if (column + ship.getLength() > this.GRID_SIZE || column < 0 || row < 0)
                return false;
            // Check for overlap and one-cell distance
            for (let i = 0; i < ship.getLength(); i++) {
                if (!this.isCellAvailable(column + i, row))
                    return false;
            }
            // Place the ship after successful checks
            for (let i = 0; i < ship.getLength(); i++) {
                this.board[column + i][row] = ship;
                places.push([column + i, row]);
            }
        }
        this.ships.push({
            ship: ship,
            places: places
        });
        return true;
    }
    // Helper to check if a position is within the game board bounds
    isWithinBounds(column, row) {
        return column >= 0 && column < this.GRID_SIZE && row >= 0 && row < this.GRID_SIZE;
    }
    // Check if a cell is available (no overlap) and has at least one cell distance
    isCellAvailable(column, row) {
        if (this.board[column][row] !== null)
            return false; // Check if there's already a ship
        // Check surrounding cells for one-cell distance
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                const checkCol = column + i;
                const checkRow = row + j;
                if (this.isWithinBounds(checkCol, checkRow) && this.board[checkCol][checkRow] !== null) {
                    return false; // A ship is too close
                }
            }
        }
        return true;
    }
    // Get the ship at a specific position
    getShipAt(column, row) {
        return this.board[column][row];
    }
    // Receive an attack at a specific position
    receiveAttack(column, row) {
        const ship = this.getShipAt(column, row);
        if (ship === null) {
            this.missedShots[column][row] = true;
            return false;
        }
        // Track hit
        ship.getHit(`${column},${row}`);
        console.log(this.ships.length);
        // Verify if the ship is sunk
        if (ship.isSunk()) {
            const shipInfo = this.ships.find((s) => s.ship === ship);
            if (shipInfo) {
                const allPositionsHit = shipInfo.places.every(([col, row]) => ship.hitPositions.has(`${col},${row}`));
                if (allPositionsHit) {
                    this.markAdjacentCells(ship);
                }
            }
        }
        return true;
    }
    markAdjacentCells(ship) {
        const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
        this.ships.forEach((shipInfo) => {
            if (shipInfo.ship === ship) {
                shipInfo.places.forEach((place) => {
                    directions.forEach(([dx, dy]) => {
                        const adjCol = place[0] + dx;
                        const adjRow = place[1] + dy;
                        if (this.isWithinBounds(adjCol, adjRow) && this.getShipAt(adjCol, adjRow) !== ship) {
                            this.missedShots[adjCol][adjRow] = true;
                        }
                    });
                });
            }
        });
    }
    // New method to get all cells that should be marked as 'miss'
    getAllMissedCells() {
        let missedCells = [];
        for (let col = 0; col < this.GRID_SIZE; col++) {
            for (let row = 0; row < this.GRID_SIZE; row++) {
                if (this.missedShots[col][row]) {
                    missedCells.push([col, row]);
                }
            }
        }
        return missedCells;
    }
    // Get all missed attacks
    getMissedShots() {
        return this.missedShots;
    }
    // Check if all ships are sunk
    allShipsSunk() {
        return this.ships.every(({ ship }) => ship.isSunk());
    }
    //Method to place ships randomly
    placeShipsRandomly() {
        // Reset the board and counters first
        this.initialize();
        const ships = [
            { name: 'Carrier', length: 5 },
            { name: 'Battleship', length: 4 },
            { name: 'Cruiser', length: 3 },
            { name: 'Submarine', length: 3 },
            { name: 'Destroyer', length: 2 }
        ];
        ships.forEach(shipInfo => {
            let placed = false;
            let attempts = 0;
            const maxAttempts = 100; // Prevent infinite loops
            while (!placed && attempts < maxAttempts) {
                const col = Math.floor(Math.random() * this.GRID_SIZE);
                const row = Math.floor(Math.random() * this.GRID_SIZE);
                const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
                const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(shipInfo.name, shipInfo.length, orientation);
                if (this.placeShip(ship, col, row)) {
                    placed = true;
                }
                attempts++;
            }
            if (!placed) {
                console.error(`Failed to place ${shipInfo.name}`);
            }
        });
    }
    getBoard() {
        return this.board;
    }
}


/***/ }),

/***/ "./src/scripts/Ship.ts":
/*!*****************************!*\
  !*** ./src/scripts/Ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
// Ship class represents a ship in the Battleship game
class Ship {
    // Constructor initializes a ship with a given length
    constructor(name, length, orientation) {
        this.name = name;
        this.shipLength = length;
        this.hitPositions = new Set(); // Initialize empty set of hit positions
        this.orientation = orientation;
    }
    // Returns the length of the ship
    getLength() {
        return this.shipLength;
    }
    getName() {
        return this.name;
    }
    // Returns the number of hits the ship has taken
    getNumberOfHits() {
        return this.hitPositions.size;
    }
    // Checks if the ship is sunk
    isSunk() {
        return this.hitPositions.size >= this.shipLength;
    }
    // Registers a hit on the ship and checks if it's sunk
    getHit(position) {
        this.hitPositions.add(position);
        this.isSunk();
    }
    isVertical() {
        if (this.orientation === 'vertical')
            return true;
        return false;
    }
}


/***/ }),

/***/ "./src/scripts/ShipPlacementWindow.ts":
/*!********************************************!*\
  !*** ./src/scripts/ShipPlacementWindow.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShipPlacementWindow: () => (/* binding */ ShipPlacementWindow)
/* harmony export */ });
/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ "./src/scripts/Ship.ts");
/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ "./src/scripts/Gameboard.ts");


function ShipPlacementWindow(playerBoard, onFinish) {
    document.querySelector('.main-window').classList.add('non-interactive');
    const GRID_SIZE = 10;
    const ships = [
        { name: 'Carrier', length: 5 },
        { name: 'Battleship', length: 4 },
        { name: 'Cruiser', length: 3 },
        { name: 'Submarine', length: 3 },
        { name: 'Destroyer', length: 2 }
    ];
    let currentShipIndex = 0;
    let currentOrientation = 'vertical';
    // Create the ship placement window
    function createPlacementWindow() {
        const placementWindow = document.createElement('div');
        placementWindow.classList.add('placement-window');
        const title = document.createElement('h2');
        title.textContent = 'Place Your Ships';
        placementWindow.appendChild(title);
        const grid = createPlacementGrid();
        placementWindow.appendChild(grid);
        const controls = createControls();
        placementWindow.appendChild(controls);
        document.body.insertBefore(placementWindow, document.body.firstChild);
    }
    // Create the grid for ship placement
    function createPlacementGrid() {
        const grid = document.createElement('div');
        grid.classList.add('board');
        grid.classList.add('placement-board');
        for (let col = 0; col < GRID_SIZE; col++) {
            for (let row = 0; row < GRID_SIZE; row++) {
                const cell = document.createElement('div');
                cell.classList.add('placement-cell');
                cell.dataset.row = row.toString();
                cell.dataset.col = col.toString();
                cell.addEventListener('click', () => placeShip(col, row));
                cell.addEventListener('mouseover', () => previewShip(col, row));
                cell.addEventListener('mouseout', clearPreview);
                grid.appendChild(cell);
            }
        }
        return grid;
    }
    //Restart placement bo
    function restart() {
        currentShipIndex = 0;
        playerBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard('player');
        const cells = document.querySelectorAll('.placement-cell');
        cells.forEach((cell) => {
            cell.classList.remove('ship-placed');
        });
    }
    // Create control elements (rotate button and ship info)
    function createControls() {
        const controls = document.createElement('div');
        controls.classList.add('placement-controls');
        const rotateButton = document.createElement('button');
        rotateButton.textContent = 'Rotate Ship';
        rotateButton.addEventListener('click', rotateShip);
        controls.appendChild(rotateButton);
        const RandomBtn = document.createElement('button');
        RandomBtn.textContent = 'Randomize';
        RandomBtn.addEventListener('click', randomize);
        controls.appendChild(RandomBtn);
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart';
        restartButton.addEventListener('click', restart);
        controls.appendChild(restartButton);
        return controls;
    }
    function randomize() {
        // Create a new board instance to ensure clean state
        playerBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_1__.Gameboard('player');
        playerBoard.placeShipsRandomly();
        // Update visual state by marking all ship positions
        const cells = document.querySelectorAll('.placement-cell');
        cells.forEach(cell => cell.classList.remove('ship-placed'));
        for (let col = 0; col < GRID_SIZE; col++) {
            for (let row = 0; row < GRID_SIZE; row++) {
                if (playerBoard.getShipAt(col, row)) {
                    const index = col * GRID_SIZE + row;
                    const cell = cells[index];
                    cell.classList.add('ship-placed');
                }
            }
        }
        finishPlacement();
    }
    // Rotate the current ship orientation
    function rotateShip() {
        currentOrientation = currentOrientation === 'horizontal' ? 'vertical' : 'horizontal';
    }
    // Place a ship on the board
    function placeShip(col, row) {
        const currentShip = ships[currentShipIndex];
        const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(currentShip.name, currentShip.length, currentOrientation);
        if (playerBoard.placeShip(ship, col, row)) {
            updateGrid(col, row);
            currentShipIndex++;
            if (currentShipIndex >= ships.length) {
                finishPlacement();
            }
        }
    }
    // Update the grid after placing a ship
    function updateGrid(col, row) {
        const currentShip = ships[currentShipIndex];
        const cells = document.querySelectorAll('.placement-cell');
        if (currentOrientation == 'vertical')
            for (let i = 0; i < currentShip.length; i++) {
                let index = col * GRID_SIZE + (row + i);
                cells[index].classList.add('ship-placed');
            }
        if (currentOrientation == 'horizontal')
            for (let i = 0; i < currentShip.length; i++) {
                let index = (col + i) * GRID_SIZE + row;
                cells[index].classList.add('ship-placed');
            }
    }
    // Preview ship placement on hover
    function previewShip(col, row) {
        clearPreview();
        const currentShip = ships[currentShipIndex];
        const cells = document.querySelectorAll('.placement-cell');
        for (let i = 0; i < currentShip.length; i++) {
            const previewRow = currentOrientation === 'vertical' ? row + i : row;
            const previewCol = currentOrientation === 'horizontal' ? col + i : col;
            if (previewRow < GRID_SIZE && previewCol < GRID_SIZE) {
                const index = previewCol * GRID_SIZE + previewRow;
                if (isValidPlacement(row, col, currentShip.length)) {
                    cells[index].classList.add('preview');
                }
                else {
                    cells[index].classList.add('invalid-preview');
                }
            }
        }
    }
    // Check if the current placement is valid
    function isValidPlacement(row, col, shipLength) {
        if (currentOrientation === 'horizontal') {
            return col + shipLength <= GRID_SIZE;
        }
        else {
            return row + shipLength <= GRID_SIZE;
        }
    }
    // Clear the ship placement preview
    function clearPreview() {
        const cells = document.querySelectorAll('.placement-cell');
        cells.forEach((cell) => {
            cell.classList.remove('preview');
            cell.classList.remove('invalid-preview');
        });
    }
    function updatePlayerBoard() {
        const playerBoardElement = document.getElementById('player-board');
        if (!playerBoardElement)
            return;
        const cells = playerBoardElement.querySelectorAll('.cell');
        cells.forEach(cell => cell.classList.remove('ship'));
        for (let col = 0; col < GRID_SIZE; col++) {
            for (let row = 0; row < GRID_SIZE; row++) {
                const ship = playerBoard.getShipAt(col, row);
                if (ship) {
                    const index = col * GRID_SIZE + row;
                    cells[index].classList.add('ship');
                }
            }
        }
    }
    // Finish the ship placement phase
    function finishPlacement() {
        var _a;
        const placementWindow = document.querySelector('.placement-window');
        if (placementWindow) {
            placementWindow.remove();
        }
        (_a = document.querySelector('.main-window')) === null || _a === void 0 ? void 0 : _a.classList.remove('non-interactive');
        // Update the player's board with placed ships
        updatePlayerBoard();
        // Pass the playerBoard to the callback
        onFinish(playerBoard);
    }
    // Initialize the ship placement window
    createPlacementWindow();
}


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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");
/* harmony import */ var _scripts_Dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/Dom */ "./src/scripts/Dom.ts");
// Import necessary files and styles



// Main function to start the application
function main() {
    // Initialize the DOM and start the game
    document.addEventListener('DOMContentLoaded', () => {
        const dom = (0,_scripts_Dom__WEBPACK_IMPORTED_MODULE_2__.Dom)();
        dom.startUp();
    });
}
// Run the main function when the script loads
main();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDc0I7QUFDSztBQUNTO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFHO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9Eb20udHMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvRW5lbXlBaS50cyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9HYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvU2hpcC50cyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9TaGlwUGxhY2VtZW50V2luZG93LnRzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICAtLXdhdGVyLWJsdWU6ICMzZWE0ZjA7XG4gICAgLS13YXRlci1ibHVlLWhvdmVyOiMwYTZiYmY7XG4gICAgLS1zaGlwLWNvbG9yOiAjNDQ0NDQ0O1xuICAgIC0taGl0LWNvbG9yOiAjZmY2YjZiO1xuICAgIC0tbWlzcy1jb2xvcjogI2M1YzVjNTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbi5tYWluLXdpbmRvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaGVhZGVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiBncmV5IHNvbGlkIDJweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItYmx1ZSk7XG59XG5cbiNhcHB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jbmV3LWdhbWUtYnRue1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1ibHVlKTtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25ldy1nYW1lLWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1ibHVlLWhvdmVyKTtcbn1cblxuLmdhbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3JlbTtcbiAgICB3aWR0aDogODB2dztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLmNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jZW5lbXktYm9hcmQgPiAuY2VsbDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1ibHVlLWhvdmVyKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaGlwLWNvbG9yKTtcbn1cblxuLmhpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0LWNvbG9yKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNmaW5hbGUtcmVzdWx0e1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItYmx1ZSk7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIFNoaXAgUGxhY2VtZW50IHdpbmRvdyAqL1xuLnBsYWNlbWVudC13aW5kb3cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICB6LWluZGV4OiAxMDAwO1xufVxuXG4ucGxhY2VtZW50LWNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wbGFjZW1lbnQtY2VsbC5wcmV2aWV3IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMCwgMC4zKTtcbn1cblxuLnBsYWNlbWVudC1jZWxsLmludmFsaWQtcHJldmlldyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XG59XG5cbi5wbGFjZW1lbnQtY2VsbC5zaGlwLXBsYWNlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG59XG5cbi5wbGFjZW1lbnQtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ub24taW50ZXJhY3RpdmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICAtLXdhdGVyLWJsdWU6ICMzZWE0ZjA7XFxuICAgIC0td2F0ZXItYmx1ZS1ob3ZlcjojMGE2YmJmO1xcbiAgICAtLXNoaXAtY29sb3I6ICM0NDQ0NDQ7XFxuICAgIC0taGl0LWNvbG9yOiAjZmY2YjZiO1xcbiAgICAtLW1pc3MtY29sb3I6ICNjNWM1YzU7XFxufVxcblxcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG59XFxuXFxuLm1haW4td2luZG93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVye1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1pbi13aWR0aDogMzUwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbTogZ3JleSBzb2xpZCAycHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxle1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItYmx1ZSk7XFxufVxcblxcbiNhcHB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNuZXctZ2FtZS1idG57XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy1nYW1lLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItYmx1ZS1ob3Zlcik7XFxufVxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2VuZW15LWJvYXJkID4gLmNlbGw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUtaG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbiAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taXNzLWNvbG9yKTtcXG4gICAgY29sb3I6ICMwMDAwMDA7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbiNmaW5hbGUtcmVzdWx0e1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4vKiBTaGlwIFBsYWNlbWVudCB3aW5kb3cgKi9cXG4ucGxhY2VtZW50LXdpbmRvdyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMyk7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxufVxcblxcbi5wbGFjZW1lbnQtY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wbGFjZW1lbnQtY2VsbC5wcmV2aWV3IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XFxufVxcblxcbi5wbGFjZW1lbnQtY2VsbC5pbnZhbGlkLXByZXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLnBsYWNlbWVudC1jZWxsLnNoaXAtcGxhY2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5wbGFjZW1lbnQtY29udHJvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ub24taW50ZXJhY3RpdmUge1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgZmlsdGVyOiBibHVyKDEwcHgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBgPCFET0NUWVBFIGh0bWw+XG48aHRtbCBsYW5nPVwiZW5cIj5cbjxoZWFkPlxuICAgIDxtZXRhIGNoYXJzZXQ9XCJVVEYtOFwiPlxuICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCI+XG4gICAgPHRpdGxlPk15IFByb2plY3Q8L3RpdGxlPlxuPC9oZWFkPlxuPGJvZHk+XG4gICAgPGRpdiBjbGFzcz1cIm1haW4td2luZG93XCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPkJhdHRsZXNoaXAgZ2FtZTwvaDE+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbiBpZD1cImFwcFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm5ldy1nYW1lLWJ0blwiPiBOZXcgR2FtZSA8L2Rpdj5cbiAgICAgICAgICAgIDxoMiBpZD1cImZpbmFsZS1yZXN1bHRcIj48L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+UGxheWVyIGJvYXJkPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkXCIgaWQ9XCJwbGF5ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gMTB4MTAgZ3JpZCB3aWxsIGJlIGdlbmVyYXRlZCBieSBKYXZhU2NyaXB0IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5FbmVteSBib2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZFwiIGlkPVwiZW5lbXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gMTB4MTAgZ3JpZCB3aWxsIGJlIGdlbmVyYXRlZCBieSBKYXZhU2NyaXB0IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgPC9kaXY+XG48L2JvZHk+XG48L2h0bWw+YDtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5pbXBvcnQgeyBTaGlwUGxhY2VtZW50V2luZG93IH0gZnJvbSBcIi4vU2hpcFBsYWNlbWVudFdpbmRvd1wiO1xuaW1wb3J0IHsgRW5lbXlBaSB9IGZyb20gXCIuL0VuZW15QWlcIjtcbmV4cG9ydCBmdW5jdGlvbiBEb20oKSB7XG4gICAgY29uc3QgR1JJRF9TSVpFID0gMTA7XG4gICAgbGV0IHBsYXllckJvYXJkO1xuICAgIGxldCBlbmVteUJvYXJkO1xuICAgIGxldCBhaVBsYXllcjtcbiAgICBsZXQgaXNQbGF5ZXJUdXJuO1xuICAgIC8vIENyZWF0ZSBhIGdyaWQgZm9yIHRoZSBnYW1lIGJvYXJkXG4gICAgZnVuY3Rpb24gY3JlYXRlR3JpZChjb250YWluZXJJZCwgZ2FtZWJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2NvbnRhaW5lcklkfS1ib2FyZGApO1xuICAgICAgICBpZiAoIWNvbnRhaW5lcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnOyAvLyBDbGVhciBleGlzdGluZyBjb250ZW50XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBHUklEX1NJWkU7IGNvbCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBHUklEX1NJWkU7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChgJHtjb250YWluZXJJZH0tY2VsbGApO1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3cudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gY29sLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcklkID09PSAnZW5lbXknKVxuICAgICAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQ2VsbENsaWNrKGNvbCwgcm93LCBnYW1lYm9hcmQsIGNlbGwpKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSGFuZGxlIGNsaWNrIGV2ZW50cyBvbiB0aGUgZW5lbXkgYm9hcmRcbiAgICBmdW5jdGlvbiBoYW5kbGVDZWxsQ2xpY2soY29sLCByb3csIGdhbWVib2FyZCwgY2VsbCkge1xuICAgICAgICBpZiAoIWlzUGxheWVyVHVybiB8fCBjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgY2xpY2tzIHdoZW4gaXQncyBub3QgcGxheWVyJ3MgdHVybiBvciBvbiBhbHJlYWR5IGF0dGFja2VkIGNlbGxzXG4gICAgICAgIH1cbiAgICAgICAgaXNQbGF5ZXJUdXJuID0gZmFsc2U7IC8vIEltbWVkaWF0ZWx5IHNldCB0byBmYWxzZSB0byBwcmV2ZW50IG11bHRpcGxlIGNsaWNrc1xuICAgICAgICBjb25zdCByZXN1bHQgPSBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhjb2wsIHJvdyk7XG4gICAgICAgIHVwZGF0ZUNlbGxBcHBlYXJhbmNlKGNlbGwsIHJlc3VsdCk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBnYW1lYm9hcmQuZ2V0U2hpcEF0KGNvbCwgcm93KTtcbiAgICAgICAgICAgIGlmIChzaGlwICYmIHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwLmdldE5hbWUoKSArICcgaXMgc3VuaycpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUdyaWQoJ2VuZW15JywgZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBHYW1lRmluYWxlKGdhbWVib2FyZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUGxheWVyIGdldHMgYW5vdGhlciB0dXJuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpc1BsYXllclR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHBsYXllclR1cm4oKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGFpVHVybiwgNTAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwbGF5ZXJUdXJuKCkge1xuICAgICAgICBpc1BsYXllclR1cm4gPSB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhaVR1cm4oKSB7XG4gICAgICAgIGlmIChpc1BsYXllclR1cm4pXG4gICAgICAgICAgICByZXR1cm47IC8vIFNhZmVndWFyZCBhZ2FpbnN0IHVuZXhwZWN0ZWQgY2FsbHNcbiAgICAgICAgY29uc3QgW2FpQ29sLCBhaVJvd10gPSBhaVBsYXllci5tYWtlTW92ZSgpO1xuICAgICAgICBjb25zdCBwbGF5ZXJDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1jZWxsW2RhdGEtY29sPVwiJHthaUNvbH1cIl1bZGF0YS1yb3c9XCIke2FpUm93fVwiXWApO1xuICAgICAgICAvLyBDaGVjayBmb3Igc2hpcCBhbmQgY2FsbCByZWNlaXZlQXR0YWNrIEJFRk9SRSB1cGRhdGluZyB0aGUgY2VsbCBhcHBlYXJhbmNlXG4gICAgICAgIGNvbnN0IGhpdFNoaXAgPSBwbGF5ZXJCb2FyZC5nZXRTaGlwQXQoYWlDb2wsIGFpUm93KTtcbiAgICAgICAgcGxheWVyQm9hcmQucmVjZWl2ZUF0dGFjayhhaUNvbCwgYWlSb3cpO1xuICAgICAgICBpZiAoaGl0U2hpcCkge1xuICAgICAgICAgICAgLy8gVXBkYXRlIGNlbGwgYXBwZWFyYW5jZSBmb3IgYSBoaXRcbiAgICAgICAgICAgIHBsYXllckNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnbWlzcycpOyAvLyBSZW1vdmUgbWlzcyBjbGFzcyBpZiBpdCB3YXMgYWNjaWRlbnRhbGx5IGFkZGVkXG4gICAgICAgICAgICBwbGF5ZXJDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgcGxheWVyQ2VsbC50ZXh0Q29udGVudCA9ICfDlyc7XG4gICAgICAgICAgICB1cGRhdGVHcmlkKCdwbGF5ZXInLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgICAgICBpZiAocGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBHYW1lRmluYWxlKHBsYXllckJvYXJkKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBBSSBnZXRzIGFub3RoZXIgdHVyblxuICAgICAgICAgICAgc2V0VGltZW91dChhaVR1cm4sIDUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBVcGRhdGUgY2VsbCBhcHBlYXJhbmNlIGZvciBhIG1pc3NcbiAgICAgICAgICAgIHBsYXllckNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgICAgcGxheWVyQ2VsbC50ZXh0Q29udGVudCA9ICfil4snO1xuICAgICAgICAgICAgdXBkYXRlR3JpZCgncGxheWVyJywgcGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgaXNQbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICAgICAgICAgIHBsYXllclR1cm4oKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL0FkZGluZyBtaXNzIGNsYXNzIHRvIGNlbGwgdGhhdCBuZWFyIHRoZSBzdW5rIHNoaXBcbiAgICBmdW5jdGlvbiB1cGRhdGVHcmlkKGNvbnRhaW5lcklkLCBnYW1lYm9hcmQpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y29udGFpbmVySWR9LWJvYXJkYCk7XG4gICAgICAgIGlmICghY29udGFpbmVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBjZWxscyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgICAgICAvLyBGaXJzdCB1cGRhdGUgaGl0c1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBHUklEX1NJWkU7IGNvbCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBHUklEX1NJWkU7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IGdhbWVib2FyZC5nZXRTaGlwQXQoY29sLCByb3cpO1xuICAgICAgICAgICAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY29sICogR1JJRF9TSVpFICsgcm93O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJ8OXJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGVuIHVwZGF0ZSBtaXNzZXNcbiAgICAgICAgY29uc3QgbWlzc2VkQ2VsbHMgPSBnYW1lYm9hcmQuZ2V0QWxsTWlzc2VkQ2VsbHMoKTtcbiAgICAgICAgbWlzc2VkQ2VsbHMuZm9yRWFjaCgoW2NvbCwgcm93XSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjb2wgKiBHUklEX1NJWkUgKyByb3c7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpIHsgLy8gT25seSBhZGQgbWlzcyBpZiBpdCdzIG5vdCBhbHJlYWR5IG1hcmtlZCBhcyBoaXRcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHRDb250ZW50ID0gJ+KXiyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL0Z1bmN0aW9uIHRvIHVwZGF0ZSBjZWxsIGFwcGVhcmFuY2VcbiAgICBmdW5jdGlvbiB1cGRhdGVDZWxsQXBwZWFyYW5jZShjZWxsLCBpc0hpdCkge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcsICdtaXNzJyk7IC8vIENsZWFyIGV4aXN0aW5nIGNsYXNzZXMgZmlyc3RcbiAgICAgICAgaWYgKGlzSGl0KSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9ICfDlyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAn4peLJztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDcmVhdGUgYSBuZXcgZ2FtZSBib2FyZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0dhbWVib2FyZCgpIHtcbiAgICAgICAgZGVsZXRlUHJldkJvYXJkcygpO1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBjcmVhdGVCb2FyZENvbnRhaW5lcignUGxheWVyJyk7XG4gICAgICAgIGNvbnN0IEVuZW15Qm9hcmRDb250YWluZXIgPSBjcmVhdGVCb2FyZENvbnRhaW5lcignRW5lbXknKTtcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZENvbnRhaW5lcik7XG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoRW5lbXlCb2FyZENvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xuICAgICAgICBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoJ3BsYXllcicpO1xuICAgICAgICBlbmVteUJvYXJkID0gbmV3IEdhbWVib2FyZCgnZW5lbXknKTtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwbGF5ZXIncyBib2FyZCBmaXJzdFxuICAgICAgICBjcmVhdGVHcmlkKCdwbGF5ZXInLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIC8vIFBsYWNlIGVuZW15IHNoaXBzIHJhbmRvbWx5XG4gICAgICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgICAgIC8vIE9wZW4gdGhlIHNoaXAgcGxhY2VtZW50IHdpbmRvdyB3aXRoIHByb3Blcmx5IHR5cGVkIGNhbGxiYWNrXG4gICAgICAgIFNoaXBQbGFjZW1lbnRXaW5kb3cocGxheWVyQm9hcmQsICh1cGRhdGVkUGxheWVyQm9hcmQpID0+IHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZW5lbXkgYm9hcmQgYWZ0ZXIgc2hpcCBwbGFjZW1lbnQgaXMgY29tcGxldGVcbiAgICAgICAgICAgIGNyZWF0ZUdyaWQoJ2VuZW15JywgZW5lbXlCb2FyZCk7XG4gICAgICAgICAgICBwbGF5ZXJCb2FyZCA9IHVwZGF0ZWRQbGF5ZXJCb2FyZDsgLy8gVXBkYXRlIHRoZSBwbGF5ZXJCb2FyZCB3aXRoIHRoZSBuZXcgYm9hcmRcbiAgICAgICAgICAgIGFpUGxheWVyID0gbmV3IEVuZW15QWkocGxheWVyQm9hcmQpO1xuICAgICAgICAgICAgaXNQbGF5ZXJUdXJuID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBhIGNvbnRhaW5lciBmb3IgYSBnYW1lIGJvYXJkXG4gICAgZnVuY3Rpb24gY3JlYXRlQm9hcmRDb250YWluZXIodGl0bGUpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2FyZC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gYCR7dGl0bGV9IGJvYXJkYDtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYm9hcmQuaWQgPSBgJHt0aXRsZS50b0xvd2VyQ2FzZSgpfS1ib2FyZGA7XG4gICAgICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cbiAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIGdhbWUgYm9hcmRzXG4gICAgZnVuY3Rpb24gZGVsZXRlUHJldkJvYXJkcygpIHtcbiAgICAgICAgbGV0IGdhbWVDb250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtY29udGFpbmVyJyk7XG4gICAgICAgIGdhbWVDb250YWluZXJzLmZvckVhY2goY29udGFpbmVyID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgdGhlIGdhbWVcbiAgICBmdW5jdGlvbiBzdGFydFVwKCkge1xuICAgICAgICBjcmVhdGVOZXdHYW1lYm9hcmQoKTtcbiAgICAgICAgY29uc3QgbmV3R2FtZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctZ2FtZS1idG4nKTtcbiAgICAgICAgaWYgKG5ld0dhbWVCdG4pIHtcbiAgICAgICAgICAgIG5ld0dhbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdHYW1lYm9hcmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIk5ldyBnYW1lIGJ1dHRvbiBub3QgZm91bmRcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9GaW5pc2ggdGhlIGdhbWVcbiAgICBmdW5jdGlvbiBHYW1lRmluYWxlKGdhbWVib2FyZCkge1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGZpbmFsZVJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5hbGUtcmVzdWx0Jyk7XG4gICAgICAgIGNvbnN0IHdpbm5lciA9IGdhbWVib2FyZC5nZXROYW1lKCkgPT09ICdwbGF5ZXInID8gJ0FJJyA6ICdQbGF5ZXInO1xuICAgICAgICBmaW5hbGVSZXN1bHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IFdpbnNgO1xuICAgICAgICBhbGVydChgJHt3aW5uZXJ9IHdpbnMhYCk7XG4gICAgICAgIGdhbWVDb250YWluZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnRVcFxuICAgIH07XG59XG4iLCJleHBvcnQgY2xhc3MgRW5lbXlBaSB7XG4gICAgY29uc3RydWN0b3Iob3Bwb25lbnRCb2FyZCkge1xuICAgICAgICB0aGlzLm9wcG9uZW50Qm9hcmQgPSBvcHBvbmVudEJvYXJkO1xuICAgICAgICB0aGlzLkdSSURfU0laRSA9IDEwO1xuICAgICAgICB0aGlzLmxhc3RIaXQgPSBudWxsO1xuICAgICAgICB0aGlzLnBvdGVudGlhbFRhcmdldHMgPSBbXTtcbiAgICAgICAgdGhpcy5hdHRhY2tlZENlbGxzID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBtYWtlTW92ZSgpIHtcbiAgICAgICAgbGV0IG1vdmU7XG4gICAgICAgIGlmICh0aGlzLmxhc3RIaXQgJiYgdGhpcy5wb3RlbnRpYWxUYXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1vdmUgPSB0aGlzLnRhcmdldEFkamFjZW50Q2VsbHMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1vdmUgPSB0aGlzLnJhbmRvbU1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dGFja2VkQ2VsbHMuYWRkKGAke21vdmVbMF19LCR7bW92ZVsxXX1gKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgYWxsIHNoaXBzIGFyZSBzdW5rXG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50Qm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUk6IEFsbCBzaGlwcyBhcmUgc3Vuay4gR2FtZSBvdmVyIVwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZTtcbiAgICB9XG4gICAgdGFyZ2V0QWRqYWNlbnRDZWxscygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMucG90ZW50aWFsVGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBtb3ZlID0gdGhpcy5wb3RlbnRpYWxUYXJnZXRzLnBvcCgpO1xuICAgICAgICAgICAgLy8gU2tpcCBjZWxscyBhbHJlYWR5IGF0dGFja2VkXG4gICAgICAgICAgICBpZiAodGhpcy5hdHRhY2tlZENlbGxzLmhhcyhgJHttb3ZlWzBdfSwke21vdmVbMV19YCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEF0dGVtcHQgdG8gYXR0YWNrIHRoZSBjZWxsXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlWzBdLCBtb3ZlWzFdKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAvLyBTdWNjZXNzZnVsIGhpdFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wcG9uZW50Qm9hcmQuZ2V0U2hpcEF0KG1vdmVbMF0sIG1vdmVbMV0pLmlzU3VuaygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdEhpdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG90ZW50aWFsVGFyZ2V0cyA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXN0SGl0ID0gbW92ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRBZGphY2VudENlbGxzKG1vdmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtb3ZlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIG5vIHZhbGlkIGFkamFjZW50IHRhcmdldHMgcmVtYWluLCByZXNldCBhbmQgbWFrZSBhIHJhbmRvbSBtb3ZlXG4gICAgICAgIHRoaXMubGFzdEhpdCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLnJhbmRvbU1vdmUoKTtcbiAgICB9XG4gICAgcmFuZG9tTW92ZSgpIHtcbiAgICAgICAgbGV0IG1vdmU7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIG1vdmUgPSBbXG4gICAgICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5HUklEX1NJWkUpLFxuICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuR1JJRF9TSVpFKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfSB3aGlsZSAodGhpcy5hdHRhY2tlZENlbGxzLmhhcyhgJHttb3ZlWzBdfSwke21vdmVbMV19YCkpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLm9wcG9uZW50Qm9hcmQucmVjZWl2ZUF0dGFjayhtb3ZlWzBdLCBtb3ZlWzFdKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0SGl0ID0gbW92ZTtcbiAgICAgICAgICAgIHRoaXMuYWRkQWRqYWNlbnRDZWxscyhtb3ZlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW92ZTtcbiAgICB9XG4gICAgYWRkQWRqYWNlbnRDZWxscyhtb3ZlKSB7XG4gICAgICAgIGNvbnN0IFtjb2wsIHJvd10gPSBtb3ZlO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gW1xuICAgICAgICAgICAgW2NvbCAtIDEsIHJvd10sIC8vIExlZnRcbiAgICAgICAgICAgIFtjb2wgKyAxLCByb3ddLCAvLyBSaWdodFxuICAgICAgICAgICAgW2NvbCwgcm93IC0gMV0sIC8vIFVwXG4gICAgICAgICAgICBbY29sLCByb3cgKyAxXSAvLyBEb3duXG4gICAgICAgIF07XG4gICAgICAgIC8vIEFkZCB2YWxpZCBhbmQgdW52aXNpdGVkIGFkamFjZW50IGNlbGxzXG4gICAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaCgoW25ld0NvbCwgbmV3Um93XSkgPT4ge1xuICAgICAgICAgICAgaWYgKG5ld0NvbCA+PSAwICYmIG5ld0NvbCA8IHRoaXMuR1JJRF9TSVpFICYmIC8vIFdpdGhpbiBib3VuZHMgaG9yaXpvbnRhbGx5XG4gICAgICAgICAgICAgICAgbmV3Um93ID49IDAgJiYgbmV3Um93IDwgdGhpcy5HUklEX1NJWkUgJiYgLy8gV2l0aGluIGJvdW5kcyB2ZXJ0aWNhbGx5XG4gICAgICAgICAgICAgICAgIXRoaXMuYXR0YWNrZWRDZWxscy5oYXMoYCR7bmV3Q29sfSwke25ld1Jvd31gKSAvLyBOb3QgYWxyZWFkeSBhdHRhY2tlZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3RlbnRpYWxUYXJnZXRzLnB1c2goW25ld0NvbCwgbmV3Um93XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAnO1xuLy8gR2FtZWJvYXJkIGNsYXNzIHJlcHJlc2VudHMgdGhlIGdhbWUgYm9hcmQgZm9yIGEgcGxheWVyXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5HUklEX1NJWkUgPSAxMDtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgICAgICB0aGlzLm1pc3NlZFNob3RzID0gW107XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW107XG4gICAgICAgIHRoaXMubWlzc2VkU2hvdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLkdSSURfU0laRTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2ldID0gW107XG4gICAgICAgICAgICB0aGlzLm1pc3NlZFNob3RzW2ldID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuR1JJRF9TSVpFOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLm1pc3NlZFNob3RzW2ldW2pdID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgfVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIC8vIFBsYWNlIGEgc2hpcCBvbiB0aGUgYm9hcmQgd2l0aCBhZGRpdGlvbmFsIGNoZWNrc1xuICAgIHBsYWNlU2hpcChzaGlwLCBjb2x1bW4sIHJvdykge1xuICAgICAgICBsZXQgcGxhY2VzID0gW107XG4gICAgICAgIGlmIChzaGlwLmlzVmVydGljYWwoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgc2hpcCBwbGFjZW1lbnQgaXMgd2l0aGluIGJvdW5kc1xuICAgICAgICAgICAgaWYgKHJvdyArIHNoaXAuZ2V0TGVuZ3RoKCkgPiB0aGlzLkdSSURfU0laRSB8fCBjb2x1bW4gPCAwIHx8IHJvdyA8IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIG92ZXJsYXAgYW5kIG9uZS1jZWxsIGRpc3RhbmNlXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0NlbGxBdmFpbGFibGUoY29sdW1uLCByb3cgKyBpKSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUGxhY2UgdGhlIHNoaXAgYWZ0ZXIgc3VjY2Vzc2Z1bCBjaGVja3NcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtjb2x1bW5dW3JvdyArIGldID0gc2hpcDtcbiAgICAgICAgICAgICAgICBwbGFjZXMucHVzaChbY29sdW1uLCByb3cgKyBpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBzaGlwIHBsYWNlbWVudCBpcyB3aXRoaW4gYm91bmRzXG4gICAgICAgICAgICBpZiAoY29sdW1uICsgc2hpcC5nZXRMZW5ndGgoKSA+IHRoaXMuR1JJRF9TSVpFIHx8IGNvbHVtbiA8IDAgfHwgcm93IDwgMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcCBhbmQgb25lLWNlbGwgZGlzdGFuY2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2VsbEF2YWlsYWJsZShjb2x1bW4gKyBpLCByb3cpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQbGFjZSB0aGUgc2hpcCBhZnRlciBzdWNjZXNzZnVsIGNoZWNrc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2NvbHVtbiArIGldW3Jvd10gPSBzaGlwO1xuICAgICAgICAgICAgICAgIHBsYWNlcy5wdXNoKFtjb2x1bW4gKyBpLCByb3ddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goe1xuICAgICAgICAgICAgc2hpcDogc2hpcCxcbiAgICAgICAgICAgIHBsYWNlczogcGxhY2VzXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gSGVscGVyIHRvIGNoZWNrIGlmIGEgcG9zaXRpb24gaXMgd2l0aGluIHRoZSBnYW1lIGJvYXJkIGJvdW5kc1xuICAgIGlzV2l0aGluQm91bmRzKGNvbHVtbiwgcm93KSB7XG4gICAgICAgIHJldHVybiBjb2x1bW4gPj0gMCAmJiBjb2x1bW4gPCB0aGlzLkdSSURfU0laRSAmJiByb3cgPj0gMCAmJiByb3cgPCB0aGlzLkdSSURfU0laRTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgYSBjZWxsIGlzIGF2YWlsYWJsZSAobm8gb3ZlcmxhcCkgYW5kIGhhcyBhdCBsZWFzdCBvbmUgY2VsbCBkaXN0YW5jZVxuICAgIGlzQ2VsbEF2YWlsYWJsZShjb2x1bW4sIHJvdykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtjb2x1bW5dW3Jvd10gIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIENoZWNrIGlmIHRoZXJlJ3MgYWxyZWFkeSBhIHNoaXBcbiAgICAgICAgLy8gQ2hlY2sgc3Vycm91bmRpbmcgY2VsbHMgZm9yIG9uZS1jZWxsIGRpc3RhbmNlXG4gICAgICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSAxOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8PSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0NvbCA9IGNvbHVtbiArIGk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tSb3cgPSByb3cgKyBqO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzV2l0aGluQm91bmRzKGNoZWNrQ29sLCBjaGVja1JvdykgJiYgdGhpcy5ib2FyZFtjaGVja0NvbF1bY2hlY2tSb3ddICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gQSBzaGlwIGlzIHRvbyBjbG9zZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBzaGlwIGF0IGEgc3BlY2lmaWMgcG9zaXRpb25cbiAgICBnZXRTaGlwQXQoY29sdW1uLCByb3cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbY29sdW1uXVtyb3ddO1xuICAgIH1cbiAgICAvLyBSZWNlaXZlIGFuIGF0dGFjayBhdCBhIHNwZWNpZmljIHBvc2l0aW9uXG4gICAgcmVjZWl2ZUF0dGFjayhjb2x1bW4sIHJvdykge1xuICAgICAgICBjb25zdCBzaGlwID0gdGhpcy5nZXRTaGlwQXQoY29sdW1uLCByb3cpO1xuICAgICAgICBpZiAoc2hpcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5taXNzZWRTaG90c1tjb2x1bW5dW3Jvd10gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyYWNrIGhpdFxuICAgICAgICBzaGlwLmdldEhpdChgJHtjb2x1bW59LCR7cm93fWApO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNoaXBzLmxlbmd0aCk7XG4gICAgICAgIC8vIFZlcmlmeSBpZiB0aGUgc2hpcCBpcyBzdW5rXG4gICAgICAgIGlmIChzaGlwLmlzU3VuaygpKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwSW5mbyA9IHRoaXMuc2hpcHMuZmluZCgocykgPT4gcy5zaGlwID09PSBzaGlwKTtcbiAgICAgICAgICAgIGlmIChzaGlwSW5mbykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFsbFBvc2l0aW9uc0hpdCA9IHNoaXBJbmZvLnBsYWNlcy5ldmVyeSgoW2NvbCwgcm93XSkgPT4gc2hpcC5oaXRQb3NpdGlvbnMuaGFzKGAke2NvbH0sJHtyb3d9YCkpO1xuICAgICAgICAgICAgICAgIGlmIChhbGxQb3NpdGlvbnNIaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrQWRqYWNlbnRDZWxscyhzaGlwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG1hcmtBZGphY2VudENlbGxzKHNoaXApIHtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IFtbLTEsIC0xXSwgWy0xLCAwXSwgWy0xLCAxXSwgWzAsIC0xXSwgWzAsIDFdLCBbMSwgLTFdLCBbMSwgMF0sIFsxLCAxXV07XG4gICAgICAgIHRoaXMuc2hpcHMuZm9yRWFjaCgoc2hpcEluZm8pID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwSW5mby5zaGlwID09PSBzaGlwKSB7XG4gICAgICAgICAgICAgICAgc2hpcEluZm8ucGxhY2VzLmZvckVhY2goKHBsYWNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMuZm9yRWFjaCgoW2R4LCBkeV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkakNvbCA9IHBsYWNlWzBdICsgZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGpSb3cgPSBwbGFjZVsxXSArIGR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNXaXRoaW5Cb3VuZHMoYWRqQ29sLCBhZGpSb3cpICYmIHRoaXMuZ2V0U2hpcEF0KGFkakNvbCwgYWRqUm93KSAhPT0gc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWlzc2VkU2hvdHNbYWRqQ29sXVthZGpSb3ddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBOZXcgbWV0aG9kIHRvIGdldCBhbGwgY2VsbHMgdGhhdCBzaG91bGQgYmUgbWFya2VkIGFzICdtaXNzJ1xuICAgIGdldEFsbE1pc3NlZENlbGxzKCkge1xuICAgICAgICBsZXQgbWlzc2VkQ2VsbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5HUklEX1NJWkU7IGNvbCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLkdSSURfU0laRTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taXNzZWRTaG90c1tjb2xdW3Jvd10pIHtcbiAgICAgICAgICAgICAgICAgICAgbWlzc2VkQ2VsbHMucHVzaChbY29sLCByb3ddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pc3NlZENlbGxzO1xuICAgIH1cbiAgICAvLyBHZXQgYWxsIG1pc3NlZCBhdHRhY2tzXG4gICAgZ2V0TWlzc2VkU2hvdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3NlZFNob3RzO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KCh7IHNoaXAgfSkgPT4gc2hpcC5pc1N1bmsoKSk7XG4gICAgfVxuICAgIC8vTWV0aG9kIHRvIHBsYWNlIHNoaXBzIHJhbmRvbWx5XG4gICAgcGxhY2VTaGlwc1JhbmRvbWx5KCkge1xuICAgICAgICAvLyBSZXNldCB0aGUgYm9hcmQgYW5kIGNvdW50ZXJzIGZpcnN0XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgICAgIHsgbmFtZTogJ0NhcnJpZXInLCBsZW5ndGg6IDUgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0JhdHRsZXNoaXAnLCBsZW5ndGg6IDQgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ0NydWlzZXInLCBsZW5ndGg6IDMgfSxcbiAgICAgICAgICAgIHsgbmFtZTogJ1N1Ym1hcmluZScsIGxlbmd0aDogMyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnRGVzdHJveWVyJywgbGVuZ3RoOiAyIH1cbiAgICAgICAgXTtcbiAgICAgICAgc2hpcHMuZm9yRWFjaChzaGlwSW5mbyA9PiB7XG4gICAgICAgICAgICBsZXQgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICAgICAgY29uc3QgbWF4QXR0ZW1wdHMgPSAxMDA7IC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkICYmIGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLkdSSURfU0laRSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5HUklEX1NJWkUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBJbmZvLm5hbWUsIHNoaXBJbmZvLmxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlU2hpcChzaGlwLCBjb2wsIHJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRmFpbGVkIHRvIHBsYWNlICR7c2hpcEluZm8ubmFtZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEJvYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZDtcbiAgICB9XG59XG4iLCIvLyBTaGlwIGNsYXNzIHJlcHJlc2VudHMgYSBzaGlwIGluIHRoZSBCYXR0bGVzaGlwIGdhbWVcbmV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICAvLyBDb25zdHJ1Y3RvciBpbml0aWFsaXplcyBhIHNoaXAgd2l0aCBhIGdpdmVuIGxlbmd0aFxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zaGlwTGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmhpdFBvc2l0aW9ucyA9IG5ldyBTZXQoKTsgLy8gSW5pdGlhbGl6ZSBlbXB0eSBzZXQgb2YgaGl0IHBvc2l0aW9uc1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gb3JpZW50YXRpb247XG4gICAgfVxuICAgIC8vIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcFxuICAgIGdldExlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hpcExlbmd0aDtcbiAgICB9XG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgLy8gUmV0dXJucyB0aGUgbnVtYmVyIG9mIGhpdHMgdGhlIHNoaXAgaGFzIHRha2VuXG4gICAgZ2V0TnVtYmVyT2ZIaXRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaXRQb3NpdGlvbnMuc2l6ZTtcbiAgICB9XG4gICAgLy8gQ2hlY2tzIGlmIHRoZSBzaGlwIGlzIHN1bmtcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpdFBvc2l0aW9ucy5zaXplID49IHRoaXMuc2hpcExlbmd0aDtcbiAgICB9XG4gICAgLy8gUmVnaXN0ZXJzIGEgaGl0IG9uIHRoZSBzaGlwIGFuZCBjaGVja3MgaWYgaXQncyBzdW5rXG4gICAgZ2V0SGl0KHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuaGl0UG9zaXRpb25zLmFkZChwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICAgIGlzVmVydGljYWwoKSB7XG4gICAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09PSAndmVydGljYWwnKVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vU2hpcFwiO1xuaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vR2FtZWJvYXJkXCI7XG5leHBvcnQgZnVuY3Rpb24gU2hpcFBsYWNlbWVudFdpbmRvdyhwbGF5ZXJCb2FyZCwgb25GaW5pc2gpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13aW5kb3cnKS5jbGFzc0xpc3QuYWRkKCdub24taW50ZXJhY3RpdmUnKTtcbiAgICBjb25zdCBHUklEX1NJWkUgPSAxMDtcbiAgICBjb25zdCBzaGlwcyA9IFtcbiAgICAgICAgeyBuYW1lOiAnQ2FycmllcicsIGxlbmd0aDogNSB9LFxuICAgICAgICB7IG5hbWU6ICdCYXR0bGVzaGlwJywgbGVuZ3RoOiA0IH0sXG4gICAgICAgIHsgbmFtZTogJ0NydWlzZXInLCBsZW5ndGg6IDMgfSxcbiAgICAgICAgeyBuYW1lOiAnU3VibWFyaW5lJywgbGVuZ3RoOiAzIH0sXG4gICAgICAgIHsgbmFtZTogJ0Rlc3Ryb3llcicsIGxlbmd0aDogMiB9XG4gICAgXTtcbiAgICBsZXQgY3VycmVudFNoaXBJbmRleCA9IDA7XG4gICAgbGV0IGN1cnJlbnRPcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgLy8gQ3JlYXRlIHRoZSBzaGlwIHBsYWNlbWVudCB3aW5kb3dcbiAgICBmdW5jdGlvbiBjcmVhdGVQbGFjZW1lbnRXaW5kb3coKSB7XG4gICAgICAgIGNvbnN0IHBsYWNlbWVudFdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwbGFjZW1lbnRXaW5kb3cuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LXdpbmRvdycpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ1BsYWNlIFlvdXIgU2hpcHMnO1xuICAgICAgICBwbGFjZW1lbnRXaW5kb3cuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBjb25zdCBncmlkID0gY3JlYXRlUGxhY2VtZW50R3JpZCgpO1xuICAgICAgICBwbGFjZW1lbnRXaW5kb3cuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gY3JlYXRlQ29udHJvbHMoKTtcbiAgICAgICAgcGxhY2VtZW50V2luZG93LmFwcGVuZENoaWxkKGNvbnRyb2xzKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUocGxhY2VtZW50V2luZG93LCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgdGhlIGdyaWQgZm9yIHNoaXAgcGxhY2VtZW50XG4gICAgZnVuY3Rpb24gY3JlYXRlUGxhY2VtZW50R3JpZCgpIHtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LWJvYXJkJyk7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEdSSURfU0laRTsgY29sKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQtY2VsbCcpO1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5yb3cgPSByb3cudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuY29sID0gY29sLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHBsYWNlU2hpcChjb2wsIHJvdykpO1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4gcHJldmlld1NoaXAoY29sLCByb3cpKTtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgY2xlYXJQcmV2aWV3KTtcbiAgICAgICAgICAgICAgICBncmlkLmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncmlkO1xuICAgIH1cbiAgICAvL1Jlc3RhcnQgcGxhY2VtZW50IGJvXG4gICAgZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgICAgICAgY3VycmVudFNoaXBJbmRleCA9IDA7XG4gICAgICAgIHBsYXllckJvYXJkID0gbmV3IEdhbWVib2FyZCgncGxheWVyJyk7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlbWVudC1jZWxsJyk7XG4gICAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIENyZWF0ZSBjb250cm9sIGVsZW1lbnRzIChyb3RhdGUgYnV0dG9uIGFuZCBzaGlwIGluZm8pXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udHJvbHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudC1jb250cm9scycpO1xuICAgICAgICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1JvdGF0ZSBTaGlwJztcbiAgICAgICAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gICAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKHJvdGF0ZUJ1dHRvbik7XG4gICAgICAgIGNvbnN0IFJhbmRvbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBSYW5kb21CdG4udGV4dENvbnRlbnQgPSAnUmFuZG9taXplJztcbiAgICAgICAgUmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmFuZG9taXplKTtcbiAgICAgICAgY29udHJvbHMuYXBwZW5kQ2hpbGQoUmFuZG9tQnRuKTtcbiAgICAgICAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZXN0YXJ0QnV0dG9uLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnO1xuICAgICAgICByZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzdGFydCk7XG4gICAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKHJlc3RhcnRCdXR0b24pO1xuICAgICAgICByZXR1cm4gY29udHJvbHM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJhbmRvbWl6ZSgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGJvYXJkIGluc3RhbmNlIHRvIGVuc3VyZSBjbGVhbiBzdGF0ZVxuICAgICAgICBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoJ3BsYXllcicpO1xuICAgICAgICBwbGF5ZXJCb2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICAgICAgLy8gVXBkYXRlIHZpc3VhbCBzdGF0ZSBieSBtYXJraW5nIGFsbCBzaGlwIHBvc2l0aW9uc1xuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtY2VsbCcpO1xuICAgICAgICBjZWxscy5mb3JFYWNoKGNlbGwgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwLXBsYWNlZCcpKTtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgR1JJRF9TSVpFOyBjb2wrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgR1JJRF9TSVpFOyByb3crKykge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5nZXRTaGlwQXQoY29sLCByb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY29sICogR1JJRF9TSVpFICsgcm93O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gY2VsbHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpbmlzaFBsYWNlbWVudCgpO1xuICAgIH1cbiAgICAvLyBSb3RhdGUgdGhlIGN1cnJlbnQgc2hpcCBvcmllbnRhdGlvblxuICAgIGZ1bmN0aW9uIHJvdGF0ZVNoaXAoKSB7XG4gICAgICAgIGN1cnJlbnRPcmllbnRhdGlvbiA9IGN1cnJlbnRPcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcbiAgICB9XG4gICAgLy8gUGxhY2UgYSBzaGlwIG9uIHRoZSBib2FyZFxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChjb2wsIHJvdykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzW2N1cnJlbnRTaGlwSW5kZXhdO1xuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAoY3VycmVudFNoaXAubmFtZSwgY3VycmVudFNoaXAubGVuZ3RoLCBjdXJyZW50T3JpZW50YXRpb24pO1xuICAgICAgICBpZiAocGxheWVyQm9hcmQucGxhY2VTaGlwKHNoaXAsIGNvbCwgcm93KSkge1xuICAgICAgICAgICAgdXBkYXRlR3JpZChjb2wsIHJvdyk7XG4gICAgICAgICAgICBjdXJyZW50U2hpcEluZGV4Kys7XG4gICAgICAgICAgICBpZiAoY3VycmVudFNoaXBJbmRleCA+PSBzaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaW5pc2hQbGFjZW1lbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBVcGRhdGUgdGhlIGdyaWQgYWZ0ZXIgcGxhY2luZyBhIHNoaXBcbiAgICBmdW5jdGlvbiB1cGRhdGVHcmlkKGNvbCwgcm93KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gc2hpcHNbY3VycmVudFNoaXBJbmRleF07XG4gICAgICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYWNlbWVudC1jZWxsJyk7XG4gICAgICAgIGlmIChjdXJyZW50T3JpZW50YXRpb24gPT0gJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBjb2wgKiBHUklEX1NJWkUgKyAocm93ICsgaSk7XG4gICAgICAgICAgICAgICAgY2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50T3JpZW50YXRpb24gPT0gJ2hvcml6b250YWwnKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IChjb2wgKyBpKSAqIEdSSURfU0laRSArIHJvdztcbiAgICAgICAgICAgICAgICBjZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hpcC1wbGFjZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgLy8gUHJldmlldyBzaGlwIHBsYWNlbWVudCBvbiBob3ZlclxuICAgIGZ1bmN0aW9uIHByZXZpZXdTaGlwKGNvbCwgcm93KSB7XG4gICAgICAgIGNsZWFyUHJldmlldygpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzW2N1cnJlbnRTaGlwSW5kZXhdO1xuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtY2VsbCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aWV3Um93ID0gY3VycmVudE9yaWVudGF0aW9uID09PSAndmVydGljYWwnID8gcm93ICsgaSA6IHJvdztcbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdDb2wgPSBjdXJyZW50T3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/IGNvbCArIGkgOiBjb2w7XG4gICAgICAgICAgICBpZiAocHJldmlld1JvdyA8IEdSSURfU0laRSAmJiBwcmV2aWV3Q29sIDwgR1JJRF9TSVpFKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwcmV2aWV3Q29sICogR1JJRF9TSVpFICsgcHJldmlld1JvdztcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFBsYWNlbWVudChyb3csIGNvbCwgY3VycmVudFNoaXAubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgncHJldmlldycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQtcHJldmlldycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDaGVjayBpZiB0aGUgY3VycmVudCBwbGFjZW1lbnQgaXMgdmFsaWRcbiAgICBmdW5jdGlvbiBpc1ZhbGlkUGxhY2VtZW50KHJvdywgY29sLCBzaGlwTGVuZ3RoKSB7XG4gICAgICAgIGlmIChjdXJyZW50T3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbCArIHNoaXBMZW5ndGggPD0gR1JJRF9TSVpFO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJvdyArIHNoaXBMZW5ndGggPD0gR1JJRF9TSVpFO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIENsZWFyIHRoZSBzaGlwIHBsYWNlbWVudCBwcmV2aWV3XG4gICAgZnVuY3Rpb24gY2xlYXJQcmV2aWV3KCkge1xuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtY2VsbCcpO1xuICAgICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3ByZXZpZXcnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZC1wcmV2aWV3Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICAgICAgICBpZiAoIXBsYXllckJvYXJkRWxlbWVudClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBwbGF5ZXJCb2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNlbGwnKTtcbiAgICAgICAgY2VsbHMuZm9yRWFjaChjZWxsID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpKTtcbiAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgR1JJRF9TSVpFOyBjb2wrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgR1JJRF9TSVpFOyByb3crKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBwbGF5ZXJCb2FyZC5nZXRTaGlwQXQoY29sLCByb3cpO1xuICAgICAgICAgICAgICAgIGlmIChzaGlwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gY29sICogR1JJRF9TSVpFICsgcm93O1xuICAgICAgICAgICAgICAgICAgICBjZWxsc1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGaW5pc2ggdGhlIHNoaXAgcGxhY2VtZW50IHBoYXNlXG4gICAgZnVuY3Rpb24gZmluaXNoUGxhY2VtZW50KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHBsYWNlbWVudFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGFjZW1lbnQtd2luZG93Jyk7XG4gICAgICAgIGlmIChwbGFjZW1lbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHBsYWNlbWVudFdpbmRvdy5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi13aW5kb3cnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1pbnRlcmFjdGl2ZScpO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHBsYXllcidzIGJvYXJkIHdpdGggcGxhY2VkIHNoaXBzXG4gICAgICAgIHVwZGF0ZVBsYXllckJvYXJkKCk7XG4gICAgICAgIC8vIFBhc3MgdGhlIHBsYXllckJvYXJkIHRvIHRoZSBjYWxsYmFja1xuICAgICAgICBvbkZpbmlzaChwbGF5ZXJCb2FyZCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgdGhlIHNoaXAgcGxhY2VtZW50IHdpbmRvd1xuICAgIGNyZWF0ZVBsYWNlbWVudFdpbmRvdygpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gSW1wb3J0IG5lY2Vzc2FyeSBmaWxlcyBhbmQgc3R5bGVzXG5pbXBvcnQgJy4vaW5kZXguaHRtbCc7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCB7IERvbSB9IGZyb20gJy4vc2NyaXB0cy9Eb20nO1xuLy8gTWFpbiBmdW5jdGlvbiB0byBzdGFydCB0aGUgYXBwbGljYXRpb25cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgRE9NIGFuZCBzdGFydCB0aGUgZ2FtZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvbSA9IERvbSgpO1xuICAgICAgICBkb20uc3RhcnRVcCgpO1xuICAgIH0pO1xufVxuLy8gUnVuIHRoZSBtYWluIGZ1bmN0aW9uIHdoZW4gdGhlIHNjcmlwdCBsb2Fkc1xubWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9