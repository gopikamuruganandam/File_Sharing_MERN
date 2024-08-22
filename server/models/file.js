import mongoose from 'mongoose';

const fileSchema =new mongoose.Schema({
    path:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    downloadCount:{
        type:Number,
        required:true,
        default:0,
    },
})

const FILE=mongoose.model("fileSharing",fileSchema);

export default FILE;