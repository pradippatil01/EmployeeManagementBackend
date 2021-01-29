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
    getAllData = (req) => {
        return new Promise((resolve, reject) => {
            employeeModel.find().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }
    /** 
     * update data by phonenumber
     */
    updateData = (req, data) => {
        return new Promise((resolve, reject) => {
            let requestData = {
                firstName: req.body.firstName || data.firstName,
                lastName: req.body.lastName || data.lastName,
                gender: req.body.gender || data.gender,
                phoneNumber: req.body.phoneNumber || data.phoneNumber,
                salary: req.body.salary || data.salary,
                emailID: req.body.emailID || data.emailID,
                city: req.body.city || data.city,
                department: req.body.department || data.department
            }
            employeeModel.findOneAndUpdate(req.params.phoneNumber, requestData, { new: true }).then((data) => {
                resolve(data);
                console.log("get Data successfull", data);
            }).catch(err => {
                    reject(err);
            })
        })
    }

    getSingleData=(req)=>{
        return new Promise((resolve, reject) => {
            employeeModel.find({phoneNumber:req}).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }

    DeleteData=(req)=>{
        return new Promise((resolve, reject) => {
            employeeModel.findOneAndRemove({phoneNumber:req}).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

module.exports = new servicesDefination();