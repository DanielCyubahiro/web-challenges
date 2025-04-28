import { getProductById } from "@/services/productServices";

const handler = (req, res) => {
  const { id } = req.query;

  const product = getProductById(id);
  if (!product) {
    return res.status(404).json("Product not found");
  }

  return res.status(200).json(product);
};

export default handler;