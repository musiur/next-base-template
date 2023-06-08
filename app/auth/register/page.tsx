"use client";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState(formData);
  const [showPass, setShowPass] = useState(false);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setErrors({ ...errors, ...validator(formData) });
  };

  const validator = (data: any) => {
    let obj = { username: "", email: "", password: "", confirm_password: "" };
    if (!data.username.trim()) {
      obj.username = "Username is required!";
    }

    if (!data.email.trim()) {
      obj.email = "email is required!";
    }
    if (!data.password.trim()) {
      obj.password = "password is required!";
    }
    if (!data.confirm_password.trim()) {
      obj.confirm_password = "Confirm password is required!";
    }

    return obj;
  };

  const CallAPI = async () => {
    try {
      const API = ``;
      const response = await axios.get(API);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      //  call api
      // CallAPI()
    } else {
      console.log(errors);
    }
  }, [errors]);
  return (
    <div className="container mx-auto">
      <div className="max-w-[400px] mx-auto my-10 rounded-xl p-3 lg:p-5 border shadow">
        <form>
          <h6>Register</h6>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleOnChange}
              id="username"
            />
            {errors.username ? <span>{errors.username}</span> : null}
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              onChange={handleOnChange}
              id="email"
            />
            {errors.email ? <span>{errors.email}</span> : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              onChange={handleOnChange}
              id="password"
            />
            {errors.password ? <span>{errors.password}</span> : null}
            <FontAwesomeIcon
              icon={!showPass ? faEyeSlash : faEye}
              onClick={() => setShowPass(!showPass)}
              className="absolute top-[36px] right-0 mr-1 icon-base cursor-pointer"
            />
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm password</label>
            <input
              type={showPass ? "text" : "password"}
              name="confirm_password"
              onChange={handleOnChange}
              id="confirm_password"
            />
            {errors.confirm_password ? (
              <span>{errors.confirm_password}</span>
            ) : null}
            <FontAwesomeIcon
              icon={!showPass ? faEyeSlash : faEye}
              onClick={() => setShowPass(!showPass)}
              className="absolute top-[36px] right-0 mr-1 icon-base cursor-pointer"
            />
          </div>
          <button className="btn-primary w-full" onClick={handleOnSubmit}>
            Register
          </button>
          <div>
            <Link href="/auth/login" className="text-center">
              Already have account? Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
