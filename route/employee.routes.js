module.exports = (app) => {
    const employeeController = require('../controller/employee.controller');
    // Create a new employee
    app.post('/employeeRegistration', employeeController.employeeRegistraterController);

    // Retrieve all employee
    app.get('/employeeDetailGet', employeeController.findAll);

    // Retrieve a single employee with employeeid
    app.get('/employee/:eid', employeeController.findOne);

    // Update a employee with employeeid
    app.put('/employee/:eid', employeeController.update);

    // Delete a employee with employeeid
    app.delete('/employee/:eid', employeeController.delete);
}