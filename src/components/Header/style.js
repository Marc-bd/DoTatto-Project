import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0 20px;
  width: 100%;
  max-width: 100vw;
  height: ${(prop) => prop.height};
  background-color: black;
  align-items: center;
  justify-content: space-between;
  background-color: black;

  .open {
    max-height: 0;
  }

  .logo:hover {
    cursor: pointer;
  }

  li:hover {
    cursor: pointer;
  }

  .inputContainer {
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: row;
    align-items: center;
  }

  .inputContainer label {
    display: none;
  }

  .inputContainer div {
    border-radius: 10px 0 0 10px;
    width: 100%;
  }

  button {
    border-radius: 0 10px 10px 0;
  }

  .magnifier {
    margin-top: 5px;
    width: 60%;
    height: 60%;
  }

  .headerMain {
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 5%;
  }

  .studioLogo {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 100%;
  }

  .logOut {
    cursor: pointer;
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 768px) {
    height: ${(prop) => prop.mobileHeight};
    background-color: ${(prop) => prop.mobileBackground};

    .open {
      max-height: 500px;
    }

    li {
      background-color: ${(prop) => prop.mobileBackground};
    }
    .studioLogo,
    .logOut {
      display: none;
    }

    .inputContainer {
      width: 100%;
    }
  }
`;

export const HeaderDesktop = styled.ul`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  color: white;
  list-style: none;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  font-family: "Inter", sans-serif;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Hamburguer = styled.div`
  /*
 * Made by Erik Terwan
 * 24th of November 2015
 * MIT License
 *
 *
 * If you are thinking of using this in
 * production code, beware of the browser
 * prefixes.
 */
  position: relative;

  -webkit-user-select: none;
  user-select: none;

  span {
    display: block;
    width: 38px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #cdcdcd;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  input {
    display: block;
    width: 42px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  input:checked ~ span:nth-last-child(3) {
    opacity: 1;
    transform: rotate(45deg) translate(0, 0);
  }

  input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span {
    transform: rotate(-45deg) translate(-5px, 0);
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileHeader = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  position: absolute;
  list-style: none;
  top: calc(100% + 1px);
  left: 0;
  transition: max-height 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  gap: 1px;
  z-index: 100;
  background-color: white;
  padding: 1px 0px;

  li {
    padding: 30px 20px;
    width: 100%;

    color: white;

    font-family: "Inter", sans-serif;
    font-size: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
