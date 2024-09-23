const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

const careerRoutes = require("./routes/careersRoutes");
const passionIdRouters = require("./routes/passionIDRouters.js");
const PORT = process.env.PORT || 3000;

dotenv.config();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/careers", careerRoutes);
app.use("/passionId", passionIdRouters);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
