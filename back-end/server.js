import express from "express";
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(process.env.PORT || 5000, (err) => {
    if (err) {
        console.log(err);
        
    } else {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
        
    }
});
