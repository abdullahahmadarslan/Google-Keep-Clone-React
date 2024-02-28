import React from 'react'
import AssignmentIcon from '@mui/icons-material/Assignment';
function Header() {
    return (
        <div className="header">
            <div className="cmn1 logo"><AssignmentIcon style={{ fontSize: "5em" }} /></div>
            <div className="title cmn1">Google Keep</div>
        </div>
    )
}

export default Header;