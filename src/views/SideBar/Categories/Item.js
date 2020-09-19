import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuButtonClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

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
                    <IconButton 
                        className="edit-button"
                        onClick={handleMenuButtonClick}
                    >
                        <MoreHorizOutlinedIcon />
                    </IconButton>
                    <span>{count}</span>
                </Box>
                <Menu
                    id="categoty-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleCloseMenu}
                    transformOrigin={{
                        horizontal: 'center',
                        vertical: 'top',
                    }}
                >
                    <MenuItem>
                        <ListItemIcon>
                            <EditIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Редактировать" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <DeleteOutlineIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Удалить" />
                    </MenuItem>
                </Menu>
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