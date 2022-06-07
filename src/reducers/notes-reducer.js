const NotesReducer = (noteState, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE":
      return {
        ...noteState,
        notes: [...payload],
      };
    case "SHOW_COLOR_PALETTE":
      return { ...noteState, pickColor: payload };

    case "SHOW_COLOR_PALETTE_MODAL":
      return { ...noteState, pickColorModal: payload };

    case "SORT_BY_DATE":
      return { ...noteState, sortByDateTime: payload };
    default:
      return noteState;
  }
};

export { NotesReducer };
