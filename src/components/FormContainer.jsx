import React, { Component } from "react";
import styled from "styled-components";

/* Import Components */
import CheckBox from "./CheckBox";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import Button from "./Button";

const FormBox = styled.div`
  margin: 50px;
  text-align: left;
`;
class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      },

      genderOptions: ["Male", "Female", "Others"],
      skillOptions: ["Programming", "Development", "Design", "Testing"]
    };
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({ newUser: { ...prevState.newUser, [name]: value } }),
      () => console.log(this.state.newUser)
    );
  };

  handleCheckBox = e => {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({ newUser: { ...prevState.newUser, skills: newSelectionArray } }));
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log("userData: ", userData);
    document.querySelector(".out").innerHTML = JSON.stringify(userData, null, 2);

    // fetch("http://example.com", {
    //   method: "POST",
    //   body: JSON.stringify(userData),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }).then(response => {
    //   response.json().then(data => {
    //     console.log("Successful" + data);
    //   });
    // });
  };

  handleClearForm = e => {
    e.preventDefault();
    const user = {
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      }
    };
    this.setState(
      () => user,
      () => (document.querySelector(".out").innerHTML = JSON.stringify(this.state.newUser, null, 2))
    );
  };

  render() {
    const fields = {
      name: {
        inputtype: "text",
        title: "Full Name",
        name: "name",
        value: this.state.newUser.name,
        placeholder: "Enter your name",
        handleChange: this.handleInput
      },
      age: {
        inputtype: "number",
        title: "Age",
        name: "age",
        value: this.state.newUser.age,
        placeholder: "Enter your age",
        handleChange: this.handleInput
      },
      gender: {
        title: "Gender",
        name: "gender",
        options: this.state.genderOptions,
        value: this.state.newUser.gender,
        placeholder: "Select Gender",
        handleChange: this.handleInput
      },
      skills: {
        title: "Skills",
        name: "skills",
        options: this.state.skillOptions,
        selectedOptions: this.state.newUser.skills,
        handleChange: this.handleCheckBox
      },
      about: {
        title: "About you",
        name: "about",
        rows: 10,
        value: this.state.newUser.about,
        placeholder: "Describe your past experience and skills",
        handleChange: this.handleInput
      },
      submitButton: {
        type: "primary",
        title: "Submit",
        action: this.handleFormSubmit,
        style: buttonStyle
      },
      clearButton: {
        type: "secondary",
        title: "Clear",
        action: this.handleClearForm,
        style: buttonStyle
      }
    };

    return (
      <FormBox className="col-md-6">
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
          <Input {...fields.name} />
          <Input {...fields.age} />
          <Select {...fields.gender} />
          <CheckBox {...fields.skills} />
          <TextArea {...fields.about} />
          <Button {...fields.submitButton} />
          <Button {...fields.clearButton} />
        </form>
        <pre className="out" />
        <a href="https://github.com/dearfrankg/react-controlled-form">github repo</a>
      </FormBox>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;
