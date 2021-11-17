import styled from 'styled-components';
import headerbg from '../../assets/header-bg.svg';

export const HeaderWrapper = styled.header`
    display:flex;
    flex-direction:column;
    margin:0 auto;
    background-image:  url(${headerbg}), linear-gradient(314.72deg, #C86DD7 -1.5%, #7E49C3 39.43%, #5912AC 86.02%);
    background-repeat: no-repeat;
`;