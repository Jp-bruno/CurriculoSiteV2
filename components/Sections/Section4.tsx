import styled from "styled-components";
import Image from "next/image";
import { borderAndBackgroundMixin, SectionMixin } from "../../styles/minixs";
import { useContext } from "react";
import { LanguageContext } from "../../context/languageContext";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  ${SectionMixin}

  .content {
    display: flex;
    position: relative;
    padding: 0;
    border: 0;
  }

  .me_card {
    padding: 20px;
    flex-basis: 20%;
    column-gap: 60px;
    display: flex;
    flex-direction: column;
    ${borderAndBackgroundMixin}

    .scroller-div {
      position: sticky;
      top: 17%;
    }

    .profile_pic {
      display: flex;
      border-radius: 8px;
      overflow: hidden;
      justify-content: center;
    }

    ul {
      display: flex;
      flex-direction: column;
      row-gap: 15px;
      padding: 10px 0;
      text-align: center;
    }
  }

  .more-about-me {
    background: #222;
    border: dashed 1px #ffffff90;
    padding: 20px 30px;
    letter-spacing: 0.1rem;
    line-height: 2.7ch;
    flex-basis: 80%;

    p {
      text-align: justify;
      font-size: 18px;
      color: rgba(255, 255, 255, 0.8);
    }

    ul {
      list-style-type: circle;
      padding: 0 20px;

      li {
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 900px) {
    .me_card {
      display: none;
    }

    .content {
      padding: 20px 30px;
      border: dashed 1px #ffffff90;
    }

    ul {
      text-align: justify;
    }

    .more-about-me {
      padding: 0;
      border: 0;
      flex-basis: 100%;
    }
  }
`;

export default function Section4() {
  const { language } = useContext(LanguageContext);

  if (language === "English") {
    return (
      <StyledSection id="about-me">
        <h1>About me</h1>

        <div className="content">
          <div className="me_card">
            <div className="scroller-div">
              <div className="profile_pic">
                <Image
                  src="/perfil1.png"
                  alt="perfil"
                  height={690}
                  width={550}
                  layout="intrinsic"
                />
              </div>

              <ul>
                <li>João Pedro</li>

                <li>Rio de Janeiro - RJ</li>
              </ul>
            </div>
          </div>

          <div className="more-about-me">
            <h3>Hello, my name is João 😁</h3>

            <p>I&#39;m a Front-end developer. I was born and raised in Rio de Janeiro.</p>

            <p>Here are some jobs I had before becoming a Front-end:</p>

            <ul>
              <li>DJ/Audio Technician</li>

              <li>Warehouse Worker</li>

              <li>Transcriptionist</li>

              <li>Dog walker</li>

              <li>Dog trainer</li>
            </ul>
          </div>
        </div>
      </StyledSection>
    );
  }

  return (
    <StyledSection id="about-me">
      <h1>Sobre mim</h1>

      <div className="content">
        <div className="me_card">
          <div className="scroller-div">
            <div className="profile_pic">
              <Image
                src="/perfil1.png"
                alt="perfil"
                height={690}
                width={550}
                layout="intrinsic"
              />
            </div>

            <ul>
              <li>João Pedro</li>

              <li>Rio de Janeiro - RJ</li>
            </ul>
          </div>
        </div>

        <div className="more-about-me">
          <h3>Ola, me chamo João 😁</h3>

          <p>Sou desenvolvedor Front-end nascido e criado no Rio de Janeiro.</p>

          <p>Alguns trabalhos que tive antes de ser front-end:</p>

          <ul>
            <li>DJ/Técnico de som</li>

            <li>Estoquista</li>

            <li>Transcritor</li>

            <li>Passeador de cães</li>

            <li>Adestrador de cães</li>
          </ul>
        </div>
      </div>
    </StyledSection>
  );
}
