import styled from "styled-components";
import { SectionMixin } from "../../styles/minixs";

const StyledSection = styled.section`
  ${SectionMixin}

  .content {
    blockquote {
      color: rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: 900px) {
    blockquote {
      padding: 0;
      margin: 0;
      text-align: center;
      font-size: 1.1rem;
    }
  }
`;

export default function Section3() {
  return (
    <StyledSection id="about-frontend">
      <h1>O que um front-end faz?</h1>

      <div className="content">
        <p>
          De forma resumida, o trabalho de um desenvolvedor front-end é dar vida
          à paginas web. Geralmente esse desenvolvedor fará isso através de um
          design produzido por uma equipe de UX/UI, responsáveis pelo{" "}
          <i>feeling</i> da página.
        </p>

        <p>
          Eu gosto de comparar o processo de construção de páginas web com o de
          construção de prédios. Quando tenho que explicar o que um front-end
          faz eu geralmente digo:
        </p>

        <blockquote>
          <i>
            Imagine que um site é um prédio prestes a ser construído. O
            arquiteto aqui é representado pela a equipe de UX/UI, responsáveis
            pelo prospecto visual do projeto, dando uma ideia de como a
            estrutura deve parecer e se comportar visualmente. Em seguida temos
            o engenheiro, representado aqui pelo engenheiro de software, ele irá
            ponderar se o projeto é viável e como será executado, ou qual seria
            a melhor maneira de executá-lo com os recursos disponíveis. E então
            chegamos ao pedreiro, representando pelo desenvolvedor front-end, o
            pedreiro é o profissional que irá colocar tijolo sobre tijolo,
            erguendo a estrutura do que em breve será o prédio (ou no nosso
            caso, o site).
          </i>
        </blockquote>

        <p>
          O desenvolvedor front-end é o profissional que irá escrever o código
          que representa a estrutura não só visual, estética, como também
          semântica da página web, dando vida ao design feito pela equipe de
          UX/UI tornando-o interativo e funcional.
        </p>
      </div>
    </StyledSection>
  );
}
