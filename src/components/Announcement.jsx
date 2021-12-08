import styled from "styled-components";

const Announcement = () => {
  return (
    <div>
      <Container>Announcement information here!</Container>
    </div>
  );
};

///////////////// STYLE //////////////

const Container = styled.div`
  height: 30px;
  background-color: #f19e9e;
  color: #201212;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 400;
`;

export default Announcement;
