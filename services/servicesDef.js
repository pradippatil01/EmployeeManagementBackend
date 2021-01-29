const { response } = require('express');
const employeeModel = require('../model/employee.model.js');

class servicesDefination {

    create = (req) => {
        console.log(req)
        return new Promise((resolve, reject) => {
            let employeeDeatils = new employeeModel(req);
            employeeDeatils.save().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

module.exports = new servicesDefination();