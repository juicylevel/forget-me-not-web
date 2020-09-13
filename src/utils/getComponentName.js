import { chain } from 'lodash';

export default alias => (
    chain(alias)
        .camelCase()
        .upperFirst()
        .value()
);