const { MongoClient } = require('mongodb');
const uri = 
'mongodb+srv://sphcastillo:me8WohimZzQ9aH4h@cluster1.bdg9slc.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri);

const database = client.db('test');
const products = database.collection('products');
const orders = database.collection('orders');

module.exports = { products, orders }