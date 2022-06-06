import React from "react";
import { Toaster } from "react-hot-toast";

import "./create-note.css";
import { addNotes } from "../../utilities/services";
import { useNote } from "../../context/note-context";
function CreateNote() {
  const { note, setNote, noteState, noteDispatch } = useNote();

  // const emptyNote = {
  //   title: "",
  //   content: "",
  // };

  const addNoteHandler = (e) => {
    e.preventDefault();
    if (!(note.title === "" && note.content === "")) {
      addNotes(noteDispatch, { note: { ...note } });
    }
  };
  return (
    <>
      <form onSubmit={(e) => addNoteHandler(e)}>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        ></input>
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        />
        <button style={{ fontSize: "30px" }} type="submit">
          <i class="fa-solid fa-plus add-icon"></i>
        </button>
        <Toaster />
      </form>
    </>
  );
}

export default CreateNote;
