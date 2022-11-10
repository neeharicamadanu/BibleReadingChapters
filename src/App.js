import React, { useState } from "react";
import data from "./data";
import List from "./List.js";

function App() {
  const [bible, setBible] = useState(data);

  const handleDelete = (book) => {
    return setBible(
      bible.filter((testament) => {
        return testament.book !== book;
      })
    );
  };

  return (
    <main>
      <section className="container">
        <h3>{bible.length} Bible Chapters Today!</h3>
        <List bible={bible} handleDelete={handleDelete} />
        <button onClick={() => setBible([])}> READ ALL!</button>
      </section>
    </main>
    // <div className="main">
    //   <List bible={bible}></List>
    //   <button
    //     className="container button"
    //     onClick={() => {
    //       setBible([]);
    //     }}
    //   >
    //     DELETE CHAPTERS
    //   </button>
    // </div>
  );
}

export default App;
