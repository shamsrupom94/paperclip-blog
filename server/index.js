const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const connectDB = require("./config/db");
require('dotenv').config();

const PORT = process.env.BACKEND_PORT || 5000;

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
