import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

function NoteAdder(props) {
    // 
    const [dataObject, setData] = useState({ titleContent: "", noteContent: "" });

    const contentEventHandler = (eventObject) => {
        const { name, value } = eventObject.target;

        setData((previousData) => {
            return { ...previousData, [name]: value };
        });

    }

    // 

    const addButtonEventHandler = () => {
        props.addEventHandler(dataObject);
        setData({ titleContent: "", noteContent: "" });
    }
    //
    const formSubmit = (eventObject) => {
        eventObject.preventDefault();

    }

    return (
        <>
            <div className="note-adder">
                <form className='form' onSubmit={formSubmit} >
                    <input type="text" className='text-adder text-field' placeholder=' Title' value={dataObject.titleContent} onChange={contentEventHandler} name='titleContent' autoComplete='off' />
                    <textarea cols="30" rows="10" className='text-area text-field' placeholder='  Write a note here...' value={dataObject.noteContent} onChange={contentEventHandler} name="noteContent"></textarea>
                    <button className='btn' onClick={addButtonEventHandler}><AddIcon style={{ fontSize: "35px" }} className='add-icon' /></button>
                </form>
            </div>
        </>
    )
}

export default NoteAdder;