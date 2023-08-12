import React, {useState} from 'react';
import AddNewNote from "./components/AddNewNote.jsx";
import './App.css'
import NoteList from "./components/NoteList.jsx";
import {Toaster} from "react-hot-toast";
import NoteStatus from "./components/NoteStatus.jsx";
import NoteHeader from "./components/NoteHeader.jsx";


const App = () => {
    const [note, setNote] = useState([])
    const [sortBy, setSortBy] = useState("latest")
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

    let sortedNotes = note
    if (sortBy === 'earliest')
        sortedNotes = [...note].sort((a, b) => new Date(a.createAt) - new Date(b.createAt))

    if (sortBy === 'latest')
        sortedNotes = [...note].sort((a, b) => new Date(b.createAt) - new Date(a.createAt))

    if (sortBy === 'completed')
        sortedNotes = [...note].sort((a, b) => Number(b.completed) - Number(a.completed))

    return (
        <div className={'container'}>
            <NoteHeader notes={note} sortBy={sortBy} setSortBy={(e) => setSortBy(e.target.value)}/>
            <div className="note-app">
                <AddNewNote note={note} setNote={setNote}/>
                <div className="note-container">
                    <NoteStatus notes={note}/>

                    <NoteList note={sortedNotes}
                              onDeleteNote={onDeleteNote}
                              onComplete={handelCompleteNote}/>
                </div>
            </div>
            <Toaster/>
        </div>
    );
};

export default App;