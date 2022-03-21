import React, { useState } from "react";
import "./styles.css";

var emojiDict = {
  "💥": "Collision",
  "💫": "Dizzy",
  "💦": "Sweat Droplets",
  "💨": "Dashing Away",
  "🐵": "Monkey Face",
  "🐒": "Monkey",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺": "Service Dog",
  "🐩": "Poodle",
  "🐺": "Wolf",
  "🦊": "Fox",
  "🦝": "Raccoon",
  "🐱": "Cat Face",
  "🐈": "Cat",
  "💐": "Bouquet",
  "🌸": "Cherry Blossom",
  "💮": "White Flower",
  "🏵️": "Rosette",
  "🌹": "Rose",
  "🥀": "Wilted Flower",
  "🌺": "Hibiscus",
  "🌻": "Sunflower",
  "🌼": "Blossom",
  "🌷": "Tulip",
  "🌱": "Seedling",
  "🪴": "Potted Plant"
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

      <h3>emojis are here 👇</h3>
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
