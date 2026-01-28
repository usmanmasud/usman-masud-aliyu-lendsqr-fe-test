"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import "./login.scss";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    router.push("/dashboard");
  };

  return (
    <div className="login">
      {/* LEFT SIDE */}
      <div className="login__left">
        <div className="login__logo">
          <Image src="/Union.png" alt="Lendsqr Logo" width={24} height={24} />
          lendsqr
        </div>

        <Image
          src="/lendsqr-illustration.svg"
          alt="Login Illustration"
          width={600}
          height={400}
          priority
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="login__right">
        <div className="login__card">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <input type="email" placeholder="Email" />

          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
          </div>

          <span className="forgot">FORGOT PASSWORD?</span>

          <button onClick={handleLogin}>LOG IN</button>
        </div>
      </div>
    </div>
  );
}
