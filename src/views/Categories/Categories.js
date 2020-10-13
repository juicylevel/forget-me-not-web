import React from 'react';
import PropTypes from 'prop-types';
import { map, reduce } from 'lodash';
import { InteractiveList } from 'components';
import Item from './Item';
import AddButton from './AddButton';
import { isEmpty } from 'utils';
import { Box } from '@material-ui/core';

const data = [
    {
        id: 1,
        count: 3,
        label: 'Работа',
        icon: 'code',
        color: '#FF9501',
    },
    {
        id: 4,
        count: 2,
        label: 'По дому',
        icon: 'home',
        color: '#53AAF2',
    },
    {
        id: 2,
        count: 8,
        label: 'Байк',
        icon: 'bike',
        color: '#5C6770',
    },
    {
        id: 3,
        count: 1,
        label: 'Лес',
        icon: 'forest',
        color: '#19C65A',
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
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            flex="1"
        >
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
            <AddButton>
                Добавить список
            </AddButton>
        </Box>
    );
};

Categories.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

export default Categories;