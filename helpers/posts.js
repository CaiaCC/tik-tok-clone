const { createClient } = require("@astrajs/collections");

const collection = "posts";

exports.handler = async function (event, context, callback) {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const posts = astraClient
        .namespace("process.env.ASTRA_DB_KEYSPACE")
        .collection(collection);

    try {
        const res = await posts.find()
        return {
            statusCode: 200,
            body: JSON.stringify(res)
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify(err),
        };
    }
};
