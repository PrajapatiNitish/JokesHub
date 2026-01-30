import express from "express"; //Import express
import dotenv from "dotenv"; //Import .env file
import cors from "cors" //import cors 

//To use data of .env file
dotenv.config();

//Start to build app
const app = express();

//Server is running on this port.
const port = process.env.PORT;

app.get("/",() => {
    console.log("server is listening sir .🙄");
})

//App is listening
app.listen(port, () => {
    console.log("App is running...");
})