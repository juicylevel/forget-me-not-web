import styled from 'styled-components';
import ContentEditable from 'react-contenteditable';

export default styled(ContentEditable)`
    white-space: pre-wrap;
    border: 2px solid transparent;
    border-radius: 0px;
    width: 100%;
    height: 100%;
    transition: border-color 0.3s;
    &:focus {
        border-color: #40a9ff;
        outline: 0px solid transparent;
    }
`;