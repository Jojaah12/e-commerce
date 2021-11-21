import styled from "styled-components";
import { categories } from "../data";
import CategorItem from "./CategorItem";
import { mobile } from "../responsive";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategorItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export default Categories;
