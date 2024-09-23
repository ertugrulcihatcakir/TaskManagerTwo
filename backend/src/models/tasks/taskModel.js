import mongoose from "mongoose";

const TaskScheme = new mongoose.Schema(
    {
        title: {
            type : String,
            required : [true, "Please provide a title"],
            unique: true,
        },
        description: {
            type: String,
            default: "No description",
        },
        dueDate: {
            type: Date,
            required : [true, "Please provide a due date"],
            default: Date.now(),
        },
        status:{
            type: String,
            enum: ["active","inactive"],
            default: "active",
        },
        competed: {
            type: Boolean,
            default: false,
        },
        priority:{
            type: String,
            enum: ["low", "medium", "high"],
            default: "low",
        },
        user:{
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        
    },
    { timestamps: true }
);

const TaskModel = mongoose.model("Task" , TaskScheme);

export default TaskModel; 