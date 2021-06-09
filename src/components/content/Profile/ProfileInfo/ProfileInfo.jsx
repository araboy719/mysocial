import React from 'react';

const ProfileInfo = (props) => {

    return (
            <div>
                <img src={props.profile.photos.large}></img>
                <div><p>{props.profile.aboutMe}</p></div>
            </div>

    )
}

export default ProfileInfo;