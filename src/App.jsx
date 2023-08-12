import React, {useState} from 'react';
import AddNewNote from "./components/AddNewNote.jsx";
import './App.css'
import NoteList from "./components/NoteList.jsx";
import {Toaster} from "react-hot-toast";
import NoteStatus from "./components/NoteStatus.jsx";


const App = () => {
    const [note, setNote] = useState([])
    const onDeleteNote = (id) => {
        // const filterNote = note.filter(item => item.id !== id)
        // setNote(filterNote)
        setNote((prevNote) => prevNote.filter(n => n.id !== id))
    }
    const handelCompleteNote = (event) => {
        const noteId = Number(event.target.value)
        const newNote = note.map(n => n.id === noteId ? {...n, completed: !n.completed} : n)
        setNote(newNote)
    }

    return (
        <div className={'container'}>
            <div className="note-header">note header</div>
            <div className="note-app">
                <AddNewNote note={note} setNote={setNote}/>

                <div className="note-container">
                    <NoteStatus notes={note}/>
                    <NoteList note={note} onDeleteNote={onDeleteNote} onComplete={handelCompleteNote}/>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default App;