import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getComponentName } from 'utils';

const Icon = ({ type }) => {
    const iconName = getComponentName(type);
        
    const LazyComponent = lazy(() => (
        import(`components/icons/${iconName}`).catch(() => (
            import('@material-ui/icons/FormatListBulleted')
        ))
    ));

    return (
        <Suspense 
            fallback={
                <CircularProgress style={{ color: '#00000030' }} />
            }
        >
            <LazyComponent />
        </Suspense>
    );
};

Icon.propTypes = {
    type: PropTypes.string,
};

export default Icon;