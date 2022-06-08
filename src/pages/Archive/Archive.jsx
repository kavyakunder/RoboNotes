import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/NoteCard/NoteCard";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNote } from "../../context/note-context";

function Archive() {
  const {
    noteState: { archive },
  } = useNote();
  console.log("Archive is", archive);

  return (
    <div>
      <Navbar />
      <Sidebar />

      {archive.length > 0 ? (
        archive.map((item) => <NoteCard note={item} key={item._id} />)
      ) : (
        <h1>No notes found</h1>
      )}
    </div>
  );
}

export default Archive;
