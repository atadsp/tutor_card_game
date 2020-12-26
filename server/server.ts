import * as bodyParser from "body-parser";
import express from "express";
import http from "http";


const PORT = 1701;

if (PORT) {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
      extended: true
  }));

  const server = http.createServer(app);
  server.listen(PORT, () => {
    console.log("It's working! It's working! " + PORT);
  });
} else {
  console.log("ENV's are not set, please set them in the .env");
}
