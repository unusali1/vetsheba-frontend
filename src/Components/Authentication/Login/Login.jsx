import { React, useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../../actions/userAction";
import MetaData from "../../../more/Metadata";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
  
	const { error,  isAuthenticated } = useSelector(
	  (state) => state.user
	);
  
	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
  
	const loginSubmit = (e) => {
	  e.preventDefault();
	  dispatch(login(loginEmail, loginPassword));
	};
  
	useEffect(() => {
  
	  if (error) {
		alert("User can not find this email & password");
		dispatch(clearErrors());
	  }
	  if (isAuthenticated) {
		// toast.success("User Login Successfully");
		navigate("/");
	  }
   
  
	}, [dispatch, error,navigate, isAuthenticated]);
  

	return (
		<>
		 <MetaData title="Login" />
		  <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={loginSubmit}>
						<h1>Login to Your Account</h1>
						
						<input
							type="email"
							placeholder="Email"
							name="email"
							value={loginEmail}
							required
							className={styles.input}
							onChange={(e) => setLoginEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={loginPassword}
							required
							className={styles.input}
							onChange={(e) => setLoginPassword(e.target.value)}
						/>
						 <Link to="/password/forgot">Forgot Password ?</Link>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
		
		</>
	);
};

export default Login;
