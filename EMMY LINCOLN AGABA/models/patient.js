const mongoose = require('mongoose');
 
var patientSchema = new Schema({


    surName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 16
    },
    givenName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 16
    },
    
    dateofBirth: {
        type: Date,
        required: [true, 'Select Date of Birth']},
        minlength: 1,
        maxlength: 16
});

module.exports = mongoose.model('Patient', patientSchema);