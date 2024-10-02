"use client";

import { useState } from "react";
import HambMenu from "@/app/components/hambMenu";
import { login, signup } from "./actions";
import NavBar from "@/app/components/navBar";

export default function LoginPage() {
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
            <button formAction={login} className="loginButton">
              Log in
            </button>
            <button formAction={signup} className="loginButton">
              Sign up
            </button>
          </div>
        </form>
        {!login && <p>Login unsuccessful!</p>}
      </div>
    </>
  );
}
