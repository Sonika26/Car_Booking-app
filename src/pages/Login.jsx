import "./Login.css";
import { FaApple, FaGoogle } from "react-icons/fa";
import React, { useState , useContext } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login, register, googleLogin } = useContext(AuthContext);
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.type]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, form.email, form.password);
        navigate("/"); // ✅ go to home page
      } else {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
        navigate("/"); // ✅ go to home page after signup
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
          <input
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <div className="forgot-password">
            <a href="/">Forgot Password</a>
          </div>

          <button type="submit" className="login-btn">
            {isLogin ? "Log in" : "Register"}
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

        <button className="google-btn" type="button" onClick={async() =>{
          try{
            await googleLogin();
            navigate("/");
          }catch{
            alert(error.message);
          }
        }}>
          <FaGoogle />
          <span>Log in with Google</span>
        </button>
      </div>
    </div>
  );
}

export default Login;
