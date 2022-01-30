const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required: [true, "First name is required."]
    },
    lastName : {
        type:String,
        required: [true, "Last name is required."]
    },
    MobileNo : {
        type:String,
        required: [true, "Mobile number is required."]
    },
    Email : {
        type:String,
        required: [true, "Email is required."]
    },
    Password : {
        type:String,
        required: [true, "Password is required."]
    },
    isAdmin : {
        type:Boolean,
        default:true
    },
    products :[
        {
            productId:{
                type:String,
                required:[true,"Product ID is required"]
            },
            totalAmount:{
                type:Number,
                required:[true,"Total Amount is required"]
            },
            purchasedOn:{
                type:Date,
                default:new Date()
            }
        }
    ]
});

module.exports = mongoose.model("User",UserSchema);