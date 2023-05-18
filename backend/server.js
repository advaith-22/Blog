const express = require("express");
require("dotenv").config();
const blogroutes = require("./routes/blog");
const mongoose = require("mongoose");

PORT = process.env.PORT;
URI = process.env.DATABASE_URL

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("/api/blog", blogroutes);

mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is connected on http://localhost:${PORT}`);
    })
}).catch ((error) => {
    console.log(error)
})

