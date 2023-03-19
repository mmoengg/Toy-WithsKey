import React, { useEffect, useState } from "react";
import DrinksItem from "./DrinksItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { Drinks } from "../../../interfaces/Drinks.inerface";
import { Likes } from "../../../interfaces/Drinks.inerface";


function DrinksContents() {
  const [drinksData, setDrinksData] = useState<Drinks[]>([])
  const [likesData, setLikesData] = useState<Likes[]>([])

  useEffect(() => {
    const handleDrinksData = async () => {
      try {
        const response = await axios.get('/drinks');
        const { data } = response;
        setDrinksData(data.data)
        setLikesData(data.likeList)
      }
      catch (error) {
        console.log(error)
      }
    }
    handleDrinksData()
  }, [])

  return (
    <ContentsContainer>
      {drinksData.map(el => {
        return (
          <Link to={`/drinks/${el.drinkId}`}>
            <DrinksItem key={el.drinkId} drinksData={el} likesData={likesData} />
          </Link>
        )
      })}

    </ContentsContainer>
  );
}

export default DrinksContents;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
