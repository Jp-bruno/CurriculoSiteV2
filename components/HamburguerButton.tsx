import styled from "styled-components";
import { useState } from "react";

const StyledButton = styled.button`
    display: none;

    @media(max-width: 900px) {
        background: transparent;
        width: 30px;
        height: 20px;
        display: flex;
        padding: 0;
        border: 0;
        flex-direction: column;
        justify-content: space-between;
        margin-right: 10px;
    
        span {
            height: 4px;
            width: 30px;
            background: blue;
            background: white;
            transition: transform 0.3s ease;
            border-radius: 8px;
        }

        &.open {
            span:nth-of-type(1) {
                transform: rotateZ(45deg) translateX(40%);
            }

            span:nth-of-type(2) {
                display: none;
            }

            span:nth-of-type(3) {
                transform: rotateZ(-45deg) translateX(35%);
            }
        }
    }
`;


export default function HamburguerButton() {
    const [open, setOpen] = useState(false);

    return (
        <StyledButton className={open ? 'open' : 'closed'} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
        </StyledButton>
    )

}