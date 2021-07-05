import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,

    }

    activateEditMode = (togle) => {
        this.setState({
            editMode: togle
        })
    }
    render() {
        return (
            <div>
                {(this.state.editMode) ? <div><input autoFocus={true} value={this.props.status} onBlur={() => { this.activateEditMode(false) }} /></div> :
                    <span onDoubleClick={() => { this.activateEditMode(true) }}><p>{this.props.status}</p></span>}
            </div>

        )
    }
}

export default ProfileStatus;