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

eval("\nvar myName = \"Daesy\";\nvar numOfStates = 50;\nvar result = 5 + 4;\nfunction sayHello() {\n    alert(\"Hello World!\");\n}\nsayHello();\nfunction checkAge(name, age) {\n    if (age < 21) {\n        alert(\"Sorry \" + name + \", you aren't old enough to view this page!\");\n    }\n}\ncheckAge(\"Charles\", 21);\ncheckAge(\"Abby\", 27);\ncheckAge(\"James\", 18);\ncheckAge(\"John\", 17);\nvar myFavoriteVegetables = [\"Avocado\", \"Peppers\", \"Mushrooms\", \"Pickles\", \"Broccoli\", \"Spinach\"];\nfor (var i = 0; i < myFavoriteVegetables.length; i++) {\n    console.log(myFavoriteVegetables[i]);\n}\nvar pet = {\n    name: \"Bruno\",\n    breed: \"Cat\"\n};\nconsole.log(pet.name, pet.breed);\nvar humans = [\n    {\n        name: \"Daze\",\n        age: 29\n    },\n    {\n        name: \"Rico\",\n        age: 25\n    },\n    {\n        name: \"Kayla\",\n        age: 29\n    },\n    {\n        name: \"Javi\",\n        age: 20\n    },\n    {\n        name: \"Yari\",\n        age: 20\n    }\n];\nfor (var i = 0; i < humans.length; i++) {\n    checkAge(humans[i].name, humans[i].age);\n}\nfunction getLength(str) {\n    return str.length;\n}\nvar numberResult = getLength(\"Hello World\");\nif (numberResult % 2 == 0) {\n    console.log(\"The world is nice and even!\");\n}\nelse {\n    console.log(\"The world is an odd place!\");\n}\n;\n\n\n//# sourceURL=webpack://PractingTypeScripts/./app.ts?");

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