import React from 'react';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { FlexBox, IconShape, LazyIcon, ResponsiveDialog } from 'components';
import { DialogTitle } from '@material-ui/core';

const Category = ({
    show,
    data,
    onSave,
    onClose,
}) => {
    return (
        <ResponsiveDialog
            open={show}
            anchor="left"
            onClose={onClose}
        >
            <DialogTitle>
                Свойства списка "Походы"
            </DialogTitle>
            <DialogContent>
                <FlexBox
                    flexDirection="row"
                    component="form"
                    spacing={2}
                    onSubmit={onSave}
                >
                    <IconShape 
                        color={'#19C65A'}
                        style={{
                            width: '70px',
                            height: '70px',
                        }}
                    >
                        <LazyIcon 
                            type={'forest'} 
                            style={{
                                fontSize: '40px'
                            }}
                        />
                    </IconShape>
                    <TextField 
                        label="Наименование" 
                        value="Походы"
                        fullWidth
                    />
                </FlexBox>
            </DialogContent>
            <DialogActions>
                <Button>
                    Удалить
                </Button>
                <Button onClick={onClose}>
                    Закрыть
                </Button>
                <Button color="primary">
                    Сохранить
                </Button>
            </DialogActions>
        </ResponsiveDialog>
    );
};

Category.propTypes = {
    show: PropTypes.bool,
    data: PropTypes.object,
    onClose: PropTypes.func,
    onSave: PropTypes.func,
};

export default Category;