import express from "express";
import path from "path";
import { title } from "process";
import { taskRouter } from "./routes/tasks";

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
app.use(express.static(path.join(__dirname, "..", "public")));




app.get("/", (req, res) => {
  res.render("index", { text: "Hello from EJS!" });
});



app.use("/tasks", taskRouter)



app.listen(3000, () => {
  console.log(`Express is running on 3000`);
});
