import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./component/commons/Footer";
import Header from "./component/commons/Header";
import Main from "./pages/main";

const Wrapper = styled.div`
  width: 700px;
`;

function App() {
  const view = useSelector((state: any) => state.viewAll);
  console.log("aa", view);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Wrapper>
            <Header />
            <Main />
            {view ? <></> : <Footer />}
          </Wrapper>
        }
      />
    </Routes>
  );
}

export default App;
