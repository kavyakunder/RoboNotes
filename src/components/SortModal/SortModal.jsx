import React from "react";
import { useNote } from "../../context/note-context";
const SortModal = () => {
  const {
    noteState: { sortByDateTime },
    noteDispatch,
  } = useNote();
  return (
    <div
      className="sort-modal"
      style={{ textAlign: "center", marginTop: "2rem" }}
    >
      <span style={{ fontSize: "1.2rem" }}>Sort By Time</span>
      <label>
        <input
          type="radio"
          name="sort-date"
          value="new-to-old"
          checked={sortByDateTime === "NEW_TO_OLD" ? true : false}
          onChange={() =>
            noteDispatch({
              type: "SORT_BY_DATE",
              payload: "NEW_TO_OLD",
            })
          }
        />
        Latest first
      </label>
      <label>
        <input
          type="radio"
          name="sort-date"
          value="old-to-new"
          onChange={() =>
            noteDispatch({
              type: "SORT_BY_DATE",
              payload: "OLD_TO_NEW",
            })
          }
        />
        Oldest first
      </label>
    </div>
  );
};

export default SortModal;
