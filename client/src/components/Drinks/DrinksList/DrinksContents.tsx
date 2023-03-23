import React, { useState } from "react";
import DrinksItem from "./DrinksItem";
import styled from "styled-components";
// import axios from "axios";
import { IDrinks, ILikes } from "../../../interfaces/drinks.inerface";
import Pagination from "../../UI/Pagination";

import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks'

interface ISearchProps {
  search: string;
  searchTag: number;
  page: number;
  setPage: (state: number) => void;
  drinksData: IDrinks[];
  likesData: ILikes[];
}

interface Tags {
  tags: { tagId: number }[];
}

function DrinksContents({ search, searchTag, page, setPage, drinksData, likesData }: ISearchProps): any {
  // const [drinksData, setDrinksData] = useState<Drinks[]>([])
  // const [likesData, setLikesData] = useState<Likes[]>([])
  const [limit, setLimit] = useState<number>(16);
  const offset = (page - 1) * limit;

  const drinkTagData: IDrinks[] = drinksData.filter((drink: Tags) => drink.tags.some(tag => tag.tagId === searchTag));
  const drinkTagValue: number | null = drinkTagData.length > 0 ? drinkTagData[0].tags.find(tag => tag.tagId === searchTag)?.tagId ?? null : null;

  const filtered: IDrinks[] = drinksData.filter((el: IDrinks) => {
    return search.toLowerCase() === ""
      ? el
      : el.drinkName.toLowerCase().includes(search);
  });

  return (
    <>
      <ContentsContainer>

        {searchTag === drinkTagValue && drinkTagValue !== 0
          ? drinkTagData.slice(offset, offset + limit).map(el => {
            return (
              <DrinksItem key={el.drinkId} drinksData={el} likesData={likesData} />
            );
          })
          : filtered.slice(offset, offset + limit).map(el => {
            return (
              <DrinksItem key={el.drinkId} drinksData={el} likesData={likesData} />
            );
          })}

      </ContentsContainer>
      <Pagination
        total={drinkTagData.length !== 0
          ? drinkTagData.length
          : filtered.length
        }
        limit={limit}
        page={page}
        setPage={setPage}
        setLimit={setLimit}
      />
    </>
  );
}

export default DrinksContents;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  margin-bottom: var(--4x-large);
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;