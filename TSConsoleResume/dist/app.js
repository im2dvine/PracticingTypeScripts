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

eval("\nvar name = \"Daesy\";\nvar allCapsName = name.toUpperCase();\nconsole.log(\"Name: \" + allCapsName);\nvar career = \"Creative / Photographer / Student\";\nconsole.log(\"Career: \" + career);\nvar description = \"I like pickles(:\";\nconsole.log(\"Description: \" + description);\nvar interests = [\"Art\", \"Cooking\", \"Space\", \"Mother Earth\", \"Physics\"];\nconsole.log(\"\\nMy Interests:\");\nfunction displayInterests(str) {\n    console.log(\"* \" + str);\n}\ndisplayInterests(\"Art\");\ndisplayInterests(\"Cooking\");\ndisplayInterests(\"Space\");\ndisplayInterests(\"Mother Earth\");\ndisplayInterests(\"Physics\");\nvar positions = [\n    \"Agent Assist at WellsFargo - Assisted with special projects and offered credible alternative options regarding process initiation, work structuring, utilization of resources to new hires \",\n    \"Claims Specialist at WellsFargo - Handled and resolved cardholder inquiries about fraud or merchant disputes in a friendly and courteous manner \",\n    \"Partner Support at Insight - Worked directly with partners via chat, phone, and email to ensure high quality customer service for cardholders \"\n];\nconsole.log(\"\\nMy Previous Experience: \");\nfunction displayPosition(companyName, jobTitle, jobDescription) {\n    console.log(\"* \" + jobTitle + \" at \" + companyName + \" - \" + jobDescription);\n}\ndisplayPosition(\"WellsFargo\", \"Agent Assist\", \"Assisted with special projects and offered credible alternative options regarding process initiation, work structuring, utilization of resources to new hires\");\ndisplayPosition(\"WellsFargo\", \"Claims Specialist\", \"Handled and resolved cardholder inquiries about fraud or merchant disputes in a friendly and courteous manner\");\ndisplayPosition(\"Insight\", \"Partner Support\", \"Worked directly with partners via chat, phone, and email to ensure high quality customer service for cardholders\");\nvar skills = [\"Bilingual\", \"Strong Work Ethic\", \"Swift\", \"Creative\", \"Quick Learner\", \"First Aid\", \"Certified Foodie\"];\nconsole.log(\"\\nMy Skills: \");\nfunction displaySkill(mySkill, bam) {\n    if (bam == true) {\n        console.log(\"*  BAM: \" + mySkill);\n    }\n    else if (bam == false) {\n        console.log(\"*  \" + mySkill);\n    }\n    ;\n}\n;\ndisplaySkill(\"Bilingual\", true);\ndisplaySkill(\"Strong Work Ethic\", false);\ndisplaySkill(\"Swift\", true);\ndisplaySkill(\"Creative\", true);\ndisplaySkill(\"Quick Learner\", false);\ndisplaySkill(\"First Aid\", false);\ndisplaySkill(\"Certified Foodie\", true);\n\n\n//# sourceURL=webpack://TSConsoleResume/./app.ts?");

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