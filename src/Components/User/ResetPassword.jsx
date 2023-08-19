import React, { Fragment, useState, useEffect } from "react";
import "./ResetPassword.css";
import Loading from "../../more/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, resetPassword } from "../../actions/userAction";
import MetaData from "../../more/Metadata";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
  
    const { error, success, loading } = useSelector(
      (state) => state.forgotPassword
    );
  
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  

    const {token} =useParams();
    const resetPasswordSubmit = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("password", password);
      myForm.set("confirmPassword", confirmPassword);
  
      dispatch(resetPassword(token, myForm));
    };
  
    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch(clearErrors());
      }
  
      if (success) {
        toast.success("Password Updated Successfully");
  
        navigate("/login");
      }
    }, [dispatch, error, navigate, success]);
  
    return (
      <Fragment>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <MetaData title="Change Password" />
            <div className="resetPasswordContainer">
              <div className="resetPasswordBox">
                <h2 className="resetPasswordHeading">Update Profile</h2>
  
                <form
                  className="resetPasswordForm"
                  onSubmit={resetPasswordSubmit}
                >
                  <div>
                    <LockOpenIcon />
                    <input
                      type="password"
                      placeholder="New Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="loginPassword">
                    <LockIcon />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <input
                    type="submit"
                    value="Update"
                    className="resetPasswordBtn"
                  />
                </form>
              </div>
            </div>
          </Fragment>
        )}
        <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      </Fragment>
    );
  };
  
  export default ResetPassword;