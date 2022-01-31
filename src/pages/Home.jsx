
import React from 'react';
import Navbar from './../components/Navbar';
import styled from 'styled-components';

const Container = styled.div`
    height: 5rem;;
`;

const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
flex: 1;
`;

const Language = styled.span`
font-size: 1rem;
cursor: pointer;
`
const Center = styled.div`
flex: 1;`;
const Right = styled.div`
flex: 1;`;

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        input
                        icon
                    </SearchContainer>
                </Left>
                <Center>center</Center>
                <Right>right</Right>
            </Wrapper>
        </Container>
    )
};

export default Home;
