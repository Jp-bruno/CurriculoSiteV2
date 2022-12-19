import Link from "next/link";
import styled, { css } from "styled-components";
import TagIcon from "./TagIcon";

import HamburguerButton from "./HamburguerButton";
import LanguageMenu from "./LanguageMenu";
import { useState, useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const AppBarMobileCss = css`
  padding: 20px;

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
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border: solid 1px #ffffff90;

    li,
    li:first-of-type {
      margin: 0 !important;
      display: flex;
      width: 100%;

      a {
        width: 100% !important;
        padding: 20px 0;
      }
    }

    &.mobile-closed {
      top: -440px;
      opacity: 0;
      pointer-events: none;
    }

    &.mobile-open {
      opacity: 1;
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

  nav > ul {
    display: flex;
    width: 100%;
    align-items: center;

    li {
      margin-inline: 20px;
      align-content: center;

      &:first-of-type {
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
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          background: white;
          left: 0;
          bottom: -10px;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        &:hover,
        &:focus {
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { language } = useContext(LanguageContext);

  function toggleMobileMenu() {
    setMobileMenuOpen((prevState) => !prevState);
  }

  function closeMobileMenu() {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      return;
    }

    return;
  }

  if (language === "English") {
    return (
      <StyledAppBar>
        <nav>
          <TagIcon />
          <ul className={mobileMenuOpen ? "mobile-open" : "mobile-closed"}>
            <li onClick={closeMobileMenu}>
              <Link href={"/"}>Home</Link>
            </li>

            <li onClick={closeMobileMenu}>
              <Link href={"/#projects"}>My projects</Link>
            </li>

            <li onClick={closeMobileMenu}>
              <Link href={"/#about-me"}>About me</Link>
            </li>

            {/* <li onClick={closeMobileMenu}>
              <Link href={"/#about-frontend"}>About Front-end</Link>
            </li> */}

            <li onClick={closeMobileMenu}>
              <Link href={"/#contact"}>Contact</Link>
            </li>

            <LanguageMenu closeMobileMenu={closeMobileMenu} />
          </ul>

          <HamburguerButton
            isOpen={mobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
        </nav>
      </StyledAppBar>
    );
  }

  return (
    <StyledAppBar>
      <nav>
        <TagIcon />
        <ul className={mobileMenuOpen ? "mobile-open" : "mobile-closed"}>
          <li onClick={closeMobileMenu}>
            <Link href={"/"}>Início</Link>
          </li>

          <li onClick={closeMobileMenu}>
            <Link href={"/#projects"}>Meus projetos</Link>
          </li>

          <li onClick={closeMobileMenu}>
            <Link href={"/#about-me"}>Sobre mim</Link>
          </li>

          <li onClick={closeMobileMenu}>
            <Link href={"/#contact"}>Contato</Link>
          </li>

          <LanguageMenu closeMobileMenu={closeMobileMenu} />
        </ul>
        <HamburguerButton
          isOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </nav>
    </StyledAppBar>
  );
}
