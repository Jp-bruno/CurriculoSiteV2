import styled from "styled-components";
import TagIcon from "./TagIcon";
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../context/languageContext";

const MobileFooterCss = `
    padding: 40px 20px 20px 20px;
    flex-direction: column;
    row-gap: 20px;

    .footer-content-wrapper {
        flex-direction: column;
        row-gap: 20px;

        .made-by {
            text-align: center;
            width: 100%;
            display: flex;
            flex-direction: column;
            row-gap: 20px;
        }
    }
`;

const FooterStyle = styled.footer`
  background: #11111170;
  padding: 50px 100px;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;

  .footer-content-wrapper {
    align-items: center;
    column-gap: 20px;
    display: flex;

    .made-by {
      #me {
        color: #ff006e;
      }
    }
  }

  @media (max-width: 900px) {
    ${MobileFooterCss}
  }
`;

const SocialMediaLinks = styled.div`
  ul {
    display: flex;
  }
`;

export default function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <FooterStyle>
      <TagIcon size={1} />

      <div className="footer-content-wrapper">
        <span className="made-by">
          {language === "English" ? "Made by" : "Feito por"}
          <br></br>
          <a
            id="me"
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-bruno-machado-230227a6/"
            target="_blank"
            rel="noreferrer"
          >
            João Pedro Bruno Machado
          </a>
        </span>

        <SocialMediaLinks>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-pedro-bruno-machado-230227a6/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/icons8-linkedin-50.png"
                  layout="intrinsic"
                  width={50}
                  height={50}
                  alt="link"
                />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/Jp-bruno"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/icons8-github-50.png"
                  layout="intrinsic"
                  width={50}
                  height={50}
                  alt="link"
                />
              </a>
            </li>
          </ul>
        </SocialMediaLinks>
      </div>
    </FooterStyle>
  );
}
