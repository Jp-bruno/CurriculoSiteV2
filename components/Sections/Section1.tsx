import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledContentHolder = styled.div`
    height: calc(100vh - 90px);
    background-image: url('web-development.png'), linear-gradient(0deg, hsla(201, 58%, 27%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
    background-repeat: no-repeat;
    background-position: 10% 50%;
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .titleAndButtons {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: end;
        height: 80%;

        & .titleButtons {
            display: flex;
            width: 20%;
            justify-content: space-between;
            height: 100%;
            align-items: end;
            
            & button {
                padding: 10px 12PX;
                border: 0;
                border-radius: 3px;
                font-size: 1.1rem;
                font-family: 'Source Code Pro', monospace;
                cursor: pointer;
                transition: background-color 0.3s ease;
                background: black;
                color: white;
                outline: 2px solid white;

                &:hover {
                    background: rgba(0,0,0,0.6)
                }
            }
        }
    }

    #banner-title, #second-banner-title {
        font-weight: 200;
        font-size: 3rem;
        text-align: right;
        letter-spacing: 5px;
        font-family: 'Source Code Pro', monospace;
        color: white;
        margin-bottom: 0;
        min-height: 60px;
    }

    .images {
        display: flex;
        aling-items: center;
        justify-content: space-between;
        list-style-type: none;
        padding: 0;

        li {
            button {
                background: 0;
                position: relative;
                border: 0;
                
                &::after {
                    position: absolute;
                    content: attr(data-name);
                    width: max-content;
                    padding-inline: 20px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    height: 20px;
                    transform: translateX(-50%) scale(0);
                    top: -70%;
                    right: 50%;
                    background: black;
                    border: solid 1px white;
                    display: flex;
                    align-items: center;
                    border-radius: 3px;
                    transition: transform 0.2s ease;
                    font-size: 100%;
                }
                
                &:hover {
                    &::after {
                        transform: translateX(50%) scale(1);
                    }
                }
            }
        }
    }
`;

export default function Section1() {
    const [done, setDone] = useState(false);

    function writeOnTitle(string: string, titleId: string) {
        return new Promise<void>((resolve) => {
            const textoArray = Array.from(string);
            const bannerTitle = document.querySelector(`#${titleId}`) as HTMLHeadingElement;
            const titleAfter = document.querySelector('#banner-title')

            console.dir(titleAfter)

            textoArray.forEach((element, index) => {
                setTimeout(() => {
                    if (index + 1 === string.length) {
                        console.log('ok')
                        bannerTitle.textContent += element;
                        setTimeout(() => { resolve() }, 1000)
                    } else {
                        bannerTitle.textContent += element;
                    }
                }, 100 * index + 1)

            })
        })
    }

    useEffect(() => {
        if (done) {
            return 
        } else {
            (async () => {
                await writeOnTitle('J.P. BRUNO', 'banner-title')
                    .then(async () => {
                        await writeOnTitle('FRONT-END DEVELOPER', 'second-banner-title')
                        setDone(true)
                    })
            })()
        }
    }, [done])

    return (
        <StyledContentHolder>
            <div className='titleAndButtons'>
                <h1 id='banner-title'></h1>
                <h1 id='second-banner-title'></h1>

                <div className='titleButtons'>
                    <button className='github'>
                        GitHub
                    </button>

                    <button className='linkedin'>
                        LinkedIn
                    </button>
                </div>
            </div>
        </StyledContentHolder>
    )
}