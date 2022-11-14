import styled from "styled-components";
import { h1Styles, sectionOuterPaddings, MobileSectionMixin } from "../../styles/minixs";
import ProjectCard from "../ProjectCard";

const StyledSection = styled.section`
  ${sectionOuterPaddings}

  h1 {
    ${h1Styles}
  }

  @media (max-width: 900px) {
    ${MobileSectionMixin}
  }
`;

export default function Section5() {
  const cardsData = [
    {
      title: "E-commerce Website",
      projectUrl: "https://jp-bruno.github.io/ecommerce-website/",
      previewImg: "/projectsThumbs/ecommerce.png",
      gitUrl: "https://github.com/Jp-bruno/ecommerce-website"
    },
    {
      title: "Space Tourism",
      projectUrl: "https://jp-bruno.github.io/Space-Tourism/",
      previewImg: "/projectsThumbs/space.png",
      gitUrl: "https://github.com/Jp-bruno/Space-Tourism"
    },
    {
      title: "Easy Bank",
      projectUrl: "https://easy-bank-fawn.vercel.app/",
      previewImg: "/projectsThumbs/easybank.png",
      gitUrl: "https://github.com/Jp-bruno/EasyBank"
    },
    {
      title: "Task List",
      projectUrl: "https://jp-bruno.github.io/TaskList/",
      previewImg: "/projectsThumbs/tasklist.png",
      gitUrl: "https://github.com/Jp-bruno/TaskList"
    },
    {
      title: "Job List",
      projectUrl: "https://jp-bruno.github.io/JobList/",
      previewImg: "/projectsThumbs/joblist.png",
      gitUrl: "https://github.com/Jp-bruno/JobList"
    },
  ];

  return (
    <StyledSection id="projects">
      <h1>Meus projetos</h1>

      <div className="meus-projetos-content">
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
