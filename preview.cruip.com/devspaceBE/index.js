import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'
// import userRoutes from './routes/user.js'


const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000


app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true })) 
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }))

app.use("/api/post", postRoutes);


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`\n\nServer runnning on port: ${PORT} !!!!!`)))
    .catch((error) => console.log(`\n\n${error.message}`))
    // .finally(() => app.listen(PORT, () => console.log(`Server runnning on port: ${PORT}`)))

mongoose.set();


