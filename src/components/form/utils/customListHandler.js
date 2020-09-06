export default ({
    value,
    onFocus,
    onChange,
    onBlur,
}) => {
    if (onFocus && onChange && onBlur) {
        onFocus();
        onChange(value);
        // delay for react-final-form validation
        setTimeout(() => onBlur(), 100);
    }
};