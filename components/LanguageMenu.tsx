import { useState, useContext } from "react";
import { LanguageContext } from "../context/languageContext";
import styled from "styled-components";

const StyledList = styled.li`
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

  @media (max-width: 900px) {
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
          title="Change language"
          onClick={toggleLanguageMenu}
        >
          {language === "Português" ? "PT-BR" : "EN-US"}
        </button>

        <ul className={`language-list ${languageMenuOpen ? "open" : "closed"}`}>
          <li onClick={() => selectLanguage("Português")}>
            <button className="language-button">Português</button>
          </li>
          <li onClick={() => selectLanguage("English")}>
            <button className="language-button">English</button>
          </li>
        </ul>
      </StyledList>
    </>
  );
}
