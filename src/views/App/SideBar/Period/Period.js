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
        <Grid container spacing={3}>
            <Grid item container xs={12}>
                <Grid item xs={6}>
                    <Item 
                        label="Сегодня"
                        icon={<TodayOutlinedIcon />}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Item 
                        label="Запланировано"
                        icon={<EventOutlinedIcon />}
                    />
                </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={6}>
                    <Item 
                        label="Просрочено"
                        icon={<EventBusyOutlinedIcon />}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Item 
                        label="Все"
                        icon={<DateRangeOutlinedIcon />}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

Period.propTypes = {

};

export default Period;