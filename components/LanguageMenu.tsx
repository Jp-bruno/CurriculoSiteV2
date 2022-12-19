import { useState, useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import styled from "styled-components";

const StyledList = styled.li`
  position: relative;

  .change-language-menu-open-button {
    cursor: pointer;
  }

  .language-list {
    &.closed {
      transform: scaleY(0);
    }

    display: flex;
    flex-direction: column;
    row-gap: 10px;
    position: absolute;
    width: fit-content;
    left: -35%;
    transition: transform 0.3s ease;
    transform-origin: top;

    .language-button-li {
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
        

        &:not(:disabled):hover {
          background-color: #ffe05f;
          color: black;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 900px) {
    width: 60% !important;
    justify-content: center;
    flex-direction: column;
    border-top: solid 1px #ffffff90;

    .change-language-menu-open-button {
      display: none;
    }

    .language-list {
      position: relative;
      display: flex;
      align-items: center;
      border: 0;
      left: 0;
      width: 100%;
      padding-top: 20px;
      padding-bottom: 0;

      &.closed {
        transform: scaleY(1);
      }
      .language-button-li {
        border: 0;
        width: auto;
      }

      .language-button {
        border: 0;
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
            <button
              className="language-button"
              disabled={language === "Português" ? true : false}
            >
              Português
            </button>
          </li>
          <li
            onClick={() => selectLanguage("English")}
            className="language-button-li"
          >
            <button
              className="language-button"
              disabled={language === "English" ? true : false}
            >
              English
            </button>
          </li>
        </ul>
      </StyledList>
    </>
  );
}
