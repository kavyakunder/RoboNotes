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
            <i class="fa-solid fa-memo-pad"></i>Notes
          </NavLink>
        </li>
        <li>
          <NavLink to="/archive">
            <i class="fa-solid fa-folder-arrow-down"></i>Archive
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
