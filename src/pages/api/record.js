import { connectToDatabase } from './lib/mongodb';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        // case 'GET': {
        //     return testGet(req, res);
        // }

        case 'POST': {
            return testPost(req, res);
        }

        // case 'PUT': {
        //     return testPost(req, res);
        // }

        // case 'DELETE': {
        //     return testPost(req, res);
        // }

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
        await db.collection('recording').insertOne(body)

        // update user's progressQuestion and progressPrompt
        await db.collection('user').updateOne(
            { _id: ObjectId(body.user) },
            { $set: { progressQuestion: body.currQuestion, progressPrompt: body.currPrompt } }
        )
        
        // return a message
        return res.json({
            message: 'Recording submitted successfully',
            success: true,
        })

    } catch (error) {
        // return an error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}

