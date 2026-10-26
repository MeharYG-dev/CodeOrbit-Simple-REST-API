
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to read JSON request bodies
app.use(express.json());

// Path to the JSON data file
const filePath = path.join(__dirname, "data", "notes.json");

// Read notes from the JSON file
function readNotes() {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

// Save notes to the JSON file
function saveNotes(notes) {
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

// Home route
app.get("/", (req, res) => {
  res.send("Simple REST API is running!");
});

// GET: Retrieve all notes
app.get("/notes", (req, res) => {
  const notes = readNotes();
  res.json(notes);
});

// GET: Retrieve a single note by ID
app.get("/notes/:id", (req, res) => {
  const notes = readNotes();
  const id = Number(req.params.id);

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});

// POST: Create a new note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof content !== "string" ||
    !content.trim()
  ) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  const notes = readNotes();

  const newNote = {
    id: notes.length
      ? Math.max(...notes.map((note) => note.id)) + 1
      : 1,
    title: title.trim(),
    content: content.trim(),
  };

  notes.push(newNote);
  saveNotes(notes);

  res.status(201).json({
    message: "Note created successfully",
    note: newNote,
  });
});

// PUT: Update an existing note
app.put("/notes/:id", (req, res) => {
  const notes = readNotes();
  const id = Number(req.params.id);
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  const { title, content } = req.body;

  if (
    typeof title !== "string" ||
    !title.trim() ||
    typeof content !== "string" ||
    !content.trim()
  ) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  notes[noteIndex] = {
    ...notes[noteIndex],
    title: title.trim(),
    content: content.trim(),
  };

  saveNotes(notes);

  res.json({
    message: "Note updated successfully",
    note: notes[noteIndex],
  });
});

// DELETE: Remove a note
app.delete("/notes/:id", (req, res) => {
  const notes = readNotes();
  const id = Number(req.params.id);
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex === -1) {
    return res.status(404).json({ message: "Note not found" });
  }

  const deletedNote = notes.splice(noteIndex, 1)[0];

  saveNotes(notes);

  res.json({
    message: "Note deleted successfully",
    note: deletedNote,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
