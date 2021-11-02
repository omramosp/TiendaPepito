import product from "../models/product.js";


const registerProduct = async (req, res) => {
  if (!req.body.name || !req.body.price || !req.body.stock)
    return res.status(400).send("Incomplete data");

  const existingRole = await product.findOne({ name: req.body.name });
  if (existingRole) return res.status(400).send("Error: The product already exist");

  const productSchema = new product({
    name: req.body.name,
    price: req.body.price,
    mark: req.body.mark,
    stock: req.body.stock,
    dbStatus: true,
  });

  const result = await productSchema.save();
  console.log(result);
  if (!result) return res.status(400).send("Failed to register product");

  return res.status(200).send({ result });
};

export default { registerProduct };
