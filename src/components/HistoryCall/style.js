import styled from "styled-components";
export const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding-bottom: 10px;
  gap: 10px;
  filter: opacity(0.85);

  h2 {
    padding: 5px;
    background-color: #4c4c4c;
    width: 100%;
    color: #ffffff;
    height: 40px;

    text-align: center;
    border-radius: 10px 10px 0 0;
  }
  section {
    display: flex;
    border: 2px solid #4c4c4c;
    min-width: 180px;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 5px;
    .status {
      color: gray;
      font-weight: bold;
    }
  }
`;
