import Image from "next/image";
import styled from "styled-components";

const StyledList = styled.ul`
    display: flex;
    justify-content: space-evenly;
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
            <li>
                <button data-name='TypeScript'>
                    <Image src='/icons8-typescript-480.png' alt='TypeScript' width={96} height={96} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='Shopify'>
                    <Image src='/icons8-shopify-480.png' alt='Shopify' width={96} height={96} layout={'intrinsic'} />
                </button>
            </li>


            <li>
                <button data-name='ReactJS'>
                    <Image src='/icons8-react-480.png' alt='ReactJS' width={96} height={96} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='NextJS'>
                    <Image src='/icons8-next.js-480.png' alt='Material-UI' width={96} height={96} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='NodeJS'>
                    <Image src='/icons8-node-js-480.png' alt='NodeJS' width={96} height={96} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='Sass'>
                    <Image src='/icons8-sass-480.png' alt='Sass' width={96} height={96} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='Material-UI'>
                    <Image src='/icons8-material-ui-480.png' alt='Material-UI' width={96} height={96} layout={'intrinsic'} />
                </button>
            </li>
        </StyledList>
    )
}