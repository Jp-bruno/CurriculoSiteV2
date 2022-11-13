export const h1Styles = `
    border-bottom: solid 1px #ffffffaa;
    padding: 10px;
`;

export const sectionOuterPaddings = `
    padding-top: 95px;
    padding-inline: var(--section-outer-padding-inline);
`;

export const borderAndBackgroundMixin = `
    border: dashed 1px #ffffff90;
    background: #222;
`;

export const basicTypography = `
    letter-spacing: .1rem;
    line-height: 2.7ch;

    p {
        text-align: justify;
        font-size: 18px;
        color: rgba(255,255,255,0.8);
    }
`;

export const MobileSectionMixin = `
    padding: 0;
    padding-top: 70px;

    h1 {
        border: 0;
        text-align: center;
    }

    h3 {
        text-align: center;
    }
`;
