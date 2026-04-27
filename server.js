const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb://elliasX:alliasmongo2026@ac-vfejyfe-shard-00-00.0jctfcc.mongodb.net:27017,ac-vfejyfe-shard-00-01.0jctfcc.mongodb.net:27017,ac-vfejyfe-shard-00-02.0jctfcc.mongodb.net:27017/Reja?ssl=true&replicaSet=atlas-hpr7d7-shard-0&authSource=admin&appName=Cluster0";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB", err);
    else {
      console.log("MongoDB connection succeed");

      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
