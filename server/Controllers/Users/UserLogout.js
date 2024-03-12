const UserLogout = async (req, res) => {
    try {
        if(req?.cookies?.token){
            res.clearCookie("token");
        }
        return res.status(200).json({success:true,message:"User logged out Successfully"});
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

export default UserLogout;