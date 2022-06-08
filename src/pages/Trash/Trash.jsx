import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/NoteCard/NoteCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import "../Notes/notes.css";
import { useNote } from "../../context/note-context";
function Trash() {
  const {
    noteState: { trash },
  } = useNote();
  console.log("noteState func", useNote());
  console.log("Trash is", trash);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="note-section">
        {trash.length > 0 ? (
          trash.map((item) => <NoteCard note={item} key={item._id} />)
        ) : (
          <h1>No notes found</h1>
        )}
      </div>
    </div>
  );
}

export default Trash;
