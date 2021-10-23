import React from 'react';
import { ISearchBoxStyles, SearchBox } from '@fluentui/react';
import style from './LeftNav.module.scss';

const SearchArea = () => {
    const searchBoxStyles: Partial<ISearchBoxStyles> = {
        root: {
            width: 210,
            background: "#454b559c",
            border: "1px solid whitesmoke",
        }
    };

    return (
        <div className={style.searchArea}>
            <SearchBox styles={searchBoxStyles} placeholder="Search ..." underlined={true}  />
        </div>
    )
}

export default SearchArea
