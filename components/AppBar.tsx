import Link from 'next/link';
import styled from 'styled-components';
import TagIcon from './TagIcon';

import HamburguerButton from './HamburguerButton';
import { useState } from 'react';

const AppBarMobileCss = `
    padding: 20px ;

    nav {
        justify-content: space-between;
        position: relative;
    }

    ul {
        position: absolute;
        flex-direction: column;
        background: #111;
        transition: top 0.4s ease, opacity 0.4s ease;
        border-radius: 8px;
        overflow: hidden;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 20px;
        border: solid 3px white;

        li, li:first-of-type {
            margin: 0;
            padding: 20px 0;
        }

        &.mobile-closed {
            top: -100px;
            opacity: 0;
            pointer-events: none;
        }

        &.mobile-open {
            top: 50px;
        }
    }
`;

const StyledAppBar = styled.header`
    padding: 22px 100px;
    position: sticky;
    top: 0;
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
            margin-inline: 20px;

            &:first-of-type {
                margin-left: 30px;
                flex-grow: 3;
            }

            &:last-of-type {
                margin-right: 0px;
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

    @media (max-width: 900px) {
        ${AppBarMobileCss}
    }
`;

export default function Appbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    function toggleMobileMenu() {
        setMobileMenuOpen(prevState => !prevState)
    }

    return (
        <StyledAppBar>
            <nav>
                <TagIcon />
                <ul className={mobileMenuOpen ? 'mobile-open' : 'mobile-closed'}>
                    <li onClick={toggleMobileMenu}>
                        <Link href={'/'}>Início</Link>
                    </li>

                    <li onClick={toggleMobileMenu}>
                        <Link href={'/#about-me'}>Sobre mim</Link>
                    </li>

                    <li onClick={toggleMobileMenu}>
                        <Link href={'/#about-frontend'}>Sobre ser Front-end</Link>
                    </li>

                    <li onClick={toggleMobileMenu}>
                        <Link href={'/#projects'}>Meus projetos</Link>
                    </li>

                    <li onClick={toggleMobileMenu}>
                        <Link href={'/#contact'}>Contato</Link>
                    </li>
                </ul>
                <HamburguerButton isOpen={mobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
            </nav>
        </StyledAppBar>
    )
}