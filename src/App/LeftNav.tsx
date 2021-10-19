import React from 'react';
import SearchArea from './SearchArea';
import UserCard from './UserCard';
import style from './LeftNav.module.scss';
import NavItems from './NavItems';

const LeftNav:React.FC = () => {
    return (
        <div className={style.leftNav}>
           <UserCard/>
           <SearchArea/>
           <NavItems/>
        </div>
    )
}

export default LeftNav
