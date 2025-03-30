import React, { useState } from "react";

const useAuthForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (isLogin) => {
    let tempErrors = {};
    if (!isLogin) {
      if (!formData.name) tempErrors.name = "Name is required";

      if (!formData.email) {
        tempErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Email is invalid";
      }

      if (!formData.password) {
        tempErrors.password = "Password is required";
      }
    } else {
      if (!formData.email) {
        tempErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        tempErrors.email = "Email is invalid";
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  return { formData, errors, handleChange, validate, setErrors };
};

export default useAuthForm;
