const { MongoClient, ServerApiVersion } = require("mongodb");
var mongoUrl =
  "mongodb+srv://beam:beam2k23@cluster0.wavj8cp.mongodb.net/?retryWrites=true&w=majority";

const uri = mongoUrl;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function dbConnect() {
  try {
    await client.connect();
    console.log("db connected");
  } catch (err) {
    console.error(err);
  }
}
module.exports = { dbConnect, client };
