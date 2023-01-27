const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        birthDate: String,
        startDate: String,
        jobTitle: String,
        department: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        createdById: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    },
    {
        timestamps: true,
        toObject: {
            transform: (doc, ret, options) => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.password;
                delete ret.__v;
                return ret;
            }
        }
    }
);


module.exports = mongoose.model('Employee', employeeSchema)
