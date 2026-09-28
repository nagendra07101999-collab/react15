import { useRef, useState } from "react";

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameRef.current.value || !emailRef.current.value) {
      setMessage("Please fill all fields");
      return;
    }

    setMessage("Form submitted successfully");
  };

  return (
    <div>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Name" />
        <br />

        <input ref={emailRef} type="email" placeholder="Email" />
        <br />

        <button type="submit">Submit</button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Contact;