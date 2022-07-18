import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/NoteCard/NoteCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNote } from "../../context/note-context";
import "../Notes/notes.css";

function Archive() {
  const {
    noteState: { archive },
  } = useNote();

  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="note-section">
        {archive.length > 0 ? (
          archive.map((item) => <NoteCard note={item} key={item._id} />)
        ) : (
          <h1>No notes found</h1>
        )}
      </div>
    </div>
  );
}

export default Archive;
