import styled from 'styled-components';

export const Property = styled.p`
    font-weight: ${({$fontWeight}) => $fontWeight ?? 'normal'};
    font-size: ${({$fontWeight}) => $fontWeight ? '0.8rem' : '0.7rem'};
    margin-top: 0;
`