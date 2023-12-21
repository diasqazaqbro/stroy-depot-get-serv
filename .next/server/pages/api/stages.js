"use strict";
(() => {
var exports = {};
exports.id = 186;
exports.ids = [186];
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

/***/ 64:
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
;// CONCATENATED MODULE: ./models/Stages.js

const StagesSchema = new external_mongoose_.Schema({
    oneTitle: {
        type: String
    },
    oneDesc: {
        type: String
    },
    twoTitle: {
        type: String
    },
    twoDesc: {
        type: String
    },
    threeTitle: {
        type: String
    },
    threeDesc: {
        type: String
    },
    fourTitle: {
        type: String
    },
    fourDesc: {
        type: String
    },
    fiveTitle: {
        type: String
    },
    fiveDesc: {
        type: String
    },
    sixTitle: {
        type: String
    },
    sixDesc: {
        type: String
    },
    sevenTitle: {
        type: String
    },
    sevenDesc: {
        type: String
    },
    eightTitle: {
        type: String
    },
    eightDesc: {
        type: String
    }
});
const Stages = external_mongoose_.models?.Stages || (0,external_mongoose_.model)("Stages", StagesSchema);

;// CONCATENATED MODULE: ./pages/api/stages.js


async function handle(req, res) {
    const { method  } = req;
    await (0,mongoose/* mongooseConnect */.I)();
    if (method === "GET") {
        res.setHeader("Access-Control-Allow-Origin", "*"); // Specify your actual domain
        res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.json(await Stages.find());
    }
    if (method === "PUT") {
        const { oneTitle , oneDesc , twoTitle , twoDesc , threeTitle , threeDesc , fourTitle , fourDesc , fiveTitle , fiveDesc , sixTitle , sixDesc , sevenTitle , sevenDesc , eightTitle , eightDesc  } = req.body;
        await Stages.updateOne({
            oneTitle,
            oneDesc,
            twoTitle,
            twoDesc,
            threeTitle,
            threeDesc,
            fourTitle,
            fourDesc,
            fiveTitle,
            fiveDesc,
            sixTitle,
            sixDesc,
            sevenTitle,
            sevenDesc,
            eightTitle,
            eightDesc
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
var __webpack_exports__ = (__webpack_exec__(64));
module.exports = __webpack_exports__;

})();