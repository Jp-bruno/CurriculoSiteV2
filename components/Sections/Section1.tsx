import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const SectionMobileCss = css`
  background-image: linear-gradient(
    0deg,
    hsla(201, 58%, 27%, 1) 0%,
    hsla(0, 0%, 0%, 1) 100%
  );
  padding: 0;
  display: grid;
  place-items: center;
  height: calc(100vh - 50px);

  #banner-title,
  #second-banner-title {
    width: 100vw;
    text-align: center;
    font-size: 32px;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #second-banner-title {
    min-height: 120px;
  }

  .titleAndButtons {
    & .titleButtons {
      justify-content: space-evenly;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 40%;
    }
  }

  @keyframes up-and-down {
    0% {
        margin-top: 0px;

    }
    100% {
        margin-top: 10px;
    }
  }

  .arrow-down {
    display: inline-block;
    font-size: 50px;
    align-self: center;
    animation: up-and-down 0.9s ease;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

const StyledContentHolder = styled.div`
  height: calc(100vh - 90px);
  background-image: url("web-development.png"),
    linear-gradient(0deg, hsla(201, 58%, 27%, 1) 0%, hsla(0, 0%, 0%, 1) 100%);
  background-repeat: no-repeat;
  background-position: 10% 50%;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .arrow-down {
    display: none;
  }

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
        padding: 10px 12px;
        border: 0;
        border-radius: 3px;
        font-size: 1.1rem;
        font-family: "Source Code Pro", monospace;
        cursor: pointer;
        transition: background-color 0.3s ease;
        background: black;
        color: white;
        outline: 2px solid white;

        &:hover, &:focus {
          background: #FFE05F;
          color: black;
          outline-color: #111;
        }
      }
    }
  }

  #banner-title,
  #second-banner-title {
    font-weight: 200;
    font-size: 3rem;
    text-align: right;
    letter-spacing: 5px;
    font-family: "Source Code Pro", monospace;
    color: white;
    margin-bottom: 0;
    min-height: 60px;
  }

  .images {
    display: flex;
    align-items: center;
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

  @media (max-width: 900px) {
    ${SectionMobileCss}
  }
`;

export default function Section1() {
  const [done, setDone] = useState(false);

  function writeOnTitle(string: string, titleId: string) {
    return new Promise<void>((resolve) => {
      const textoArray = Array.from(string);
      const bannerTitle = document.querySelector(`#${titleId}`) as HTMLHeadingElement;

      textoArray.forEach((element, index) => {
        setTimeout(() => {
          if (index + 1 === string.length) {
            bannerTitle.textContent += element;
            setTimeout(() => {
              resolve();
            }, 1000);
          } else {
            bannerTitle.textContent += element;
          }
        }, 100 * index + 1);
      });
    });
  }

  useEffect(() => {
    if (done) {
      return;
    } else {
      (async () => {
        await writeOnTitle("J.P. BRUNO", "banner-title").then(async () => {
          await writeOnTitle("FRONT-END DEVELOPER", "second-banner-title");
          setDone(true);
        });
      })();
    }
  }, [done]);

  return (
    <StyledContentHolder>
      <div className="titleAndButtons">
        <h1 id="banner-title"></h1>
        <h1 id="second-banner-title"></h1>

        <div className="titleButtons">
          <button className="github">
            <a
              href="https://github.com/Jp-bruno"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </button>

          <button className="linkedin">
            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-pedro-bruno-machado-230227a6/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </button>
        </div>
        <a
          className="arrow-down"
          href="#projects"
        >
          ↓
        </a>
      </div>
    </StyledContentHolder>
  );
}
