import React, {useState} from 'react';

const NoteHeader = ({notes, setSortBy, sortBy}) => {


    return (
        <div className={'note-header'}>
            <h2>notes length {notes.length}</h2>
            <select value={sortBy} onChange={setSortBy}>
                <option value={'latest'}>Sort on latest notes</option>
                <option value={'earliest'}>Sort on earliest notes</option>
                <option value={'completed'}>Sort on completed notes</option>
            </select>
        </div>
    );
};

export default NoteHeader;