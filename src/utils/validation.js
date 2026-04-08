// src/utils/validation.js

// Email validation
export const validateEmail = (email) => {
  if (!email) return "Email is required";

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Enter a valid email";

  return "";
};

// Name validation
export const validateName = (name) => {
  if (!name) return "Name is required";

  if (name.length < 3) return "Name must be at least 3 characters";

  return "";
};

// Password validation
export const validatePassword = (password) => {
  if (!password) return "Password is required";

  if (password.length < 6)
    return "Password must be at least 6 characters";

  return "";
};