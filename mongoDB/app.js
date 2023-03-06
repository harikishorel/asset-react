const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const addDealer = require("./mongo");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {});
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, PATCH, DELETE, OPTIONS"
//     );
//     next();
//   });
// app.get("/",(req,res)=>{
//     res.send("hi");
// })

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password,
  };
  try {
    const check = await collection.findOne({
      email: email,
      password: password,
    });
    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("notexist");
  }
});

app.post("/Dealers", async (req, res) => {
  const { name, demail, branch, dpassword } = req.body;
  const newDealer = new addDealer({
    name,
    demail,
    branch,
    dpassword,
  });
  try {
    await newDealer.save();
    res.json({ status: 200, message: "success" });
  } catch (e) {
    console.error(e);
    res.status(500).json("Failed to add product");
  }
});

app.listen(3000, () => {
  console.log("port connected");
});
