import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import EventBusyOutlinedIcon from '@material-ui/icons/EventBusyOutlined';
import Item from './Item';

const Period = () => {
    return (
        <Grid 
            container 
            spacing={1}
            style={{
                padding: '16px',
            }}
        >
            <Grid item xs={6}>
                <Item 
                    label="Сегодня"
                    count={2}
                    icon={<TodayOutlinedIcon />}
                />
            </Grid>
            <Grid item xs={6}>
                <Item 
                    label="Запланировано"
                    count={7}
                    icon={<EventOutlinedIcon />}
                />
            </Grid>
            <Grid item xs={6}>
                <Item 
                    label="Просрочено"
                    count={0}
                    icon={<EventBusyOutlinedIcon />}
                />
            </Grid>
            <Grid item xs={6}>
                <Item 
                    label="Все"
                    count={9}
                    icon={<DateRangeOutlinedIcon />}
                />
            </Grid>
        </Grid>
    );
};

Period.propTypes = {

};

export default Period;