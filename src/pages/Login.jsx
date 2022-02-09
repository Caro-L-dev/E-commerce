import styled from 'styled-components';
import { flexAllCenter, button, colorBgLight, mainColorBg, mainColorTextLight, titleFontSize } from '../styles/mixins';
import { mobileDevice } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/7256682/pexels-photo-7256682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    background-size: cover;
    ${flexAllCenter};
`;


 const Wrapper = styled.div`
    width:25%;
    padding: 1.25rem;
    ${colorBgLight};
    border-radius: 1rem;
    ${mobileDevice({width: '75%'})};
 `;


 const Form = styled.form`
    display: flex;
    flex-direction: column;
 `;

 const Title = styled.h1`
    ${titleFontSize};
 `;


 const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 0.8rem 0rem;
    padding: 0.8rem;
    font-size: 1.2rem;
 `;

 const Button = styled.button`
    ${button};
    width: 40%;
    padding: 1rem 1.25rem;
    ${mainColorBg};
    ${mainColorTextLight};
    margin-bottom: 0.8rem;
 `;

const Link = styled.a`
  margin: 0.5rem 0rem;
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMMEBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login;
