import React, { useEffect, useState } from "react";
import { showAllArtist, showAllStudios } from "../../services/get";
import Button from "../Button";
import Card from "../Card";

import { StyledFilter, StyledShowCase,Cont,Container } from "./style";


export const ShowCase = ({ isStudio = true }) => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    async function get() {
      isStudio ? setArr(await showAllStudios) : setArr(await showAllArtist);
    }
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <StyledFilter>
        <Cont width="100%" jContent="space-between">
          <Cont>
            <select name="Day/Month/Year" id="">
              <option value="Day/Month/Year">Day/Month/Year</option>
            </select>
            <select name="Hour" id="">
              <option value="Hour">Hour</option>
            </select>
            <select name="" id="">
              <option value="Sessions">Sessions</option>
            </select>
          </Cont>

          <Button
            backColor={"#282828"}
            textColor={"#FFFFFF"}
            height="40px"
            width="230px"
          >
            Buscar
          </Button>
        </Cont>
      </StyledFilter>
      <StyledShowCase>
        {arr?.map((elem, i) => (
          <Card key={i} object={elem} isStudio={isStudio} isProfile={true} />
        ))}
      </StyledShowCase>
    </Container>
  );
};
