const mongoose =require('mongoose');


const usrorder = new mongoose.Schema({
    user_id :{
        type :String,
        required:true,
    },
    orders:[
        {
            price:{
                type :Number,
                required:true
            },
            data:[
                {
                    menu:{
                        type:Object,
                       
                        required:true,
                    },
                    qty:{
                        type :Number,
                        required :true
                    }
                }
            ]

        }
        
    ]
    ,
        orderStatus:{
            type:String,
            required:true
        }

})

const userOrders = mongoose.model("Orders ",usrorder);

module.exports=userOrders