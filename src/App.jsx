import React, { useState } from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import Note from "./components/note";
import NoteArea from "./components/notearea"

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
    });
    }

    return (
    <div>
        <Header />
        <NoteArea onAdd={addNote} />
        <div className="note-container">
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={deleteNote}
                    />
                    );
            })}
        </div>
        <Footer />
    </div>
    );
}

export default App;