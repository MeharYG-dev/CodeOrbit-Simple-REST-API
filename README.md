
# CodeOrbit Simple REST API

A simple REST API built with Node.js and Express.js to manage notes using CRUD (Create, Read, Update, and Delete) operations. The application stores note data in a JSON file and demonstrates fundamental REST API development concepts.

## 🚀 Features

- Create new notes
- Retrieve all notes
- Retrieve a specific note by ID
- Update existing notes
- Delete notes
- Validate incoming request data
- Return appropriate HTTP status codes
- Store data in a JSON file

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- JSON file storage
- Postman for API testing

## 📁 Project Structure

```text
CodeOrbit-Simple-REST-API/
├── data/
│   └── notes.json
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/MeharYG-dev/CodeOrbit-Simple-REST-API.git
```

### 2. Navigate to the project folder

```bash
cd CodeOrbit-Simple-REST-API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

The API runs locally at:

```text
http://localhost:3000
```

## 📡 API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check the API welcome route |
| GET | `/notes` | Retrieve all notes |
| POST | `/notes` | Create a new note |
| GET | `/notes/:id` | Retrieve a note by ID |
| PUT | `/notes/:id` | Update a note by ID |
| DELETE | `/notes/:id` | Delete a note by ID |

## 🧪 Testing the API

You can test the endpoints using Postman.

For example, to create a note, send a `POST` request to:

```text
http://localhost:3000/notes
```

Example JSON request body:

```json
{
  "title": "My First Note",
  "content": "Learning REST API development with Express.js."
}
```

Use the appropriate HTTP method and endpoint to retrieve, update, or delete notes.

## 💾 Data Storage

The application uses a JSON file to store notes. This provides a simple way to practice data management without requiring a separate database.

## 🎯 Learning Outcomes

- Learned to build REST API endpoints using Express.js.
- Practiced CRUD operations.
- Understood HTTP methods and status codes.
- Worked with JSON request and response data.
- Practiced request validation and error handling.
- Learned to test APIs using Postman.
- Practiced Git and GitHub repository management.

## 👩‍💻 Author

**Meharunnisa**

GitHub: [MeharYG-dev](https://github.com/MeharYG-dev)

## 📌 Internship

Developed as part of the CodeOrbit internship program.
