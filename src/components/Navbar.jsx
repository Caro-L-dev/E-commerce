import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

const Container = styled.div`
    height: 5rem;;
`;

const Wrapper = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 1rem;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.1rem solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    padding: 0.5rem;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 1rem;
    cursor: pointer;
    margin-left: 1rem;
`;

const Navbar = () => {
  return (  
    <Container>
    <Wrapper>
        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
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
