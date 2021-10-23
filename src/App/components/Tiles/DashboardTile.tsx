import React from 'react';
import style from './DashboardTile.module.scss';

const DashboardTile: React.FC<IProps> = (props) => {
    return (
        <div className={style.tileContainer}>
            <div className={style.header} style={{ background: `${props.bgColor}` }}>
                <div className={style.left}>
                    <div className={style.count}>{props.leftCount}</div>
                    <div className={style.title}>{props.leftTitle}</div>
                </div>
                <div className={style.right}>
                    <div className={style.count}>{props.rightCount}</div>
                    <div className={style.title}>{props.rightTitle}</div>
                </div>
            </div>
            <div className={style.tileBody}>
                <div className={style.mainTitle}>{props.mainTitle}</div>
            </div>
        </div>
    )
}

export default DashboardTile;

interface IProps {
    bgColor?: string;
    leftTitle: string;
    leftCount: string;
    rightTitle: string;
    rightCount: string;
    mainTitle: string;
}
