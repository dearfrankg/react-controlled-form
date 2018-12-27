import React from "react";
import styled from "styled-components";

import "./App.css";
import Header from "./Header";
import Form from "./Form";

const Section = styled.div`
  text-align: center;
`;
const FormContainer = styled.div`
  margin: 50px;
  text-align: left;
`;

const App = () => (
  <Section>
    <Header title="react forms" />
    <FormContainer className="col-md-6">
      <Form />
      <pre className="out" />
      <a href="https://github.com/dearfrankg/react-controlled-form">github repo</a>
    </FormContainer>
  </Section>
);

export default App;
