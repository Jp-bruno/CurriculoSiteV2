import styled from "styled-components";
import { h1Styles, sectionPaddings } from '../../styles/minixs';

const StyledSection = styled.section`
    ${sectionPaddings}

    h1 {
        ${h1Styles}
    }
`

export default function Section3() {
    return (
        <StyledSection>
            <h1>Sobre ser front-end</h1>
        </StyledSection>
    )
}