import {
  useState,
  useContext,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import {
  AuthContext,
} from "../../Context/AuthContext";

const Register = () => {
  const { register } =
    useContext(AuthContext);

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [
    password,
    setPassword,
  ] = useState("");

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      await register(
        name,
        email,
        password
      );

      navigate("/login");
    };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setEmail(
            e.target.value
          )
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(
            e.target.value
          )
        }
      />

      <button>
        Register
      </button>
    </form>
  );
};

export default Register;