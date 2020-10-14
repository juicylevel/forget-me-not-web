import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

export default styled(Avatar)`
    ${({ color }) => `
        background-color: ${color};
        color: white;
    `}
`;