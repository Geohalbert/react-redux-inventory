import express from "express";
import {list,show,create,update,remove} from "../Controllers/PartController";

const router = express.Router();

router.get("/parts", list);
router.get("/parts/:id", show);
router.post("/parts", create);
router.put("/parts/:id", update);
router.delete("/parts/:id", remove);

export default router;
