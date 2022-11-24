import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

const StyledCard = styled.div`
  border: dashed 1px #ffffffaa;
  display: flex;
  padding: 20px 0 0;
  column-gap: 50px;
  justify-content: center;
  border-left: 0;
  flex-direction: column;

  .project-image {
    flex: 1;
    display: flex;
  }

  .project-details {
    flex: 1;

    a {
      transition: color 0.2s ease;

      &:hover,
      &:focus-visible {
        color: #ff006e;
      }
    }

    .project-title {
      margin: 0;
      text-align: left;
      font-size: 1.5rem;
    }

    .project-git {
      position: relative;

      &:hover {
        &::after {
          transform: scaleX(1);
        }
      }

      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 1px;
        background: white;
        left: 0;
        bottom: -5px;
        transition: transform 0.3s ease;
        transform: scaleX(0);
        transform-origin: left;
      }
    }
  }

  .image-title-flex-parent {
    display: flex;
    column-gap: 20px;
    align-items: center;
  }

  .show-more-button {
    background: 0;
    border: 0;
    margin: 10px 0;
    color: #ffffff50;
    cursor: pointer;
  }

  .more-details {
    transition: width 1s ease;
    height: 0px;
    overflow: hidden;
    transition: height 0.3s ease;

    .more-details-text,
    .more-details-techs {
      padding: 0 50px;
    }

    .more-details-techs {
      display: flex;
      column-gap: 15px;
      flex-wrap: wrap;
    }

    &.open {
      height: 20vh;
    }
  }

  &:nth-of-type(odd) {
    border-left: dashed 1px #ffffffaa;
    border-right: 0;

    .image-title-flex-parent {
      flex-direction: row-reverse;
    }

    .project-details {
      text-align: right;

      .project-title {
        text-align: right;
      }

      .project-git {
        &::after {
          transform-origin: right;
        }
      }
    }
  }

  @media (max-width: 900px) {
    column-gap: 20px;
    padding: 20px 10px 0;

    &,
    &:nth-of-type(odd) {
      flex-direction: column;
    }

    .project-details .project-title {
      font-size: 1rem;
    }

    .more-details .more-details-text {
      padding: 0 20px 20px 20px;
    }

    .more-details {
      .more-details-techs {
        padding: 0 20px;
      }
      &.open {
        height: 50vh;
      }
    }
  }
`;

type ProjectCardProps = {
  cardData: {
    title: string;
    projectUrl: string;
    previewImg: string;
    gitUrl: string;
    description: string;
    techs: string[];
  };
};

export default function ProjectCard({ cardData }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMoreInfo() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <StyledCard>
      <div className="image-title-flex-parent">
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
          <a href={cardData.projectUrl} target="_blank" rel="noreferrer">
            <h3 className="project-title">{cardData.title}</h3>
          </a>

          <a
            href={cardData.gitUrl}
            target="_blank"
            rel="noreferrer"
            className="project-git"
          >
            Repositório Git
          </a>
        </div>
      </div>

      <button className="show-more-button" onClick={toggleMoreInfo}>
        <small> Show {isOpen ? "less" : "more"} </small>
      </button>

      <div className={`more-details ${isOpen ? "open" : "closed"}`}>
        <p className="more-details-text">{cardData.description}</p>

        <ul className="more-details-techs">
          Tecnologias:
          {cardData.techs.map((tech, index) => {
            return (
              <>
                {index === 0 ? "" : "○"}
                <li key={Math.random() * 1000} className="tech">
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
