import './Contact.css';

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mdowrqed"
        method="POST"
      >
        <h1 className='contact'>Get in touch with me!</h1>
        <br />
        <label>Name: </label>
        <input id='contact-id' type='name' name='name' />
        <br /><br />
        <label>Email: </label>
        <input type="email" name="email" />
        <br /><br />
        <label>Message:</label>
        <br />
        <textarea className='message' type="text" name="message" />
        <br /><br />
        {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
        <br /><br /><br />
      </form>
    );
  }

  // for the sake of updating git

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}