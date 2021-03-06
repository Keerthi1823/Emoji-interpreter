import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "ðĨ": "Collision",
  "ðŦ": "Dizzy",
  "ðĶ": "Sweat Droplets",
  "ðĻ": "Dashing Away",
  "ðĩ": "Monkey Face",
  "ð": "Monkey",
  "ðĶ": "Gorilla",
  "ðĶ§": "Orangutan",
  "ðķ": "Dog Face",
  "ð": "Dog",
  "ðĶŪ": "Guide Dog",
  "ðâðĶš": "Service Dog",
  "ðĐ": "Poodle",
  "ðš": "Wolf",
  "ðĶ": "Fox",
  "ðĶ": "Raccoon",
  "ðą": "Cat Face",
  "ð": "Cat",
  "ð": "Bouquet",
  "ðļ": "Cherry Blossom",
  "ðŪ": "White Flower",
  "ðĩïļ": "Rosette",
  "ðđ": "Rose",
  "ðĨ": "Wilted Flower",
  "ðš": "Hibiscus",
  "ðŧ": "Sunflower",
  "ðž": "Blossom",
  "ð·": "Tulip",
  "ðą": "Seedling",
  "ðŠī": "Potted Plant"
};
var emojiWeKnow = Object.keys(emojiDict);

export default function App() {
  var [user, setuser] = useState("");

  function inputHandler(e) {
    var input = e.target.value;
    var meaning = emojiDict[input];
    setuser(meaning);
  }
  function clickHandler(item) {
    var meaning = emojiDict[item];
    if (meaning === undefined) {
      meaning = "this emoji is not present in our database";
    }
    setuser(meaning);
  }
  return (
    <div className="App">
      <h1>Animals and Nature Interpreter</h1>
      <input placeholder="enter your emoji" onChange={inputHandler} />
      <h2 styling={{ padding: "1rem" }}>{user}</h2>

      <h3>emojis are here ð</h3>
      {emojiWeKnow.map((item) => {
        return (
          <span key={item} onClick={() => clickHandler(item)}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
