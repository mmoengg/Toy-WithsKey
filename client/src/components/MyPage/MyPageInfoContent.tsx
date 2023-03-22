import React, { useState } from 'react';
import styled from 'styled-components';
import { BsPlusCircle } from 'react-icons/bs';
import { useAppSelector } from '../../redux/hooks/hooks';

interface InfoProps {
  userInfo: boolean;
}

function MyPageInfoContent({ userInfo }: InfoProps) {
  const { displayName, aboutMe } = useAppSelector(state => state.auth.userInfo);
  const [userName, setUserName] = useState('lapmu');
  const [userText, setUserText] = useState('자기소개를 입력해 주세요.');

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleUserNameText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserText(e.target.value);
  };
  return (
    <MainContainer>
      <ImgContainer>
        <BsPlusCircle />
      </ImgContainer>
      <TextContainer>
        {userInfo ? (
          <>
            <TextEditContainer
              value={userName}
              onChange={handleUserNameChange}
            />
            <TextEditContainer value={userText} onChange={handleUserNameText} />
          </>
        ) : (
          <>
            <Name>{displayName}</Name>
            <Text>{aboutMe}</Text>
          </>
        )}
      </TextContainer>
    </MainContainer>
  );
}

export default MyPageInfoContent;

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 160px;
  height: 160px;
  background-color: var(--color-sub-light-gray);
  border-radius: var(--3x-large);
  cursor: pointer;
  transition: 0.5s;

  svg {
    display: none;
    background-color: red;

    &:hover {
      display: block;
      background-color: red;
    }
  }

  &:hover {
    transition: 0.5s;
    background-color: var(--color-sub-gray);
  }
`;

const Name = styled.div`
  width: 100%;
  height: var(--large);
  font-size: var(--text-medium);
`;

const Text = styled.div`
  width: 100%;
  font-weight: var(--weight-medium);
  font-size: var(--text-large);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: var(--large);
`;

const TextEditContainer = styled.input`
  width: calc(var(--4x-large) * 3);
  height: calc(var(--2x-small) * 5);
  border: 1px solid var(--color-sub-light-gray);
  border-radius: var(--2x-small);
  margin-bottom: var(--2x-small);
  padding-left: var(--small);
`;
