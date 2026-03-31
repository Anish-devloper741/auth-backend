require("dotenv").config();
let express = require('express');
const  userRoute  = require('./routes/userRoute');
let mongoose = require("mongoose");
const TasksRoute = require("./routes/tasksRoute");
let app = express();
app.use(express.json());
app.use("/users",userRoute);
app.use("/tasks",TasksRoute);

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Server is connected");
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);
    
})
})
.catch((err)=>{
    console.log(err);
})