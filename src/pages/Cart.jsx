import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { button, flexAllCenter, mainColorTextLight, colorBgLight } from '../styles/mixins';
import { Add, Remove } from '@material-ui/icons';
import { mobileDevice } from "../responsive";

const Container = styled.div`
    box-sizing: border-box;
    ${mobileDevice({maxWidth: "23.75rem"})};
`;

const Wrapper = styled.div`
    padding: 1.25rem;
    ${mobileDevice({ padding: '0.8rem'})};
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobileDevice({ justifyContent: 'center'})};
`;

const TopTexts = styled.div`
    ${mobileDevice({ display: 'none'})};
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0rem 0.8rem;
    padding: 1.25rem;
`;

const TopButton = styled.button`
    padding: 1rem;
    font-weight: 600;
    ${button};
    border: 1px solid black;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
    margin-bottom: 1.25rem;
    ${mobileDevice({ fontSize: '60%', margin: '5%'})};
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobileDevice({ flexDirection: 'column'})};
`;


const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobileDevice({ flexDirection: 'column'})};
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 10rem;
`;

const Details = styled.div`
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    ${flexAllCenter};
    flex-direction: column;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: -0.2rem;
`;

const ProductAmount = styled.div`
    font-size: 1.2rem;
    margin: 1rem;
    ${mobileDevice({ margin: '0.3rem 0.8rem'})};
`;

const ProductPrice = styled.div`
    font-size: 2.5rem;
    font-weight: 200;
    ${mobileDevice({ marginBottom: '0.8rem'})};
`;

const Hr = styled.hr`
    ${colorBgLight};
    border: none;
    height: 0.1rem;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.02rem solid lightgray;
    border-radius: 0.2rem;
    padding: 1.25rem;
    height: 50%;
    ${mobileDevice({ width: '80%'})};
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 2rem 0rem;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "1.5rem"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
    width: 100%;
    padding: 0.8rem;
    background-color: black;
    ${mainColorTextLight};
    ${button};
`;

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://www.efootwear.eu/media/catalog/product/cache/image/650x650/0/0/0000209454284_01_rz.jpg" />
                                <Details>
                                    <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 93456258756</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Size:</b> 38</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Image src="https://img.ltwebstatic.com/images3_pi/2021/07/20/16267789612ce7c7df5905eb7ea84907f9eea782b1_thumbnail_600x.webp" />
                                <Details>
                                    <ProductName><b>Product:</b> Kawaii shirt</ProductName>
                                    <ProductId><b>ID:</b> 93456858756</ProductId>
                                    <ProductColor color="pink" />
                                    <ProductSize><b>Size:</b> S</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 35</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
};

export default Cart;
