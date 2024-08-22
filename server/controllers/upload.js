import FILE from "../models/file.js";


export const uploadFinally=async(request,response)=>{
    // console.log("called")
    const fileObj={
        
        path:request.file.path,
        name:request.file.originalname,
    }
   

    try {
        const file=await FILE.create(fileObj);
        // console.log("upload hogya")
        response.status(200).json({ path: `https://sharefreely.onrender.com/CollectionForFileSharingApp/${file._id}`}); 
    } catch (error) {
        console.log("Error from response from MongoDB",error.msg);
        response.status(500).json({ error: error.message });
    }
}

export const downloadFile=async(request,response)=>{
    try {
       const file=await FILE.findById(request.params.fileId)
       file.downloadCount++;
       await file.save();

       response.download(file.path,file.name);
    } catch (error) {
        console.log("No download file found",error.message);
        return response.status(500).json({ error: error.message });
    }
}