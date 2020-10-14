import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon" color="primary" />
      </IconButton>

      <img
        className="h"
        src="https://freepngimg.com/thumb/logo/62349-computer-instagram-icons-free-transparent-image-hq.png"
        alt=""
      />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" color="primary" />
      </IconButton>
    </div>
  );
}

export default Header;
