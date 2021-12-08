import {
  Drafts,
  Facebook,
  Instagram,
  PhoneIphone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>StyleByDiana</Logo>
        <Desc>
          Promotional vouchers are vouchers that cannot be purchased, but are
          issued by Zalando during advertising campaigns and are valid for a
          certain period of time.
        </Desc>
        <SocialLogos>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
        </SocialLogos>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man</ListItem>
          <ListItem>Women</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Brands</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>
      <Right>
        <Title></Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Zalando SE
          Valeska-Gert-Straße 5 10243 Berlin
        </ContactItem>
        <ContactItem>
          <PhoneIphone style={{ marginRight: "10px" }} /> Fax: +49 (0)30 2759 46
          93
        </ContactItem>
        <ContactItem>
          <Drafts style={{ marginRight: "10px" }} />
          E-mail: legalnotice@zalando.co.uk
        </ContactItem>
        <Payment src="../assets/payment1.png" />
      </Right>
    </Container>
  );
};

//////////////// STYLING //////////////////

const Container = styled.div`
  display: flex;
  background-color: #6328e0;
  color: white;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialLogos = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 25%;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 10px;
  transition: all 0.5s ease;

  :hover {
    background-color: #8e98e9;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin: 30px;
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
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#4682b4" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img``;

export default Footer;
