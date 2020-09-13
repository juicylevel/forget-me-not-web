import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const IconShape = styled(Avatar)``;

const Wrapper = styled(Box)`
    ${({ color, selected, theme }) => `
        padding: 10px;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 200ms;
        background-color: ${selected ? color : '#CCCED0'};
        color: ${selected ? 'white' : theme.palette.text.secondary};
        &:hover {
            background-color: ${!selected && '#00000024'};
        }
        ${IconShape} {
            background-color: ${selected ? 'white' : color};
            color: ${selected ? color : 'white'};
        }
    `}
`;

const Count = styled(Typography)`
    font-weight: 600;
    font-size: 1.6rem;
`;

const Label = styled(Typography)`
    margin-top: 10px;
`;

const Item = ({
    data,
    label,
    icon,
    color,
    selected,
    onSelect,
}) => {
    const count = get(data, 'count');

    const handleClick = () => {
        onSelect(data.id);
    };
    
    return (
        <Wrapper 
            display="flex"
            flexDirection="column"
            selected={selected}
            color={color}
            onClick={handleClick}
        >
            <Box 
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <IconShape>
                    {icon}
                </IconShape>
                <Count>
                    {count}
                </Count>
            </Box>
            <Label>
                {label}
            </Label>
        </Wrapper>
    );
};

Item.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.any,
        count: PropTypes.number,
    }),
    label: PropTypes.string,
    icon: PropTypes.element,
    color: PropTypes.string,
    count: PropTypes.number,
    selected: PropTypes.bool,
    onSelect: PropTypes.func,
};

export default Item;