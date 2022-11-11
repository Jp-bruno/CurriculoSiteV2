import Link from 'next/link';
import styled from 'styled-components';
import TagIcon from './TagIcon';

const StyledAppBar = styled.header`
    padding: 22px 100px;
    position: fixed;
    background: black;
    z-index: 10;
    width: 100%;
    color: white;
    display: flex;
    align-items: center;
    background-color: #111;

    nav {
        width: 100%;
        display: flex;
        align-items: center;
    }

    ul {
        display: flex;
        width: 100%;

        li {
            margin-inline: 10px;

            &:first-of-type {
                flex-grow: 3;
                margin-left: 30px;
            }

            &:not(&:first-of-type) {
                flex-grow: 0;

            }

            a {
                position: relative;
                
                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: white;
                    left: 0;
                    bottom: -10px;
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }
    
                &:hover, &:focus {
                    &::after {
                        transform: scaleX(1);
                    }
                }
            }
        }
    }
`;

export default function Appbar() {
    return (
        <StyledAppBar>
            <nav>
                <TagIcon />
                <ul>
                    <li>
                        <Link href={'/'}>Início</Link>
                    </li>

                    <li>
                        <Link href={'/#about-me'}>Sobre mim</Link>
                    </li>

                    <li>
                        <Link href={'/#about-frontend'}>Sobre ser Front-end</Link>
                    </li>

                    <li>
                        <Link href={'/#projects'}>Meus projetos</Link>
                    </li>

                    <li>
                        <Link href={'/#contact'}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </StyledAppBar>
    )
}