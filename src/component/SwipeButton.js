import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { IconButton } from "@material-ui/core";

function SwipeButton() {
  return (
    <div className="swp">
      <div className="swipeButton">
        <IconButton className="a_repeat">
          <ReplayIcon />
        </IconButton>
        <IconButton className="a_left">
          <CloseIcon />
        </IconButton>
        <IconButton className="a_star">
          <StarIcon />
        </IconButton>
        <IconButton className="a_right">
          <EmojiEmotionsIcon />
        </IconButton>
        <IconButton className="a_light">
          <FlashOnIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default SwipeButton;
