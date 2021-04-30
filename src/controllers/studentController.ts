import { Request, Response } from "express";
import { StudentService } from "../services/studentService";

const studentService: StudentService = new StudentService();
export class StudentController {
    constructor() { }

    async getStudent(req: Request, res: Response) {
        try {
            let student = studentService.findStudent();
            res.json(student);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async createStudent(req: Request, res: Response) {
        try {
            let { id, firstName, lastName } = req.body;
            await studentService.createStudent({id,firstName,lastName});
            res.status(200).json("create success");
        } catch (error) {
            res.status(500).send(error);
        }
    }
}