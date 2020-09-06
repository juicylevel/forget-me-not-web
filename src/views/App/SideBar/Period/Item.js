import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #CCCED0;
`;

const Item = ({
    label,
    icon,
    count,
}) => {
    return (
        <Wrapper>

        </Wrapper>
    );
};

Item.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.element,
    count: PropTypes.number,
};

export default Item;