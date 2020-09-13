import { adaptor } from './utils';

export default ({ Component, ...rest }) => adaptor(Component)(rest);