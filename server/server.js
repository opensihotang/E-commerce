import "dotenv/config";
import app from "./app.js";
import connect from "../server/config/connection.js";

connect();

app.get("/", (req, res) => {
  res.send("OKKKK GAS");
});

const port = 3000;
app.listen(port, () => {
  console.log("server is listening on port :" + port);
});
