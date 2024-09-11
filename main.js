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
    cursor: none;
    pointer-events: none;
}

.miss {
    background-color: var(--miss-color);
    cursor: none;
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
}
`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,0BAA0B;IAC1B,qBAAqB;IACrB,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,8BAA8B;IAC9B,SAAS;IACT,UAAU;IACV,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,6BAA6B;IAC7B,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,aAAa;IACb,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,mCAAmC;IACnC,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,SAAS;IACT,WAAW;IACX,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,mCAAmC;IACnC,kBAAkB;IAClB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,uBAAuB;IACvB,eAAe;;AAEnB;;AAEA;IACI,yCAAyC;IACzC,eAAe;AACnB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kCAAkC;IAClC,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,mCAAmC;IACnC,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,mCAAmC;IACnC,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;AACtB;;AAEA,0BAA0B;AAC1B;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,aAAa;AACjB;;AAEA;IACI,mCAAmC;IACnC,uBAAuB;IACvB,eAAe;IACf,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;AACtB","sourcesContent":["*{\n    --water-blue: #3ea4f0;\n    --water-blue-hover:#0a6bbf;\n    --ship-color: #444444;\n    --hit-color: #ff6b6b;\n    --miss-color: #c5c5c5;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background-color: #f0f0f0;\n}\n\n.main-window{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\nheader{\n    width: 100vw;\n    min-width: 350px;\n    text-align: center;\n    border-bottom: grey solid 2px;\n    align-self: center;\n}\n\n.title{\n    font-size: 2rem;\n    margin: 0;\n    padding: 1rem;\n    background-color: var(--water-blue);\n}\n\n#app{\n    display: flex;\n    flex-direction: column;\n    \n}\n\n#new-game-btn{\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-align: center;\n    margin-top: 1rem;\n    padding: 0.3rem;\n    background-color: var(--water-blue);\n    width: 8rem;\n    align-self: center;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n#new-game-btn:hover{\n    background-color: var(--water-blue-hover);\n}\n\n.game-container {\n    display: flex;\n    gap: 3rem;\n    width: 80vw;\n    justify-content: center;\n    flex-flow: row wrap;\n    margin-bottom: 2rem;\n}\n\n.board-container {\n    text-align: center;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    border: 1px solid ;\n    width: 350px;\n    height: 350px;\n}\n\n.cell {\n    background-color: var(--water-blue);\n    border: 1px solid black;\n    aspect-ratio: 1;\n    \n}\n\n#enemy-board > .cell:hover{\n    background-color: var(--water-blue-hover);\n    cursor: pointer;\n}\n\n.ship {\n    background-color: var(--ship-color);\n}\n\n.hit {\n    background-color: var(--hit-color);\n    cursor: none;\n    pointer-events: none;\n}\n\n.miss {\n    background-color: var(--miss-color);\n    cursor: none;\n    pointer-events: none;\n}\n\n#finale-result{\n    font-size: 3rem;\n    font-weight: bold;\n    text-align: center;\n    background-color: var(--water-blue);\n    align-self: center;\n    width: 20rem;\n    border-radius: 5px;\n}\n\n/* Ship Placement window */\n.placement-window {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0,0,0,0.3);\n    z-index: 1000;\n}\n\n.placement-cell {\n    background-color: var(--water-blue);\n    border: 1px solid black;\n    aspect-ratio: 1;\n    cursor: pointer;\n}\n\n.placement-cell.preview {\n    background-color: rgba(0, 255, 0, 0.3);\n}\n\n.placement-cell.invalid-preview {\n    background-color: rgb(255, 0, 0);\n}\n\n.placement-cell.ship-placed {\n    background-color: var(--ship-color);\n}\n\n.placement-controls {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.non-interactive {\n    pointer-events: none;\n    filter: blur(10px);\n}\n"],"sourceRoot":""}]);
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


function Dom() {
    const GRID_SIZE = 10;
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
        const result = gameboard.receiveAttack(col, row);
        if (result) {
            cell.classList.add('hit');
            const ship = gameboard.getShipAt(col, row);
            if (ship && ship.isSunk()) {
                console.log(ship.getName() + ' is sunk');
                updateGrid('enemy', gameboard);
            }
        }
        else {
            cell.classList.add('miss');
        }
        //Check if all ships is sunk
        if (gameboard.allShipsSunk) {
            GameFinale(gameboard);
        }
    }
    //Adding miss class to cell that near the sunk ship
    function updateGrid(containerId, gameboard) {
        const container = document.getElementById(`${containerId}-board`);
        if (!container)
            return;
        const cells = container.querySelectorAll('.cell');
        const missedCells = gameboard.getAllMissedCells();
        missedCells.forEach(([col, row]) => {
            const index = col * GRID_SIZE + row;
            cells[index].classList.add('miss');
        });
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
        const playerBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard('player');
        const enemyBoard = new _Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard('enemy');
        // Create the player's board first
        createGrid('player', playerBoard);
        // Place enemy ships randomly
        enemyBoard.placeShipsRandomly();
        // Then open the ship placement window
        (0,_ShipPlacementWindow__WEBPACK_IMPORTED_MODULE_1__.ShipPlacementWindow)(playerBoard, () => {
            // Only create the enemy board after ship placement is complete
            createGrid('enemy', enemyBoard);
        });
        // Start with ship placement for the player
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
        const finaleResult = document.getElementById('finale-result');
        if (gameboard.getName() === 'player') {
            finaleResult.textContent = 'Player Lose';
        }
        else {
            finaleResult.textContent = 'Player Win';
        }
    }
    return {
        startUp
    };
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
        this.SIZE = 10;
        this.numberOfShips = 0;
        this.name = name;
        this.board = [];
        this.missedShots = [];
        this.initialize();
    }
    initialize() {
        for (let i = 0; i < this.SIZE; i++) {
            this.board[i] = [];
            this.missedShots[i] = [];
            for (let j = 0; j < this.SIZE; j++) {
                this.board[i][j] = null;
                this.missedShots[i][j] = false;
            }
        }
    }
    getName() {
        return this.name;
    }
    // Place a ship on the board with additional checks
    placeShip(Ship, column, row) {
        let places = [];
        if (Ship.isVertical() === true) {
            // Check if ship placement is within bounds
            if (row + Ship.getLength() > this.SIZE || column < 0 || row < 0)
                return false;
            // Check for overlap and one-cell distance
            for (let i = 0; i < Ship.getLength(); i++) {
                if (!this.isCellAvailable(column, row + i))
                    return false;
            }
            // Place the ship after successful checks
            for (let i = 0; i < Ship.getLength(); i++) {
                this.board[column][row + i] = Ship;
                places.push([column, row + i]);
            }
        }
        else if (Ship.isVertical() === false) {
            // Check if ship placement is within bounds
            if (column + Ship.getLength() > this.SIZE || column < 0 || row < 0)
                return false;
            // Check for overlap and one-cell distance
            for (let i = 0; i < Ship.getLength(); i++) {
                if (!this.isCellAvailable(column + i, row))
                    return false;
            }
            // Place the ship after successful checks
            for (let i = 0; i < Ship.getLength(); i++) {
                this.board[column + i][row] = Ship;
                places.push([column + i, row]);
            }
        }
        this.ships.push({
            ship: Ship,
            places: places
        });
        this.numberOfShips++;
        return true;
    }
    // Helper to check if a position is within the game board bounds
    isWithinBounds(column, row) {
        return column >= 0 && column < this.SIZE && row >= 0 && row < this.SIZE;
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
        let ship = this.getShipAt(column, row);
        if (ship === null) {
            this.missedShots[column][row] = true;
            return false;
        }
        ship.getHit();
        if (ship.isSunk()) {
            this.numberOfShips--;
            this.markAdjacentCells(ship);
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
        for (let col = 0; col < this.SIZE; col++) {
            for (let row = 0; row < this.SIZE; row++) {
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
        return this.numberOfShips <= 0;
    }
    //Method to place ships randomly
    placeShipsRandomly() {
        const ships = [
            { name: 'Carrier', length: 5 },
            { name: 'Battleship', length: 4 },
            { name: 'Cruiser', length: 3 },
            { name: 'Submarine', length: 3 },
            { name: 'Destroyer', length: 2 }
        ];
        ships.forEach(shipInfo => {
            let placed = false;
            while (!placed) {
                const col = Math.floor(Math.random() * this.SIZE);
                const row = Math.floor(Math.random() * this.SIZE);
                const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
                const ship = new _Ship__WEBPACK_IMPORTED_MODULE_0__.Ship(shipInfo.name, shipInfo.length, orientation);
                if (this.placeShip(ship, col, row)) {
                    placed = true;
                }
            }
        });
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
        this.numberOfHits = 0;
        this.sunk = false;
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
        return this.numberOfHits;
    }
    // Checks if the ship is sunk
    isSunk() {
        return this.sunk;
    }
    // Registers a hit on the ship and checks if it's sunk
    getHit() {
        this.numberOfHits++;
        if (this.numberOfHits >= this.shipLength) {
            this.sunk = true;
        }
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
        playerBoard.placeShipsRandomly();
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
        const placementWindow = document.querySelector('.placement-window');
        if (placementWindow) {
            placementWindow.remove();
        }
        document.querySelector('.main-window').classList.remove('non-interactive');
        // Update the player's board with placed ships
        updatePlayerBoard();
        onFinish();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNzQjtBQUNLO0FBQ1M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQUc7QUFDdkI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL0RvbS50cyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9HYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvU2hpcC50cyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9TaGlwUGxhY2VtZW50V2luZG93LnRzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICAtLXdhdGVyLWJsdWU6ICMzZWE0ZjA7XG4gICAgLS13YXRlci1ibHVlLWhvdmVyOiMwYTZiYmY7XG4gICAgLS1zaGlwLWNvbG9yOiAjNDQ0NDQ0O1xuICAgIC0taGl0LWNvbG9yOiAjZmY2YjZiO1xuICAgIC0tbWlzcy1jb2xvcjogI2M1YzVjNTtcbn1cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG5cbi5tYWluLXdpbmRvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuaGVhZGVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBtaW4td2lkdGg6IDM1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiBncmV5IHNvbGlkIDJweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi50aXRsZXtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItYmx1ZSk7XG59XG5cbiNhcHB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxufVxuXG4jbmV3LWdhbWUtYnRue1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuM3JlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1ibHVlKTtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI25ldy1nYW1lLWJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1ibHVlLWhvdmVyKTtcbn1cblxuLmdhbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogM3JlbTtcbiAgICB3aWR0aDogODB2dztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5ib2FyZC1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLmNlbGwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgICBcbn1cblxuI2VuZW15LWJvYXJkID4gLmNlbGw6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItYmx1ZS1ob3Zlcik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2hpcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpdC1jb2xvcik7XG4gICAgY3Vyc29yOiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubWlzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzcy1jb2xvcik7XG4gICAgY3Vyc29yOiBub25lO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4jZmluYWxlLXJlc3VsdHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMjByZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBTaGlwIFBsYWNlbWVudCB3aW5kb3cgKi9cbi5wbGFjZW1lbnQtd2luZG93IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgei1pbmRleDogMTAwMDtcbn1cblxuLnBsYWNlbWVudC1jZWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1ibHVlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGxhY2VtZW50LWNlbGwucHJldmlldyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDAsIDAuMyk7XG59XG5cbi5wbGFjZW1lbnQtY2VsbC5pbnZhbGlkLXByZXZpZXcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuXG4ucGxhY2VtZW50LWNlbGwuc2hpcC1wbGFjZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xufVxuXG4ucGxhY2VtZW50LWNvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubm9uLWludGVyYWN0aXZlIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQSwwQkFBMEI7QUFDMUI7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIC0td2F0ZXItYmx1ZTogIzNlYTRmMDtcXG4gICAgLS13YXRlci1ibHVlLWhvdmVyOiMwYTZiYmY7XFxuICAgIC0tc2hpcC1jb2xvcjogIzQ0NDQ0NDtcXG4gICAgLS1oaXQtY29sb3I6ICNmZjZiNmI7XFxuICAgIC0tbWlzcy1jb2xvcjogI2M1YzVjNTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbn1cXG5cXG4ubWFpbi13aW5kb3d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLXdpZHRoOiAzNTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiBncmV5IHNvbGlkIDJweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1ibHVlKTtcXG59XFxuXFxuI2FwcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxufVxcblxcbiNuZXctZ2FtZS1idG57XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25ldy1nYW1lLWJ0bjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2F0ZXItYmx1ZS1ob3Zlcik7XFxufVxcblxcbi5nYW1lLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgd2lkdGg6IDgwdnc7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIDtcXG4gICAgd2lkdGg6IDM1MHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBcXG59XFxuXFxuI2VuZW15LWJvYXJkID4gLmNlbGw6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdhdGVyLWJsdWUtaG92ZXIpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaGlwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2hpcC1jb2xvcik7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQtY29sb3IpO1xcbiAgICBjdXJzb3I6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3MtY29sb3IpO1xcbiAgICBjdXJzb3I6IG5vbmU7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jZmluYWxlLXJlc3VsdHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1ibHVlKTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMjByZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLyogU2hpcCBQbGFjZW1lbnQgd2luZG93ICovXFxuLnBsYWNlbWVudC13aW5kb3cge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjMpO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbn1cXG5cXG4ucGxhY2VtZW50LWNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13YXRlci1ibHVlKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucGxhY2VtZW50LWNlbGwucHJldmlldyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAwLCAwLjMpO1xcbn1cXG5cXG4ucGxhY2VtZW50LWNlbGwuaW52YWxpZC1wcmV2aWV3IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5wbGFjZW1lbnQtY2VsbC5zaGlwLXBsYWNlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNoaXAtY29sb3IpO1xcbn1cXG5cXG4ucGxhY2VtZW50LWNvbnRyb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubm9uLWludGVyYWN0aXZlIHtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIGZpbHRlcjogYmx1cigxMHB4KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gYDwhRE9DVFlQRSBodG1sPlxuPGh0bWwgbGFuZz1cImVuXCI+XG48aGVhZD5cbiAgICA8bWV0YSBjaGFyc2V0PVwiVVRGLThcIj5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiPlxuICAgIDx0aXRsZT5NeSBQcm9qZWN0PC90aXRsZT5cbjwvaGVhZD5cbjxib2R5PlxuICAgIDxkaXYgY2xhc3M9XCJtYWluLXdpbmRvd1wiPlxuICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5CYXR0bGVzaGlwIGdhbWU8L2gxPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gaWQ9XCJhcHBcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuZXctZ2FtZS1idG5cIj4gTmV3IEdhbWUgPC9kaXY+XG4gICAgICAgICAgICA8aDIgaWQ9XCJmaW5hbGUtcmVzdWx0XCI+PC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlBsYXllciBib2FyZDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib2FyZFwiIGlkPVwicGxheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDEweDEwIGdyaWQgd2lsbCBiZSBnZW5lcmF0ZWQgYnkgSmF2YVNjcmlwdCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+RW5lbXkgYm9hcmQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9hcmRcIiBpZD1cImVuZW15XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDEweDEwIGdyaWQgd2lsbCBiZSBnZW5lcmF0ZWQgYnkgSmF2YVNjcmlwdCAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuPC9ib2R5PlxuPC9odG1sPmA7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiO1xuaW1wb3J0IHsgU2hpcFBsYWNlbWVudFdpbmRvdyB9IGZyb20gXCIuL1NoaXBQbGFjZW1lbnRXaW5kb3dcIjtcbmV4cG9ydCBmdW5jdGlvbiBEb20oKSB7XG4gICAgY29uc3QgR1JJRF9TSVpFID0gMTA7XG4gICAgLy8gQ3JlYXRlIGEgZ3JpZCBmb3IgdGhlIGdhbWUgYm9hcmRcbiAgICBmdW5jdGlvbiBjcmVhdGVHcmlkKGNvbnRhaW5lcklkLCBnYW1lYm9hcmQpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y29udGFpbmVySWR9LWJvYXJkYCk7XG4gICAgICAgIGlmICghY29udGFpbmVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7IC8vIENsZWFyIGV4aXN0aW5nIGNvbnRlbnRcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkJyk7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEdSSURfU0laRTsgY29sKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKGAke2NvbnRhaW5lcklkfS1jZWxsYCk7XG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IHJvdy50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBjb2wudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVySWQgPT09ICdlbmVteScpXG4gICAgICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBoYW5kbGVDZWxsQ2xpY2soY29sLCByb3csIGdhbWVib2FyZCwgY2VsbCkpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBIYW5kbGUgY2xpY2sgZXZlbnRzIG9uIHRoZSBlbmVteSBib2FyZFxuICAgIGZ1bmN0aW9uIGhhbmRsZUNlbGxDbGljayhjb2wsIHJvdywgZ2FtZWJvYXJkLCBjZWxsKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvbCwgcm93KTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAgPSBnYW1lYm9hcmQuZ2V0U2hpcEF0KGNvbCwgcm93KTtcbiAgICAgICAgICAgIGlmIChzaGlwICYmIHNoaXAuaXNTdW5rKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaGlwLmdldE5hbWUoKSArICcgaXMgc3VuaycpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUdyaWQoJ2VuZW15JywgZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9XG4gICAgICAgIC8vQ2hlY2sgaWYgYWxsIHNoaXBzIGlzIHN1bmtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5hbGxTaGlwc1N1bmspIHtcbiAgICAgICAgICAgIEdhbWVGaW5hbGUoZ2FtZWJvYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL0FkZGluZyBtaXNzIGNsYXNzIHRvIGNlbGwgdGhhdCBuZWFyIHRoZSBzdW5rIHNoaXBcbiAgICBmdW5jdGlvbiB1cGRhdGVHcmlkKGNvbnRhaW5lcklkLCBnYW1lYm9hcmQpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7Y29udGFpbmVySWR9LWJvYXJkYCk7XG4gICAgICAgIGlmICghY29udGFpbmVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBjZWxscyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2VsbCcpO1xuICAgICAgICBjb25zdCBtaXNzZWRDZWxscyA9IGdhbWVib2FyZC5nZXRBbGxNaXNzZWRDZWxscygpO1xuICAgICAgICBtaXNzZWRDZWxscy5mb3JFYWNoKChbY29sLCByb3ddKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IGNvbCAqIEdSSURfU0laRSArIHJvdztcbiAgICAgICAgICAgIGNlbGxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgYSBuZXcgZ2FtZSBib2FyZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZU5ld0dhbWVib2FyZCgpIHtcbiAgICAgICAgZGVsZXRlUHJldkJvYXJkcygpO1xuICAgICAgICBjb25zdCBnYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZ2FtZS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmRDb250YWluZXIgPSBjcmVhdGVCb2FyZENvbnRhaW5lcignUGxheWVyJyk7XG4gICAgICAgIGNvbnN0IEVuZW15Qm9hcmRDb250YWluZXIgPSBjcmVhdGVCb2FyZENvbnRhaW5lcignRW5lbXknKTtcbiAgICAgICAgZ2FtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5ZXJCb2FyZENvbnRhaW5lcik7XG4gICAgICAgIGdhbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoRW5lbXlCb2FyZENvbnRhaW5lcik7XG4gICAgICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGdhbWVDb250YWluZXIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoJ3BsYXllcicpO1xuICAgICAgICBjb25zdCBlbmVteUJvYXJkID0gbmV3IEdhbWVib2FyZCgnZW5lbXknKTtcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwbGF5ZXIncyBib2FyZCBmaXJzdFxuICAgICAgICBjcmVhdGVHcmlkKCdwbGF5ZXInLCBwbGF5ZXJCb2FyZCk7XG4gICAgICAgIC8vIFBsYWNlIGVuZW15IHNoaXBzIHJhbmRvbWx5XG4gICAgICAgIGVuZW15Qm9hcmQucGxhY2VTaGlwc1JhbmRvbWx5KCk7XG4gICAgICAgIC8vIFRoZW4gb3BlbiB0aGUgc2hpcCBwbGFjZW1lbnQgd2luZG93XG4gICAgICAgIFNoaXBQbGFjZW1lbnRXaW5kb3cocGxheWVyQm9hcmQsICgpID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgY3JlYXRlIHRoZSBlbmVteSBib2FyZCBhZnRlciBzaGlwIHBsYWNlbWVudCBpcyBjb21wbGV0ZVxuICAgICAgICAgICAgY3JlYXRlR3JpZCgnZW5lbXknLCBlbmVteUJvYXJkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFN0YXJ0IHdpdGggc2hpcCBwbGFjZW1lbnQgZm9yIHRoZSBwbGF5ZXJcbiAgICB9XG4gICAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGZvciBhIGdhbWUgYm9hcmRcbiAgICBmdW5jdGlvbiBjcmVhdGVCb2FyZENvbnRhaW5lcih0aXRsZSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBgJHt0aXRsZX0gYm9hcmRgO1xuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBib2FyZC5pZCA9IGAke3RpdGxlLnRvTG93ZXJDYXNlKCl9LWJvYXJkYDtcbiAgICAgICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2FyZCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuICAgIC8vIFJlbW92ZSBhbnkgZXhpc3RpbmcgZ2FtZSBib2FyZHNcbiAgICBmdW5jdGlvbiBkZWxldGVQcmV2Qm9hcmRzKCkge1xuICAgICAgICBsZXQgZ2FtZUNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1jb250YWluZXInKTtcbiAgICAgICAgZ2FtZUNvbnRhaW5lcnMuZm9yRWFjaChjb250YWluZXIgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgZ2FtZVxuICAgIGZ1bmN0aW9uIHN0YXJ0VXAoKSB7XG4gICAgICAgIGNyZWF0ZU5ld0dhbWVib2FyZCgpO1xuICAgICAgICBjb25zdCBuZXdHYW1lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1nYW1lLWJ0bicpO1xuICAgICAgICBpZiAobmV3R2FtZUJ0bikge1xuICAgICAgICAgICAgbmV3R2FtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld0dhbWVib2FyZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiTmV3IGdhbWUgYnV0dG9uIG5vdCBmb3VuZFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL0ZpbmlzaCB0aGUgZ2FtZVxuICAgIGZ1bmN0aW9uIEdhbWVGaW5hbGUoZ2FtZWJvYXJkKSB7XG4gICAgICAgIGNvbnN0IGZpbmFsZVJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5hbGUtcmVzdWx0Jyk7XG4gICAgICAgIGlmIChnYW1lYm9hcmQuZ2V0TmFtZSgpID09PSAncGxheWVyJykge1xuICAgICAgICAgICAgZmluYWxlUmVzdWx0LnRleHRDb250ZW50ID0gJ1BsYXllciBMb3NlJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpbmFsZVJlc3VsdC50ZXh0Q29udGVudCA9ICdQbGF5ZXIgV2luJztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydFVwXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tICcuL1NoaXAnO1xuLy8gR2FtZWJvYXJkIGNsYXNzIHJlcHJlc2VudHMgdGhlIGdhbWUgYm9hcmQgZm9yIGEgcGxheWVyXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5TSVpFID0gMTA7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZTaGlwcyA9IDA7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICAgICAgdGhpcy5taXNzZWRTaG90cyA9IFtdO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlNJWkU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFtpXSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5taXNzZWRTaG90c1tpXSA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLlNJWkU7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMubWlzc2VkU2hvdHNbaV1bal0gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICAvLyBQbGFjZSBhIHNoaXAgb24gdGhlIGJvYXJkIHdpdGggYWRkaXRpb25hbCBjaGVja3NcbiAgICBwbGFjZVNoaXAoU2hpcCwgY29sdW1uLCByb3cpIHtcbiAgICAgICAgbGV0IHBsYWNlcyA9IFtdO1xuICAgICAgICBpZiAoU2hpcC5pc1ZlcnRpY2FsKCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHNoaXAgcGxhY2VtZW50IGlzIHdpdGhpbiBib3VuZHNcbiAgICAgICAgICAgIGlmIChyb3cgKyBTaGlwLmdldExlbmd0aCgpID4gdGhpcy5TSVpFIHx8IGNvbHVtbiA8IDAgfHwgcm93IDwgMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcCBhbmQgb25lLWNlbGwgZGlzdGFuY2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2VsbEF2YWlsYWJsZShjb2x1bW4sIHJvdyArIGkpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQbGFjZSB0aGUgc2hpcCBhZnRlciBzdWNjZXNzZnVsIGNoZWNrc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2NvbHVtbl1bcm93ICsgaV0gPSBTaGlwO1xuICAgICAgICAgICAgICAgIHBsYWNlcy5wdXNoKFtjb2x1bW4sIHJvdyArIGldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChTaGlwLmlzVmVydGljYWwoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHNoaXAgcGxhY2VtZW50IGlzIHdpdGhpbiBib3VuZHNcbiAgICAgICAgICAgIGlmIChjb2x1bW4gKyBTaGlwLmdldExlbmd0aCgpID4gdGhpcy5TSVpFIHx8IGNvbHVtbiA8IDAgfHwgcm93IDwgMClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAvLyBDaGVjayBmb3Igb3ZlcmxhcCBhbmQgb25lLWNlbGwgZGlzdGFuY2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQ2VsbEF2YWlsYWJsZShjb2x1bW4gKyBpLCByb3cpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBQbGFjZSB0aGUgc2hpcCBhZnRlciBzdWNjZXNzZnVsIGNoZWNrc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2NvbHVtbiArIGldW3Jvd10gPSBTaGlwO1xuICAgICAgICAgICAgICAgIHBsYWNlcy5wdXNoKFtjb2x1bW4gKyBpLCByb3ddKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goe1xuICAgICAgICAgICAgc2hpcDogU2hpcCxcbiAgICAgICAgICAgIHBsYWNlczogcGxhY2VzXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm51bWJlck9mU2hpcHMrKztcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIEhlbHBlciB0byBjaGVjayBpZiBhIHBvc2l0aW9uIGlzIHdpdGhpbiB0aGUgZ2FtZSBib2FyZCBib3VuZHNcbiAgICBpc1dpdGhpbkJvdW5kcyhjb2x1bW4sIHJvdykge1xuICAgICAgICByZXR1cm4gY29sdW1uID49IDAgJiYgY29sdW1uIDwgdGhpcy5TSVpFICYmIHJvdyA+PSAwICYmIHJvdyA8IHRoaXMuU0laRTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgYSBjZWxsIGlzIGF2YWlsYWJsZSAobm8gb3ZlcmxhcCkgYW5kIGhhcyBhdCBsZWFzdCBvbmUgY2VsbCBkaXN0YW5jZVxuICAgIGlzQ2VsbEF2YWlsYWJsZShjb2x1bW4sIHJvdykge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtjb2x1bW5dW3Jvd10gIT09IG51bGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7IC8vIENoZWNrIGlmIHRoZXJlJ3MgYWxyZWFkeSBhIHNoaXBcbiAgICAgICAgLy8gQ2hlY2sgc3Vycm91bmRpbmcgY2VsbHMgZm9yIG9uZS1jZWxsIGRpc3RhbmNlXG4gICAgICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSAxOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAtMTsgaiA8PSAxOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja0NvbCA9IGNvbHVtbiArIGk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tSb3cgPSByb3cgKyBqO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzV2l0aGluQm91bmRzKGNoZWNrQ29sLCBjaGVja1JvdykgJiYgdGhpcy5ib2FyZFtjaGVja0NvbF1bY2hlY2tSb3ddICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gQSBzaGlwIGlzIHRvbyBjbG9zZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBzaGlwIGF0IGEgc3BlY2lmaWMgcG9zaXRpb25cbiAgICBnZXRTaGlwQXQoY29sdW1uLCByb3cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmRbY29sdW1uXVtyb3ddO1xuICAgIH1cbiAgICAvLyBSZWNlaXZlIGFuIGF0dGFjayBhdCBhIHNwZWNpZmljIHBvc2l0aW9uXG4gICAgcmVjZWl2ZUF0dGFjayhjb2x1bW4sIHJvdykge1xuICAgICAgICBsZXQgc2hpcCA9IHRoaXMuZ2V0U2hpcEF0KGNvbHVtbiwgcm93KTtcbiAgICAgICAgaWYgKHNoaXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubWlzc2VkU2hvdHNbY29sdW1uXVtyb3ddID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBzaGlwLmdldEhpdCgpO1xuICAgICAgICBpZiAoc2hpcC5pc1N1bmsoKSkge1xuICAgICAgICAgICAgdGhpcy5udW1iZXJPZlNoaXBzLS07XG4gICAgICAgICAgICB0aGlzLm1hcmtBZGphY2VudENlbGxzKHNoaXApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBtYXJrQWRqYWNlbnRDZWxscyhzaGlwKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbnMgPSBbWy0xLCAtMV0sIFstMSwgMF0sIFstMSwgMV0sIFswLCAtMV0sIFswLCAxXSwgWzEsIC0xXSwgWzEsIDBdLCBbMSwgMV1dO1xuICAgICAgICB0aGlzLnNoaXBzLmZvckVhY2goKHNoaXBJbmZvKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcEluZm8uc2hpcCA9PT0gc2hpcCkge1xuICAgICAgICAgICAgICAgIHNoaXBJbmZvLnBsYWNlcy5mb3JFYWNoKChwbGFjZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb25zLmZvckVhY2goKFtkeCwgZHldKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGpDb2wgPSBwbGFjZVswXSArIGR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRqUm93ID0gcGxhY2VbMV0gKyBkeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzV2l0aGluQm91bmRzKGFkakNvbCwgYWRqUm93KSAmJiB0aGlzLmdldFNoaXBBdChhZGpDb2wsIGFkalJvdykgIT09IHNoaXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1pc3NlZFNob3RzW2FkakNvbF1bYWRqUm93XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gTmV3IG1ldGhvZCB0byBnZXQgYWxsIGNlbGxzIHRoYXQgc2hvdWxkIGJlIG1hcmtlZCBhcyAnbWlzcydcbiAgICBnZXRBbGxNaXNzZWRDZWxscygpIHtcbiAgICAgICAgbGV0IG1pc3NlZENlbGxzID0gW107XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IHRoaXMuU0laRTsgY29sKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMuU0laRTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5taXNzZWRTaG90c1tjb2xdW3Jvd10pIHtcbiAgICAgICAgICAgICAgICAgICAgbWlzc2VkQ2VsbHMucHVzaChbY29sLCByb3ddKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pc3NlZENlbGxzO1xuICAgIH1cbiAgICAvLyBHZXQgYWxsIG1pc3NlZCBhdHRhY2tzXG4gICAgZ2V0TWlzc2VkU2hvdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pc3NlZFNob3RzO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBhbGwgc2hpcHMgYXJlIHN1bmtcbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlck9mU2hpcHMgPD0gMDtcbiAgICB9XG4gICAgLy9NZXRob2QgdG8gcGxhY2Ugc2hpcHMgcmFuZG9tbHlcbiAgICBwbGFjZVNoaXBzUmFuZG9tbHkoKSB7XG4gICAgICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICAgICAgeyBuYW1lOiAnQ2FycmllcicsIGxlbmd0aDogNSB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQmF0dGxlc2hpcCcsIGxlbmd0aDogNCB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnQ3J1aXNlcicsIGxlbmd0aDogMyB9LFxuICAgICAgICAgICAgeyBuYW1lOiAnU3VibWFyaW5lJywgbGVuZ3RoOiAzIH0sXG4gICAgICAgICAgICB7IG5hbWU6ICdEZXN0cm95ZXInLCBsZW5ndGg6IDIgfVxuICAgICAgICBdO1xuICAgICAgICBzaGlwcy5mb3JFYWNoKHNoaXBJbmZvID0+IHtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5TSVpFKTtcbiAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLlNJWkUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKHNoaXBJbmZvLm5hbWUsIHNoaXBJbmZvLmxlbmd0aCwgb3JpZW50YXRpb24pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYWNlU2hpcChzaGlwLCBjb2wsIHJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIi8vIFNoaXAgY2xhc3MgcmVwcmVzZW50cyBhIHNoaXAgaW4gdGhlIEJhdHRsZXNoaXAgZ2FtZVxuZXhwb3J0IGNsYXNzIFNoaXAge1xuICAgIC8vIENvbnN0cnVjdG9yIGluaXRpYWxpemVzIGEgc2hpcCB3aXRoIGEgZ2l2ZW4gbGVuZ3RoXG4gICAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnNoaXBMZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMubnVtYmVyT2ZIaXRzID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcbiAgICB9XG4gICAgLy8gUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBzaGlwXG4gICAgZ2V0TGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGlwTGVuZ3RoO1xuICAgIH1cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cbiAgICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaGl0cyB0aGUgc2hpcCBoYXMgdGFrZW5cbiAgICBnZXROdW1iZXJPZkhpdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlck9mSGl0cztcbiAgICB9XG4gICAgLy8gQ2hlY2tzIGlmIHRoZSBzaGlwIGlzIHN1bmtcbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1bms7XG4gICAgfVxuICAgIC8vIFJlZ2lzdGVycyBhIGhpdCBvbiB0aGUgc2hpcCBhbmQgY2hlY2tzIGlmIGl0J3Mgc3Vua1xuICAgIGdldEhpdCgpIHtcbiAgICAgICAgdGhpcy5udW1iZXJPZkhpdHMrKztcbiAgICAgICAgaWYgKHRoaXMubnVtYmVyT2ZIaXRzID49IHRoaXMuc2hpcExlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc1ZlcnRpY2FsKCkge1xuICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJylcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL1NoaXBcIjtcbmltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZFwiO1xuZXhwb3J0IGZ1bmN0aW9uIFNoaXBQbGFjZW1lbnRXaW5kb3cocGxheWVyQm9hcmQsIG9uRmluaXNoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4td2luZG93JykuY2xhc3NMaXN0LmFkZCgnbm9uLWludGVyYWN0aXZlJyk7XG4gICAgY29uc3QgR1JJRF9TSVpFID0gMTA7XG4gICAgY29uc3Qgc2hpcHMgPSBbXG4gICAgICAgIHsgbmFtZTogJ0NhcnJpZXInLCBsZW5ndGg6IDUgfSxcbiAgICAgICAgeyBuYW1lOiAnQmF0dGxlc2hpcCcsIGxlbmd0aDogNCB9LFxuICAgICAgICB7IG5hbWU6ICdDcnVpc2VyJywgbGVuZ3RoOiAzIH0sXG4gICAgICAgIHsgbmFtZTogJ1N1Ym1hcmluZScsIGxlbmd0aDogMyB9LFxuICAgICAgICB7IG5hbWU6ICdEZXN0cm95ZXInLCBsZW5ndGg6IDIgfVxuICAgIF07XG4gICAgbGV0IGN1cnJlbnRTaGlwSW5kZXggPSAwO1xuICAgIGxldCBjdXJyZW50T3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgIC8vIENyZWF0ZSB0aGUgc2hpcCBwbGFjZW1lbnQgd2luZG93XG4gICAgZnVuY3Rpb24gY3JlYXRlUGxhY2VtZW50V2luZG93KCkge1xuICAgICAgICBjb25zdCBwbGFjZW1lbnRXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGxhY2VtZW50V2luZG93LmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudC13aW5kb3cnKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQbGFjZSBZb3VyIFNoaXBzJztcbiAgICAgICAgcGxhY2VtZW50V2luZG93LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY29uc3QgZ3JpZCA9IGNyZWF0ZVBsYWNlbWVudEdyaWQoKTtcbiAgICAgICAgcGxhY2VtZW50V2luZG93LmFwcGVuZENoaWxkKGdyaWQpO1xuICAgICAgICBjb25zdCBjb250cm9scyA9IGNyZWF0ZUNvbnRyb2xzKCk7XG4gICAgICAgIHBsYWNlbWVudFdpbmRvdy5hcHBlbmRDaGlsZChjb250cm9scyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKHBsYWNlbWVudFdpbmRvdywgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gQ3JlYXRlIHRoZSBncmlkIGZvciBzaGlwIHBsYWNlbWVudFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBsYWNlbWVudEdyaWQoKSB7XG4gICAgICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdib2FyZCcpO1xuICAgICAgICBncmlkLmNsYXNzTGlzdC5hZGQoJ3BsYWNlbWVudC1ib2FyZCcpO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBHUklEX1NJWkU7IGNvbCsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBHUklEX1NJWkU7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2VtZW50LWNlbGwnKTtcbiAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gcm93LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGNvbC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBwbGFjZVNoaXAoY29sLCByb3cpKTtcbiAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHByZXZpZXdTaGlwKGNvbCwgcm93KSk7XG4gICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNsZWFyUHJldmlldyk7XG4gICAgICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JpZDtcbiAgICB9XG4gICAgLy9SZXN0YXJ0IHBsYWNlbWVudCBib1xuICAgIGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIGN1cnJlbnRTaGlwSW5kZXggPSAwO1xuICAgICAgICBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoJ3BsYXllcicpO1xuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtY2VsbCcpO1xuICAgICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBDcmVhdGUgY29udHJvbCBlbGVtZW50cyAocm90YXRlIGJ1dHRvbiBhbmQgc2hpcCBpbmZvKVxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRyb2xzKCkge1xuICAgICAgICBjb25zdCBjb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250cm9scy5jbGFzc0xpc3QuYWRkKCdwbGFjZW1lbnQtY29udHJvbHMnKTtcbiAgICAgICAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdSb3RhdGUgU2hpcCc7XG4gICAgICAgIHJvdGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJvdGF0ZVNoaXApO1xuICAgICAgICBjb250cm9scy5hcHBlbmRDaGlsZChyb3RhdGVCdXR0b24pO1xuICAgICAgICBjb25zdCBSYW5kb21CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgUmFuZG9tQnRuLnRleHRDb250ZW50ID0gJ1JhbmRvbWl6ZSc7XG4gICAgICAgIFJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJhbmRvbWl6ZSk7XG4gICAgICAgIGNvbnRyb2xzLmFwcGVuZENoaWxkKFJhbmRvbUJ0bik7XG4gICAgICAgIGNvbnN0IHJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmVzdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXN0YXJ0JztcbiAgICAgICAgcmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc3RhcnQpO1xuICAgICAgICBjb250cm9scy5hcHBlbmRDaGlsZChyZXN0YXJ0QnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzO1xuICAgIH1cbiAgICBmdW5jdGlvbiByYW5kb21pemUoKSB7XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcHNSYW5kb21seSgpO1xuICAgICAgICBmaW5pc2hQbGFjZW1lbnQoKTtcbiAgICB9XG4gICAgLy8gUm90YXRlIHRoZSBjdXJyZW50IHNoaXAgb3JpZW50YXRpb25cbiAgICBmdW5jdGlvbiByb3RhdGVTaGlwKCkge1xuICAgICAgICBjdXJyZW50T3JpZW50YXRpb24gPSBjdXJyZW50T3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJyA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICAgIC8vIFBsYWNlIGEgc2hpcCBvbiB0aGUgYm9hcmRcbiAgICBmdW5jdGlvbiBwbGFjZVNoaXAoY29sLCByb3cpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwc1tjdXJyZW50U2hpcEluZGV4XTtcbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGN1cnJlbnRTaGlwLm5hbWUsIGN1cnJlbnRTaGlwLmxlbmd0aCwgY3VycmVudE9yaWVudGF0aW9uKTtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkLnBsYWNlU2hpcChzaGlwLCBjb2wsIHJvdykpIHtcbiAgICAgICAgICAgIHVwZGF0ZUdyaWQoY29sLCByb3cpO1xuICAgICAgICAgICAgY3VycmVudFNoaXBJbmRleCsrO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRTaGlwSW5kZXggPj0gc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoUGxhY2VtZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBncmlkIGFmdGVyIHBsYWNpbmcgYSBzaGlwXG4gICAgZnVuY3Rpb24gdXBkYXRlR3JpZChjb2wsIHJvdykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBzW2N1cnJlbnRTaGlwSW5kZXhdO1xuICAgICAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGFjZW1lbnQtY2VsbCcpO1xuICAgICAgICBpZiAoY3VycmVudE9yaWVudGF0aW9uID09ICd2ZXJ0aWNhbCcpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gY29sICogR1JJRF9TSVpFICsgKHJvdyArIGkpO1xuICAgICAgICAgICAgICAgIGNlbGxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzaGlwLXBsYWNlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudE9yaWVudGF0aW9uID09ICdob3Jpem9udGFsJylcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAoY29sICsgaSkgKiBHUklEX1NJWkUgKyByb3c7XG4gICAgICAgICAgICAgICAgY2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NoaXAtcGxhY2VkJyk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIC8vIFByZXZpZXcgc2hpcCBwbGFjZW1lbnQgb24gaG92ZXJcbiAgICBmdW5jdGlvbiBwcmV2aWV3U2hpcChjb2wsIHJvdykge1xuICAgICAgICBjbGVhclByZXZpZXcoKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwc1tjdXJyZW50U2hpcEluZGV4XTtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LWNlbGwnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50U2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJldmlld1JvdyA9IGN1cnJlbnRPcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJyA/IHJvdyArIGkgOiByb3c7XG4gICAgICAgICAgICBjb25zdCBwcmV2aWV3Q29sID0gY3VycmVudE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcgPyBjb2wgKyBpIDogY29sO1xuICAgICAgICAgICAgaWYgKHByZXZpZXdSb3cgPCBHUklEX1NJWkUgJiYgcHJldmlld0NvbCA8IEdSSURfU0laRSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcHJldmlld0NvbCAqIEdSSURfU0laRSArIHByZXZpZXdSb3c7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWRQbGFjZW1lbnQocm93LCBjb2wsIGN1cnJlbnRTaGlwLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3ByZXZpZXcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLXByZXZpZXcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgcGxhY2VtZW50IGlzIHZhbGlkXG4gICAgZnVuY3Rpb24gaXNWYWxpZFBsYWNlbWVudChyb3csIGNvbCwgc2hpcExlbmd0aCkge1xuICAgICAgICBpZiAoY3VycmVudE9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2wgKyBzaGlwTGVuZ3RoIDw9IEdSSURfU0laRTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByb3cgKyBzaGlwTGVuZ3RoIDw9IEdSSURfU0laRTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBDbGVhciB0aGUgc2hpcCBwbGFjZW1lbnQgcHJldmlld1xuICAgIGZ1bmN0aW9uIGNsZWFyUHJldmlldygpIHtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxhY2VtZW50LWNlbGwnKTtcbiAgICAgICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdwcmV2aWV3Jyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQtcHJldmlldycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheWVyQm9hcmQoKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItYm9hcmQnKTtcbiAgICAgICAgaWYgKCFwbGF5ZXJCb2FyZEVsZW1lbnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IGNlbGxzID0gcGxheWVyQm9hcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jZWxsJyk7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IEdSSURfU0laRTsgY29sKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IEdSSURfU0laRTsgcm93KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwID0gcGxheWVyQm9hcmQuZ2V0U2hpcEF0KGNvbCwgcm93KTtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNvbCAqIEdSSURfU0laRSArIHJvdztcbiAgICAgICAgICAgICAgICAgICAgY2VsbHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmluaXNoIHRoZSBzaGlwIHBsYWNlbWVudCBwaGFzZVxuICAgIGZ1bmN0aW9uIGZpbmlzaFBsYWNlbWVudCgpIHtcbiAgICAgICAgY29uc3QgcGxhY2VtZW50V2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYWNlbWVudC13aW5kb3cnKTtcbiAgICAgICAgaWYgKHBsYWNlbWVudFdpbmRvdykge1xuICAgICAgICAgICAgcGxhY2VtZW50V2luZG93LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdpbmRvdycpLmNsYXNzTGlzdC5yZW1vdmUoJ25vbi1pbnRlcmFjdGl2ZScpO1xuICAgICAgICAvLyBVcGRhdGUgdGhlIHBsYXllcidzIGJvYXJkIHdpdGggcGxhY2VkIHNoaXBzXG4gICAgICAgIHVwZGF0ZVBsYXllckJvYXJkKCk7XG4gICAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIC8vIEluaXRpYWxpemUgdGhlIHNoaXAgcGxhY2VtZW50IHdpbmRvd1xuICAgIGNyZWF0ZVBsYWNlbWVudFdpbmRvdygpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gSW1wb3J0IG5lY2Vzc2FyeSBmaWxlcyBhbmQgc3R5bGVzXG5pbXBvcnQgJy4vaW5kZXguaHRtbCc7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcbmltcG9ydCB7IERvbSB9IGZyb20gJy4vc2NyaXB0cy9Eb20nO1xuLy8gTWFpbiBmdW5jdGlvbiB0byBzdGFydCB0aGUgYXBwbGljYXRpb25cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgRE9NIGFuZCBzdGFydCB0aGUgZ2FtZVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRvbSA9IERvbSgpO1xuICAgICAgICBkb20uc3RhcnRVcCgpO1xuICAgIH0pO1xufVxuLy8gUnVuIHRoZSBtYWluIGZ1bmN0aW9uIHdoZW4gdGhlIHNjcmlwdCBsb2Fkc1xubWFpbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9