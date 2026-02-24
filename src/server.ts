import express from "express";

const app = express();

// app.get("/", (req, res) => {
//     res.send("Hi");
// });

// app.get("/", (req, res) => {
//     res.status(404).send("Not Found!");
// });

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World!" });
// });

// app.get("/", (req, res) => {
//   res.download("tsconfig.json");
// });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { text: "Hello from EJS!" });
});



app.listen(3000, () => {
  console.log(`Express is running on 3000`);
});
