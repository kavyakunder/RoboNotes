import React from "react";
import CreateNote from "../../components/CreateNote/CreateNote";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/NoteCard/NoteCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import SortModal from "../../components/SortModal/SortModal";
import { useNote } from "../../context/note-context";
import { sortedByDate } from "../../utilities/sort";
import "./notes.css";
const Notes = () => {
  const {
    noteState: { notes, sortByDateTime },
  } = useNote();
  const sortedNotes = sortedByDate(notes, sortByDateTime);
  return (
    <div>
      <Navbar />
      <Sidebar />
      <SortModal />
      <CreateNote />
      <div className="note-section">
        {sortedNotes.map((item) => (
          <NoteCard note={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
