import React, { useState } from "react";

    function NoteArea(props){
        const [note, createNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        createNote(prevNote => {
            return {
            ...prevNote,
            [name]: value
            };
        });
    }

    function submit(event) {
        props.onAdd(note);
        createNote({
            title: "",
            content: ""
        });
        event.preventDefault();
    }

    return (
        <div className="form-container">
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />
                <textarea
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Note text"
                    rows="3"
                />
                <button onClick={submit}>+</button>
            </form>
        </div>
    );
}

export default NoteArea;