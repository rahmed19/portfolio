import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
const Sidebar = ({ isOpen, toggleSidebar }) => {

  return <aside className={`sidebar ${isOpen ? "show-sidebar" : ''}`}>
    <button className="close-btn">
      <FaTimes />
    </button>
    <div className="side-container">
      <Links styleClass="sidebar-links" />
      <SocialLinks styleClass="sidebase-icons" />
    </div>
  </aside>
}

export default Sidebar
