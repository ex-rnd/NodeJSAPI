// server.ts 

import "source-map-support/register";
import express from "express";
import path from "path";
import { title } from "process";
import { taskRouter } from "./routes/tasks";
import { logger } from "./middleware/logger";

import cors from "cors";
import morgan from "morgan";

import errorHandler from "./middleware/errorHandler";


const app = express();


app.use(cors());
app.use(morgan("tiny"));



// Middleware
app.use(express.json());

// Middleware
app.use(express.urlencoded({}));

// // Middleware
// app.use(express.urlencoded({
//   extended: true
// }));

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

// Custom Middleware 
// app.use(logger);




app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "..", "public")));




app.get("/", (req, res) => {
  res.render("index", { text: "Hello from EJS!" });
});


// Middleware
app.use("/tasks", taskRouter)


app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Express is running on 3000`);
});


// function logger(
//   req: express.Request,
//   res: express.Response,
//   next: express.NextFunction,
// ) {
//   console.log(
//     `${req.method} 
//      ${req.path} - 
//      ${new Date().toISOString()}    
//     `
//   );
//   next();
// }
















