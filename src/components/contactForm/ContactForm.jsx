import React, { useEffect } from "react";
import { motion } from "framer-motion";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createContactThunk,
} from "../../features/contactusform/contactFormSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

let Schema = yup.object().shape({
  name: yup
    .string()
    .required("Full Name is Required")
    .test(
      "consecutive-digits",
      "Username cannot contain five consecutive identical digits",
      (value) => {
        // Check for five consecutive identical digits
        for (let i = 0; i <= value.length - 5; i++) {
          if (
            value[i] === value[i + 1] &&
            value[i] === value[i + 2] &&
            value[i] === value[i + 3] &&
            value[i] === value[i + 4]
          ) {
            return false; // Five consecutive identical digits found
          }
        }
        return true; // No five consecutive identical digits found
      }
    ),
  email: yup
    .string()
    .email("Email should be valid.")
    .required("Email is Required"),
  phone: yup
    .string()
    .required("Mobile is Required")
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits"),
  subject: yup.string().required("subject is Required"),
  message: yup.string().required("Message is Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      dispatch(createContactThunk(values));
      formik.resetForm();
    },
  });

  const newContact = useSelector((state) => state?.contactForm);
  const { isSuccess, isError, isLoading, doneContact } = newContact;

  useEffect(() => {
    if (isSuccess && doneContact) {
      toast.success("Query Sent Successfullly!");
      navigate("/");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  return (
    <div className="bg-white py-12 px-4 md:px-12 lg:px-24" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Connect With Us
        </h2>
        <p className="text-gray-600 mb-10">
          Located in the remote village of Nandur (Ghat), we are dedicated to providing quality higher education.
          Whether you have questions about admissions, courses, or student support, we would love to hear from you.
        </p>

        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your Name"
                className="w-full border bg-[#F9F9F9] border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your Email"
                className="w-full border bg-[#F9F9F9] border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your Phone"
                className="w-full border bg-[#F9F9F9] border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
              )}
            </div>
            <div>
              <select
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full border bg-[#F9F9F9] border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-600"
              >
                <option value="" disabled>
                  Subject
                </option>
                <option value="General">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Admission">Admission</option>
              </select>
              {formik.touched.subject && formik.errors.subject && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.subject}</div>
              )}
            </div>
          </div>

          <div>
            <textarea
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows="5"
              placeholder="Message"
              className="w-full border bg-[#F9F9F9] border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#00AFAD] hover:bg-[#018a87] text-white font-semibold px-8 py-3 rounded shadow transition duration-200 cursor-pointer"
            type="submit"
          >
            Submit Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
