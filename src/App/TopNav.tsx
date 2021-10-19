import React from 'react';
import style from './LeftNav.module.scss';

const TopNav: React.FC<Iprops> = (props) => {
    return (
        <div className={style.topNavContainer}>
            {/* <h2> &gt; </h2> */}
            <h2>
                <span>{props.page1 ? props.page1 : null}&nbsp;</span>
                <span>&gt;&nbsp;{props.page2 ? props.page2 : null}&nbsp;</span>
                <span>&gt;&nbsp;{props.page3 ? props.page3 : null}&nbsp;</span>
                <span>&gt;&nbsp;{props.page4 ? props.page4 : null}&nbsp;</span>
            </h2>
        </div>
    )
}

export default TopNav;

interface Iprops {
    page1?: string;
    page1_path?: string;
    page2?: string;
    page2_path?: string;
    page3?: string;
    page3_path?: string;
    page4?: string;
    page4_path?: string;
}
