import React from 'react';
import Message from "./Message.jsx";

const NoteStatus = ({notes}) => {
    const lengthNotes = notes.length
    const completedNote = notes.filter((n) => n.completed).length
    const openNote = lengthNotes - completedNote

    if (!lengthNotes) return <Message>
        ℹ️🙄
        no notes please add notes
    </Message>

    return (
        <ul className={'note-status'}>
            <li>All <span>{lengthNotes}</span></li>
            <li>completed <span>{completedNote}</span></li>
            <li>open <span>{openNote}</span></li>
        </ul>
    );
};

export default NoteStatus;