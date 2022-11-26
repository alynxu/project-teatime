const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(
    process.env.MONGO_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        serverApi: ServerApiVersion.v1 
});

module.exports = {
    connectDB: async function connectDB(){          
        try{
            await client.connect();
            console.log("connected to db");
        }catch(err){
            console.log(err);
        }
    },    
    
    readAll: async function readAll(){
        try{
            const cursor = await client.db("store").collection("users").find();
            const data = await cursor.toArray();
            return data;
        }catch(err){
            console.log(err);
        }
    },
    
    readOneDocument: async function readOneDocument(query){
        try{
            console.log('readOneDoc ', query);
            const data = await client.db("store").collection("users").findOne(query);
            return data;
        }catch(err){
            console.log(err);
        } 
    }
    }