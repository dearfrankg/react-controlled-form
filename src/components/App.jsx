import React from "react";
import styled from "styled-components";

import "./App.css";
import Header from "./Header";
import FormContainer from "./FormContainer";

const Section = styled.div`
  text-align: center;
`;

const App = () => (
  <Section>
    <Header title="API communication demo" />
    <FormContainer />
  </Section>
);

export default App;
