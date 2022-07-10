import express from "express";
import bodyParser from "body-parser"
const app = express();
const PORT = process.env.PORT || '3030';
import cors from 'cors';
import fetch from 'cross-fetch';



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));


app.get('/', async (req,res) => {
  try{
    let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=54d622d860034f938e32eca4d66e2256");
    let resP = await data.json();
    res.json(resP)
  }
  catch(err){
    res.status(403).json({error:err.message});
    console.log(err);
  }
})


app.listen(PORT,() => {
  console.log(`server is running on port ${PORT}`);
})