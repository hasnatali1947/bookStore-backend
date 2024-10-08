import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import routes from "./routes/index.js";

const app = express()
app.use(cors())
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 3500
const mongodb = process.env.MongoDBURI

mongoose.connect(mongodb)
.then(() => console.log("connected to mongoDB"))
.catch((error) => console.log("ERROR", error));

app.use("/api/v1", routes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`server start ${PORT}`)
})
