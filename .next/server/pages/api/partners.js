"use strict";
(() => {
var exports = {};
exports.id = 614;
exports.ids = [614];
exports.modules = {

/***/ 185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 29:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ mongooseConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

function mongooseConnect() {
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.readyState) === 1) {
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection.asPromise();
    } else {
        const uri = process.env.MONGODB_URI;
        return mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(uri);
    }
}


/***/ }),

/***/ 394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handle)
});

// EXTERNAL MODULE: ./lib/mongoose.js
var mongoose = __webpack_require__(29);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(185);
;// CONCATENATED MODULE: ./models/Partners.js

const PartnersSchema = new external_mongoose_.Schema({
    accent: {
        type: String
    },
    title: {
        type: String
    },
    desc: {
        type: String
    }
});
const Partners = external_mongoose_.models?.Partners || (0,external_mongoose_.model)("Partners", PartnersSchema);

;// CONCATENATED MODULE: ./pages/api/partners.js


async function handle(req, res) {
    const { method  } = req;
    await (0,mongoose/* mongooseConnect */.I)();
    if (method === "GET") {
        res.setHeader("Access-Control-Allow-Origin", "https://hudos.kz"); // Specify your actual domain
        res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.json(await Partners.find());
    }
    if (method === "PUT") {
        const { accent , title , desc  } = req.body;
        await Partners.updateOne({
            accent,
            title,
            desc
        });
        res.json(true);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(394));
module.exports = __webpack_exports__;

})();