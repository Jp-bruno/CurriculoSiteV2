import { css } from "styled-components";

export const borderAndBackgroundMixin = css`
    border: dashed 1px #ffffff90;
    background: #222;
`;

export const SectionMixin = css`
  padding-top: 95px;
  padding-inline: 50px;
  letter-spacing: 2px;
  line-height: 2.7ch;

  & h1 {
    border-bottom: solid 1px #ffffffaa;
    padding: 10px;
  }

  & .content {
    border: dashed 1px #ffffff90;
    background: #222;
    padding: 25px 50px;
    text-align: justify;
  }

  & p {
    text-align: justify;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 900px) {
    padding: 70px 0 0 0;
    padding-inline: 5px;

    & h1 {
      border: 0;
      text-align: center;
      font-weight: 400;

    }

    & .content {
      display: flex;
      flex-direction: column;
      row-gap: 30px;
      padding: 20px 30px;
    }

    & p {
      letter-spacing: 0;
    }
  }
`;
