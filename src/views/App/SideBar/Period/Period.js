import React from 'react';
import PropTypes from 'prop-types';
import { keyBy } from 'lodash';
import { useControlled } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import EventBusyOutlinedIcon from '@material-ui/icons/EventBusyOutlined';
import { TODAY, PLANNED, EXPIRED, ALL } from 'constants/period';
import { customListHandler } from 'components/form/utils';
import Item from './Item';

const data = [
    {
        id: TODAY,
        count: 2,
    },
    {
        id: PLANNED,
        count: 7,
    },
    {
        id: EXPIRED,
        count: 0,
    },
    {
        id: ALL,
        count: 9,
    },
];

const Period = ({
    value: valueProp,
    defaultValue,
    children,
    onFocus,
    onChange,
    onBlur,
    ...rest
}) => {
    const theme = useTheme();

    const [value, setValue] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'Period',
    });

    const handleSelect = id => {
        setValue(id);

        customListHandler({
            value: id,
            onFocus,
            onChange,
            onBlur,
        });
    };

    const itemsData = keyBy(data, item => item.id);

    return (
        <Grid 
            container 
            spacing={1}
            style={{
                padding: theme.spacing(2),
            }}
        >
            <Grid item xs={6}>
                <Item 
                    label="Сегодня"
                    icon={<TodayOutlinedIcon />}
                    color="#037AFE"
                    selected={value === TODAY}
                    data={itemsData[TODAY]}
                    onSelect={handleSelect}
                />
            </Grid>
            <Grid item xs={6}>
                <Item 
                    label="Запланировано"
                    icon={<EventOutlinedIcon />}
                    color="#FE9402"
                    selected={value === PLANNED}
                    data={itemsData[PLANNED]}
                    onSelect={handleSelect}
                />
            </Grid>
            <Grid item xs={6}>
                <Item 
                    label="Все"
                    icon={<DateRangeOutlinedIcon />}
                    color="#5A626A"
                    selected={value === ALL}
                    data={itemsData[ALL]}
                    onSelect={handleSelect}
                />
            </Grid>
            <Grid item xs={6}>
                <Item 
                    label="Просрочено"
                    icon={<EventBusyOutlinedIcon />}
                    color="#FF3A2F"
                    selected={value === EXPIRED}
                    data={itemsData[EXPIRED]}
                    onSelect={handleSelect}
                />
            </Grid>
        </Grid>
    );
};

Period.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

export default Period;