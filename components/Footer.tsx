import styled from 'styled-components';
import TagIcon from './TagIcon';
import Image from 'next/image';

const MobileFooterCss = `
    padding: 20px;
    flex-direction: column;
    row-gap: 20px;

    .footer-content-wrapper {
        flex-direction: column;
        row-gap: 20px;

        span {
            text-align: center;
            width: 100%;
        }
    }
`;

const FooterStyle = styled.footer`
    background: #11111170;
    padding: 50px 100px;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;

    a {
        position: relative;
        color: #ff006e;
        padding-bottom: 10px;
        

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: white;
            bottom: 0;
            left: 0;
            transition: width 0.3s ease;
        }
    }

    .footer-content-wrapper {
        align-items: center;
        column-gap: 20px;
        display: flex;
    }

    @media(max-width: 900px) {
        ${MobileFooterCss}
    }
`;

const SocialMediaLinks = styled.div`
    ul {
        display: flex;
    }
`;

export default function Footer() {
    return (
        <FooterStyle>
            <TagIcon size={1} />

            <div className='footer-content-wrapper'>
                <span>
                    Feito por
                </span>

                <a href='https://www.linkedin.com/in/jo%C3%A3o-pedro-bruno-machado-230227a6/' target='_blank' rel="noreferrer">João Pedro Bruno Machado</a>

                <SocialMediaLinks>
                    <ul>
                        <li>
                            <a href='https://www.linkedin.com/in/jo%C3%A3o-pedro-bruno-machado-230227a6/' target='_blank' rel="noreferrer">
                                <Image src='/icons8-linkedin-50.png' layout='intrinsic' width={50} height={50} alt='link' />
                            </a>
                        </li>

                        <li>
                            <a href='https://github.com/Jp-bruno' target='_blank' rel="noreferrer">
                                <Image src='/icons8-github-50.png' layout='intrinsic' width={50} height={50} alt='link' />
                            </a>
                        </li>
                    </ul>
                </SocialMediaLinks>
            </div>
        </FooterStyle>
    )
}