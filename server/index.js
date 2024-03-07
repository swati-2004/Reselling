// Importing all the required packages
import mongoose from "mongoose";
import express from "express"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

// importing the routes
import collegeRoutes from "./Routes/Colleges/CollegeRoutes.js";

// connfiguring the environment variables
dotenv.config();

// creating an instance of express
const app = express();

// setting up the cors
app.use(cors({
    origin:"*",
    credentials:true
}));

// setting up the all required middlewares.
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({origin:"cross-origin"}));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

//definging the PORT Number
const PORT = process.env.PORT || 5000;

// connecting to mongoDB atlas database
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Database connected successfully");
}).catch((error)=>{
    console.log("Error in connecting to database",error.message);
});


// setting up the server
try{
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`);
    });
} catch(err){
    console.log("something went wrong");
}

//Setting up the routes
app.use("/api/v1/colleges",collegeRoutes);