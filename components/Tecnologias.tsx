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
            <li>
                <button data-name='TypeScript'>
                    <Image src='/icons8-typescript-48.png' alt='TypeScript' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>

            <li>
                <button data-name='Shopify'>
                    <Image src='/icons8-shopify-48.png' alt='Shopify' width={48} height={48} layout={'intrinsic'} />
                </button>
            </li>


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