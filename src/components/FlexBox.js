import React from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexBox = styled(({ spacing, ...rest }) => <Box {...rest} />)`
    ${({ theme, spacing, flexDirection }) => `
        > *:not(:last-child) {
            ${flexDirection === 'column' ? 'margin-bottom' : 'margin-right'}: 
                ${theme.spacing(spacing)}px;
        }
    `}
`;

FlexBox.propTypes = {
    spacing: PropTypes.number,
};

FlexBox.defaultProps = {
    display: 'flex',
    spacing: 0,
};

export default FlexBox;