import styled from "styled-components";
import Image from "next/image";
import { h1Styles, sectionOuterPaddings, borderAndBackgroundMixin, MobileSectionMixin } from '../../styles/minixs';

const SectionMobileCss = `
    ${MobileSectionMixin}

    .me_card {
        display: none;
    }

    ul {
        text-align: justify;
    }
`;

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;

    ${sectionOuterPaddings}

    h1 {
        ${h1Styles}
    }

    .content {
        display: flex;
        position: relative;
    }

    .me_card {
        padding: 20px;
        flex-basis: 100%;
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
        letter-spacing: .1rem;
        line-height: 2.7ch;
        
        p {
            text-align: justify;
            font-size: 18px;
            color: rgba(255,255,255,0.8);
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
        ${SectionMobileCss}
    }

`;


export default function Section2() {
    return (
        <StyledSection id='about-me'>
            <h1>Sobre mim</h1>

            <div className='content'>
                <div className='me_card'>
                    <div className='scroller-div'>
                        <div className='profile_pic'>
                            <Image src='/perfil1.png' alt='perfil' height={690} width={550} layout='intrinsic' />
                        </div>

                        <ul>
                            <li>
                                João Pedro
                            </li>

                            <li>
                                Rio de Janeiro - RJ
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='more-about-me'>
                    <h3>Ola, me chamo João 😁</h3>

                    <p>
                        Sou desenvolvedor Front-end nascido e criado no Rio de Janeiro.
                    </p>

                    <p>
                        Alguns trabalhos que tive antes de ser front-end:
                    </p>

                    <ul>
                        <li>
                            DJ/Técnico de som - Eu era responsável por tocar música quando nenhum artista estivesse se apresentando, e quando tivesse
                            eu tinha que montar o palco, microfonar os instrumentos, ligar tudo na mesa de som e fazer a mixagem, além de receber
                            os músicos e prestar assistência à eles. Foi um trabalho divertido.
                        </li>

                        <li>
                            Estoquista - Nesse trabalho eu fui jovem aprendiz de um restaurante, não tinha muita coisa de interessante e muitas vezes não tinha
                            nenhum trabalho a ser feito, acabei saindo pois não me interessou, não queria seguir a carreira.
                        </li>

                        <li>
                            Transcritor - Até mesmo hoje em dia pego alguns trabalhos de transcrição, geralmente são áudios de tamanhos variados. Já transcrevi
                            áudios de diversos tipos: entrevistas, diálogos, eventos, discursos e aulas. Também já legendei vídeos com o áudio em Inglês para legendas em
                            Português para a Khan Academy.
                        </li>

                        <li>
                            Passeador de cães - Trabalhar com cães é incrível, são animais fantásticos, e eu sempre gostei muito de animais em geral, então isso já era um extra.
                            Minha experiência como passeador de cães foi ótima, conheci muitas pessoas, virei treinador de passeadores e depois adestrador.
                        </li>

                        <li>
                            Adestrador de cães - Basicamente a evolução do trabalho anterior. O passeio é parte do adestramento, então acho que é natural que todo passeador se torne
                            adestrador mais cedo ou mais tarde. Como adestrador eu treinei muitas pessoas (para serem passeadores) e acabei criando uma rede de contatos para fornecer
                            o serviço de passeio com cães, todos treinados por mim.
                        </li>
                    </ul>

                </div>
            </div>
        </StyledSection >
    )
}