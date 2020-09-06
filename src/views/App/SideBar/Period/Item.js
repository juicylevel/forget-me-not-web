import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

const Wrapper = styled(Box)`
    padding: 10px;
    background-color: #CCCED0;
    border-radius: 8px;
    cursor: pointer;
`;

const Item = ({
    label,
    icon,
    count,
}) => {
    return (
        <Wrapper 
            display="flex"
            flexDirection="column"
        >
            <Box 
                display="flex"
                justifyContent="space-between"
            >
                {icon}
                <span>{count}</span>
            </Box>
            <span>{label}</span>
        </Wrapper>
    );
};

Item.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    count: PropTypes.number,
};

export default Item;