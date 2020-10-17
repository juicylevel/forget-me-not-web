import React from 'react';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { FlexBox, IconShape, LazyIcon, ResponsiveDialog } from 'components';

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
            <DialogContent>
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
                    {/*<IconShape color={color}>
                        <LazyIcon type={icon} />
    </IconShape>*/}
                    <TextField label="Наименование" />
                </FlexBox>
            </DialogContent>
            <DialogActions>
                <Button>
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