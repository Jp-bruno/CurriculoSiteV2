import styled, { css } from "styled-components";
import Image from "next/image";
import { useContext, useState } from "react";
import { LanguageContext } from "../context/languageContext";

const MobileCss = css`
  &:nth-of-type(odd),
  &:nth-of-type(even) {
    flex-direction: column;
    border: dashed 1px #ffffff8f;
    padding: 20px;

    .project-details {
      padding: 0px;
    }
  }
`;

const StyledCard = styled.div`
  display: flex;
  padding: 20px 0;
  border: dashed 1px #ffffffaa;
  column-gap: 20px;
  flex-direction: row;
  border-left: 0;

  .project-details {
    flex: 1;
    display: flex;
    flex-direction: column;

    .project-details-title-and-git {
      a {
        transition: color 0.2s ease;

        &:hover,
        &:focus-visible {
          color: #ff006e;
        }
      }

      .project-title {
        margin: 0;
        font-size: 1.5rem;
      }

      .project-git {
        display: block;
      }
    }

    .more-details-techs {
      display: flex;
      column-gap: 15px;
      flex-wrap: wrap;
      row-gap: 10px;

      .tech {
        border: solid 1px white;
        padding: 3px 4px;
        cursor: default;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
      }
    }
  }

  &:nth-last-of-type(even) {
    border-left: dashed 1px #ffffffaa;
    border-right: 0;
    flex-direction: row-reverse;

    .project-details {
      padding-left: 20px;

      .project-title,
      .project-git {
        text-align: left;
      }
    }
  }

  &:nth-last-of-type(odd) {
    .project-details {
      padding-right: 20px;

      .project-title,
      .project-git {
        text-align: left;
      }
    }
  }

  @media (max-width: 900px) {
    ${MobileCss}
  }
`;

type ProjectCardProps = {
  cardData: {
    title: string;
    projectUrl: string;
    previewImg: string;
    gitUrl: string;
    description: string[];
    techs: string[];
  };
};

export default function ProjectCard({ cardData }: ProjectCardProps) {
  const { language } = useContext(LanguageContext);

  return (
    <StyledCard key={Math.random() * 2000}>
      <a
        className="project-image"
        title="Clique para ir até o site."
        href={cardData.projectUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={cardData.previewImg}
          alt={cardData.title}
          width={1366 / 2}
          height={767 / 2}
          layout="intrinsic"
        />
      </a>

      <div className="project-details">
        <div className="project-details-title-and-git">
          <h3 className="project-title">
            <a
              href={cardData.projectUrl}
              target="_blank"
              rel="noreferrer"
            >
              {cardData.title}
            </a>
          </h3>

          <a
            href={cardData.gitUrl}
            target="_blank"
            rel="noreferrer"
            className="project-git"
          >
            {language === "English" ? "Git repo" : "Repositório Git"}
          </a>
        </div>

        <p className="more-details-text">
          {language === "English" ? cardData.description[1] : cardData.description[0]}
        </p>

        <ul className="more-details-techs">
          {cardData.techs.map((tech) => {
            return (
              <>
                <li
                  key={Math.random() * 1000}
                  className="tech"
                >
                  {tech}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </StyledCard>
  );
}
