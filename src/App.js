import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Landing from "./pages/Landing/Landing";
import Notes from "./pages/Notes/Notes";
import Trash from "./pages/Trash/Trash";
import Archive from "./pages/Archive/Archive";
import Login from "./pages/Login/Login";
import { PrivateRoutes } from "./routes/PrivateRoutes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/notes" element={<Notes />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/archive" element={<Archive />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
