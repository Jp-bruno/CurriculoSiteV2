import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.div`
  border: dashed 1px #ffffffaa;
  display: flex;
  margin-bottom: 20px;
  padding: 20px;
  column-gap: 50px;
  justify-content: center;

  .project-image {
    flex: 1;
  }

  .project-details {
    flex: 1;

    a {
      transition: color 0.2s ease;

      &:hover, &:focus {
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

  &:nth-of-type(odd) {
    flex-direction: row-reverse;

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

  &:hover, &:focus-within {
    background-color: rgba(255, 255, 255, 0.06);
  }

  @media (max-width: 900px) {
    column-gap: 20px;
    padding: 20px 10px;
  }
`;

type ProjectCardProps = {
  title: string;
  projectUrl: string;
  previewImg: string;
  gitUrl: string;
};

export default function ProjectCard({
  title,
  projectUrl,
  previewImg,
  gitUrl,
}: ProjectCardProps) {
  return (
    <StyledCard>
      <a
        className="project-image"
        title="Clique para ir até o site."
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src={previewImg}
          alt={title}
          width={1366 / 2}
          height={767 / 2}
          layout="intrinsic"
        />
      </a>

      <div className="project-details">
        <a href={projectUrl} target="_blank" rel="noreferrer">
          <h3 className="project-title">{title}</h3>
        </a>

        <a
          href={gitUrl}
          target="_blank"
          rel="noreferrer"
          className="project-git"
        >
          Repositório Git
        </a>
      </div>
    </StyledCard>
  );
}
