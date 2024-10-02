const mongoose= require("mongoose");
const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    cpassword:{
        type:String,
        require:true
    },    
    isAdmin:{
        type:Boolean,
        default:false
    },   
})

//jwt token
userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            Notification:this.Notification,
            isAdmin: this.isAdmin,            
        },
        process.env.SECRET_KEY,
        {
            expiresIn: "1d",
        });
    } catch (error) {
        console.error(error);
    }
}

const User = new mongoose.model("User",userSchema);

module.exports=User;