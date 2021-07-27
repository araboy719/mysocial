import React, { useState } from 'react';


const ProfileStatus = (props) => {

    let [editMode, setEditMode ] = useState(false);

    let [localStatus, setStatus ] =  useState(props.status);

    const activateEditMode = (togle) => {
        setEditMode(togle)
    }

    

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={() => { activateEditMode(true)}}  ><p>{props.status || '-------'}</p></span>
            </div>
}
            { editMode &&
                <div>
                <input autoFocus={true} onBlur={() => { activateEditMode(false) }} />
            </div>
            }
        </div>
    )
}

export default ProfileStatus;