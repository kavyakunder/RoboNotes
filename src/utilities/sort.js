const sortedByDate = (notes, sortBy) => {
  if (sortBy === "NEW_TO_OLD") {
    return [...notes].sort(
      (a, b) => new Date(b.noteDate) - new Date(a.noteDate)
    );
  } else if (sortBy === "OLD_TO_NEW") {
    return [...notes].sort(
      (a, b) => new Date(a.noteDate) - new Date(b.noteDate)
    );
  }
  return notes;
};
export { sortedByDate };
