

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://news_portal:Y7l2i1CwpYwmDqJT@cluster0.z8svvp5.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const newsCollection = await client.db('news_portal').collection('news')
    
    if(req.method === 'GET'){
        const news = await newsCollection.find({}).toArray();
        res.send({message:'success', status:200, data:news});
    }
    if(req.method === 'POST'){
        const news = req.body;
        // console.log(news);
        const result = await newsCollection.insertOne(news)
        console.log(result);
        res.send({message:'success', status:200, data:result});
    }

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
export default run;


// DB: news_portal
// pass: Y7l2i1CwpYwmDqJT