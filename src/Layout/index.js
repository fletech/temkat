import Main from "./Main";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutStyled>
      <Main />
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default Layout;
