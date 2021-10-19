import React from 'react';
import { ISearchBoxStyles, SearchBox } from '@fluentui/react';
import style from './LeftNav.module.scss';

const SearchArea = () => {
    const searchBoxStyles: Partial<ISearchBoxStyles> = {
        root: {
            width: 270,
            background: "#454b559c",
            border: "1px solid whitesmoke",
        }
    };

    return (
        <div className={style.searchArea}>
            <SearchBox styles={searchBoxStyles} placeholder="Search ..." underlined={true} width={50} />
        </div>
    )
}

export default SearchArea
