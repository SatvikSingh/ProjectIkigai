const mongoose = require(mongoose);

const messageSchema = new mongoose.Schema({
    message: {
        type: String, 
        required: true
    }, 
    senderEmail: {
        type: String, 
        required: true
    }, 
    recieverEmail: {
        type: String, 
        required: true
    }
}, {timestamps: true});

const messages =  mongoose.model('Messages', messageSchema);

module.exports = messages;