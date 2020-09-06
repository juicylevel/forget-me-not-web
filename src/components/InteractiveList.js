import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useControlled } from '@material-ui/core';
import List from '@material-ui/core/List';

const InteractiveList = ({
    value: valueProp,
    defaultValue,
    children,
    onFocus,
    onChange,
    onBlur,
}) => {
    const [value, setValue] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'Select',
    });

    const handleSelect = index => {
        setValue(index);

        if (onFocus && onChange && onBlur) {
            onFocus();
            onChange(index);
            setTimeout(() => onBlur(), 100);
        }
    };

    const items = Children.map(children, (itemEl, index) => {
        return cloneElement(itemEl, {
            selected: value === index,
            onClick: () => handleSelect(index),
        });
    });

    return (
        <List>
            {items}
        </List>
    );
};

InteractiveList.propTypes = {
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    children: PropTypes.arrayOf(PropTypes.element),
    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
};

export default InteractiveList;