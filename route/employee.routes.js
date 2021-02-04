module.exports = (app) => {
    const employeeController = require('../controller/employee.controller');
    // Create a new employee
    app.post('/employee/register', employeeController.register);

    // Retrieve all employee
    app.get('/employee/read', employeeController.getEmployeeAll);

    // Update a employee with employeeid
    app.put('/employee/:eid', employeeController.update);

    // Delete a employee with employeeid
    app.delete('/employee/:eid', employeeController.delete);
}