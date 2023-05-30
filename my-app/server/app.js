const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
// const postRoutes = require("./routes/posts.js");
const users = require("./routes/registerUsers.js");
// Register the login route
const loginRouter = require("./routes/loginUser.js");
  
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json("Node JS Server is going great!");
});

app.use('/api',users);
app.use('/api',loginRouter);

const CONNECTION_URL = "mongodb+srv://asad_123:asad123@asad.kygg8.mongodb.net/?retryWrites=true&w=majoritymongodb";
const PORT = process.env.PORT || 3000;

mongoose.set("strictQuery", false); // Set strictQuery option

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Listening on port number ${PORT}`))
  )
  .catch((err) => console.log(`Connection Error ${err}`));
// mongoose.set("useFindAndModify", false)
