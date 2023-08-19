import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
// import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../../actions/userAction";
import MetaData from "../../../more/Metadata";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
	const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const handleChange = (name) => (e) => {
    const value = name === "avatar" ? e.target.files[0] : e.target.value;
    setUser({ ...user, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("name", user.name);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("avatar", user.avatar);

      dispatch(register(formData));
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

    if (error) {
      alert("User Email Already Registered");
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      toast.success("User Registration Successfully");
      navigate("/");
    }
  }, [dispatch, error,navigate, isAuthenticated]);

	return (
		<>
		 <MetaData title="Signup" />
		 <div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sing in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="Enter Your Name"
							name="name"
							value={user.name}
							required
							className={styles.input}
							onChange={handleChange("name")}
						/>

						<input
							type="email"
							placeholder="Enter Your Email"
							name="email"
							value={user.email}
							required
							className={styles.input}
							onChange={handleChange("email")}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={user.password}
							required
							className={styles.input}
							onChange={handleChange("password")}
						/>
						<input
							className={styles.input}
							type="file"
							accept="image/*"
							name="avatar"
							onChange={handleChange("avatar")}
							required
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						
						<button type="submit" className={styles.green_btn}>
							Sing Up
						</button>
					</form>
				</div>
			</div>
		</div>
		</>
	);
};

export default Signup;
