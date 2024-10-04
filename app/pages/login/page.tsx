"use client";

import { useState } from "react";
import HambMenu from "@/app/components/hambMenu";
import { login, signup } from "./actions";
import NavBar from "@/app/components/navBar";

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (formData: FormData) => {
    const result = await login(formData);
    if (result.error) {
      setErrorMessage(result.error);
    }
  };

  const handleSignup = async (formData: FormData) => {
    const result = await signup(formData);
    if (result.error) {
      setErrorMessage(result.error);
    }
  };

  return (
    <>
      <NavBar />
      <HambMenu />
      <div className="pageWrapper">
        <form className="formWrapper">
          <div className="kioto_tm_title pb-6 pt-4">
            <span>// Log in</span>
          </div>
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            className="loginInput"
            id="email"
            name="email"
            type="email"
            required
          />
          <label htmlFor="password" className="label">
            Password:
          </label>
          <input
            className="loginInput"
            id="password"
            name="password"
            type="password"
            required
          />
          <div className="buttonWrapper">
            <button formAction={handleLogin} className="loginButton">
              Log in
            </button>
            <button formAction={handleSignup} className="loginButton">
              Sign up
            </button>
          </div>
        </form>
        {errorMessage && (
          <div className="error-message">
            <p className="font-mono text-2xl">{errorMessage}</p>
          </div>
        )}
      </div>
    </>
  );
}
