import React from "react";

const List = ({ bible, handleDelete }) => {
  const displayTestaments = () => {
    if (bible.length !== 0) {
      return bible.map((testament) => {
        const { id, book, chapters, image } = testament;
        return (
          <article key={id} className="person">
            <img src={image} alt={book} />
            <div>
              <h4>{book}</h4>
              <p>{chapters}</p>

              <button onClick={() => handleDelete(book)}> DONE!</button>
            </div>
          </article>
        );
      });
    } else {
      return <h2> EMPTY CHAPTERS DISPLAYED! </h2>;
    }
  };
  return <>{displayTestaments()}</>;
};

export default List;
