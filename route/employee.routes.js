module.exports = (app) => {
    const employee = require('../controllers/employee.controller.js');

    // Create a new employee
    app.post('/register', employee.create);

    // Retrieve all employee
    app.get('/employee', employee.findAll);

    // Retrieve a single employee with employeeid
    app.get('/employee/:eid', employee.findOne);

    // Update a employee with employeeid
    app.put('/employee/:eid', employee.update);

    // Delete a employee with employeeid
    app.delete('/employee/:eid', employee.delete);
}