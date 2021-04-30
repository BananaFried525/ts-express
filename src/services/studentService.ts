import { Student, StudentInterface,StudentCollection } from "../database/schemas/student";

export class StudentService {
    constructor() { }

    public async findStudent(): Promise<Array<StudentInterface>> {
        const session = await StudentCollection.startSession();
        try {
            let students = await StudentCollection.find().session(session);
            return students;
        } catch (error) {
            throw new Error(error);
        } finally {
            session.endSession();
        }
    }

    public async createStudent(student: Student): Promise<void> {
        const session = await StudentCollection.startSession();
        try {
            await session.withTransaction(async () => {
                await StudentCollection.create(student);
            })
        } catch (error) {
            throw new Error(error);
        } finally {
            session.endSession();
        }
    }
}