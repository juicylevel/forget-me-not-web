import React from 'react';
import Period from './Period';
import Categories from './Categories';

const SideBar = () => {
    return (
        <div>
            <Period />
            <Categories defaultValue={0} />
        </div>
    );
};

export default SideBar;