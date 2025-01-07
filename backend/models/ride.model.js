const mangoose = require('mongoose');


const rideSchema = new mangoose.Schema({
    user:{
        type : mangoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    },
    captain :{
        type : mangoose.Schema.Types.ObjectId,
        ref : 'captain',
        
    },
    pickup :{
        type :String,
        required : true
    },
    destination :{
        type :String,
        required : true
    },

    fare : {
        type : Number,
        required : true
    },

    status :{
        type : String,
        enum : ['pending','accepted',"ongoing",'completed'],
        default : 'pending'
    },

    duration :{
        type : Number,
    },

    distance : {
        type : Number,
    },

    paymentID: {
        type : String,
    },

    orderId: {
        type : String,
    },

    signature : {
       type : String,
    },

    otp: {
       type : String,
       select : false,
       required : true
    }
   
})


module.exports = mangoose.model('ride',rideSchema);