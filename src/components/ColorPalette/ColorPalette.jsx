import React from "react";
import "./color-palette.css";
import { useNote } from "../../context/note-context";
function ColorPalette({ setNoteColor }) {
  const { noteState, noteDispatch } = useNote();

  const pickNoteColor = (colorSelected) => {
    setNoteColor(colorSelected);
    noteDispatch({
      type: "SHOW_COLOR_PALETTE",
      payload: !noteState.pickColor,
    });
  };

  const editNoteColor = (colorSelected) => {
    setNoteColor(colorSelected);
    noteDispatch({
      type: "SHOW_COLOR_PALETTE_MODAL",
      payload: !noteState.pickColorModal,
    });
  };
  const noteColors = ["#FFE7C7", "#FEF8DD", "#E1F8DC", "#CAF1DE", "#ACDDDE"];

  return (
    <div
      className={
        noteState.pickColorModal
          ? "palette-container-modal"
          : "palette-container flex"
      }
    >
      {noteColors.map((colorSelected) => {
        return (
          <div
            key={colorSelected}
            className="color-item"
            style={{ backgroundColor: `${colorSelected}` }}
            onClick={() =>
              noteState.pickColorModal
                ? editNoteColor(colorSelected)
                : pickNoteColor(colorSelected)
            }
          ></div>
        );
      })}
    </div>
  );
}

export default ColorPalette;
