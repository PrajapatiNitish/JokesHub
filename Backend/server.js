import express, { urlencoded } from "express"; //Import express
import dotenv from "dotenv"; //Import .env file
import cors from "cors" //import cors 

//To use data of .env file
dotenv.config();

//Start to build app
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Server is running on this port.
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello from server, 🙄");
})

//App is listening
app.listen(port, () => {
    console.log("Server is running sir...", port);
})