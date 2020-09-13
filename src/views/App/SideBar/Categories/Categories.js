import React from 'react';
import PropTypes from 'prop-types';
import { map, reduce } from 'lodash';
import { InteractiveList } from 'components';
import Item from './Item';
import { isEmpty } from 'utils';

const data = [
    {
        id: 1,
        count: 3,
        label: 'Работа',
        icon: 'code',
        color: 'blue',
    },
    {
        id: 4,
        count: 2,
        label: 'По дому',
        icon: 'home',
        color: 'blue',
    },
    {
        id: 2,
        count: 8,
        label: 'Байк',
        icon: 'bike',
        color: 'red',
    },
    {
        id: 3,
        count: 1,
        label: 'Лес',
        icon: 'forest',
        color: 'green',
    },
];

const Categories = props => {
    const items = map(data, item => (
        <Item key={item.id} {...item} />
    ));

    const total = reduce(data, (sum, item) => (
        sum + item.count
    ), 0);

    return (
        <InteractiveList {...props}>
            {!isEmpty(items) && (
                <Item 
                    icon="all"
                    label="Все"
                    count={total}
                />
            )}
            {items}
        </InteractiveList>
    );
};

Categories.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

export default Categories;