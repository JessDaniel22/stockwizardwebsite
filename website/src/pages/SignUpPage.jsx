import "./SignUpPage.css";
import React, { useEffect, useRef, useState, useNavigate } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../api/axios";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/signup";

 const SignUpPage = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();  

  const [text, setname] = useState("");

  const [email, setemail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const [confirmPassword, setConfirmedPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocused, setMatchFocused] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
  }, [password]);

  useEffect(() => {
    const match = password === confirmPassword;
    console.log(match);
    console.log(confirmPassword);
    setValidMatch(match);
  }, [password, confirmPassword]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password, confirmPassword]);

  const navigateToLogin = () => {
    navigate("/login");
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;         
            }
            try {
              const response = await axios.post(REGISTER_URL,
                  JSON.stringify({ email, password }), // what varibales is the backend expecting?
                  {
                      headers: { 'Content-Type': 'application/json' },
                      withCredentials: true
                  }
              );
              console.log(response?.data);
              console.log(response?.accessToken);
              console.log(JSON.stringify(response))
              setSuccess(true);
              //clear state and controlled inputs
              //need value attrib on inputs for this
              setemail('');
              setPassword('');
              setConfirmedPassword('');
          } catch (err) {
              if (!err?.response) {
                  setErrMsg('No Server Response');
              } else {
                  setErrMsg('Registration Failed')
              }
              errRef.current.focus();
          }
          }
          

  return (
    <>
     {success ? (
                navigateToLogin()
            ) : (
    <div className="split-pageS">
      <div className="image-container">
      </div>
      <div className="register-details">
        <div className="form-containerS">
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1>Create an account</h1>
          <form onSubmit={handleRegister}>
          <label htmlFor="FullName">Full name</label>
          <input
            type="text"
            id="FullName"
            autoComplete="off"
            placeholder="Full name"
            value={text}
            onChange={(e) => setname(e.target.value)}
            required
          />
          <label htmlFor="emailAddress">
            Email address
            <span className={validEmail ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validEmail || !email || !emailFocused ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
              </span>
          </label>
          <input
            type="text"
            id="emailAddress"
            ref={userRef}
            autoComplete="off"
            placeholder="Email address"
            onChange={(e) => setemail(e.target.value)}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
          <p id="uidnote" className={emailFocused && email && !validEmail ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
            Must be a valid email.
            </p>

          <label htmlFor="password">
            Password
            <span className={validPassword ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validPassword || !password || !passwordFocused ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
          />
          <p id="pwdnote" className={passwordFocused && !validPassword ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number and a special character.<br />
              Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>
          <label htmlFor="confirmPassword">
            Confirm password
            <span className={validMatch  && confirmPassword ? "valid" : "hide"}>
              <FontAwesomeIcon icon={faCheck} />
            </span>
            <span className={validMatch || !confirmPassword || !matchFocused ? "hide" : "invalid"}>
              <FontAwesomeIcon icon={faTimes} />
              </span>
              </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmedPassword(e.target.value)}
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocused(true)}
            onBlur={() => setMatchFocused(false)}
          />
           <p id="confirmnote" className={matchFocused && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

          <button className="register-button" disabled={!validEmail || !validPassword || !validMatch ? true : false}>Register</button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login"> Log in</a>
          </p>
        </div>
      </div>
    </div>
        )}
            </>
  );
}


export default SignUpPage;
