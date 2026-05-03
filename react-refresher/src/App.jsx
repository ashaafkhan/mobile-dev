import React, { useState } from 'react'

const App = () => {

    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      password: '',
    });

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formValues);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={formValues.name} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" type="email" value={formValues.email} onChange={handleChange} />
        </label>
        <label>
          Password
          <input name="password" type="password" value={formValues.password} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
}

export default App