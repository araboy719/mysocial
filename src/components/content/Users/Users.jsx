import React from 'react';
import s from './Users.module.css';
import avatar from '../../../assets/img/avatar.jpg'
import Preloader from '../../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {
    debugger
    let countOfPages = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= countOfPages; i++) {
        pages.push(i)
    }
    return <div className={s.content}>
        {props.isPreloader ? <Preloader /> : null}
        <div className={s.paginator}>
            {pages.map(p => {
                return <span onClick={(e) => { props.onPageChanged(p) }} className={props.currentPage === p && s.selected}>{p}</span>
            })}
        </div>

        {props.users.map(u => <div key={u.id} className={s.user}>
            <span>
                <p>{u.name}</p>
                <NavLink to={"/profile/" + u.id} >
                    <img src={u.photos.small != null ? u.photos.small : avatar} />
                </NavLink>
            </span>
            <span>
                <p>{u.status}</p>
                {u.followed ?

                    <button onClick={() => {
                        axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {},
                            {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '09f36643-2bee-44ff-93e2-f8a51442c7e3'
                                }
                            }).then(
                                response => {
                                    debugger
                                    if (response.data.resultCode == 0) {
                                        debugger
                                        props.followUsers(u.id)
                                    }
                                })
                    }}>Unfollow</button> :

                    <button onClick={() => {
                        axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id,
                            {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '09f36643-2bee-44ff-93e2-f8a51442c7e3'
                                }
                            }).then(
                                response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollowUsers(u.id)
                                    }
                                })
                    }}>Follow</button>}
            </span>
        </div>
        )}
    </div>
}


export default Users;