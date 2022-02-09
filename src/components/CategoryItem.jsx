import styled from "styled-components";
import { image, mainColorTextLight, secondaryColorBgLight, secondaryColorTextMid } from "../styles/mixins";
import { mobileDevice } from "../responsive";

const Container = styled.div`
    flex:1;
    margin: 0.3rem;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    ${image};
    ${mobileDevice({ height: '40vh'})};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    ${mainColorTextLight};
    margin-bottom: 2rem;
`;

const Btn = styled.button`
    border: none;
    padding: 1rem;
    ${secondaryColorBgLight};
    ${secondaryColorTextMid};
    cursor: pointer;
    font-weight: 600;
`;

function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Btn>SHOP NOW</Btn>
        </Info>
    </Container>
  )
}

export default CategoryItem;
