import React from 'react';
import avatar from '../../../../assets/img/avatar.jpg'
const ProfileInfo = (props) => {

    return (
            <div>
                <img alt="avatar" src={props.profile.photos.large ? props.profile.photos.large : avatar }></img>
                <div><p>{props.profile.aboutMe ? props.profile.aboutMe : 'I am learning React'}</p></div>
            </div>

    )
}

export default ProfileInfo;