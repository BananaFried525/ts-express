import { Router, Request, Response } from "express";
import { StudentRouter } from "./studentRouter";

const router: Router = Router();

router.use("/student", StudentRouter);

router.use("**", (req: Request, res: Response) => {
    res.status(404).send("not found")
})

export const IndexRouter: Router = router;