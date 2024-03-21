import express from 'express';
import { createProduct, deleteProducts, getAccessoriesproducts, getAllproduct, getAllproducts, getBenchRacksproducts, getCardioproducts, getMachinesproducts, getProductsByBrand, getProductsByType, getSupplementsproducts,getaccTypeDiscount,getbyId, getrelatedProducts, getsuppDiscount, getsuppTypeDiscount, getweights_and_barbellsproducts, updateProduct } from '../controllers/product.controller.js';
const router= express.Router();


router.get('/', getAllproducts);
router.get('/products/:key', getAllproduct);
router.get('/relatedProducts/:key/:id',getrelatedProducts)
router.get('/productsbytype/:key',getProductsByType)
router.get('/getbybrands/:key',getProductsByBrand)
router.get('/suppdiscount/:key',getsuppDiscount)
router.get('/supptypediscount/:key',getsuppTypeDiscount)
router.get('/acctypediscount/:key',getaccTypeDiscount)

router.get('/weights_and_barbells',getweights_and_barbellsproducts)
router.get('/machines',getMachinesproducts)
router.get('/cardio',getCardioproducts)
router.get('/accessories',getAccessoriesproducts)
router.get('/supplements',getSupplementsproducts)
router.get('/benches_racks_grips',getBenchRacksproducts)

router.get('/:id' , getbyId);


router.post('/create', createProduct );


router.put('/update/:id',updateProduct );

router.delete('/delete/:id',deleteProducts );



export default router;