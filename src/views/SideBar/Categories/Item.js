import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Icon from './Icon';

const IconShape = styled(Avatar)`
    ${({ color }) => `
        background-color: ${color};
        color: white;
    `}
`;

const ListItemContainer = styled.li`
    .edit-button {
        opacity: 0;
        transition: opacity 200ms;
    }
    &:hover {
        .edit-button {
            opacity: 1;
        }
    }
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
            ContainerComponent={ListItemContainer}
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
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    minWidth="70px"
                >
                    <IconButton className="edit-button">
                        <MoreVertIcon />
                    </IconButton>
                    <span>{count}</span>
                </Box>
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