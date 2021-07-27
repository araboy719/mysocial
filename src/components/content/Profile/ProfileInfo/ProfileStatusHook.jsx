import React, { useEffect, useState } from 'react';


const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false);

    let [localStatus, setStatus] = useState(props.status);

    useEffect(() =>{
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = (togle) => {
        setEditMode(togle)
        !togle && props.updateStatus(localStatus);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }



    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={() => { activateEditMode(true) }}  ><p>{props.status || '-------'}</p></span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChange} value={localStatus} onBlur={() => { activateEditMode(false) }} />
                </div>
            }
        </div>
    )
}

export default ProfileStatus;