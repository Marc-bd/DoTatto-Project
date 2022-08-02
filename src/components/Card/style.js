import styled from "styled-components";

export const StyledCard = styled.section`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 20px;
  background-color: #d9d9d9;
  padding-bottom: 10px;
  align-items: center;
  .imageDescription {
    width: 100%;
    max-height: 230px;
    object-fit: cover;
  }

  button {
    align-self: flex-end;
  }

  box-shadow: 0px 0px 7px 7px rgba(0, 0, 0, 0.57);
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
    font-size: 12px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  span {
    font-weight: 300;
    font-size: 13px;
    margin-top: 5px;
  }
`;
