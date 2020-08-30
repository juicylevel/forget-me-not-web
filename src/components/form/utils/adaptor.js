import { createElement } from 'react';

export default Component => ({ 
    input, 
    meta,
    ...rest 
}) => createElement(Component, {
    ...input,
    ...meta.data,
    ...rest,
});