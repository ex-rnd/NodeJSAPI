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

app.get("/", (req, res) => {
  res.download("tsconfig.json");
});

app.listen(3000, () => {
  console.log(`Express is running on 3000`);
});
