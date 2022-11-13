/* eslint-disable @next/next/no-html-link-for-pages */
import styled from 'styled-components';
import Image from 'next/image';
import { basicTypography, h1Styles, sectionOuterPaddings, borderAndBackgroundMixin, MobileSectionMixin } from '../../styles/minixs';

const StyledSection = styled.section`
    ${sectionOuterPaddings}

    h1 {
        ${h1Styles}
    }

    .tecnologias-content {
        ${borderAndBackgroundMixin}
        ${basicTypography}
        padding: var(--section-inner-padding);
    
        .tecnologias {
            display: flex;
            justify-content: space-evenly;
            padding-bottom: 40px;
            column-gap: 20px;
    
            .tecnologia {
                position: relative;
                width: 200px;
                height: 200px;
                display: grid;
                place-items: center;

                figure {
                    figcaption {
                        margin-top: 200px;
                    }
                }
            }
        }
    }

    @media(max-width: 900px) {
        ${MobileSectionMixin}

        .tecnologias-content {
            padding: 20px 30px;

            .tecnologias {
                flex-direction: row;
                row-gap: 50px;
                
                .tecnologia {
                    position: relative;
                    width: 100px;
                    height: 100px;
                    display: grid;
                    place-items: center;

                    figure {
                        width: 100%;
                        margin: 0;

                        figcaption {
                            margin-top: 100px;
                            text-align: center;
                        }
                    }
                }

            }
        }
    }
`;

export default function Section4() {
    return (
        <StyledSection>
            <h1>Quais tecnologias um front-end usa?</h1>

            <div className='tecnologias-content'>
                <p>
                    As tecnologias disponíveis hoje são incontáveis, desde as mais simples até as mais complexas, sendo um desafio constante dominá-las pois a todo momento
                    atualizações e ferramentas melhores são desenvolvidas.
                    Entretando, sabe-se que para todo desenvolvedor front-end existem três principais tecnologias a serem dominadas. Essas três tecnologias são a base de qualquer página web, cada uma com a sua função dentro da página:
                </p>

                <div className='tecnologias'>
                    <span className='tecnologia' data-tech='CSS3'>

                        <figure>
                            <Image src='/icons8-css3-400.png' layout='fill' alt='CSS3' />
                            <figcaption>
                                CSS3
                            </figcaption>
                        </figure>
                    </span>

                    <span className='tecnologia' data-tech='JavaScript'>
                        <figure>
                            <Image src='/js-big-icon.png' layout='fill' alt='JavaScript' />
                            <figcaption>
                                JavaScript
                            </figcaption>
                        </figure>
                    </span>

                    <span className='tecnologia' data-tech='HTML5'>
                        <figure>
                            <Image src='/icons8-html-5-400.png' layout='fill' alt='HTML5' />
                            <figcaption>
                                HTML5
                            </figcaption>
                        </figure>
                    </span>
                </div>
            </div>
        </StyledSection>
    )
}