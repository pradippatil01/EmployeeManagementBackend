module.exports = (app) => {
    const employeeController = require('../controller/employee.controller');
    // Create a new employee
    app.post('/employeeRegistration', employeeController.employeeRegistraterController);

    // Retrieve all employee
    app.get('/employeeDetailGet', employeeController.findAll);

    // Retrieve a single employee with employeeid
    app.get('/employeeFetch/:phoneNumber', employeeController.findOne);

    // Update a employee with employeeid
    app.put('/employeeUpdate/:phoneNumber', employeeController.update);

    // Delete a employee with employeeid
    app.delete('/employeeDelete/:phoneNumber', employeeController.delete);
}