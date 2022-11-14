import Image from "next/image";
import styled from "styled-components";

const StyledList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    margin: auto;
    margin-top: 50px;

    button {
        background: 0;
        border: 0;
    }

    @media(max-width: 900px) {
        width: 100%;
        margin-top: 10px;
    }

`

export default function Tecnologias() {
    return (
        <StyledList>
            {/* <li>
                <button data-name='JavaScript'>
                    <Image src='/icons8-javascript-48.png' alt='JavaScript' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='CSS3'>
                    <Image src='/icons8-css3-48.png' alt='CSS3' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='HTML5'>
                    <Image src='/icons8-html-5-400.png' alt='CSS3' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>
            */}

            <li>
                <button data-name='ReactJS'>
                    <Image src='/icons8-react-48.png' alt='ReactJS' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='NextJS'>
                    <Image src='/icons8-next.js-48.png' alt='Material-UI' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='NodeJS'>
                    <Image src='/icons8-node-js-48.png' alt='NodeJS' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='Sass'>
                    <Image src='/icons8-sass-48.png' alt='Sass' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='Material-UI'>
                    <Image src='/icons8-material-ui-48.png' alt='Material-UI' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>
        </StyledList>
    )
}