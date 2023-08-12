import React from 'react';

const NoteStatus = ({notes}) => {
    const lengthNotes = notes.length
    const completedNote = notes.filter((n) => n.completed).length
    const openNote = lengthNotes - completedNote

    if (!lengthNotes) return <h2>no task - please add note</h2>
    return (
        <ul className={'note-status'}>
            <li>All <span>{lengthNotes}</span></li>
            <li>completed <span>{completedNote}</span></li>
            <li>open <span>{openNote}</span></li>
        </ul>
    );
};

export default NoteStatus;