import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { image, flexAllCenter, mainColorTextLight, mainColorBg, colorBgLight} from '../styles/mixins';
import { Add, Remove } from '@material-ui/icons';
import { mobileDevice } from "../responsive";


const Container = styled.div``;

const Wrapper = styled.div`
    padding: 3rem;
    display: flex;
    font-size: 1.2rem;
    ${mobileDevice({ padding: "0.8rem", flexDirection: "column"})};
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    ${image};
    ${mobileDevice({ height: "40vh"})};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0rem 3rem;
    ${mobileDevice({ padding: "0.8rem"})};
`;

const Title = styled.h1`
     font-weight: 200;
`;

const Description = styled.p`
    margin: 1.25rem 0rem;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 3rem;
`;


const FilterContainer = styled.div`
    width: 50%;
    margin: 3rem 0rem;
    display: flex;
    justify-content: space-between;
    ${mobileDevice({ width: '100%'})};
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 1rem;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0rem 0.5rem;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin-left: 0.8rem;
    padding: 0.6rem;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobileDevice({ width: '100%'})};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 0.6rem;
    border: 0.2rem solid teal;
    ${flexAllCenter};
    margin: 0rem 0.5rem;
`;

const Button = styled.button`
    padding: 0.5rem;
    border: 0.2rem solid teal;
    ${colorBgLight};
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover{
        ${mainColorBg};
        ${mainColorTextLight};
    }
`;

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Harum adipisci iusto maiores a numquam
                        necessitatibus quaerat veritatis cupiditate, earum vitae?
                    </Description>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>

                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>

                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
};

export default Product;
