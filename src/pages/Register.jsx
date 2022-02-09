import styled from 'styled-components';
import { flexAllCenter,button, colorBgLight, mainColorBg,flexWrap, mainColorTextLight, titleFontSize } from '../styles/mixins';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/3802667/pexels-photo-3802667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    ${flexAllCenter};
    background-size: cover;
`;


 const Wrapper = styled.div`
    width:40%;
    padding: 1.25rem;
    ${colorBgLight};
    border-radius: 1rem;
 `;


 const Form = styled.form`
    ${flexWrap};
 `;

 const Title = styled.h1`
    ${titleFontSize};
 `;


 const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 1.25rem 0.8rem 0rem 0rem;
    padding: 0.8rem;
    font-size: 1.2rem;
 `;
 
 const Agreement = styled.span`
    font-size: 1rem;
    margin: 1.25rem 0rem;
 `;


 const Button = styled.button`
    ${button};
    width: 40%;
    padding: 1rem 1.25rem;
    ${mainColorBg};
    ${mainColorTextLight};
 `;

const Register = () => {
  return (
    <Container>
       <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
              <Input placeholder="name" />
              <Input placeholder="last name" />
              <Input placeholder="username" />
              <Input placeholder="email" />
              <Input placeholder="password" />
              <Input placeholder="confirm password" />
              <Agreement>
                  By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>.
              </Agreement>
              <Button>CREATE</Button>
          </Form>
      </Wrapper>
    </Container>
  )
}

export default Register;