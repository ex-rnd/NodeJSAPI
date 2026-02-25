## 🌟 Overview
- NodeJSAPI is a TypeScript-powered Express API with EJS templating, middleware for logging, authentication, and error handling.
- It’s designed to be modular, secure, and developer-friendly, with REST Client  files for quick API validation right inside VS Code
--- 
✨ 
--- 

🎬 Demo
- Here’s how the API works in practice:
<p align="center">
<img width="728" height="479" alt="Revenue-Profit-Transaction-ScatterPlot" src="https://github.com/user-attachments/assets/c56e4443-0dd6-4618-b2d5-be8c26da26b7" />
</p>
--- 
✨ 
--- 

### ⚙️ Set Up
#### a. Prerequisites
-	Node.js (v24+ recommended)
-	npm or yarn
-	TypeScript

#### b. Installation
```bash
git clone https://github.com/ex-rnd/NodeJSAPI.git
cd NodeJSAPI
npm install
```

#### c. Environment Variables
```bash
API_KEY=mysecretkey
PORT=3000
```
--- 
✨ 
--- 

### 🏗️ Project Structure
```
nodejsapi/
├── dist/                    # Compiled JS output (ignored in git)
├── node_modules/            # Project dependencies
│
├── public/                  # Static assets
│   └── image.jpg
│
├── src/
│   ├── middleware/          # Custom middleware
│   │   ├── auth.ts
│   │   ├── errorHandler.ts
│   │   └── logger.ts
│   ├── routes/              # API routes + utilities
│   │   ├── tasks.ts
│   │   ├── server.ts
│   │   └── utils.ts
│   ├── views/               # EJS templates
│   │   └── index.ejs
│
├── tests/
│   └── api-test.http        # REST Client manual tests
│
├── .gitignore
├── LICENSE
├── api-test.http            # Root-level REST Client test file
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```
--- 
✨ 
--- 

### 🚀 Scripts
- Build → `npm run build`
- Start → `npm start`
- Dev (watch mode) → `npm run dev`
- Test (manual via REST Client) → Run requests in `tests/api-test.http`
--- ✨ --- 

### 🔑 Middleware
- Auth `auth.ts` → Protects routes with `x-api-key` header.
- Logger `logger.ts` → Logs method, path, status code, and timestamp.
- ErrorHandler `errorHandler.ts` → Centralized error handling with JSON responses.
--- 
✨ 
--- 

### 📡 API Endpoints
- `GET/tasks` →  List all tasks
- `GET/tasks?search=title` → Search tasks
- `GET/tasks/:id` →  Get task by ID
- `POST/tasks` → Create task (requires `x-api-key`)
- `PUT/tasks` →  Update task (requires `x-api-key`)
--- 
✨ 
--- 

### 🧪 Testing
#### REST Client (Manual)
- Run requests directly from VS Code using `tests/api-test.http`.
- Each `###` section is a separate request you can execute by clicking “Send Request” above it.
Example snippet:
```
### Create Task - Authorized
POST http://localhost:3000/tasks HTTP/1.1
Content-Type: application/json
x-api-key: mysecretkey

{
  "title": "Another Task after Authorization",
  "completed": false
}
```
--- 
✨ 
--- 

### 🎨 Views
- The project uses EJS templates for rendering dynamic HTML.
Example: `index.ejs`
```
<h1>Hello, World!</h1>
<p><%= locals.text %></p>
<img src="/image.jpg" alt="Sample Image" />
```
Rendered via:
```
app.get("/", (req, res) => {
  res.render("index", { text: "Hello from EJS!" });
});
```
--- 
✨ 
--- 

### 🤝 Contributing
#### 🚀 Suggested next steps and improvements
- Add database persistence for tasks.
- Implement user authentication and roles.
- Expand error handling with custom error classes.
- Improve documentation with sample API responses.
- Add more REST Client test cases for edge scenarios.

#### 🧭 Style and process
- Follow TypeScript best practices.
- Keep routes thin and move logic into controllers/services.
- Write clean, consistent commit messages.
- Ensure middleware is modular and reusable.
- Keep documentation stylish, clear, and developer-friendly.

Thank you for your contributions 🎉

