import { Send } from '@material-ui/icons';
import styled from 'styled-components';
import { secondaryColorBgLight, flexAllCenter, mainColorBg, mainColorTextLight } from '../styles/mixins';

const Container = styled.div`
    height: 60vh;
    ${secondaryColorBgLight};
    ${flexAllCenter};
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 4.3rem;
    margin-bottom: 1.25rem;
`;

const Description = styled.div`
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1.25rem;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 3.5rem;
    ${secondaryColorBgLight};
    display: flex;
    justify-content: space-between;
    border: 0.06rem solid lightgray;
`;

const Input = styled.input`
    font-size: 1rem;
    border: none;
    flex: 8;
    padding-left: 1.25rem;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    ${mainColorBg};
    ${mainColorTextLight};
`;

const Newsletter = () => {
  return (
    <div>
      <Container>
          <Title>Newsletter</Title>
          <Description>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, accusantium.</Description>
          <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send/>
            </Button>
          </InputContainer>
      </Container>
    </div>
  )
}

export default Newsletter;
