import React from "react";
import { useState } from "react";
import "./create-note.css";
import { addNotes } from "../../utilities/services";
import { useNote } from "../../context/note-context";
import ColorPalette from "../ColorPalette/ColorPalette";
function CreateNote() {
  const { note, setNote, noteState, noteDispatch } = useNote();
  const [noteColor, setNoteColor] = useState("#fffff");

  const addNoteHandler = (e) => {
    e.preventDefault();
    if (!(note.title === "" || note.content === "")) {
      addNotes(noteDispatch, {
        note: { ...note, noteColor: noteColor, noteDate: noteDate },
      });
    }
  };
  const noteDate = new Date().toLocaleString("en-IN");

  return (
    <>
      <form
        style={{ backgroundColor: noteColor }}
        onSubmit={(e) => addNoteHandler(e)}
      >
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          style={{ backgroundColor: noteColor }}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        ></input>
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          style={{ backgroundColor: noteColor }}
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
        />
        <input
          style={{ backgroundColor: noteColor }}
          placeholder="Add a label"
          onChange={(e) => setNote({ ...note, label: e.target.value })}
        />
        <i
          class="fa-solid fa-palette"
          onClick={(e) => {
            e.stopPropagation();
            noteDispatch({
              type: "SHOW_COLOR_PALETTE",
              payload: !noteState.pickColor,
            });
          }}
        ></i>
        {noteState.pickColor && <ColorPalette setNoteColor={setNoteColor} />}
        <button style={{ fontSize: "30px" }} type="submit">
          <i class="fa-solid fa-plus add-icon"></i>
        </button>
      </form>
    </>
  );
}

export default CreateNote;
