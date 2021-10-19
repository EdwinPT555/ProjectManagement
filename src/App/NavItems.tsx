import React from 'react';
import style from './LeftNav.module.scss';
import NavItem from './NavItem';

const NavItems = () => {
    return (
        <div className={style.navItemContainer}>
            <NavItem title="Home" path="/" icon="fa-solid fa-house" />
            <NavItem title="Tasks" path="/tasks" icon="fa-solid fa-clipboard-list" />
            <NavItem title="Projects" path="/projects" icon="fa-solid fa-suitcase" />
            <NavItem title="Client Requests" path="/client-requests" icon="fa-solid fa-comment" />
            <NavItem title="Clients" path="/clients" icon="fa-solid fa-users" />
            <NavItem title="Products" path="/products" icon="fa-solid fa-cube" />
            <NavItem title="My Time" path="/my-time" icon="fa-solid fa-clock" />
            <NavItem title="Reports" path="/reports" icon="fa-solid fa-book" />
            <NavItem title="Settings" path="/settings" icon="fa-solid fa-gear" />
            <NavItem title="About" path="/about" icon="fa-solid fa-circle-info" />
        </div>
    )
}

export default NavItems

