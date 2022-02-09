
import styled  from "styled-components";
import { categories } from "../data";
import CategoryItem from './CategoryItem';
import { mobileDevice } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 2rem;
    justify-content: space-between;
    ${mobileDevice({ padding: '0rem', flexDirection: 'column'})};
`;

const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item} key={item.id}/>
        ))}
    </Container>
  )
};

export default Categories;