import React from "react";
import CreateNote from "../../components/CreateNote/CreateNote";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/NoteCard/NoteCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNote } from "../../context/note-context";
import "./notes.css";
const Notes = () => {
  const {
    noteState: { notes },
  } = useNote();
  console.log("notes sate", notes);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <CreateNote />
      <div className="note-section">
        {notes.map((item) => (
          <NoteCard note={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
