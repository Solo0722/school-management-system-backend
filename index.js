import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import studentsRoutes from "./routes/studentsRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());
var options = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(options));

const CONNECTION_URL = `mongodb://solomon:solomon12345@ac-6u3uirj-shard-00-00.vlbch0w.mongodb.net:27017,ac-6u3uirj-shard-00-01.vlbch0w.mongodb.net:27017,ac-6u3uirj-shard-00-02.vlbch0w.mongodb.net:27017/?ssl=true&replicaSet=atlas-432k07-shard-0&authSource=admin&retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))
  )
  .catch((err) => console.log(err));

// mongoose.set("useFindAndModify", false);

app.get("/", (req, res) => {
  res.send("School management system backend");
});

app.use("/students", studentsRoutes);
app.use("/staff", staffRoutes);

export default app;
