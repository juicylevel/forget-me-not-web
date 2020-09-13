import React from 'react';
import styled from 'styled-components';
import Period from './Period';
import Categories from './Categories';

const Wrapper = styled.aside`
    max-width: 330px;
    padding-top: 9px;
    background-color: #E2E5E6;
`;

const SideBar = () => {
    return (
        <Wrapper>
            <Period />
            <Categories defaultValue={0} />
        </Wrapper>
    );
};

export default SideBar;