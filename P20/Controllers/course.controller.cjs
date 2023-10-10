const Course = require("../Model/course.cjs");

// Create
exports.addCourse = async (req, res) => {
  const { name, code, description } = req.body;
  try {
    const course = new Course({ name, code, description });
    await course.save();
    res.status(201).json({ course });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Geat All Courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json({ courses });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get Course By ID
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json({ course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Update Course
exports.updateCourse = async (req, res) => {
  const { name, code, description } = req.body;
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, {
      name,
      code,
      description,
    });
    res.status(200).json({ course, msg: "Course updated successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Delete Course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({ course, msg: "Course deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
