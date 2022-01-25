import { MongoClient } from "mongodb";

// /api/new-meetup

// missing error handling -> try catch etc...
const handler = async (req, res) => {
    if (req.method === 'POST') {
        const data = req.body;

        // const { title, image, address, description } = data;
        console.log(process.env.REACT_APP_MONGO_DB_USRNAME);
        // no security issue storing credentials here as this code will not end up on the client side
        const client = await MongoClient.connect(`mongodb+srv://${process.env.REACT_APP_MONGO_DB_USRNAME}:${process.env.REACT_APP_MONGO_DB_PASSWORD}@cluster0.sokja.mongodb.net/meetups?retryWrites=true&w=majority`);
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ msg: 'Meetup inserted' });
    }
};

export default handler;