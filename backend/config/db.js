import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://admin:admin@cluster0.gboe8vg.mongodb.net/reactjs-food-delivery-app').then(()=>{
       console.log('DB connected') ;
    })
}