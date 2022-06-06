import axios from "axios";
import toast from "react-hot-toast";

const loginAuth = async (user) => {
  try {
    const { data } = await axios.post("/api/auth/login", user);
    return data;
  } catch (error) {
    return false;
  }
};
const addNotes = async (noteDispatch, note) => {
  const authToken = JSON.parse(localStorage.getItem("AUTH_TOKEN"));
  const Headers = { authorization: authToken };
  try {
    const {
      data: { notes },
      status,
    } = await axios.post("/api/notes", note, { headers: Headers });
    if (status === 201) {
      toast.success("Note added!!");

      noteDispatch({ type: "ADD_NOTE", payload: notes });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export { loginAuth, addNotes };
