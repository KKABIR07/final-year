const mongoose=require('mongoose');
const URI = 'mongodb+srv://kabirbiswas131:10000221010@cluster0.5vhtu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const connectDb=async()=>{
    try{
        await mongoose.connect(URI);
        console.log('connection successful')
    }catch(error){
        console.error("database connection fail");
        process.exit(0);
    }
};

module.exports=connectDb;