import React from "react";
import "./note-card.css";
const NoteCard = ({ note }) => {
  const { title, content, noteDate, noteColor, label } = note;
  return (
    <div className="note" style={{ backgroundColor: noteColor }}>
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{noteDate}</p>
      <span className="note-label">{label}</span>
      <button style={{ backgroundColor: noteColor }}>
        <i class="fa-solid fa-folder"></i>
      </button>
      <button style={{ backgroundColor: noteColor }}>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default NoteCard;
