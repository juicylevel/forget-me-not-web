import { createElement } from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const ResponsiveDialog = props => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return createElement(Dialog, {
        fullScreen,
        ...props
    });
};

export default ResponsiveDialog;