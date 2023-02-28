

const Stationary_itms = require('../Schema/stationary_items_schema')
const userOrders      = require('../Schema/userOreder_schema')
exports.feedback      = async(req,res)=>{
    const id=req.params.id

    const {user_id ,message} = req.body;

    if(!user_id || !message)
    {
      return  res.status(401).json({message:"please enter valid data "})
    }

    

    const feed = await Stationary_itms.updateOne({id:id},{ $push:{feedback:{userId  : user_id, message}}});
    if(feed)
    {
        res.status(200).json({message:"feeddback added successsfully"});
    }
    else
    {
        res.status(401).json({message:"unable to add feedback"});
    }
}

exports.userOrder = async (req,res)=>{
    const {user_id,orders,orderStatus}=req.body;
   

    // validate user id first 

    const ordr = await userOrders({user_id,orders,orderStatus});
    const resp = ordr.save();
    if(resp)
    {
        res.status(200).json({message:"order placed successfully"});
    }
    else
    {
        res.status(401).json({message:"unable to place order"});
    }
}