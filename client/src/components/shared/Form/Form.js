import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";
import './Form.css'; // Import custom styles

const Form = ({ formType, submitBtn, formTitle }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("donor");
    const [name, setName] = useState("");
    const [organisationName, setOrganisationName] = useState("");
    const [hospitalName, setHospitalName] = useState("");
    const [website, setWebsite] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <div className="form-wrapper">
            <form onSubmit={(e) => {
                if (formType === "login") {
                    return handleLogin(e, email, password, role);
                } else if (formType === "register") {
                    return handleRegister(
                        e,
                        name,
                        role,
                        email,
                        password,
                        phone,
                        organisationName,
                        address,
                        hospitalName,
                        website
                    );
                }
            }}>
                <h1 className="form-title">{formTitle}</h1>
                <hr />
                <div className="role-selection">
                    {["donor", "admin", "hospital", "organisation"].map((roleOption) => (
                        <div className="form-check" key={roleOption}>
                            <input
                                type="radio"
                                className="form-check-input"
                                name="role"
                                id={`${roleOption}Radio`}
                                value={roleOption}
                                onChange={(e) => setRole(e.target.value)}
                                defaultChecked={roleOption === "donor"}
                            />
                            <label htmlFor={`${roleOption}Radio`} className="form-check-label">
                                {roleOption.charAt(0).toUpperCase() + roleOption.slice(1)}
                            </label>
                        </div>
                    ))}
                </div>

                {(() => {
                    switch (true) {
                        case formType === "login":
                            return (
                                <>
                                    <InputType
                                        labelText={"Email"}
                                        labelFor={"forEmail"}
                                        inputType={"email"}
                                        name={"email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Password"}
                                        labelFor={"forPassword"}
                                        inputType={"password"}
                                        name={"password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </>
                            );
                        case formType === "register":
                            return (
                                <>
                                    {(role === "admin" || role === "donor") && (
                                        <InputType
                                            labelText={"Name"}
                                            labelFor={"forName"}
                                            inputType={"text"}
                                            name={"name"}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    )}
                                    {role === "organisation" && (
                                        <InputType
                                            labelText={"Organisation Name"}
                                            labelFor={"fororganisationName"}
                                            inputType={"text"}
                                            name={"organisationName"}
                                            value={organisationName}
                                            onChange={(e) => setOrganisationName(e.target.value)}
                                        />
                                    )}
                                    {role === "hospital" && (
                                        <InputType
                                            labelText={"Hospital Name"}
                                            labelFor={"forHospitalName"}
                                            inputType={"text"}
                                            name={"hospitalName"}
                                            value={hospitalName}
                                            onChange={(e) => setHospitalName(e.target.value)}
                                        />
                                    )}
                                    <InputType
                                        labelText={"Email"}
                                        labelFor={"forEmail"}
                                        inputType={"email"}
                                        name={"email"}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Password"}
                                        labelFor={"forPassword"}
                                        inputType={"password"}
                                        name={"password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Website"}
                                        labelFor={"forWebsite"}
                                        inputType={"text"}
                                        name={"website"}
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Address"}
                                        labelFor={"forAddress"}
                                        inputType={"text"}
                                        name={"address"}
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <InputType
                                        labelText={"Phone"}
                                        labelFor={"forPhone"}
                                        inputType={"text"}
                                        name={"phone"}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </>
                            );
                    }
                })()}

                <div className="form-footer">
                    {formType === "login" ? (
                        <p>
                            Not registered yet? Register
                            <Link to="/register"> Here!</Link>
                        </p>
                    ) : (
                        <p>
                            Already a user?
                            <Link to="/login"> Login </Link>
                        </p>
                    )}
                    <button className="submit-btn" type="submit">
                        {submitBtn}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
