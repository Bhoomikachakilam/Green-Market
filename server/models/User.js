import mongoose from "mongoose";
const userSchema = mongoose.Schema(
    {
        name: {
        type: String,
         required: true
        },
        email: {
        type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
          required:true  
        },
        mobile: {
            type: Number,
         required: true
        },
        village: {
            type: String,
         required: true
        }
},{timestamps:true}
)
const user=mongoose.model("user",userSchema)
export default user