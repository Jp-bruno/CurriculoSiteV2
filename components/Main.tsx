import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    color: white;
    scroll-padding: 500px;

`;

export default function Main({ children }: PropsWithChildren) {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}