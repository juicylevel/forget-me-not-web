import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { useControlled } from '@material-ui/core';
import List from '@material-ui/core/List';
import { customListHandler } from 'components/form/utils';

const InteractiveList = ({
    value: valueProp,
    defaultValue,
    children,
    onFocus,
    onChange,
    onBlur,
    ...rest
}) => {
    const [value, setValue] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'InteractiveList',
    });

    const handleSelect = index => {
        setValue(index);

        customListHandler({
            value: index,
            onFocus,
            onChange,
            onBlur,
        });
    };

    const items = Children.map(children, (itemEl, index) => {
        return cloneElement(itemEl, {
            selected: value === index,
            onClick: () => handleSelect(index),
        });
    });

    return (
        <List {...rest}>
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