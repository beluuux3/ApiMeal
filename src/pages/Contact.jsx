import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y057zp9", "template_68bg7au", form.current, {
        publicKey: "-lVcy2D49i-sWJXyu",
      })
      .then(
        () => {
          console.log("SUCCESS!");

          setTimeout(() => window.location.reload(), 800);
        },
        (error) => {
          console.log("FAILED...", error?.text || error);
          setTimeout(() => window.location.reload(), 1200);
        }
      );
  };
  return (
    <div>
      <section className="w-full p-4 sm:p-8">
        <form
          action="https://formsubmit.co/54d861e4fba2acc58aa8f89cf3ed35fd"
          method="POST"
          className="max-w-xl mx-auto space-y-6 bg-orange-200 p-6 rounded-xl shadow-2xl"
          onSubmit={sendEmail}
          ref={form}
        >
          <h2 className="text-4xl font-Cherry-Bomb-One text-orange-700 mb-10 text-center font-lobster">
            Write to us
          </h2>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-orange-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Write your name here..."
              required=""
              className="mt-1 block w-full px-4 py-2 border border-orange-700 rounded-md shadow-sm bg-white  "
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-orange-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Write your email here..."
              required=""
              className="mt-1 block w-full px-4 py-2 border border-orange-700 rounded-md shadow-sm bg-white  "
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-bold text-orange-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows={4}
              required=""
              className="mt-1 block w-full px-4 py-2 border border-orange-700 rounded-md shadow-sm bg-white  "
              defaultValue={""}
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              value="Send"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-orange-800 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
