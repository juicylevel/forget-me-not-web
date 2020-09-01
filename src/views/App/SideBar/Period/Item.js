import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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