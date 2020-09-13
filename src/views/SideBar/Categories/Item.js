import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Icon from './Icon';

const IconShape = styled(Avatar)`
    ${({ color }) => `
        background-color: ${color};
        color: white;
    `}
`;

const Item = ({
    label,
    icon,
    color,
    count,
    selected,
    onClick,
}) => {
    return (
        <ListItem 
            button 
            selected={selected}
            onClick={onClick}
        >
            <ListItemAvatar>
                <IconShape color={color}>
                    <Icon type={icon} />
                </IconShape>
            </ListItemAvatar>
            <ListItemText primary={label} />
            <ListItemSecondaryAction>
                <ListItemText primary={count} />
            </ListItemSecondaryAction>
        </ListItem>
    );
};

Item.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    color: PropTypes.string,
    count: PropTypes.number,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Item;