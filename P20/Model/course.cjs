const mongoose = require("mongoose");
// course schema
const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
});
// course model
const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
