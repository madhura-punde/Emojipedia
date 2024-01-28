import React from "react";
import Entry from "./Entry";
import emojiArray from '../emoji.js'
import '../styles.css' 

function createEntry(item){

  return <Entry
    emoji = {item.emoji}
    name = {item.name}
    description = {item.meaning}
    key = {item.id}

  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">

      {emojiArray.map(createEntry)}

      </dl>
    </div>
  );
}

export default App;
