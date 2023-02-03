import { connectToDatabase } from './lib/mongodb';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return testGet(req, res);
        }

        case 'POST': {
            return testPost(req, res);
        }

        case 'PUT': {
            return testPost(req, res);
        }

        case 'DELETE': {
            return testPost(req, res);
        }

        default: {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    }
}

async function testPost(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();

        // add the post
        let body = JSON.parse(req.body)
        await db.collection('test').insertOne(body)
        // return a message
        return res.json({
            message: 'Recording submitted successfully',
            success: true,
        });
    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

async function testGet(req, res) {
    try {
        // connect to the database
        
        let { db } = await connectToDatabase();
        let a = await db.collection('test').find({user: "63dd01d3389c976c892d58e2"}).toArray()

        return res.json({
            message: 'Recording submitted successfully',
            users: a,
            success: true,
        })

    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            users: "",
            success: false,
        });
    }
}