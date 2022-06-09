import axios from "axios";
import toast from "react-hot-toast";

const trashNote = async (noteDispatch, note) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes },
      status,
    } = await axios.delete(`/api/notes/${note._id}`, {
      headers: Headers,
    });
    if (status >= 200 && status <= 300) {
      toast.success("Note moved to trash!!");
      noteDispatch({ type: "ADD_NOTE", payload: notes });
      noteDispatch({ type: "ADD_TO_TRASH", payload: note });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const archiveToTrashNote = async (noteState, noteDispatch, note) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { archives },
      status,
    } = await axios.delete(`/api/archives/delete/${note._id}`, {
      headers: Headers,
    });
    if (status >= 200 && status <= 300) {
      toast.success("Note sent to trash");

      noteDispatch({
        type: "ARCHIVE_TO_TRASH",
        payload: { archive: archives, trash: note },
      });
    } else {
      throw new Error(status);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export { trashNote, archiveToTrashNote };
