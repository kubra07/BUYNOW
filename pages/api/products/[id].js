import { createRouter } from 'next-connect';
import dbConnect from "@/backend/config/dbConnect";
import { getProducts } from "@/backend/controllers/productControllers";

const router = createRouter();

dbConnect();
/*console.log(products);*/

router.get(getProducts);

export default router.handler;