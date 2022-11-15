import styled from "styled-components";
import { SectionMixin } from "../../styles/minixs";
import ProjectCard from "../ProjectCard";

const StyledSection = styled.section`
  ${SectionMixin}
  
  .content {
    border: 0;
    background: black;
    padding: 0;
  }

  @media (max-width: 900px) {
    .content {
      padding: 20px 5px 0;
    }
  }
`;

export default function Section5() {
  const cardsData = [
    {
      title: "E-commerce Website",
      projectUrl: "https://jp-bruno.github.io/ecommerce-website/",
      previewImg: "/ecommerce.png",
      gitUrl: "https://github.com/Jp-bruno/ecommerce-website"
    },
    {
      title: "Space Tourism",
      projectUrl: "https://jp-bruno.github.io/Space-Tourism/",
      previewImg: "/space.png",
      gitUrl: "https://github.com/Jp-bruno/Space-Tourism"
    },
    {
      title: "Easy Bank",
      projectUrl: "https://easy-bank-fawn.vercel.app/",
      previewImg: "/easybank.png",
      gitUrl: "https://github.com/Jp-bruno/EasyBank"
    },
    {
      title: "Task List",
      projectUrl: "https://jp-bruno.github.io/TaskList/",
      previewImg: "/tasklist.png",
      gitUrl: "https://github.com/Jp-bruno/TaskList"
    },
    {
      title: "Job List",
      projectUrl: "https://jp-bruno.github.io/JobList/",
      previewImg: "/joblist.png",
      gitUrl: "https://github.com/Jp-bruno/JobList"
    }
  ];

  return (
    <StyledSection id="projects">
      <h1>Meus projetos</h1>

      <div className="content">
        {cardsData.map(({ title, projectUrl, previewImg, gitUrl }) => (
          <ProjectCard
            previewImg={previewImg}
            title={title}
            projectUrl={projectUrl}
            gitUrl={gitUrl}
            key={Math.random() * 1000}
          />
        ))}
      </div>
    </StyledSection>
  );
}
