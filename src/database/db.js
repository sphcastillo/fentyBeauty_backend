require('dotenv').config();
const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
console.log("MONGODB URL: ", uri);

let client;

const getDB = () => {
    if(!client){
        console.log("Creating a new client!");
        client = new MongoClient(uri);
    } else {
        console.log('Reusing the old client');
    }

    const database = client.db('store');
    const products = database.collection('products');
    const orders = database.collection('orders');

    return {
        products,
        orders,
    }
}




module.exports = getDB;