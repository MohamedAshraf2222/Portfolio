import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const formref = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  // mohamed.ashraf2222244444@gmail.com
  // service_qxj44ve
  // template_61xtq7n
  // xVxuGAta0V_ObJ4d-

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_qxj44ve",
        "template_61xtq7n",
        {
          form_name: form.name,
          to_name: "Mohamed Ashraf",
          form_email: form.email,
          to_email: "mohamed.ashraf2222244444@gmail.com",
          message: form.message,
        },
        "xVxuGAta0V_ObJ4d-"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you ,I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong , please try again");
        }
      );
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row pb-12 flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.8] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formref}
            onSubmit={handleSubmit}
            className={"mt-12 flex flex-col gap-8"}
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                placeholder="what's your name"
                className="bg-tertiary text-white placeholder:text-secondary py-4 px-6 rounded-lg border-none outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                placeholder="what's your email"
                className="bg-tertiary text-white placeholder:text-secondary py-4 px-6 rounded-lg border-none outline-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                onChange={handleChange}
                value={form.message}
                placeholder="what do you want to say?"
                className="bg-tertiary text-white placeholder:text-secondary py-4 px-6 rounded-lg border-none outline-none font-medium resize-none"
              />
            </label>
            <button
              type="submit"
              className="bg-submit shadow-primary w-fit px-8 py-3 outline-none font-bold shadow-md rounded-xl"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[360px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
