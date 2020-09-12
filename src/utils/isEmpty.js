import { isObject, isEmpty, isFunction } from 'lodash';

export default value => {
    if (isFunction(value)) {
        return false;
    }
    if (isObject(value)) {
        return isEmpty(value);
    }
    return (
        value === null ||
        value === undefined ||
        value === ''
    );
};