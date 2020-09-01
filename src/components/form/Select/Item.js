import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Item = ({
    label,
    icon,
    count,
    selected,
}) => {
    return (
        <ListItem 
            button 
            selected={selected}
            onClick={}
        >
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItem>
    );
};

Item.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    count: PropTypes.number,
    selected: PropTypes.bool,
};

export default Item;