import { Facebook, Instagram, Twitter, Pinterest, Phone, MailOutline, Room } from '@material-ui/icons';
import styled from 'styled-components';
import { mainColorTextLight, flexAllCenter } from '../styles/mixins';

const Container = styled.div`
    ${flexAllCenter};
`;


const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
`;

const Logo = styled.h2``;

const Description = styled.p`
    margin: 1.25rem 0rem;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    ${mainColorTextLight};
    background-color: #${props=>props.color};
    ${flexAllCenter};
    margin-right: 1.25rem;
`;

const Center = styled.div`
    flex: 1;
    padding: 1.25rem;
`;

const Title = styled.h3`
    margin-bottom: 1.8rem;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 0.6rem;
`;

const Right = styled.div`
    flex: 1;
    padding: 1.25rem;
`;

const ContactItem = styled.div`
    margin-bottom: 1.25rem;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    height: 10%;
`;

const Footer = () => {
    return (
        <Container>

            <Left>
                <Logo>LOGO</Logo>
                <Description>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugit repellendus 
                                totam quaerat assumenda, eveniet dolore architecto illum veritatis atque.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem> <Room style={{marginRight: "1.8rem"}}/>Lorem ipsum dolor sit amet.</ContactItem>
                <ContactItem> <Phone style={{marginRight: "1.8rem"}}/>67815429</ContactItem>
                <ContactItem> <MailOutline style={{marginRight: "1.8rem"}}/>contact@caro.dev</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
                
        </Container>
    )
};

export default Footer;
