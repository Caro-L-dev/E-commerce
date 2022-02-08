import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { flexAllCenter, colorBgContainerProductItem, colorBgTransparentDark, colorBgLight } from '../styles/mixins';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${colorBgTransparentDark};
  z-index: 3;
  ${flexAllCenter};
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 0.3rem;
  min-width: 17.5rem;
  height: 21.875rem;
  ${flexAllCenter};
  ${colorBgContainerProductItem};
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;


const Circle = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  ${colorBgLight};
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  ${colorBgLight};
  ${flexAllCenter};
  margin: 0.6rem;
  transition: all 0.5s ease;

  &:hover {
    background-color : #e9f5f5;
    transform: scale(1.1);
  }
`;

const ProductItem = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default ProductItem;
