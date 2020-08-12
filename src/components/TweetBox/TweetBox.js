import React from "react";
import { Button, Avatar } from "@material-ui/core";
import "./TweetBox.css";
import { useState } from "react";
import db from "../../firebase";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Brad Traversy",
      username: "bradTraversy",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://img-a.udemycdn.com/user/200_H/21681922_4513_5.jpg",
    });
    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars0.githubusercontent.com/u/33162722?s=460&u=da606733bfc34fec7bab1a7bb20a932802734acb&v=4" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening ?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetBox;
