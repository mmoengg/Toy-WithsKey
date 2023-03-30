import styled from "styled-components"

function MainDrinksContentTitle() {
    return (
        <MainContainer>
            <TitleWrap>
                Best Drinks
            </TitleWrap>
            <BodyWrap>
                지금 가장 인기 많은 술을 만나 보세요!
            </BodyWrap>
        </MainContainer>
    )
}

export default MainDrinksContentTitle

const MainContainer = styled.div`
    color: var(--color-white);
`

const TitleWrap = styled.div`
    font-size: var(--x-large);
    margin-bottom: var(--x-small);
`

const BodyWrap = styled.div`
    margin-bottom: var(--x-large);
`