import express from "express";
import cors from "cors"
import 'dotenv/config'
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/CartRoute.js";
//import orderRouter from "./routes/orderRoute.js";

//app config
const app = express()
const PORT = 4000;

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
//app.use('/api/order/',orderRouter)


// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('API working');
});

// Define the port to listen to


// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
