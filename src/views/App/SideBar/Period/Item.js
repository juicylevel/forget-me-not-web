import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled(Box)`
    padding: 10px;
    background-color: #CCCED0;
    border-radius: 8px;
    cursor: pointer;
`;

const IconShape = styled(Avatar)`
    background-color: ${props => props.color};
`;

const Count = styled(Typography)`
    font-weight: 600;
    font-size: 1.6rem;
`;

const Label = styled(Typography)`
    margin-top: 10px;
`;

const Item = ({
    label,
    icon,
    color,
    count,
}) => {
    return (
        <Wrapper 
            display="flex"
            flexDirection="column"
        >
            <Box 
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <IconShape color={color}>
                    {icon}
                </IconShape>
                <Count color="textSecondary">
                    {count}
                </Count>
            </Box>
            <Label color="textSecondary">
                {label}
            </Label>
        </Wrapper>
    );
};

Item.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    color: PropTypes.string,
    count: PropTypes.number,
};

export default Item;