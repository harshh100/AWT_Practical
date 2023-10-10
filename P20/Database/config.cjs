const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/course_crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB..");
  })
  .catch((err) => {
    console.log("Error connecting to database: ", err);
  });