const employeeModel = require('../model/employee.model');
class employeeServices {
    employeeRegisterServices = (req, next) => {
        try {
            let employeeData = {
                "firstName": req.firstName,
                "lastName": req.lastName,
                "gender": req.gender,
                "phoneNumber": req.phoneNumber,
                "salary": req.salary,
                "emailID": req.emailID,
                "city": req.city,
                "department": req.department
            }
            return employeeModel.create(employeeData).then(result => {
                return ({
                    message: "Employee data addeed sucessfully!",
                    data: result
                })
            }).catch(err => {
                return ({
                    message: "Fail to add data !",
                    error:err.message
                })
            })
        } catch (err) {
            next(err)
        }
    }

    employeeDetailGetServices = () => {
        return employeeModel.getAllData().then(result => {
            return ({
                message: "Employee data fetched sucessfully!",
                data: result
            })
        }).catch(err => {
            return ({
                message: "Some error occurred while retrieving data.",
                error: err
            })
        })
    }

    employeeDetailUpdateServices = (req) => {
        return employeeModel.getSingleData(req.params.eid).then((data) => {
            if (!data) {
                return ({
                    message: "data not found with id " + req.params.eid
                });
            } else {
               let oldData = data;
                return employeeModel.updateData(req, oldData).then(result => {
                    // if (!result) {
                    //     return ({
                    //         message: "data not found with id " + req.params.eid,
                    //     });
                    // }
                    return ({
                        message: "data updated successfully!",
                        data: result
                    })
                }).catch(err => {
                    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                        return ({
                            message: "data not found with id " + req.params.eid,
                            error: err
                        });
                    }
                    return ({
                        message: "Some error occurred while updating data.",
                        error: err
                    })
                })
            }
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return ({
                    message: "data not found with id " + req.params.eid,
                    error: err
                });
            }
            return ({
                message: "Error retrieving data with id " + req.params.eid,
                error: err
            });
        })
    }

    employeeDeletedataServices = (req) => {
        return employeeModel.DeleteData(req.params.eid).then(result => {
            if (!result) {
                return ({
                    message: "data not found with id " + req.params.eid,
                });
            }
            return ({
                message: "data deleted successfully!",
                data: result
            })
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return ({
                    message: "data not found with id " + req.params.eid,
                    errMessage: err.message
                });
            }
            return ({
                message: "Could not delete note with id " + req.params.eid,
                errMessage: err.message
            });
        })
    }
}

module.exports = new employeeServices();