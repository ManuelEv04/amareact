const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");
const { Description, Message } = require("@mui/icons-material");

const stripe = new stripe("sk_test_51P6P1RP9DojR5Aqz6ikrUBlwmSxxpSsUbC63ubXm5VINBV3Nak8DWK5LjDYBHBkQkAWJijdT4DpGgQ7lsgBG5Zb600TxYQpg1o")

const app = express();



app.use(cors({origin: "http://localhost: 3000"}));
app.use(express.json())

app.post("/api/checkout", async (req,res)=>{
    console.log(req.body);
    const {id, amount} = req.body;


try{
    const payment =  await stripe.paymentIntents.create({
      amount,
      currency:"EUR",
      description:"Basket of products",
      confirm:true,  
    })
    console.log(payment)
    return res.status(200).json({Message:"Succesful payment"})

}catch(error){
    return res.json({message: error.raw.message})
}
});

app.listen(3001,()=>{
    console.log("Server listening port",3001);
});

