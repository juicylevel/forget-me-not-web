import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';

const Item = ({
    label,
    icon,
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
                <Avatar>
                    {icon}
                </Avatar>
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
    icon: PropTypes.element,
    count: PropTypes.number,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Item;