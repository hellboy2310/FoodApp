

const mongoose = require('mongoose');
const {Schema} = mongoose
const pass = "Cgd8lbLa5BkNVDVb";

let dbLink = `mongodb+srv://dbUser:${pass}@cluster0.ldaghnx.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbLink).then(function(){
    console.log("connected");
}).catch(function(err){
    console.log("error",err);
})

let userSchema = new Schema({
    name:{
        type:String,
        required:[true,"Name is missing"]
    },
    password:{
        type:String,
        required:[true,"Password is missing"]
    },
    confirmPassword:{
        type:String,
        required:[true,"Confirm password is Missing"],

        validate:{
            validator:function(){
                return this.password == this.confirmPassword;
            },
            message:"Password mismatch"
        }
    },
    email:{
        type:String,
        required:[true,'email is missing'],
        unique:true
    },
    phoneNumber:{
        type:String,
        minLength:[10,"Less than 10 numbers"],
        maxLength:[10,"more than 10 numbers"]

    },
    pic:{
        type:String,
        default:"logo2.png"
    },
    otp:{
        type:String
    },
    otpExpiry:{
        type:Date
    },
    address:{
        type:String
    }

})

const userModel = mongoose.model('FoodUserModel',userSchema);
module.exports = userModel;

