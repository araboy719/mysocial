import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status

    }

    activateEditMode = (togle) => {
        this.setState({
            editMode: togle
        })
        if (!togle) {
            this.props.updateStatus(this.state.status);
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }
    render() {
        return (
            <div>
                {(this.state.editMode) ?
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={() => { this.activateEditMode(false) }} />
                    </div> :
                    <div>
                        <span onDoubleClick={() => { this.activateEditMode(true) }}><p>{this.props.status}</p></span>
                    </div>
                    }
            </div>


        )
    }
}

export default ProfileStatus;