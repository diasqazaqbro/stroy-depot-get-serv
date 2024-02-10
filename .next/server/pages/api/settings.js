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
exports.id = "pages/api/settings";
exports.ids = ["pages/api/settings"];
exports.modules = {

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/firestore/lite":
/*!******************************************!*\
  !*** external "firebase/firestore/lite" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore/lite");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ "(api)/./lib/config.js":
/*!***********************!*\
  !*** ./lib/config.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"app\": () => (/* binding */ app),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore/lite */ \"firebase/firestore/lite\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCF1eFfBA9VPrrA-apajAGXCiHBR4fXCJo\",\n    authDomain: \"stroy-depot.firebaseapp.com\",\n    projectId: \"stroy-depot\",\n    storageBucket: \"stroy-depot.appspot.com\",\n    messagingSenderId: \"169444509821\",\n    appId: \"1:169444509821:web:8fe60d37f1b0fe1cf3c914\",\n    measurementId: \"G-ZZ43LPEXP4\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QztBQUNVO0FBQ1Q7QUFFOUMsTUFBTUcsaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBRU8sTUFBTUMsTUFBTVgsMkRBQWFBLENBQUNHLGdCQUFnQjtBQUMxQyxNQUFNUyxLQUFLWCxxRUFBWUEsQ0FBQ1UsS0FBSztBQUU3QixNQUFNRSxVQUFVWCw0REFBVUEsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL2xpYi9jb25maWcuanM/MDZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZS9saXRlXCI7XG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDRjFlRmZCQTlWUHJyQS1hcGFqQUdYQ2lIQlI0ZlhDSm9cIixcbiAgYXV0aERvbWFpbjogXCJzdHJveS1kZXBvdC5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcInN0cm95LWRlcG90XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwic3Ryb3ktZGVwb3QuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTY5NDQ0NTA5ODIxXCIsXG4gIGFwcElkOiBcIjE6MTY5NDQ0NTA5ODIxOndlYjo4ZmU2MGQzN2YxYjBmZTFjZjNjOTE0XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy1aWjQzTFBFWFA0XCIsXG59O1xuXG5leHBvcnQgY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5leHBvcnQgY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSBnZXRTdG9yYWdlKCk7XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJkYiIsInN0b3JhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/config.js\n");

/***/ }),

/***/ "(api)/./pages/api/settings.js":
/*!*******************************!*\
  !*** ./pages/api/settings.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/config */ \"(api)/./lib/config.js\");\n/* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore/lite */ \"firebase/firestore/lite\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__]);\n([_lib_config__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nasync function handle(req, res) {\n    const { method  } = req;\n    if (method === \"GET\") {\n        const newsCollection = (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__.collection)(_lib_config__WEBPACK_IMPORTED_MODULE_0__.db, \"settings\");\n        const querySnapshot = await (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__.getDocs)(newsCollection);\n        const newsDocs = querySnapshot.docs.map((doc)=>({\n                id: doc.id,\n                ...doc.data()\n            }));\n        res.json(newsDocs);\n    }\n    if (method === \"PUT\") {\n        const { address , id , phoneNumber , suptitle , title , workTime  } = req.body;\n        console.log(address, id, phoneNumber, suptitle, title, workTime);\n        try {\n            const newsDocRef = (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__.doc)(_lib_config__WEBPACK_IMPORTED_MODULE_0__.db, \"settings\", id);\n            const updatedData = {\n                address: address,\n                phoneNumber: phoneNumber,\n                suptitle: suptitle,\n                title: title,\n                workTime: workTime\n            };\n            await (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(newsDocRef, updatedData);\n            console.log(\"Document successfully updated!\");\n        } catch (error) {\n            console.error(\"Error updating document: \", error);\n        }\n        res.json(true);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2V0dGluZ3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQzRDO0FBRS9ELGVBQWVLLE9BQU9DLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzdDLE1BQU0sRUFBRUMsT0FBTSxFQUFFLEdBQUdGO0lBRW5CLElBQUlFLFdBQVcsT0FBTztRQUNwQixNQUFNQyxpQkFBaUJSLG1FQUFVQSxDQUFDRCwyQ0FBRUEsRUFBRTtRQUN0QyxNQUFNVSxnQkFBZ0IsTUFBTVAsZ0VBQU9BLENBQUNNO1FBQ3BDLE1BQU1FLFdBQVdELGNBQWNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNYLE1BQVM7Z0JBQ2hEWSxJQUFJWixJQUFJWSxFQUFFO2dCQUNWLEdBQUdaLElBQUlhLElBQUksRUFBRTtZQUNmO1FBQ0FSLElBQUlTLElBQUksQ0FBQ0w7SUFDWCxDQUFDO0lBQ0QsSUFBSUgsV0FBVyxPQUFPO1FBQ3BCLE1BQU0sRUFBRVMsUUFBTyxFQUFFSCxHQUFFLEVBQUVJLFlBQVcsRUFBRUMsU0FBUSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHZixJQUFJZ0IsSUFBSTtRQUN4RUMsUUFBUUMsR0FBRyxDQUFDUCxTQUFTSCxJQUFJSSxhQUFhQyxVQUFVQyxPQUFPQztRQUN2RCxJQUFJO1lBQ0YsTUFBTUksYUFBYXZCLDREQUFHQSxDQUFDRiwyQ0FBRUEsRUFBRSxZQUFZYztZQUN2QyxNQUFNWSxjQUFjO2dCQUNsQlQsU0FBU0E7Z0JBQVNDLGFBQWFBO2dCQUFhQyxVQUFVQTtnQkFBVUMsT0FBT0E7Z0JBQU9DLFVBQVVBO1lBQzFGO1lBQ0EsTUFBTWpCLGtFQUFTQSxDQUFDcUIsWUFBWUM7WUFDNUJILFFBQVFDLEdBQUcsQ0FBQztRQUNkLEVBQUUsT0FBT0csT0FBTztZQUNkSixRQUFRSSxLQUFLLENBQUMsNkJBQTZCQTtRQUM3QztRQUNBcEIsSUFBSVMsSUFBSSxDQUFDLElBQUk7SUFDZixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1hZG1pbi8uL3BhZ2VzL2FwaS9zZXR0aW5ncy5qcz8yMWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2NvbmZpZ1wiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgZG9jLCBnZXREb2NzLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlL2xpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG5cbiAgaWYgKG1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgIGNvbnN0IG5ld3NDb2xsZWN0aW9uID0gY29sbGVjdGlvbihkYiwgXCJzZXR0aW5nc1wiKTtcbiAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhuZXdzQ29sbGVjdGlvbik7XG4gICAgY29uc3QgbmV3c0RvY3MgPSBxdWVyeVNuYXBzaG90LmRvY3MubWFwKChkb2MpID0+ICh7XG4gICAgICBpZDogZG9jLmlkLFxuICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICB9KSk7XG4gICAgcmVzLmpzb24obmV3c0RvY3MpO1xuICB9XG4gIGlmIChtZXRob2QgPT09IFwiUFVUXCIpIHtcbiAgICBjb25zdCB7IGFkZHJlc3MsIGlkLCBwaG9uZU51bWJlciwgc3VwdGl0bGUsIHRpdGxlLCB3b3JrVGltZSB9ID0gcmVxLmJvZHk7XG4gICAgY29uc29sZS5sb2coYWRkcmVzcywgaWQsIHBob25lTnVtYmVyLCBzdXB0aXRsZSwgdGl0bGUsIHdvcmtUaW1lKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbmV3c0RvY1JlZiA9IGRvYyhkYiwgXCJzZXR0aW5nc1wiLCBpZCk7XG4gICAgICBjb25zdCB1cGRhdGVkRGF0YSA9IHtcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcywgcGhvbmVOdW1iZXI6IHBob25lTnVtYmVyLCBzdXB0aXRsZTogc3VwdGl0bGUsIHRpdGxlOiB0aXRsZSwgd29ya1RpbWU6IHdvcmtUaW1lLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IHVwZGF0ZURvYyhuZXdzRG9jUmVmLCB1cGRhdGVkRGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHN1Y2Nlc3NmdWxseSB1cGRhdGVkIVwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGRvY3VtZW50OiBcIiwgZXJyb3IpO1xuICAgIH1cbiAgICByZXMuanNvbih0cnVlKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiIiwiY29sbGVjdGlvbiIsImRvYyIsImdldERvY3MiLCJ1cGRhdGVEb2MiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJuZXdzQ29sbGVjdGlvbiIsInF1ZXJ5U25hcHNob3QiLCJuZXdzRG9jcyIsImRvY3MiLCJtYXAiLCJpZCIsImRhdGEiLCJqc29uIiwiYWRkcmVzcyIsInBob25lTnVtYmVyIiwic3VwdGl0bGUiLCJ0aXRsZSIsIndvcmtUaW1lIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJuZXdzRG9jUmVmIiwidXBkYXRlZERhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/settings.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/settings.js"));
module.exports = __webpack_exports__;

})();