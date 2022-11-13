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
            justify-content: space-around;
            align-items: center;
            padding-bottom: 40px;
    
            .tecnologia {
                display: grid;
                place-items: center;
    
                    &::after {
                    content: attr(data-tech);
                    position: absolute;
                    padding: 20px 40px;
                    transform: translateY(190%);
                }
            }
        }
    }

    @media(max-width: 900px) {
        ${MobileSectionMixin}

        .tecnologias-content {
            padding: 20px 30px;

            .tecnologias {
                flex-direction: column;
                row-gap: 50px;

                .tecnologia {
                    &::after {
                        padding: 0;
                        transform: translateY(340%);
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
                        <Image src='/icons8-css3-400.png' layout='fixed' width={400 / 2} height={400 / 2} alt='CSS3' />
                    </span>

                    <span className='tecnologia' data-tech='JavaScript'>
                        <Image src='/js-big-icon.png' layout='fixed' width={300 / 2} height={300 / 2} alt='JavaScript' />
                    </span>

                    <span className='tecnologia' data-tech='HTML5'>
                        <Image src='/icons8-html-5-400.png' layout='fixed' width={400 / 2} height={400 / 2} alt='HTML5' />
                    </span>
                </div>
            </div>
        </StyledSection>
    )
}