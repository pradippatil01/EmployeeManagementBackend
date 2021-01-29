const { response } = require('express');
const employeeModel = require('../model/employee.model.js');

class servicesDefination {
/** 
 *  store data in database
 */
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
    /**
     *  get all data from database
     */
    getAllData = () => {
        return new Promise((resolve, reject) => {
            employeeModel.find().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

module.exports = new servicesDefination();