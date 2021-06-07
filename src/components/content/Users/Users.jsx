import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import avatar from '../../../assets/img/avatar.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    render() {                    
            {
                this.props.users.map(u => <div key={u.id} className={s.user}>
                    <span>
                        <p>{u.name}</p>
                        <img src={u.photos.small != null ? u.photos.small : avatar} />
                    </span>
                    <span>
                        <p>{u.status}</p>
                        {u.follow ? <button onClick={() => { this.props.unfollowUsers(u.id) }}>Follow</button> : <button onClick={() => { this.props.followUsers(u.id) }}>Unfollow</button>}
                    </span>
                </div>
                )}
        </div>

    }
}

export default Users;