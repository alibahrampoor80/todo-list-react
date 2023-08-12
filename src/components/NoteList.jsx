import React from 'react';
import NoteItem from "./NoteItem.jsx";


const NoteList = ({note, onDeleteNote, onComplete}) => {

    return (
        <div className={'note-list'}>
            {
                note.map((item) => {
                    return <NoteItem key={item.id} note={item} onDeleteNote={onDeleteNote} onComplete={onComplete}/>
                })
            }
        </div>
    );
};

export default NoteList;

