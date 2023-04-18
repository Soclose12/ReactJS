import { Express } from "express";


import {
   getALLproducts,
   creatProduct,
   getProductById,
   updateProduct,
   deleteProduct
} from "../controllerrs/Product.js";

const router = Express.router();

router.get('/', getALLproducts);
router.get('/:id', getProductById);
router.post('/', creatProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
