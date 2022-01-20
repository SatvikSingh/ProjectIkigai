exports.home=async (req,res)=>{
    return res.status(200).send({
        success:true,
        message:"Home Page"
    });
}