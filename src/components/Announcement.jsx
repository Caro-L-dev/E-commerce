import styled from "styled-components";
import { mainColorBg, mainColorTextLight, flexAllCenter } from "../styles/mixins";

const Container = styled.div`
  height: 3rem; 
  ${mainColorBg}; 
  ${mainColorTextLight};
  ${flexAllCenter};
  font-size: 1rem;
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
