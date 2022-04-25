import "./contact.css";
import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [modalText, setModalText] = useState("");
  const [color, setColor] = useState("green");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gfvjguh",
        "template_57i0mis",
        form.current,
        "EjWQ2rfVANcn1tqIf"
      )
      .then(
        (result) => {
          if (result.status === 200) setModalText("Email has been sent!");
        },
        (error) => {
          setModalText("There was some error, please try again!");
          setColor("red");
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  const modalTextComponent = modalText ? (
    <p className="contact-modal-text" style={{ color: color }}>
      {modalText}
    </p>
  ) : null;
  return (
    <>
      <div className="contact-wrapper">
        <section className="contact-element">
          <h1 className="contact-heading">Contact me!</h1>
          <section className="wrapper">
            <section className="inputs">
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  className="textInput"
                  placeholder="Your name..."
                />

                <input
                  type="text"
                  name="email"
                  className="textInput"
                  placeholder="Your email..."
                />

                <textarea
                  name="message"
                  className="textInput"
                  placeholder="Your message..."
                />

                {modalTextComponent}

                <div className="btnwrap">
                  <button className="contactButton" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Contact;
