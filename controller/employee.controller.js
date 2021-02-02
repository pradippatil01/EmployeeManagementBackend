const employeeServices = require('../services/employee.services');
var response = {};
class employeeController {
    // Create and Save a new employee
    register = (req, res) => {
        try {
            return employeeServices.employeeRegisterServices(req.body).then(result => {
                response.message = result.message;
                response.data = result.data;
                return res.status(201).send(response);
            }).catch(err => {
                response.message = err.message;
                response.error = err.error;
                return res.status(500).send(response);
            })
        } catch (err) {
            return res.status(400).json({ err: err.toString() });
        }

    }

    // Retrieve and return all employee from the database.
    getEmployeeAll = (req, res) => {
        return employeeServices.employeeDetailGetServices().then(result => {
            response.message = result.message;
            response.data = result.data;
            return res.status(200).send(response);
        }).catch(err => {
            response.message = err.message;
            response.error = err.error;
            return res.status(500).send(response);
        })
    };

    // Update a employee identified by the Id in the request
    update = (req, res) => {
        return employeeServices.employeeDetailUpdateServices(req).then(result => {
            response.message = result.message;
            response.data = result.data;
            return res.status(200).send(response);
        }).catch(err => {
            response.message = err.message;
            response.error = err.error;
            return res.status(500).send(response);
        })
    };

    // Delete a employee with the specified Id in the request
    delete = (req, res) => {
        return employeeServices.employeeDeletedataServices(req).then(result => {
            response.message = result.message;
            response.data = result.data;
            res.status(200).send(response);
        }).catch(err => {
            response.message = err.message;
            response.error = err.errMessage;
            return res.status(500).send(response)
        })
    };
}

module.exports = new employeeController();
