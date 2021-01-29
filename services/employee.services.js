const employeeServDef = require('./servicesDef');
class employeeServices {
    employeeRegisterServices = (req) => {
        let employeeData = {
            firstName: req.firstName,
            lastName: req.lastName,
            gender: req.gender,
            phoneNumber: req.phoneNumber,
            salary: req.salary,
            emailID: req.emailID,
            city: req.city,
            department: req.department
        }
        return employeeServDef.create(employeeData).then(result => {
            return ({
                message: "Employee data addeed sucessfully!",
                data: result
            })
        }).catch(err => {
            return ({
                message: "Fail to add data!",
                error: err
            })
        })
    }

    employeeDetailGetServices=()=>{
        return employeeServDef.getAllData().then(result => {
            return ({
                message: "Employee data fetched sucessfully!",
                data: result
            })
        }).catch(err => {
            return ({
                message: "Some error occurred while retrieving notes.",
                error: err
            })
        })
    }
}

module.exports = new employeeServices();