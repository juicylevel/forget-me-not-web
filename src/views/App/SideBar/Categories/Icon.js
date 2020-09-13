import React, { Suspense, lazy, useMemo } from 'react';
import PropTypes from 'prop-types';
import { getComponentName } from 'utils';

const Icon = ({ type }) => {
    const iconName = getComponentName(type);
        
    const LazyComponent = useMemo(() => (
        lazy(() => (
            import(`components/icons/${iconName}`).catch(() => (
                import('@material-ui/icons/FormatListBulleted')
            ))
        ))
    ), [iconName]);

    return (
        <Suspense fallback={null}>
            <LazyComponent />
        </Suspense>
    );
};

Icon.propTypes = {
    type: PropTypes.string,
};

export default Icon;