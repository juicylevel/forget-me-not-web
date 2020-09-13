import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const StyledButton = styled(Button)`
    ${({ theme }) => `
        display: flex;
        justify-content: flex-start;
        padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
        border-radius: 0;
        color: ${theme.palette.text.secondary};

        .MuiButton-label {
            text-transform: none;
        }

        .MuiButton-startIcon {
            margin-left: 0;
        }
    `}
`;

export default props => (
    <StyledButton
        variant="text"
        startIcon={<AddCircleIcon />}
        {...props}
    />
);