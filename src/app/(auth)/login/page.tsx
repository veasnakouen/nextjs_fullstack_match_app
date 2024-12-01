import React from "react";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div
      className="flex flex-col items-center justify-center vertical-center"
      // style={{ height: "calc(100vh-64px)" }}
    >
      <LoginForm />
    </div>
  );
}
