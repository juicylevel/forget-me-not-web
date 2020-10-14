import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { FlexBox, IconShape, LazyIcon } from 'components';

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
            <FlexBox
                flexDirection="column"
                component="form"
                onSubmit={onSave}
            >
                <FlexBox justifyContent="flex-end">
                    <IconButton >
                        <DeleteOutlineIcon />
                    </IconButton>
                </FlexBox>
                <IconShape color={color}>
                    <LazyIcon type={icon} />
                </IconShape>
                <TextField label="Наименование" />
                <FlexBox>
                    <Button>
                        Закрыть
                    </Button>
                    <Button color="primary">
                        Сохранить
                    </Button>
                </FlexBox>
            </FlexBox>
        </Drawer>
    );
};

Category.propTypes = {
    show: PropTypes.bool,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
};

export default Category;