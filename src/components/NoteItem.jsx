import React from 'react';

const NoteItem = ({note, onDeleteNote, onComplete}) => {

    return (
        <div className={`note-item ${note.completed ? 'completed' : ""}`}>
            <div className="note-item__header">
                <div className="">
                    <p className={'title'}>{note.title}</p>
                    <p className={'desc'}>{note.description}</p>
                </div>
                <div className="actions">
                    <button onClick={() => onDeleteNote(note.id)}>❌</button>
                    <input type="checkbox" id={note.id} name={note.id} value={note.id}
                           checked={note.completed}
                           onChange={(event) => onComplete(event)}
                    />
                </div>
            </div>
            <div className="note-item__footer">
                {new Date(note.createAt).toLocaleDateString("en-us", {year: 'numeric', month: 'long', day: 'numeric'})}
            </div>

        </div>
    );
};

export default NoteItem;