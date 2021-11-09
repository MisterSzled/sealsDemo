import styled from "styled-components";
import React from 'react';
import {Header, SealDisplay, Footer} from "../components/index.js";

const MainBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {

  return (
    <MainBody>
      <Header/>
      <SealDisplay />
      <Footer />
    </MainBody>
  );
}

export default App;
