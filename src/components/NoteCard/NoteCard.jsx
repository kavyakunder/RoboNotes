import React from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useNote } from "../../context/note-context";
import { trashNote } from "../../utilities/trashNote";
import "./note-card.css";
const NoteCard = ({ note }) => {
  const { title, content, noteDate, noteColor, label } = note;
  const { noteState, noteDispatch } = useNote();
  const location = useLocation();

  return (
    <div className="note" style={{ backgroundColor: noteColor }}>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{noteDate}</p>
      <span className="note-label">{label}</span>

      {location.pathname === "/notes" && (
        <>
          <button
            onClick={() => archiveNote(noteDispatch, note)}
            style={{ backgroundColor: noteColor }}
          >
            <i class="fa-solid fa-folder"></i>
          </button>
          <button
            onClick={() => trashNote(noteDispatch, note)}
            style={{ backgroundColor: noteColor }}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}
      {location.pathname === "/archive" && (
        <>
          <button style={{ backgroundColor: noteColor }}>
            <i class="fa-solid fa-folder"></i>
          </button>
          <button style={{ backgroundColor: noteColor }}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}

      {location.pathname === "/trash" && (
        <>
          <button style={{ backgroundColor: noteColor }}>
            <i class="fa-solid fa-folder"></i>
          </button>
          <button
            onClick={() => {
              toast.success("Note successfully deleted!");
              noteDispatch({ type: "REMOVE_FROM_TRASH", payload: noteDate });
            }}
            style={{ backgroundColor: noteColor }}
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default NoteCard;
