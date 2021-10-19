import React from 'react';
import style from './LeftNav.module.scss';


const UserCard:React.FC = () => {
    return (
        <div className={style.userCardContainer}>
            <div>
                <img className={style.userPhoto} src="https://statinfer.com/wp-content/uploads/dummy-user.png" alt="" />
            </div>
            <div className={style.userDetails}>
                <b>Edwin PT</b>
                <span className={style.userEmail}>edwinpt@gmail.com</span>
            </div>
        </div>
    )
}

export default UserCard
