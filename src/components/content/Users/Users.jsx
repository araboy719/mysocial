import React from 'react';
import s from './Users.module.css';
import avatar from '../../../assets/img/avatar.jpg'
import Preloader from '../../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {
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
                <NavLink to={"/profile/"+ u.id} >
                    <img src={u.photos.small != null ? u.photos.small : avatar} />
                </NavLink>
            </span>
            <span>
                <p>{u.status}</p>
                {!u.follow ? 
                
                <button onClick={() => { 
                    axios.delete('https://social-network.samuraijs.com/api/1.0/follow/'+u.id,                    
                    {withCredentials: true,
                        headers: {
                            'API-KEY': 'fce6d0a4-2e49-427b-8b67-10f32db9ff3df'
                        }
                    }).then(
                        response => {
                            console.log(response);
                    })


                 }}>Follow</button> : 
                
                <button onClick={() => { props.unfollowUsers(u.id) }}>Unfollow</button>}
            </span>
        </div>
        )}
    </div>

}


export default Users;