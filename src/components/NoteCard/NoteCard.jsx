import React from "react";
import "./note-card.css";
const NoteCard = ({ note }) => {
  const { title, content } = note;
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button>
        <i class="fa-solid fa-folder"></i>
      </button>
      <button>
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default NoteCard;
