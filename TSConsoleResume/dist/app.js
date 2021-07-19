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

eval("\nvar name = \"Daesy\";\nvar allCapsName = name.toUpperCase();\nconsole.log(\"Name: \" + allCapsName);\nvar career = \"Creative / Photographer / Student\";\nconsole.log(\"Career: \" + career);\nvar description = \"I like pickles(:\";\nconsole.log(\"Description: \" + description);\nvar interests = [\"Art\", \"Cooking\", \"Space\", \"Mother Earth\", \"Physics\"];\nconsole.log(\"\\nMy Interests:\");\nfunction displayInterests(str) {\n    console.log(\"* \" + str);\n}\ndisplayInterests(\"Art\");\ndisplayInterests(\"Cooking\");\ndisplayInterests(\"Space\");\ndisplayInterests(\"Mother Earth\");\ndisplayInterests(\"Physics\");\nvar positions = [\n    \"Agent Assist at WellsFargo - Assisted with special projects and offered credible alternative options regarding process initiation, work structuring, utilization of resources to new hires \",\n    \"Claims Specialist at WellsFargo - Handled and resolved cardholder inquiries about fraud or merchant disputes in a friendly and courteous manner \",\n    \"Partner Support at Insight - Worked directly with partners via chat, phone, and email to ensure high quality customer service for cardholders \"\n];\nconsole.log(\"\\nMy Previous Experience: \");\nfunction displayPosition(companyName, jobTitle, jobDescription) {\n    console.log(\"* \" + jobTitle + \" at \" + companyName + \" - \" + jobDescription);\n}\ndisplayPosition(\"WellsFargo\", \"Agent Assist\", \"Assisted with special projects and offered credible alternative options regarding process initiation, work structuring, utilization of resources to new hires\");\ndisplayPosition(\"WellsFargo\", \"Claims Specialist\", \"Handled and resolved cardholder inquiries about fraud or merchant disputes in a friendly and courteous manner\");\ndisplayPosition(\"Insight\", \"Partner Support\", \"Worked directly with partners via chat, phone, and email to ensure high quality customer service for cardholders\");\nvar skills = [\"Bilingual\", \"Strong Work Ethic\", \"Swift\", \"Creative\", \"Quick Learner\", \"First Aid\", \"Certified Foodie\"];\nconsole.log(\"\\nMy Skills: \");\nfunction displaySkill(mySkill, bam) {\n    if (bam == true) {\n        console.log(\"*  BAM: \" + mySkill);\n    }\n    else if (bam == false) {\n        console.log(\"*  \" + mySkill);\n    }\n    ;\n}\n;\ndisplaySkill(\"Bilingual\", true);\ndisplaySkill(\"Strong Work Ethic\", false);\ndisplaySkill(\"Swift\", true);\ndisplaySkill(\"Creative\", true);\ndisplaySkill(\"Quick Learner\", false);\ndisplaySkill(\"First Aid\", false);\ndisplaySkill(\"Certified Foodie\", true);\n/***************************************************************/\nconsole.log(\"\\n\");\n/*WalkThrough Notes*/\nvar myName = \"Daze\";\nconsole.log(\"Name: \" + myName.toUpperCase());\nconsole.log(\"Career: Flower Child\");\nconsole.log(\"Description: I Love You!\");\nconsole.log(\" \");\nvar myInterests = [\"Green\", \"Purple\", \"Outer Space\", \"Food\"];\nconsole.log(\"My Interests:\");\nfor (i = 0; i < myInterests.length; i++) {\n    console.log(\"* \" + myInterests[i]);\n}\nconsole.log(\"\\n\");\nfunction displayPosition(company, job, description) {\n    console.log(\"* \" + company + \", \" + job + \", \" + description);\n}\n;\nconsole.log(\"My Previous Experience:\");\ndisplayPosition(\"AT&T\", \"Engineer\", \"Engineered new fiber routes and structures.\");\ndisplayPosition(\"DameLoVegan\", \"Master Chef\", \"Developed exceptional foodie experiences for foodies like me!\");\nvar skillss = [\n    {\n        skill: \"Coding\",\n        isCool: true\n    },\n    {\n        skill: \"Working Out\",\n        isCool: true\n    },\n    {\n        skill: \"Working at the barrel\",\n        isCool: false\n    },\n    {\n        skill: \"Dancer\",\n        isCool: true\n    },\n    {\n        skill: \"being in band\",\n        isCool: false\n    }\n];\nfunction displaySkills(theSkill, isItCool) {\n    if (isItCool == true) {\n        console.log(\"* BAM: \" + theSkill);\n    }\n    else {\n        console.log(\"* \" + theSkill);\n    }\n}\nconsole.log(\"\\n\");\nconsole.log(\"My Skills:\");\nfor (i = 0; i < skillss.length; i++) {\n    displaySkills(skillss[i].skill, skillss[i].isCool);\n}\n\n\n//# sourceURL=webpack://TSConsoleResume/./app.ts?");

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