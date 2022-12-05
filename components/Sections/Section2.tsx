/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components";
import Image from "next/image";
import { SectionMixin } from "../../styles/minixs";
import Tecnologias from "../Tecnologias";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

const StyledSection = styled.section`
  ${SectionMixin}

  .content {
    .tecnologias {
      display: flex;
      justify-content: space-evenly;
      padding-bottom: 40px;
      column-gap: 20px;

      .tecnologia {
        position: relative;
        width: 200px;
        height: 200px;
        display: grid;
        place-items: center;

        figure {
          figcaption {
            margin-top: 200px;
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .content {
      padding: 20px 30px;

      .tecnologias {
        flex-direction: row;

        .tecnologia {
          position: relative;
          width: 75px;
          height: 75px;
          display: grid;
          place-items: center;
          position: relative;

          figure {
            margin: 0;

            figcaption {
              margin: 0;
              position: absolute;
              text-align: center;
              transform: translate(-50%, 150%);
            }
          }
        }
      }
    }
  }
`;

export default function Section2() {
  const { language } = useContext(LanguageContext);

  if (language === "English") {
    return (
      <StyledSection>
        <h1>Which technologies I use?</h1>

        <div className="content">
          <p>
            There are a lot of techs available for front-end developing nowadays, but the
            basics that every front-end dev must know is:
          </p>

          <div className="tecnologias">
            <span
              className="tecnologia"
              data-tech="CSS3"
            >
              <figure>
                <Image
                  src="/icons8-css3-400.png"
                  layout="fill"
                  alt="CSS3"
                />
                <figcaption>CSS3</figcaption>
              </figure>
            </span>

            <span
              className="tecnologia"
              data-tech="JavaScript"
            >
              <figure>
                <Image
                  src="/js-big-icon.png"
                  layout="fill"
                  alt="JavaScript"
                />
                <figcaption>JavaScript</figcaption>
              </figure>
            </span>

            <span
              className="tecnologia"
              data-tech="HTML5"
            >
              <figure>
                <Image
                  src="/icons8-html-5-400.png"
                  layout="fill"
                  alt="HTML5"
                />
                <figcaption>HTML5</figcaption>
              </figure>
            </span>
          </div>

          <p>
            These three techs together can be the base for any webpage, and a lot of new
            techs were developed based on those three. Here are my favorites:
          </p>

          <Tecnologias />
        </div>
      </StyledSection>
    );
  }

  return (
    <StyledSection>
      <h1>Quais tecnologias eu uso?</h1>

      <div className="content">
        <p>
          As tecnologias disponíveis hoje são incontáveis, desde as mais simples até as
          mais complexas. Entretando, sabe-se que para todo desenvolvedor front-end
          existem três principais tecnologias a serem dominadas:
        </p>

        <div className="tecnologias">
          <span
            className="tecnologia"
            data-tech="CSS3"
          >
            <figure>
              <Image
                src="/icons8-css3-400.png"
                layout="fill"
                alt="CSS3"
              />
              <figcaption>CSS3</figcaption>
            </figure>
          </span>

          <span
            className="tecnologia"
            data-tech="JavaScript"
          >
            <figure>
              <Image
                src="/js-big-icon.png"
                layout="fill"
                alt="JavaScript"
              />
              <figcaption>JavaScript</figcaption>
            </figure>
          </span>

          <span
            className="tecnologia"
            data-tech="HTML5"
          >
            <figure>
              <Image
                src="/icons8-html-5-400.png"
                layout="fill"
                alt="HTML5"
              />
              <figcaption>HTML5</figcaption>
            </figure>
          </span>
        </div>

        <p>
          Estas três juntas podem ser a base de qualquer página web, muitas tecnologias
          novas foram desenvolvidas a partir do que estas três permitem. Para citar alguns
          exemplos aqui vão as minhas preferidas:
        </p>

        <Tecnologias />
      </div>
    </StyledSection>
  );
}
