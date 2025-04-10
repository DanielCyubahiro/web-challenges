import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: ${({$align}) => $align};
    text-align: ${({$align}) => $align};
    gap: 0.3rem;
`