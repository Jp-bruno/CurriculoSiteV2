/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components";
import Image from "next/image";
import { SectionMixin } from "../../styles/minixs";
import Tecnologias from "../Tecnologias";

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
        row-gap: 50px;

        .tecnologia {
          position: relative;
          width: 100px;
          height: 100px;
          display: grid;
          place-items: center;

          figure {
            width: 100%;
            margin: 0;

            figcaption {
              margin-top: 100px;
              text-align: center;
            }
          }
        }
      }
    }
  }
`;

export default function Section4() {
  return (
    <StyledSection>
      <h1>Quais tecnologias eu uso?</h1>

      <div className="content">
        <p>
          As tecnologias disponíveis hoje são incontáveis, desde as mais simples
          até as mais complexas. Entretando, sabe-se que para todo desenvolvedor
          front-end existem três principais tecnologias a serem dominadas:
        </p>

        <div className="tecnologias">
          <span className="tecnologia" data-tech="CSS3">
            <figure>
              <Image src="/icons8-css3-400.png" layout="fill" alt="CSS3" />
              <figcaption>CSS3</figcaption>
            </figure>
          </span>

          <span className="tecnologia" data-tech="JavaScript">
            <figure>
              <Image src="/js-big-icon.png" layout="fill" alt="JavaScript" />
              <figcaption>JavaScript</figcaption>
            </figure>
          </span>

          <span className="tecnologia" data-tech="HTML5">
            <figure>
              <Image src="/icons8-html-5-400.png" layout="fill" alt="HTML5" />
              <figcaption>HTML5</figcaption>
            </figure>
          </span>
        </div>

        <p>
          Estas três tecnologias juntas podem ser a base de qualquer página web,
          muitas tecnologias novas foram desenvolvidas a partir do que estas
          três permitem. Para citar alguns exemplos aqui vão as minhas
          preferidas:
        </p>

        <Tecnologias />
      </div>
    </StyledSection>
  );
}
