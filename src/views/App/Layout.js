import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const Layout = ({
    sideBar,
    header,
    content,
}) => {
    return (
        <Box 
            display="flex"
            flexDirection="column"
        >
            {header}
            <Box display="flex">
                {sideBar}
                {content}
            </Box>
        </Box>
    );
};

Layout.propTypes = {
    sideBar: PropTypes.element,
    header: PropTypes.element,
    content: PropTypes.element,
    footer: PropTypes.element,
};

export default Layout;