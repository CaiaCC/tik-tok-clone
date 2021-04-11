const { createClient } = require("@astrajs/collections");

const collection = "tktkposts";

exports.handler = async function (event, context, callback) {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });

    const posts = astraClient
        .namespace(process.env.ASTRA_DB_KEYSPACE)
        .collection(collection);

    const data = [
        {
            id: 0,
            name: "Ternt Anderson",
            username: "ta12",
            avatar: "https://i.imgur.com/rkGDzzH.jpg",
            is_followed: true,
            video: "https://i.imgur.com/Fs3777N.mp4",
            caption: "Falling Leaves",
            likes: 6,
            comments: 2,
            timestamp: "20201-03-15T11:48:22.020Z",
            button_visible: true,
        },
        {
            id: 1,
            name: "Ann Chamber",
            username: "alove456",
            avatar: "https://i.imgur.com/8Gud2DO.jpg",
            is_followed: true,
            video: "https://i.imgur.com/DQueWXt.mp4",
            caption: "Look at my cutie!",
            likes: 15,
            comments: 2,
            timestamp: "2020-12-15T10:15:42.020Z",
            button_visible: true,
        },
        {
            id: 2,
            name: "Brian Cooper",
            username: "bcooper",
            avatar: "https://i.imgur.com/CKr1Ec8.jpg",
            is_followed: true,
            video: "https://i.imgur.com/n7pZ8hY.mp4",
            caption: "Peaceful moment",
            likes: 25,
            comments: 8,
            timestamp: "2021-01-15T10:25:06.020Z",
            button_visible: true,
        },
        {
            id: 3,
            name: "Conner Lam",
            username: "clcl",
            avatar: "https://i.imgur.com/mpoHCqt.jpg",
            is_followed: true,
            video: "https://i.imgur.com/G2dAkcQ.mp4",
            caption: "Just a random street",
            likes: 51,
            comments: 10,
            timestamp: "2021-04-09T06:48:22.020Z",
            button_visible: true,
        },
        {
            id: 4,
            name: "Summer Hudson",
            username: "summerH",
            avatar: "https://i.imgur.com/G4XgbaY.jpg",
            is_followed: true,
            video: "https://i.imgur.com/GBw2pff.mp4",
            caption: "I love camping!",
            likes: 56,
            comments: 6,
            timestamp: "2020-10-15T11:45:22.020Z",
            button_visible: true,
        },
    ];

    try {
        for (let i = 0; i < data.length; i++) {
            await posts.create(data[i].id, data[i]);
        }
        console.log("post success");
        return {

            statusCode: 200,
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify(err),
        };
    }
};
