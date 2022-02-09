import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobileDevice } from "../responsive";

const Container = styled.div`
    height: 5rem;
    ${mobileDevice({ height: "3rem", maxWidth: "22.75rem"})};
`;

const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobileDevice({ padding: "0.5rem 1rem" })};
    
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 1rem;
    cursor: pointer;
    ${mobileDevice({ display: "none" })};
`;

const SearchContainer = styled.div`
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.06rem solid lightgray;
    margin-left: 2rem;
    ${mobileDevice({ marginLeft: "0" })};
`;

const Input = styled.input`
    border: none;
    flex:9;
    outline: none;
    font-size: 1.1rem;
    ${mobileDevice({ fontSize: "0.8rem" , width: "50%" })};
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    ${mobileDevice({ fontSize: "1.5rem" })};
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobileDevice({ flex: 2 , justifyContent: "center" })};
`;

const MenuItem = styled.div`
    font-size: 1rem;
    cursor: pointer;
    margin-left: 1rem;
    ${mobileDevice({ fontSize: "0.8rem", marginLeft: "0.4rem" })};
`;

const Navbar = () => {
  return (  
    <Container>
    <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder="Search"/>
                <Search style={{color:"gray", fontSize:"1rem"}}/>
            </SearchContainer>
        </Left>
        <Center><Logo>LOGO</Logo></Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                </Badge>
            </MenuItem>
        </Right>
    </Wrapper>
</Container>
  )
}

export default Navbar;
