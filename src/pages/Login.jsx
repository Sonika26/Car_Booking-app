import "./Login.css";
import { FaApple, FaGoogle } from "react-icons/fa";
import React, { useState, useContext } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { googleLogin } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // 🔑 Login
        await signInWithEmailAndPassword(auth, form.email, form.password);
        navigate("/");
      } else {
        // 🔑 Register
        const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password);
        const user = userCredential.user;

        // Save extra info in Firestore
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: form.name,
          email: form.email,
          createdAt: serverTimestamp(),
        });

        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>{isLogin ? "Welcome back" : "Create Account"}</h1>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div className="forgot-password">
            {isLogin && <a href="/">Forgot Password</a>}
          </div>

          <button type="submit" className="login-btn">
            {isLogin ? "Log in" : "Sign Up"}
          </button>
        </form>

        <p className="signup-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="toggle-btn"
          >
            {isLogin ? "Signup" : "Login Instead"}
          </button>
        </p>

        <button className="apple-btn">
          <FaApple />
          <span>Log in with Apple</span>
        </button>

        <button
          className="google-btn"
          type="button"
          onClick={async () => {
            try {
              await googleLogin();
              navigate("/");
            } catch (error) {
              alert(error.message);
            }
          }}
        >
          <FaGoogle />
          <span>Log in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
