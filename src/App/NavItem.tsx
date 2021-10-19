import React from 'react'
import { Link } from 'react-router-dom';
import style from './LeftNav.module.scss';

const NavItem:React.FC<IProps> = (props) => {
    return (
        <Link to={props.path} className={style.navItem}>
            <div className={`${props.icon} ${style.navItemIcon}`}></div>
            <div className={style.navItemTitle}>{props.title}</div>
        </Link>
    )
}

export default NavItem;

interface IProps {
    path:string;
    icon:string;
    title:string;
}
