const express = require("express");
const mongoose = require("mongoose");
const path=require("path");
const app = express();

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

mongoose.connect("mongodb://127.0.0.1:27017/productDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    created_at:{type:Date, default:Date.now}
});

const Product = mongoose.model("Product",productSchema);

app.get("/products",async(req,res)=>{
    let search=req.query.search;
    let cate=req.query.category;
    let query={};
    if(search)query.name=search;
    if(cate)query.category=cate;
    let products=await Product.find(query);
    res.render("index.ejs",{products});
})

app.get("/products/new",(req,res)=>{
    res.render("post.ejs");
})

app.post("/products",(req,res)=>{
    let n=req.body.product;
    let p=req.body.price;
    let c=req.body.category;
    let product=new Product({
        name:n,
        price:p,
        category:c,
        created_at:Date.now()
    })
    product.save()
    .then((r)=>{
        res.redirect("/products");
    })
    .catch((err)=>{
        res.send(err);
    })
})

app.listen(8080,()=>{
    console.log("Server running on 8080");
});