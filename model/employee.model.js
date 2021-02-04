const mongoose = require('mongoose');
/**
 * Defining the employee model in Mongoose
 */
const employeeSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    salary: {
        type: String,
        required: true
    },
    emailID: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

const employees = mongoose.model('employees', employeeSchema);
class servicesDefination {
    /** 
     *  store data in database
     */
    create = (req,next) => {
        try{
        return new Promise((resolve, reject) => {
            let employeeDeatils = new employees(req);
            employeeDeatils.save().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }catch(err){
        next(err)
    }
}
    /**
    *  get all data from database
    */
    getAllData = () => {
        return new Promise((resolve, reject) => {
            employees.find().then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }
    /**
     * delete data from database
     */
    DeleteData = (req) => {
        return new Promise((resolve, reject) => {
            employees.findByIdAndRemove(req).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }

    getSingleData = (req) => {
        return new Promise((resolve, reject) => {
            employees.findById(req).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err)
            })
        })

}
    /**
     * update data of database
     */
    updateData = (req, oldData) => {
        return new Promise((resolve, reject) => {
            employees.findByIdAndUpdate(req.params.eid, oldData, { new: true }).then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
        })
    }
}

module.exports = new servicesDefination();