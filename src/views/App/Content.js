import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.main`
    flex: 1;
`;

const Content = ({
    children,
}) => {
    return (
        <Wrapper>{children}</Wrapper>
    );
};

export default Content;