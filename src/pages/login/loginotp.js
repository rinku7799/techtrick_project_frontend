import React, { useState, useRef, useContext } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { signInWithCredential, PhoneAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { Spinner } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";
import loginImage from "../../assets/login.avif";
import "./login.css";

const LoginOtp = () => {
  const { setUserData } = useContext(UserContext);
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const refs = useRef([]);
  const { selectedType } = useParams();

  console.log("selectedType",selectedType);
  
  const navigate = useNavigate();
  const location = useLocation();

  const mobileNumber = location.state?.mobileNumber;
  const verificationId = location.state?.verificationId;
  const userData = location.state?.userData.user;
  const redirect_url = location.state?.userData.redirect_url;
  console.log("userData====",userData);
  

  if (!verificationId) {
    console.error("Verification ID is missing");
    alert("Error: Missing verification ID. Please try again.");
    return null;
  }

  const handleOtpInputChange = (index, value) => {
    // Ensure only one character is allowed
    const newValue = value.slice(0, 1);
    const newOtpInputs = [...otpInputs];
    newOtpInputs[index] = newValue;
    setOtpInputs(newOtpInputs);

    // Move to next input field if there is a value
    if (newValue && index < refs.current.length - 1) {
      refs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (!/^\d$/.test(e.key) && e.key !== "Backspace" && e.key !== "Enter") {
      e.preventDefault();
    }
    
    if (e.key === "Backspace" && index > 0 && !otpInputs[index]) {
      refs.current[index - 1].focus();
    }
    if (e.key === "Enter") {
      e.preventDefault(); 
      handleVerifyOtp();   
    }
  };
  

  const handleVerifyOtp = async () => {
    setIsLoading(true);
    try {
      const otp = otpInputs.join("");
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);
  
      setUserData(userData);
      toast.success("Login successful!");

      if (selectedType === "vendor") {
        window.location.href = redirect_url;
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Error verifying OTP. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="container mt-2 mb-5">
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-4">
          <div className="shadow p-4 mt-5" style={{ borderRadius: "15px" }}>
            <div style={{ lineHeight: "50px" }}>
              <p className="mb-3 h2">OTP Verification</p>
              <span>An OTP has been sent to this number</span>
              <h5 className="fw-bolder">+91 {mobileNumber}</h5>
              <div className="d-flex justify-content-between mt-4 gap-2">
                {otpInputs.map((value, index) => (
                  <input
                    key={index}
                    ref={(el) => (refs.current[index] = el)}
                    type="text"
                    value={value}
                    onChange={(e) =>
                      handleOtpInputChange(index, e.target.value)
                    }
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className="otp-input"
                    style={{
                      width: "100%",
                      height: "50px",
                      fontSize: "24px",
                      textAlign: "center",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                    maxLength={1}
                  />
                ))}
              </div>
              <button
                type="submit"
                className="primary-bg-color text-light w-100 mt-5 rounded-4 border-0 p-0 d-flex align-items-center justify-content-center"
                onClick={handleVerifyOtp}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Spinner
                     as="span"
                     animation="border"
                     size="sm"
                     role="status"
                     aria-hidden="true"
                      className="me-2"
                    />
                    Verifying...
                  </>
                ) : (
                  "Verify OTP"
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-8 d-flex justify-content-center align-items-center">
          <img
            src={loginImage}
            alt="Login"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginOtp;
