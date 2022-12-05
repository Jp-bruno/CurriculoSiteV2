import { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../../context/languageContext";
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
    description: [
      "Um site fictício de e-commerce feito em ReactJS. É um projeto do site Front-end Mentor.",
      "A fictional e-commerce website made with ReactJS. It's a project from the Front-end Mentor website.",
    ],
    techs: ["HTML", "CSS", "JavaScript", "ReactJS", "Sass", "Styled-Components"],
  },
  {
    title: "Space Tourism",
    projectUrl: "https://jp-bruno.github.io/Space-Tourism/",
    previewImg: "/space.png",
    gitUrl: "https://github.com/Jp-bruno/Space-Tourism",
    description: [
      "Um site fictício de viagem espacial feito em HTML e CSS puros. É um projeto do site Front-end Mentor.",
      "A fictional space travel website made with pure HTML and CSS. It's a project from the Front-end Mentor website.",
    ],
    techs: ["HTML", "CSS"],
  },
  {
    title: "Easy Bank",
    projectUrl: "https://easy-bank-fawn.vercel.app/",
    previewImg: "/easybank.png",
    gitUrl: "https://github.com/Jp-bruno/EasyBank",
    description: [
      "Uma landing page fictícia de internet banking. É um projeto do site Front-end Mentor.",
      "A fictional landing page for Internet Banking website. It's a project from the Front-end Mentor website.",
    ],
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Sass",
      "ReactJS",
      "NextJS",
      "Styled-Components",
    ],
  },
  {
    title: "Task List",
    projectUrl: "https://jp-bruno.github.io/TaskList/",
    previewImg: "/tasklist.png",
    gitUrl: "https://github.com/Jp-bruno/TaskList",
    description: [
      "Uma lista de tarefas que utiliza principalmente dos hooks useContext e useState do React.",
      "A task list that uses mainly the useContext and useState React hooks",
    ],
    techs: ["HTML", "CSS", "JavaScript", "ReactJS"],
  },
  {
    title: "Task List V2",
    projectUrl: "https://jp-bruno.github.io/taskListV2/",
    previewImg: "/tasklistv2.png",
    gitUrl: "https://github.com/Jp-bruno/taskListV2",
    description: [
      "Uma versão aprimorada da lista de tarefas acima. Assim como na de cima usei ContextAPI para controlar a lista, além disso adicionei a funcionalidade do LocalStorage para manter os dados mesmo depois de fechar a aplicação.",
      "A improved version of the last task list I made. Like the one above, this one uses the Context and State API's to control the list items and methods. This list also uses the LocalStorage to keep the data even after closing the application.",
    ],
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Emotion",
      "Material-UI",
      "LocalStorage",
    ],
  },
  {
    title: "Job List",
    projectUrl: "https://jp-bruno.github.io/JobList/",
    previewImg: "/joblist.png",
    gitUrl: "https://github.com/Jp-bruno/JobList",
    description: [
      "Uma lista filtrável de vagas de emprego. É um projeto do site Front-end Mentor.",
      "A filterable job list. It's a project from the Front-end Mentor website.",
    ],
    techs: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS"],
  },
];

export default function Section5() {
  const { language } = useContext(LanguageContext);

  return (
    <StyledSection id="projects">
      <h1>{language === "English" ? "My projects" : "Meus projetos"}</h1>

      <div className="content">
        {cardsData.map(
          ({ title, projectUrl, previewImg, gitUrl, description, techs }) => (
            <ProjectCard
              cardData={{ previewImg, title, projectUrl, gitUrl, techs, description }}
              key={Math.random() * 1000}
            />
          )
        )}
      </div>
    </StyledSection>
  );
}
