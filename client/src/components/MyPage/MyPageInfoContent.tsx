import styled from 'styled-components';
import { BsPlusCircle } from 'react-icons/bs';
interface InfoProps {
  userInfo: boolean;
  displayName: string;
  aboutMe: string;
  handleDisplayNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAboutMeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function MyPageInfoContent({
  userInfo,
  displayName,
  aboutMe,
  handleDisplayNameChange,
  handleAboutMeChange,
}: InfoProps) {
  return (
    <MainContainer>
      <ImgContainer>
        <BsPlusCircle />
      </ImgContainer>
      <TextContainer>
        {userInfo ? (
          <>
            <TextEditContainer
              value={displayName}
              onChange={handleDisplayNameChange}
            />
            <TextEditContainer value={aboutMe} onChange={handleAboutMeChange} />
          </>
        ) : (
          <>
            <Name>{displayName}</Name>
            <Text>{aboutMe || '자기를 소개해주세요'}</Text>
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