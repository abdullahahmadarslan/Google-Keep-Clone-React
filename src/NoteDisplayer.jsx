import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function NoteDisplayer(props) {
    return (
        <>

            <div className="note-displayer">
                <h1 className='cmn2'>{props.titleValue}</h1>
                <p className='cmn2'>{props.noteValue}</p>
                <button className='del-btn' onClick={() => { props.delEventHandler(props.index) }}><DeleteIcon /></button>
            </div>
        </>
    )
}

export default NoteDisplayer;