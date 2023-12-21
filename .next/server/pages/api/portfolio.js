"use strict";
(() => {
var exports = {};
exports.id = 952;
exports.ids = [952];
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

/***/ 590:
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
;// CONCATENATED MODULE: ./models/Portfolio.js

const PortfolioSchema = new external_mongoose_.Schema({
    title: {
        type: String
    },
    supTitle: {
        type: String
    },
    desc: {
        type: String
    },
    imgId: {
        type: String
    },
    construction: {
        type: String
    }
}, {
    timestamps: true
});
const Portfolio = external_mongoose_.models?.Portfolio || (0,external_mongoose_.model)("Portfolio", PortfolioSchema);

;// CONCATENATED MODULE: ./pages/api/portfolio.js


async function handle(req, res) {
    const { method  } = req;
    await (0,mongoose/* mongooseConnect */.I)();
    if (method === "GET") {
        res.setHeader("Access-Control-Allow-Origin", "https://hudos.kz"); // Specify your actual domain
        res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        if (req.query?.id) {
            res.json(await Portfolio.findOne({
                _id: req.query.id
            }));
        } else {
            res.json(await Portfolio.find());
        }
    }
    if (method === "POST") {
        const { title , supTitle , desc , imgId , construction  } = req.body;
        const portfolioDoc = await Portfolio.create({
            title,
            supTitle,
            desc,
            imgId,
            construction
        });
        res.json(portfolioDoc);
    }
    if (method === "PUT") {
        const { title , supTitle , desc , imgId , construction , _id  } = req.body;
        await Portfolio.updateOne({
            _id
        }, {
            title,
            supTitle,
            desc,
            imgId,
            construction
        });
        res.json(true);
    }
    if (method === "DELETE") {
        if (req.query?.id) {
            await Portfolio.deleteOne({
                _id: req.query?.id
            });
            res.json(true);
        }
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(590));
module.exports = __webpack_exports__;

})();