import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import DbCon from './utils/db.js'
import AuthRoutes from './routes/Auth.js'
import AdminRoutes from './routes/AdminRoutes.js'
import path from 'path'

dotenv.config()

const PORT = process.env.PORT || 3000
const app  = express()

const __dirname = path.resolve();

// mongoDB
DbCon() 

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin:"http://localhost:5173"
}));

app.use('/api/auth',AuthRoutes)
app.use('/api/admin',AdminRoutes)

// app.get('/',(req,res)=>{
//     res.send('test')
// })

// if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
// }
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})