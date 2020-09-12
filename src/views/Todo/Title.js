import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { ContentEditable } from 'components';

const Title = ({
    value,
    onChange,
    onFocus,
    onBlur,
}) => {
    const inputRef = useRef();

    const handleChange = event => {
        const { value } = event.target;
        onChange(value);
    };

    const handleBlur = event => {
        const value = inputRef.current.innerHTML;
        if (value === '') {
            onChange('Туду лист'); // TODO
        }
        onBlur(event);
    };

    return (
        <ContentEditable 
            innerRef={inputRef}
            tagName="h2"
            html={value}
            onChange={handleChange}
            onFocus={onFocus}
            onBlur={handleBlur}
        />
    );
};

Title.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
};

export default Title;