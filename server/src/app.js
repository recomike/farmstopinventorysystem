import express, { json, urlencoded } from 'express'
import cors from 'cors'
import vendorRoutes from './routes/vendors.routes.js'

const app = express()

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }))

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Farm Stop Inventory application.' })
})

// configure routes
vendorRoutes(app)

// set port, listen for requests
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
