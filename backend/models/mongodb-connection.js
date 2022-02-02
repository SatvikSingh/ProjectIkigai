var mongoose=require("mongoose");
const cluster=process.env.MongoURL;
mongoose.connect(cluster,{ useNewUrlParser: true }, () => {
    console.log('MongoDB is connected');
});
module.exports.mongoose