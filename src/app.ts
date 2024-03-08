import 'dotenv/config'
import express from 'express'
import {dbConnect} from './config/mongo'
import cors from 'cors'
import {router} from './routes'
import {authorization} from '../src/middleware/auth0.customers'
const PORT=process.env.PORT

const app = express()

dbConnect().then(()=> console.log("conectado a al base de datos"))

//meddleware
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(authorization,router)


app.listen(PORT,()=> {
    console.log(`server up http://localhost:${PORT}`)
})

//falta el test / documetntar