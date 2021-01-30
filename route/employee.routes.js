module.exports = (app) => {
    const employeeController = require('../controller/employee.controller');
    // Create a new employee
    app.post('/employee', employeeController.employeeRegistraterController);

    // Retrieve all employee
    app.get('/employee', employeeController.findAll);

    // Retrieve a single employee with employeeid
    app.get('/employee/:phoneNumber', employeeController.findOne);

    // Update a employee with employeeid
    app.put('/employee/:phoneNumber', employeeController.update);

    // Delete a employee with employeeid
    app.delete('/employee/:phoneNumber', employeeController.delete);
}