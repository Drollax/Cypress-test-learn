import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accepted, setAccepted] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Strong password: min 8 karakter, büyük harf, küçük harf ve sayı
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = passwordRegex.test(password);

  const isFormValid = isEmailValid && isPasswordValid && accepted;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid) {
      navigate("/success");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Email</label>
          <input
            data-testid="email-input"
            type="email"
            placeholder="email giriniz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {!isEmailValid && email.length > 0 && (
            <p className="error">Geçerli bir email giriniz</p>
          )}
        </div>

        <div>
          <label>Şifre</label>
          <input
            data-testid="password-input"
            type="password"
            placeholder="şifre giriniz"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isPasswordValid && password.length > 0 && (
            <p className="error">
              Şifre en az 8 karakter, büyük harf, küçük harf ve sayı içermeli
            </p>
          )}
        </div>

        <div>
          <input
          data-testid="checkbox"
            type="checkbox"
            checked={accepted}
            onChange={(e) => setAccepted(e.target.checked)}
          />
          <label>Şartları kabul ediyorum</label>
        </div>

        <button data-testid="login-button" disabled={!isFormValid}>
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;