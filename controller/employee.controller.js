const employeeServices = require('../services/employee.services');
var response = {};
class employeeController {
    // Create and Save a new employee
    register = (req, res) => {
        return employeeServices.employeeRegisterServices(req.body).then(result => {
            response.message = result.message;
            response.data = result.data;
            return res.send(response);
        }).catch(err => {
            response.message = err.message;
            response.error = err.error;
            return res.send(response);
        })
    };

    // Retrieve and return all employee from the database.
    getEmployeeAll = (req, res) => {
        return employeeServices.employeeDetailGetServices().then(result => {
            response.message = result.message;
            response.data = result.data;
            return res.send(response);
        }).catch(err => {
            response.message = err.message;
            response.error = err.error;
            return res.send(response);
        })
    };

    // Update a employee identified by the Id in the request
    update = (req, res) => {
        return employeeServices.employeeDetailUpdateServices(req).then(result => {
            response.message = result.message;
            response.data = result.data;
            return res.status(500).send(response);
        }).catch(err => {
            response.message = err.message;
            response.error = err.error;
            return res.status(200).send(response);
        })
    };

    // Delete a employee with the specified Id in the request
    delete = (req, res) => {
        return employeeServices.employeeDeletedataServices(req).then(result => {
            response.message = result.message;
            response.data = result.data;
            res.status(500).send(response);
        }).catch(err => {
            response.message = err.message;
            response.error = err.error;
            return res.status(500).send(response)
        })
    };
}

module.exports = new employeeController();
