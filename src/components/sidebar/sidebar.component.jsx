import React from "react";

import "./sidebar.styles.scss";
import { Link } from "react-router-dom";

import espi from "../../Images/IMG-1957.jpg";

import { auth } from "../firebase/firebase.utils";

const SideBar = ({ currentUser }) => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-item">
        <div className="inner-text">Dashboard</div>
      </Link>
      <Link to="/stealth" className="sidebar-item">
        <div className="inner-text">Stealth</div>
      </Link>
      <Link to="/action" className="sidebar-item">
        <div className="inner-text">Action</div>
      </Link>
      <Link to="/adventure" className="sidebar-item">
        <div className="inner-text">Adventure</div>
      </Link>
      <Link to="stats" className="sidebar-item">
        <div className="inner-text">Top stats</div>
      </Link>
      <div className="login">
        <img className="profile-log" src={espi} alt="ret" />
        <span className="pl1">Evil Nuka</span>
        <span className="pl1">evilnuka@woa.com</span>
        {currentUser ? (
          <div className="custom-button" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="custom-button" to="/sign">
            <div className="inner-text-log">Sign In</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideBar;
