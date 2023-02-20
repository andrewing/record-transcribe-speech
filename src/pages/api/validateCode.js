import { connectToDatabase } from './lib/mongodb';
const ObjectId = require('mongodb').ObjectId;

export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {
        case 'GET': {
            return isCodeValid(req, res);
        }

        default: {
            return res.status(405).json({ message: 'Method not allowed' });
        }
    }
}

async function isCodeValid(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        // get from database
        const findRes = await db.collection('user').find({ code: req.query.code }).toArray();

        if (findRes.length === 0) {
            return res.status(200).json({
                message: 'Code Does Not Exist',
                name: '',
                id: '',
                success: false,
            });
        } else {
            return res.status(200).json({
                message: 'Code Exists',
                name: findRes[0].name,
                id: findRes[0]._id,
                success: true,
                progressQuestion: findRes[0].progressQuestion,
                progressPrompt: findRes[0].progressPrompt,
            });
        }
    } catch (error) {
        // return an error
        return res.status(500).json({
            message: new Error(error).message,
            success: false,
        });
    }
}

