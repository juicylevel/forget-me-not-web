import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import Period from './Period';
import Categories from './Categories';

const Wrapper = styled(Box)`
    max-width: 330px;
    padding-top: 9px;
    background-color: #E2E5E6;
`;

const SideBar = () => {
    return (
        <Wrapper
            display="flex"
            flexDirection="column"
            component="aside"
        >
            <Period />
            <Categories defaultValue={0} />
        </Wrapper>
    );
};

export default SideBar;