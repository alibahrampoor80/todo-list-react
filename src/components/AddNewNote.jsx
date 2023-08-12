import React, {useState} from 'react';
import toast from "react-hot-toast";

const AddNewNote = ({note, setNote}) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handelSubmitForm = (e) => {
        e.preventDefault()

        if (!title || !description) {
            return toast.error('please enter value')
        }

        const newNote = {
            title,
            description,
            id: Date.now(),
            completed: false,
            createAt: new Date().toISOString()
        }

        setTitle("")
        setDescription("")
        setNote(prevState => [...prevState, newNote])
    }

    return (
        <div className="add-new-note">
            <h2>add new note</h2>
            <form className="note-form" onSubmit={handelSubmitForm}>
                <input type="text"
                       value={title}
                       onChange={(event) => setTitle(event.target.value)}
                       className={'text-field'}
                       placeholder={'note title'}
                />
                <input type="text"
                       value={description}
                       onChange={(event) => setDescription(event.target.value)}
                       className={'text-field'} placeholder={'description'}/>
                <button className={'btn btn--primary'} type={'submit'}>add new note</button>
            </form>
        </div>
    );
};

export default AddNewNote;