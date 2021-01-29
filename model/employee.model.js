const mongoose = require('mongoose');
/**
 * Defining the employee model in Mongoose
 */
const employeeSchema =  mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    emailID: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

module.exports =  mongoose.model('employees', employeeSchema);
