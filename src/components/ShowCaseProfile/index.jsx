import React, { useEffect, useState } from "react";
import { artistFilter, studioFilter } from "../../services/filters";

import Card from "../Card";
import { StyledShowCase } from "./style";

let isStudio;
export const ShowCaseProfile = ({ userId }) => {
  const [arr, setArr] = useState([]);
  
  useEffect(() => {
    isStudio = JSON.parse(localStorage.getItem("@doTattoo:mainCard")).isStudio;

    async function get() {
      isStudio
        ? setArr(await studioFilter("userId", userId))
        : setArr(await artistFilter("userId", userId));
    } 
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (
    <section>
      <StyledShowCase>
        {arr.length > 1 ? (
          arr?.map(
            (elem, i) =>
              elem.id !==
                JSON.parse(localStorage.getItem("@doTattoo:mainCard")).id && (
                <Card
                  key={i}
                  object={elem}
                  isStudio={isStudio}
                  isProfile={true}
                />
              )
          )
        ) : (
          <span className="noAdv">Não possuí mais anúncios</span>
        )}
      </StyledShowCase>
    </section>
  );
};
