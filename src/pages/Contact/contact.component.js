import React from "react";

import Input from "../../components/UI/Input/input.component";

import "./contact.component.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactForm: {
        firstName: {
          label: "First Name",
          element: "input",
          type: "text",
          name: "firstName",
          value: "",
          valid: false,
          validation: {
            required: true,
            minChars: 2,
          },
        },
        email: {
          label: "Email",
          element: "input",
          type: "email",
          name: "email",
          value: "",
        },
        comment: {
          label: "Comment",
          element: "textarea",
          name: "comment",
          value: "",
        },
      },
    };
  }

  // Object.entries(this.state.contactForm) --> [[firstName, {...}], [email, {...}], [comment, {...}]]

  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return isValid;
    }

    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }

    if (rules.minChars) {
      isValid = value.trim().length > 1 && isValid;
    }

    // ...

    return isValid;
  }

  onChangeHandler(e, name) {
    // deconstruction of the contactForm
    // const updatedContactForm = { firstName: firstName, email: email, comment: comment };
    const updatedContactForm = { ...this.state.contactForm };

    const updatedContactFormElement = { ...updatedContactForm[name] };

    updatedContactFormElement.value = e.target.value;

    updatedContactFormElement.valid = this.checkValidity(
      updatedContactFormElement.value,
      updatedContactFormElement.validation
    );

    updatedContactForm[name] = updatedContactFormElement;

    this.setState({ contactForm: updatedContactForm });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    let formElements = Object.entries(this.state.contactForm).map(
      ([key, value]) => {
        return {
          key: key,
          config: value,
        };
      }
    );

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          {formElements.map((el) => {
            return (
              <Input
                key={el.key}
                label={el.config.label}
                element={el.config.element}
                type={el.config.type}
                name={el.config.name}
                value={el.config.value}
                valid={el.config.valid}
                onChangeHandler={(e, name) => this.onChangeHandler(e, name)}
              />
            );
          })}
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
