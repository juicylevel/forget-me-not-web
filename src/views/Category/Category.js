import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';

const Category = ({
    show,
    data,
    onSave,
    onClose,
}) => {
    return (
        <Drawer
            open={show}
            anchor="left"
            onClose={onClose}
        >

        </Drawer>
    );
};

Category.propTypes = {
    show: PropTypes.bool,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
};