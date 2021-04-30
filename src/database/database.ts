import mongoose from "mongoose";
export default () => {
    const connect = async () => {
        try {
            let conn = await mongoose.connect("mongodb://localhost:27017/nodetsdb", { useNewUrlParser: true });
            console.log("connect success");
        } catch (error) {
            console.log("error: ", error);
        }
    }

    connect();

    mongoose.connection.on("disconnected", connect);
}

