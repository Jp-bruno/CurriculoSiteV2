import { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../context/languageContext";
import { borderAndBackgroundMixin, SectionMixin } from "../../styles/minixs";

const StyledSection = styled.section`
  ${SectionMixin}

  .content {
    ${borderAndBackgroundMixin}
    text-align: center;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;

    span {
      button {
        margin: 50px 0;
        font-size: 20px;
        background: transparent;
        border: 0;
        font-weight: 200;
        font-family: "Source Code Pro", monospace;
        color: #ff006e;
        padding: 0;
        cursor: pointer;
      }
    }
  }
`;

export default function Section6() {
  const { language } = useContext(LanguageContext);
  return (
    <StyledSection id="contact">
      <h1>{language === "English" ? "Contact" : "Contato"}</h1>

      <div className="content">
        <span>
          {language === "English"
            ? "Now that you know me a little better, contact me through my e-mail"
            : "Agora que já me conhece melhor, entre em contato comigo pelo e-mail:"}{" "}
          <br></br>
          <button
            title={
              language === "English" ? "Click to copy to clipboard" : "Clique para copiar"
            }
            onClick={async (ev) =>
              await navigator.clipboard.writeText(ev.currentTarget.textContent || "")
            }
          >
            bruno.machado98@hotmail.com
          </button>
        </span>
      </div>
    </StyledSection>
  );
}
