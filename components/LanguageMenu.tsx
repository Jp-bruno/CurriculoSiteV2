import { useState, useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import styled from "styled-components";

const StyledList = styled.li`
  position: relative;

  .change-language-menu-open-button {
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
      width: 100%;

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

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    flex-direction: column;

    .change-language-menu-open-button {
      width: 50%;
      margin-inline: auto;
    }

    .language-list {
      left: 50%;
      position: relative;
      transform: translateX(-50%) scaleY(0) !important;
      display: flex;
      align-items: center;
      border: 0;

      .language-button-li {
        border: 0;
        width: auto;
      }

      &.closed {
        transition-delay: 500ms;

        .language-button {
          opacity: 0;
        }
      }

      &.open {
        transform: translateX(-50%) scaleY(1) !important;
        transition: transform;

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

export default function LanguageMenu({
  closeMobileMenu,
}: {
  closeMobileMenu: () => void;
}) {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const { language, changeLanguage } = useContext(LanguageContext);

  function toggleLanguageMenu() {
    setLanguageMenuOpen((prevState) => !prevState);
  }

  function selectLanguage(language: "Português" | "English") {
    toggleLanguageMenu();
    changeLanguage(language);
    closeMobileMenu();
  }

  return (
    <>
      <StyledList>
        <button
          className="change-language-menu-open-button"
          title="Change language"
          onClick={toggleLanguageMenu}
        >
          {language === "Português" ? "PT-BR" : "EN-US"}
        </button>

        <ul className={`language-list ${languageMenuOpen ? "open" : "closed"}`}>
          <li
            onClick={() => selectLanguage("Português")}
            className="language-button-li"
          >
            <button className="language-button">Português</button>
          </li>
          <li
            onClick={() => selectLanguage("English")}
            className="language-button-li"
          >
            <button className="language-button">English</button>
          </li>
        </ul>
      </StyledList>
    </>
  );
}
