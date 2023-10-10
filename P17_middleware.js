const { check, validationResult } = require('express-validator');

const validateFields = [
    check('universityName').trim().isLength({ min: 1 }).escape(),
    check('instituteName').trim().isLength({ min: 1 }).escape(),
    check('departmentName').trim().isLength({ min: 1 }).escape(),
    check('courseName').trim().isLength({ min: 1 }).escape(),
    check('courseCode').trim().isLength({ min: 1 }).escape(),
    check('semester').trim().isLength({ min: 1 }).escape(),
];

module.exports = {
    validateFields,
};

