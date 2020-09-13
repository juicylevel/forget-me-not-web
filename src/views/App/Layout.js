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
            height="100%"
            component="main"
        >
            {header}
            <Box display="flex" flex="1" paddingTop="64px">
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