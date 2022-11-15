import styled from 'styled-components';
import { borderAndBackgroundMixin, SectionMixin } from '../../styles/minixs';

const StyledSection = styled.section`
    ${SectionMixin}
    
    .content {
        ${borderAndBackgroundMixin}
        text-align: center;
        padding: 20px 10px;
        display: flex;
        flex-direction: column;

        span {
            
            button {
                margin: 50px 0;
                font-size: 20px;
                background: transparent;
                border: 0;
                font-weight: 200;
                font-family: 'Source Code Pro', monospace;
                color: #ff006e;
                padding: 0;
                cursor: pointer;
            }
        }
    }
`;

export default function Section6() {
    return (
        <StyledSection id='contact'>
            <h1>Contato</h1>

            <div className='content'>
                <span>
                    Agora que já me conhece melhor, entre em contato comigo pelo e-mail: <br></br>
                    <button title='Clique para copiar' onClick={async(ev) => await navigator.clipboard.writeText(ev.currentTarget.textContent || '')}>
                        bruno.machado98@hotmail.com
                    </button>
                </span>
            </div>
        </StyledSection>
    )
}