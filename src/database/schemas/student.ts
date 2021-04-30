import mongoose, { Document, Mongoose, Schema } from "mongoose";
import Ajv, { JTDSchemaType } from "ajv/dist/jtd";

export interface Student {
    id: string;
    firstName: string;
    lastName: string;
}

export interface StudentInterface extends Document {
    id: string;
    firstName: string;
    lastName: string;
}

const StudentSchema: Schema = new Schema({
    id: { type: String, require: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true }
})

export const StudentCollection = mongoose.model<StudentInterface>('Student', StudentSchema);

export const StudentValidateSchema: JTDSchemaType<Student> = {
    properties: {
        id: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" }
    }
}