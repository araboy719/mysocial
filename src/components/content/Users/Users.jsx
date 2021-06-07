import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import avatar from '../../../assets/img/avatar.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + this.props.currentPage + "&count=" + this.props.pageSize + "").then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
            debugger
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + pageNumber + "&count=" + this.props.pageSize + "")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let countOfPages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= countOfPages; i++) {
            pages.push(i)
        }
        return <div className={s.content}>

            {pages.map(p => {
                return <span onClick={(e) => { this.onPageChanged(p) }} className={this.props.currentPage === p && s.selected}>{p}</span>
            })}

            {this.props.users.map(u => <div key={u.id} className={s.user}>
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