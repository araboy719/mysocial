import React from 'react';
import s from './Users.module.css';
import avatar from '../../../assets/img/avatar.jpg'
import Preloader from '../../common/preloader/Preloader';
import { NavLink } from 'react-router-dom';
import { followUserAPI, unfollowUserAPI } from 'redux/axios/requestApi';

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
                return <span onClick={(e) => { props.onPageChanged(p) }} key={p} >{p}</span>
            })}
        </div>

        {props.users.map(u => <div key={u.id} className={s.user}>
            <span>
                <p>{u.name}</p>
                <NavLink to={"/profile/" + u.id} >
                    <img src={u.photos.small != null ? u.photos.small : avatar} alt="avatar" />
                </NavLink>
            </span>
            <span>
                <p>{u.status}</p>
                {!u.followed ?

                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.setFollowingInprogress(true, u.id);
                        followUserAPI().then(
                            data => {
                                if (data.resultCode === 0) {
                                    props.followUsers(u.id)
                                }
                                props.setFollowingInprogress(false, u.id);
                            })
                    }}>Follow</button> :

                    <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.setFollowingInprogress(true, u.id);
                        unfollowUserAPI().then(
                            data => {
                                if (data.resultCode === 0) {
                                    props.unfollowUsers(u.id)
                                }
                                props.setFollowingInprogress(false, u.id);
                            })
                    }}>Unfollow</button>}
            </span>
        </div>
        )}
    </div>
}


export default Users;