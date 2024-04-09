import React from "react";
import Form from "../../components/shared/Form/Form";
import Spinner from "./../../components/shared/Spinner";
import { useSelector } from "react-redux";

const Register = () => {
    const{loading,error}=useSelector((state)=>state.auth)
    return(
        <div className="row g-0">
        <div className="col-md-8 form-banner ">
          <img src="./assets/images/img2.jpg" alt="registerImage" />
        </div>
        <div className="col-md-4 form-container">
          <Form
            formTitle={"Register"}
            submitBtn={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    )
 
}

export default Register;