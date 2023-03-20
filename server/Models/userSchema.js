import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true, 
        unique: true
    },
    Course: {
        type:String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Fees: {
        type: Number,
        
    },
    Phone: {
        type: Number,
        required: true
    }
});

export default mongoose.model("student", userSchema);