import React from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useNote } from "../../context/note-context";
import { trashNote } from "../../utilities/trashNote";
import "./note-card.css";
const NoteCard = ({ note }) => {
  const { title, content, noteDate, noteColor, label } = note;
  const { noteDispatch } = useNote();
  const { pathname } = useLocation();

  return (
    <div className="note" style={{ backgroundColor: noteColor }}>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{noteDate}</p>
      <span className="note-label">{label}</span>

      {pathname === "/notes" && (
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
      {pathname === "/archive" && (
        <>
          <button style={{ backgroundColor: noteColor }}>
            <i class="fa-solid fa-folder"></i>
          </button>
          <button style={{ backgroundColor: noteColor }}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </>
      )}

      {pathname === "/trash" && (
        <>
          <button
            onClick={() => {
              toast.success("Note successfully deleted!");
              noteDispatch({ type: "REMOVE_FROM_TRASH", payload: noteDate });
            }}
            style={{ backgroundColor: noteColor }}
          >
            <i class="fa-solid fa-trash-xmark"></i>
          </button>
        </>
      )}
    </div>
  );
};

export default NoteCard;
