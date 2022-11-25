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

const cardsData = [
  {
    title: "E-commerce Website",
    projectUrl: "https://jp-bruno.github.io/ecommerce-website/",
    previewImg: "/ecommerce.png",
    gitUrl: "https://github.com/Jp-bruno/ecommerce-website",
    description: "Um site fictício de e-commerce feito em ReactJS. É um projeto do site Front-end Mentor.",
    techs: ["HTML", "CSS", "JavaScript", "ReactJS", "Sass", "Styled-Components"],
  },
  {
    title: "Space Tourism",
    projectUrl: "https://jp-bruno.github.io/Space-Tourism/",
    previewImg: "/space.png",
    gitUrl: "https://github.com/Jp-bruno/Space-Tourism",
    description: "Um site fictício de viagem espacial feito em HTML e CSS puros. É um projeto do site Front-end Mentor.",
    techs: ["HTML", "CSS"],
  },
  {
    title: "Easy Bank",
    projectUrl: "https://easy-bank-fawn.vercel.app/",
    previewImg: "/easybank.png",
    gitUrl: "https://github.com/Jp-bruno/EasyBank",
    description: "Uma landing page fictícia de internet banking. É um projeto do site Front-end Mentor.",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "Sass", "ReactJS", "NextJS", "Styled-Components"],
  },
  {
    title: "Task List",
    projectUrl: "https://jp-bruno.github.io/TaskList/",
    previewImg: "/tasklist.png",
    gitUrl: "https://github.com/Jp-bruno/TaskList",
    description: "Uma lista de tarefas que utiliza principalmente dos hooks useContext e useState do ReactJS, entre outros hooks.",
    techs: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  // {
  //   title: "Task List V2",
  //   projectUrl: "https://jp-bruno.github.io/taskListV2/",
  //   previewImg: "/tasklistv2.png",
  //   gitUrl: "https://github.com/Jp-bruno/taskListV2",
  //   description: "Uma versão aprimorada da lista de tarefas acima.",
  //   techs: ["HTML", "CSS", "JavaScript", "ReactJS", "Emotion", "Material-UI"],
  // },
  {
    title: "Job List",
    projectUrl: "https://jp-bruno.github.io/JobList/",
    previewImg: "/joblist.png",
    gitUrl: "https://github.com/Jp-bruno/JobList",
    description: "Uma lista filtrável de vagas de emprego. É um projeto do site Front-end Mentor.",
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS"],
  },
];

export default function Section5() {
  return (
    <StyledSection id="projects">
      <h1>Meus projetos</h1>

      <div className="content">
        {cardsData.map(({ title, projectUrl, previewImg, gitUrl, description, techs }) => (
          <ProjectCard cardData={{ previewImg, title, projectUrl, gitUrl, techs, description }} key={Math.random() * 1000} />
        ))}
      </div>
    </StyledSection>
  );
}
