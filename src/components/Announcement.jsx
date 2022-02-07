import styled from "styled-components";

const Container = styled.div`
  height: 3rem; 
  background-color: teal; 
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        Super Sales! Free Shipping on Orders Over 50€
    </Container>
  )
}

export default Announcement;
