import { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledMain = styled.main`
    height: 1000px;
    padding: 90px 0;
    color: white;
`;


export default function Main({ children }: PropsWithChildren) {
    return (
        <StyledMain>
            {children}
        </StyledMain>
    )
}