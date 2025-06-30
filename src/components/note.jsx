import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <p className="title">{props.title}</p>
      <p className="text">{props.content}</p>
      <button onClick={handleClick}>-</button>
    </div>
  );
}

export default Note;