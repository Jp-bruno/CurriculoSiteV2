import styled from 'styled-components';
import { sectionOuterPaddings } from '../../styles/minixs';

const StyledSection = styled.section`
    ${sectionOuterPaddings}
`;

const StyledCard = styled.div`
    border: dashed 1px #ffffffaa;
    display: flex;
    
    a {
        padding: 5px 0 5px 20px;
        flex: 1;
    }

    &:hover {
        background-color: rgba(255,255,255, 0.06);
    }
`;

type ProjectCardProps = {
    title: string,
    projectUrl: string,
    // previewImg: string
}

function ProjectCard({ title, projectUrl /*, previewImg*/ }: ProjectCardProps) {
    return (
        <StyledCard>
            <a href={projectUrl} target="_blank" rel="noreferrer">
                {/* <Image src={previewImg} alt={title} layout='intrinsic'/> */}
                <h3>
                    {title}
                </h3>
            </a>
        </StyledCard>
    )
}

export default function Section5() {
    const cardsData = [
        {
            title: "E-commerce Website",
            projectUrl: "https://jp-bruno.github.io/ecommerce-website/"
        },
        {
            title: "Space Tourism",
            projectUrl: "https://jp-bruno.github.io/Space-Tourism/"
        },
        {
            title: "Easy Bank",
            projectUrl: "https://easy-bank-fawn.vercel.app/"
        },
        {
            title: "Task List",
            projectUrl: "https://jp-bruno.github.io/TaskList/"
        },
        {
            title: "Job List",
            projectUrl: "https://jp-bruno.github.io/JobList/"
        },
    ];

    return (
        <StyledSection>
            <h1>Meus projetos</h1>

            <div className='meus-projetos-content'>
                {
                    cardsData.map(({ title, projectUrl }) => <ProjectCard title={title} projectUrl={projectUrl} key={Math.random() * 1000} />)
                }
            </div>
        </StyledSection>
    )
}