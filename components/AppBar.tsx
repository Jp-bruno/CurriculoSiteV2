import Link from "next/link";
import styled, { css } from "styled-components";
import TagIcon from "./TagIcon";

import HamburguerButton from "./HamburguerButton";
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
      opacity: 1;
      pointer-events: none;
    }

    &.mobile-open {
      top: 50px;
    }
  }

  .language-menu {
    width: 100%;
    justify-content: center;
    padding: 30px 0;

    .language-list {
      padding-top: 10px;
      top: 60px;
      border: 0;
      border-left: solid 1px rgba(255, 255, 255, 0.5);
      border-right: solid 1px rgba(255, 255, 255, 0.5);
      border-bottom: solid 1px rgba(255, 255, 255, 0.5);
      border-radius: 0;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      background-color: #111;
      left: -1px !important;
      width: 100.5% !important;
      display: flex;
      align-items: center;

      & > li {
        border: 0 !important;
        width: 90%;
        
      }

      &.closed {
        .language-button {
          opacity: 0;
        }
      }

      &.open {
        .language-button {
          transition-delay: 500ms;

        }
      }

      .language-button {
        border: 0;
        opacity: 1;
        transition: opacity 0.5s ease;
      }
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

    .language-menu {
      position: relative;

      button {
        cursor: pointer;
      }

      .language-list {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        position: absolute;
        width: fit-content;
        left: -35%;
        transition: transform 0.3s ease;
        transform-origin: top;
        transform: scaleY(0);

        &.open {
          transform: scaleY(1);
        }

        li {
          margin: 0;
          border: solid 1px white;
          text-align: center;
          display: flex;

          &:first-of-type {
            margin-top: 20px;
          }

          .language-button {
            flex: 1;
            padding: 10px;
            background-color: #111;

            &:hover {
              background-color: #ffe05f;
              color: black;
            }
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

  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const { language, changeLanguage } = useContext(LanguageContext);

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

  function toggleLanguageMenu() {
    setLanguageMenuOpen((prevState) => !prevState);
  }

  function selectLanguage(language: "Português" | "English") {
    setLanguageMenuOpen(false);
    changeLanguage(language);
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

            <li onClick={closeMobileMenu}>
              <Link href={"/#about-frontend"}>About Front-end</Link>
            </li>

            <li onClick={closeMobileMenu}>
              <Link href={"/#contact"}>Contact</Link>
            </li>

            <li className="language-menu">
              <button
                title="Change language"
                onClick={toggleLanguageMenu}
              >
                EN-US
              </button>

              <ul className={`language-list ${languageMenuOpen ? "open" : "closed"}`}>
                <li onClick={() => selectLanguage("Português")}>
                  <button className="language-button">Português</button>
                </li>
                <li onClick={() => selectLanguage("English")}>
                  <button className="language-button">English</button>
                </li>
              </ul>
            </li>
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
            <Link href={"/#about-frontend"}>Sobre ser Front-end</Link>
          </li>

          <li onClick={closeMobileMenu}>
            <Link href={"/#contact"}>Contato</Link>
          </li>

          <li className="language-menu">
            <button
              title="Change language"
              onClick={toggleLanguageMenu}
            >
              PT-BR
            </button>

            <ul className={`language-list ${languageMenuOpen ? "open" : "closed"}`}>
              <li onClick={() => selectLanguage("Português")}>
                <button className="language-button">Português</button>
              </li>
              <li onClick={() => selectLanguage("English")}>
                <button className="language-button">English</button>
              </li>
            </ul>
          </li>
        </ul>
        <HamburguerButton
          isOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </nav>
    </StyledAppBar>
  );
}
