import { useState, createContext, useContext, useReducer } from "react";
import { NotesReducer } from "../reducers/notes-reducer";
const NotesContext = createContext();
const NotesProvider = ({ children }) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
    label: "",
  });

  const [noteState, noteDispatch] = useReducer(NotesReducer, {
    notes: [],
    trash: [],
    archive: [],
    pickColor: false,
    sortBy: null,
  });
  return (
    <NotesContext.Provider value={{ note, setNote, noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNote = () => useContext(NotesContext);
export { useNote, NotesProvider };
