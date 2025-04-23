import { getAllProducts } from "@/services/productServices";

const handler = (req, res) => {
  return res.status(200).json(getAllProducts())
}

export default handler;