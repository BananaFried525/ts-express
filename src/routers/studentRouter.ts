import { Router} from "express";
import { StudentController } from "../controllers/studentController";

const router: Router = Router();
const studentController: StudentController = new StudentController();

router.get("/", studentController.getStudent);
router.post("/create",studentController.createStudent)

export const StudentRouter: Router = router;