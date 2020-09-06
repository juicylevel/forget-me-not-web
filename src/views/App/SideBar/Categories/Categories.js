import React from 'react';
import FormatListBulletedOutlinedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import MotorcycleOutlinedIcon from '@material-ui/icons/MotorcycleOutlined';
import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined';
import { InteractiveList } from 'components';
import Item from './Item';

const Categories = props => {
    return (
        <InteractiveList {...props}>
            <Item 
                icon={<FormatListBulletedOutlinedIcon />}
                label="Все"
            />
            <Item 
                icon={<WorkOutlineOutlinedIcon />}
                label="Работа"
            />
            <Item 
                icon={<MotorcycleOutlinedIcon />}
                label="Байк"
            />
            <Item 
                icon={<LocalFloristOutlinedIcon />}
                label="Лес"
            />
        </InteractiveList>
    );
};

export default Categories;