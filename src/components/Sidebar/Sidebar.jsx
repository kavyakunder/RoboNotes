import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar-notes">
      <ul>
        <li>
          <NavLink to="/">
            <i class="fa-solid fa-house"></i>Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/notes">
            <i class="fa-solid fa-note-sticky"></i>Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="/archive">
            <i class="fa-solid fa-inbox"></i>Archive
          </NavLink>
        </li>
        <li>
          <NavLink to="/trash">
            <i class="fa-solid fa-trash"></i>Trash
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
