import styled from 'styled-components';

export const BookContainer = styled.section`
    display: flex;
    gap: 2rem;
    padding: 2rem;
    background-color: ${({$backgroundColor}) => $backgroundColor
            ? $backgroundColor
            : '#fff'};
`;