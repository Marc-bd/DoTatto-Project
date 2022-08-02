import styled from "styled-components";

export const StyledCard = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #d5d5d5;
  padding-bottom: 10px;
  align-items: center;
  margin: 16px 0px;

  @media (min-width: 350px) {
    width: 350px;
    margin-left: 16px;
  }

  @media (min-width: 500px) {
    width: 450px;
    margin-left: 16px;
  }

  @media (min-width: 768px) {
    width: 450px;
    margin-left: 16px;
  }

  @media (min-width: 1024px) {
    width: 700px;
    flex: none;
  }

  .imageDescription {
    width: 100%;
    object-fit: cover;
    border-radius: 16px 16px 0px 0px;

    @media (min-width: 768px) {
      max-height: 400px;
      height: auto;
      object-fit: cover;
      border-radius: 16px 16px 0px 0px;
      flex: none;
    }

    @media (min-width: 1024px) {
      max-height: 400px;
      height: auto;
      object-fit: cover;
      border-radius: 16px 16px 0px 0px;
      flex: none;
    }
  }
`;
export const FormArea = styled.section`
  h2 {
    font-size: 16px;
  }

  button {
    padding: 10px;
    width: 100%;
    margin-top: 7px;
    font-size: 13px;

    border-radius: 5px;
    margin-bottom: 9px;

    &:hover {
      background-color: #282828;
      color: #ffff;
    }
  }
`;

export const HeaderCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  margin: 10px;
  margin-bottom: 10px;
  section {
    display: flex;
    align-items: center;

    gap: 10px;
    p {
      font-weight: 200;
      line-break: anywhere;
      width: 100%;
      font-size: 9px;
      width: 155px;
    }
  }
  .userImg {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  .imageCard {
    width: 50px;
    height: 50px;
    padding: 5px;
  }
  h2 {
    font-size: 23px;
    font-weight: 600;
    width: 100%;
  }
`;

export const DescriptionCard = styled.div`
  margin: 10px;
  width: 90%;
  p {
    font-weight: 300;
    line-break: anywhere;
    width: 100%;
    font-size: 14px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  span {
    font-weight: 600;
    font-size: 13px;
    margin-top: 5px;
  }
  .matarialList {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    h3 {
      font-size: 16px;
    }
    li {
      font-size: 15px;
      list-style: lower-greek;
    }
  }
`;
