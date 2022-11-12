import styled from "styled-components";

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
        transition: transform 0.3s ease;
    
        span {
            height: 4px;
            width: 30px;
            background: blue;
            background: white;
            transition: transform 0.3s ease;
            border-radius: 8px;
        }

        &.open {
            transform: translateX(-35%);

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


export default function HamburguerButton({ isOpen, toggleMobileMenu }: { isOpen: boolean, toggleMobileMenu: () => void }) {
    return (
        <StyledButton className={isOpen ? 'open' : 'closed'} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
        </StyledButton>
    )

}