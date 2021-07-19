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

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/***/ (() => {

eval("\nvar diceContainer = $(\"#die-container\");\nvar dieArray = [];\nvar idNumber = 0;\nvar Die = /** @class */ (function () {\n    function Die() {\n        var _this = this;\n        this.value;\n        this.roll();\n        this.div = $(\"<div class=dice></div>\");\n        this.h1 = $(\"<h1></h1>\");\n        this.id = idNumber;\n        this.div.attr(\"id\", this.id);\n        this.div.append(this.dieFace());\n        diceContainer.append(this.div);\n        this.div.click(function () {\n            _this.roll();\n            _this.div.empty().html(_this.dieFace());\n        });\n        this.div.dblclick(function () {\n            _this.removeDie();\n        });\n    }\n    Die.prototype.roll = function () {\n        this.value = Math.floor((Math.random() * 6) + 1);\n    };\n    Die.prototype.removeDie = function () {\n        var _this = this;\n        $(\"#\" + this.id).remove();\n        var index = dieArray.findIndex(function (dice) { return dice.id === _this.id; });\n        dieArray.splice(index, 1);\n    };\n    Die.prototype.dieFace = function (unicode) {\n        if (this.value === 1) {\n            unicode = '&#9856;';\n            return unicode;\n        }\n        else if (this.value === 2) {\n            unicode = '&#9857;';\n            return unicode;\n        }\n        else if (this.value === 3) {\n            unicode = '&#9858;';\n            return unicode;\n        }\n        else if (this.value === 4) {\n            unicode = '&#9859;';\n            return unicode;\n        }\n        else if (this.value === 5) {\n            unicode = '&#9860;';\n            return unicode;\n        }\n        else if (this.value === 6) {\n            unicode = '&#9861;';\n            return unicode;\n        }\n    };\n    return Die;\n}());\nfunction sumDice() {\n    var total = 0;\n    for (var i = 0; i < dieArray.length; i++) {\n        total += dieArray[i].value;\n    }\n    alert(\"Total Sum of Die Rolled: \" + total);\n}\n;\n$(\"#generate-dice\").click(function () {\n    var d = new Die();\n    dieArray.push(d);\n    idNumber++;\n});\n$(\"#roll-dice\").click(function () {\n    for (var i = 0; i < dieArray.length; i++) {\n        dieArray[i].roll();\n        $(\"#\" + i).html(dieArray[i].dieFace());\n    }\n});\n$(\"#sum-dice\").click(sumDice);\n\n\n//# sourceURL=webpack://TSDiceyBusiness/./app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app.ts"]();
/******/ 	
/******/ })()
;