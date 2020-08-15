import myApp from "./app";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ success: false });
});

app.listen(3000, () => console.log("Express is ready, have fun!"));

console.log(myApp);