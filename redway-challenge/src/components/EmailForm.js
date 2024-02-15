import React, { useState } from "react";
//import "../components/EmailForm.css";

function EmailForm() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleInputChange = (event) => {
    setValidEmail(emailRegex.test(event.target.value));
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email digitado:", email);
    setSentEmail(true);
    setEmail("");
    setValidEmail(false);

    setTimeout(() => {
      setSentEmail(false);
    }, 3000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Digite o seu email:</h2>
        <input
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="johndoe@mail.com"
        />
        {validEmail && <button type="submit">Enviar</button>}
      </form>
      {sentEmail && <p>O email foi submetido com sucesso!</p>}
    </div>
  );
}

export default EmailForm;
