import product from "../models/product.js";


export const addProduct = async (req, res, next)=> {
    const newProduct = new product({
        productName:req.body.productName,
        productBrand:req.body.productBrand,
        productWeight:req.body.productWeight,
        productCategory:req.body.productCategory,
        productType:req.body.productType,
        productCost:req.body.productCost,
        productDiscount:req.body.productDiscount,
        productDescription :req.body.productDescription,
        productFeature :req.body.productFeature,
        productImage: req.body.productImage
    });
    await newProduct.save();
    return res.status(200).json("Product added Successfully!");
}