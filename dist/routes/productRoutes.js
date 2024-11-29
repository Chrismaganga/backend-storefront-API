"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const upload_1 = __importDefault(require("../middleware/upload"));
const router = (0, express_1.Router)();
router.get('/', product_1.getAllProducts);
router.get('/:id', product_1.getProductById);
router.post('/', upload_1.default.single('image'), product_1.createProduct);
router.put('/:id', upload_1.default.single('image'), product_1.updateProduct);
router.delete('/:id', product_1.deleteProduct);
exports.default = router;
