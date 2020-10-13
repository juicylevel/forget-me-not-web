import composeHooks from 'react-hooks-compose';
import useCategory from './useCategory';
import Category from './Category';

export default composeHooks({ useCategory })(Category);