"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState(formData);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setErrors(validator(formData));
  };

  const validator = (data: object) => {
    let obj = { username: "" };
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
    <div className="container border">
      <div className="max-w-[400px] mx-auto my-10 rounded-xl p-3 lg:p-5 shadow-xl">
        <h6>Register</h6>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" onChange={handleOnChange} id="username" />
            {errors.username ? <span>{errors.username}</span> : null}
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type="text" onChange={handleOnChange} id="email" />
            {errors.email ? <span>{errors.email}</span> : null}
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input type="text" onChange={handleOnChange} id="password" />
            {errors.password ? <span>{errors.password}</span> : null}
          </div>
          <div>
            <label htmlFor="confirm_password">Confirm password</label>
            <input
              type="text"
              onChange={handleOnChange}
              id="confirm_password"
            />
            {errors.confirm_password ? (
              <span>{errors.confirm_password}</span>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
