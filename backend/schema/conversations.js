const mongoose = require(mongoose);

const conversationSchema = new mongoose.Schema({
    doctorEmail: {
        type: String, 
        required: true
    }, 
    userEmail: {
        type: String, 
        required: true
    }, 
    latestMessage: {
        type: String, 
        default: " "
    }
}, {timestamps: true});

const conversations =  mongoose.model('Conversation', conversationSchema);

module.exports = conversations;