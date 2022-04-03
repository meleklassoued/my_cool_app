import React, { useState } from "react";

const ContactForm = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    imageURL: "",
  });
  const { name, email, imageURL } = contactForm;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(contactForm);
    setContactForm({ name: "", email: "", imageURL: "" });
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    setContactForm({
      ...contactForm,
      [e.target.name]: value,
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          value={name}
          name='name'
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='e-mail'>E-mail</label>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor='imageURL'>ImageUrl</label>
        <input
          type='text'
          id='imageURL'
          value={imageURL}
          name='imageURL'
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button>Save Contact</button>
      </div>
    </form>
  );
};

export default ContactForm;
