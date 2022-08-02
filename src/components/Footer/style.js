import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  padding: 15px;
  flex-direction: row;
  background-color: ${(props) => props.backColor};
  color: ${(props) => props.textColor};
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 100%;
    max-width: 189px;
    height: auto;
  }

  .copy {
    font-family: "Inter";
    font-size: 9px;
    line-height: 11px;
    max-width: 500px;
  }

  .copy:hover {
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }

  /* ${(props) => {
    return props.size.h < window.innerHeight
      ? `position: absolute; bottom: 0;`
      : `position: relative;`;
  }} */
`;

export const Spotlights = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: white;
  list-style: none;

  li,
  a {
    display: flex;
    height: auto;
    flex-direction: column;
    align-items: center;
    font-family: "Inter";
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    gap: 5px;
    text-decoration: none;
    color: inherit;
  }

  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
    color: inherit;
  }

  li img {
    width: 16px;
    height: 16px;
  }

  li:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const AditionalInfo = styled.ul`
  margin: auto 0 0 auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
  color: white;
  list-style: none;
  width: fit-content;

  li {
    height: auto;
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 8px;
  }
`;
