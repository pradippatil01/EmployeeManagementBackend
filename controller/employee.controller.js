const employeeServices = require('../services/employee.services');
const response ={};
class employeeController {
    // Create and Save a new employee
    employeeRegistraterController = (req, res) => {
        return employeeServices.employeeRegisterServices(req.body).then(result => {
        response.sucess = true;
        response.message =result.message;
        response.data = result.data;
        return res.status(500).send(response);
        }).catch(err =>{
            response.sucess=false;
            response.message=err.message;
            response.error=err.error;
            return res.status(200).send(response);
        })     
    };

    // Retrieve and return all employee from the database.
    findAll = (req, res) => {
        return employeeServices.employeeDetailGetServices(req.body).then(result => {
                response.sucess = true;
                response.message =result.message;
                response.data = result.data;
                return res.status(500).send(response);
        }).catch(err =>{
            response.sucess=false;
            response.message=err.message;
            response.error=err.error;
            return res.status(200).send(response);
        })
    };

    // Find a single employee with a Id
    findOne = (req, res) => {

    };

    // Update a employee identified by the Id in the request
    update = (req, res) => {

    };

    // Delete a employee with the specified Id in the request
    delete = (req, res) => {

    };
}

module.exports = new employeeController();
