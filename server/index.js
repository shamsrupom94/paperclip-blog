const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db");
const cors = require('cors');

const {BACKEND_PORT} = require("../tempEnv");
require('dotenv').config({ path: "./.env" });

const PORT = process.env.NODE_ENV === "development" ? 5000 : BACKEND_PORT;

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


//Router files
const PostRouter = require("./routes/postRouter");
const UserRouter = require("./routes//userRouter");

//Database connection
connectDB()
  
// JSON Parser (Instead of using bodyparser package)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", PostRouter);
app.use("/api/users", UserRouter);


// initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());


app.listen(PORT, () => {
    console.log(`server is runnig on port ${PORT} !!!`)
})
