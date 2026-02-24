import express from "express";

export const taskRouter = express.Router();

taskRouter.get("/", (req, res) => {
  res.json({
    tasks: [{
        id: 1,
        title: "Task 1",
        completed: false
    }]
  });
});


taskRouter.get("/:id", (req, res) => {
  const taskId = req.params.id;
  res.json({
    tasks: [{
        id: taskId,
        title: `Task ${taskId}`,
        completed: false
    }]
  });
});




taskRouter.post("/", (req, res) => {

  const title = req.body.title;
  const completed = req.body.completed;  
  res.json({
    tasks: [{
        title,
        completed 
    }]
  });
});