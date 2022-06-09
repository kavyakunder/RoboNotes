import axios from "axios";
import toast from "react-hot-toast";

const archiveNote = async (noteState, noteDispatch, note) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes },
      status,
    } = await axios.post(
      `/api/notes/archives/${note._id}`,
      { note: note },
      {
        headers: Headers,
      }
    );
    if (status >= 200 && status <= 300) {
      toast.success("Note archived");
      noteDispatch({ type: "ADD_NOTE", payload: notes });
      noteDispatch({ type: "ADD_TO_ARCHIVE", payload: note });
    } else {
      throw new Error(status);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const restoreNote = async (noteState, noteDispatch, note) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes, archives },
      status,
    } = await axios.post(
      `/api/archives/restore/${note._id}`,
      {},
      {
        headers: Headers,
      }
    );
    if (status >= 200 && status <= 300) {
      toast.success("Note restored");
      noteDispatch({ type: "ADD_NOTE", payload: notes });
      noteDispatch({
        type: "RESTORE_ARCHIVE_NOTE",
        payload: { archive: archives, notes: note },
      });
    } else {
      throw new Error(status);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export { archiveNote, restoreNote };
