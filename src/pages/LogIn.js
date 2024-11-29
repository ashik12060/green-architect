import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { userSignInAction } from "../redux/actions/userAction";
import Header from "../components/Shared/Headers/Header";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required*"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required*"),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get authentication and user details from the Redux store
  const { isAuthenticated, userInfo } = useSelector((state) => state.signIn);

  // Navigate based on role when authenticated
  useEffect(() => {
    if (isAuthenticated && userInfo) {
      if (userInfo.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    }
  }, [isAuthenticated, userInfo, navigate]);

  // Formik for form validation and handling
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(userSignInAction(values));
      actions.resetForm();
    },
  });

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
        <div className="bg-green-800 shadow-xl rounded-lg p-8 w-full max-w-md">
          {/* Avatar and title */}
          <div className="flex flex-col items-center mb-6">
            <FontAwesomeIcon
              icon={faUser}
              className="bg-white px-4 py-4 rounded-full text-2xl text-green-700"
            />
            <h2 className="text-2xl font-bold text-white">Log In</h2>
          </div>

          {/* Login Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                className={`w-full px-4 py-3 border ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-white`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className={`w-full px-4 py-3 border ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-white`}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-white text-green-800 font-bold py-3 rounded-md transition-colors"
            >
              Log In
            </button>

            {/* Link to Register */}
            <div className="text-center mt-2">
              <Link to="/register" className="text-white hover:underline">
                Register Now
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
