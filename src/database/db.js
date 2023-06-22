const { MongoClient } = require('mongodb');
const uri = 
'mongodb+srv://sphcastillo:8bGMi2jzoEaPdBAU@cluster0.uxopqfa.mongodb.net/?retryWrites=true&w=majority';

let client;

const getDB = () => {
    if(!client){
        console.log("Creating a new client!");
        client = new MongoClient(uri);
    } else {
        console.log('Reusing the old client');
    }

    const database = client.db('shop');
    const products = database.collection('products');
    const orders = database.collection('orders');

    return {
        products,
        orders,
    }
}




module.exports = getDB;