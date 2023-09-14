import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import stateCity from "../Common/StateList";
import { RegExNum, RegExAlfa, RegExMail } from "../Common/RegEx";
import { ErrorAlfa, ErrorNum, ErrorMail, ErrorCom } from "../Common/ErrorMsg";
import { objList } from "../Common/ObjectList";

const Form = () => {
  const navigate = useNavigate();
  const navigateSform = () => {
    navigate("/Sform");
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage1, setErrorMessage1] = useState("");
  const [errorMessage2, setErrorMessage2] = useState("");
  const [errorMessage3, setErrorMessage3] = useState("");
  const [errorMessage4, setErrorMessage4] = useState("");
  const [errorMessage5, setErrorMessage5] = useState("");
  const [value, setValue] = useState(objList);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    if (name === "state") {
      setValue((prevValue) => ({
        ...prevValue,
        city: "",
      }));
    }
  };

  const handleInputChangeFname = (e) => {
    const inputValue = e.target.value;
    const isAlphabetic = RegExAlfa.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Fname: inputValue,
    }));
    if (isAlphabetic) {
      setErrorMessage(ErrorCom);
    } else {
      setErrorMessage(ErrorAlfa);
    }
  };

  const handleInputChangeMname = (e) => {
    const inputValue = e.target.value;
    const isAlphabetic = RegExAlfa.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Mname: inputValue,
    }));
    if (isAlphabetic) {
      setErrorMessage1(ErrorCom);
    } else {
      setErrorMessage1(ErrorAlfa);
    }
  };

  const handleInputChangeLname = (e) => {
    const inputValue = e.target.value;
    const isAlphabetic = RegExAlfa.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Lname: inputValue,
    }));
    if (isAlphabetic) {
      setErrorMessage2(ErrorCom);
    } else {
      setErrorMessage2(ErrorAlfa);
    }
  };

  const handleInputChangeMono = (e) => {
    const inputValue = e.target.value;
    const isNumber = RegExNum.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Mono: inputValue,
    }));
    if (isNumber) {
      setErrorMessage3(ErrorCom);
    } else {
      setErrorMessage3(ErrorNum);
    }
  };

  const handleInputChangeEmail = (e) => {
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
    const inputValue = e.target.value;
    const isMail = RegExMail.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      Eid: inputValue,
    }));
    if (isMail) {
      setErrorMessage4(ErrorCom);
    } else {
      setErrorMessage4(ErrorMail);
    }
  };

  const handleInputChangePIN = (e) => {
    const inputValue = e.target.value;
    const isNumber = RegExNum.test(inputValue);
    setValue((prevValue) => ({
      ...prevValue,
      pin: inputValue,
    }));
    if (isNumber) {
      setErrorMessage5(ErrorCom);
    } else {
      setErrorMessage5(ErrorNum);
    }
    const { name, value } = e.target;
    setValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      value.Fname === "" ||
      value.Mname === "" ||
      value.Lname === "" ||
      value.date === ""
    ) {
      alert("Please Enter Information");
    } else {
      const newFormData = { ...value, id: uuid() };
      const existingData = JSON.parse(localStorage.getItem("formData")) || [];
      const updatedData = [...existingData, newFormData];
      localStorage.setItem("formData", JSON.stringify(updatedData));
      // console.log("newFormData", newFormData);
      // console.log("existingData", existingData);
      // console.log("updated data", updatedData);
      setValue(objList);
    }
  };

  return (
    <>
      <div className="form">
        <h2>Client Inteck Form</h2>
        <b style={{ color: "red" }}>* Mendatory to Fill.</b>
        <div className="form-data">
          <form>
            <h4>Personal Information</h4>
            <label className="label">
              First Name:<b style={{ color: "red" }}>*</b> <br />
              <input
                type="text"
                name="Fname"
                value={value.Fname}
                onChange={handleInputChangeFname}
                placeholder="Your Name"
                required
                maxLength="15"
              />
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
              <br />
              Middle Name :
              <input
                type="text"
                name="Mname"
                value={value.Mname}
                onChange={handleInputChangeMname}
                placeholder="Father's Name"
                required
                maxLength="15"
              />
              {errorMessage1 && <p style={{ color: "red" }}>{errorMessage1}</p>}
              <br />
              Last Name :
              <input
                type="text"
                name="Lname"
                value={value.Lname}
                onChange={handleInputChangeLname}
                placeholder="SurName"
                required
                maxLength="15"
              />
              {errorMessage2 && <p style={{ color: "red" }}>{errorMessage2}</p>}
              <br />
              Date Of Birth:<b style={{ color: "red" }}>*</b>
              <input
                type="date"
                dateFormat="dd/MM/yyyy"
                name="date"
                value={value.date}
                onChange={handleInputChange}
                placeholder="Birth Date"
              />
              <br />
              Gender:<b style={{ color: "red" }}>*</b>
              <div className="gender-btn">
                <input
                  className="gender-btn-m"
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={value.gender === "Male"}
                  onChange={handleInputChange}
                />{" "}
                Male
                <input
                  className="gender-btn-f"
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={value.gender === "Female"}
                  onChange={handleInputChange}
                />{" "}
                Female
                <input
                  className="gender-btn-o"
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={value.gender === "Other"}
                  onChange={handleInputChange}
                />{" "}
                Other
              </div>
            </label>
          </form>
          <div>
            <h4>Digital Information</h4>
            <label className="label">
              Mobile No:<b style={{ color: "red" }}>*</b>
              <input
                type="text"
                name="Mono"
                value={value.Mono}
                onChange={handleInputChangeMono}
                placeholder="Mobile No"
                required
                maxLength="10"
              />
              {errorMessage3 && <p style={{ color: "red" }}>{errorMessage3}</p>}
              <br />
              Email Id :
              <input
                type="text"
                name="Eid"
                value={value.Eid}
                onChange={handleInputChangeEmail}
                placeholder="abcd@email.com"
              />
              {errorMessage4 && <p style={{ color: "red" }}>{errorMessage4}</p>}
            </label>
          </div>
          <div>
            <h4>Contact Information</h4>
            <label className="label">
              Address:<b style={{ color: "red" }}>*</b>
              <input
                type="text"
                name="Add"
                value={value.Add}
                onChange={handleInputChange}
                placeholder="Address"
              />
              <br />
              <br />
              State :
              <br />
              <div>
                <select
                  className="dropdown"
                  name="state"
                  value={value.state}
                  onChange={handleInputChange}
                >
                  <option>Select State</option>
                  {Object.keys(stateCity).map((state) => (
                    <option>{state}</option>
                  ))}
                </select>
              </div>
              <br />
              <br />
              City :
              <br />
              <div>
                <select
                  className="dropdown"
                  name="city"
                  value={value.city}
                  onChange={handleInputChange}
                >
                  <option>Select City</option>
                  {value.state &&
                    stateCity[value.state].map((city) => (
                      <option>{city}</option>
                    ))}
                </select>
              </div>
              <br />
              <br />
              Pin Code:<b style={{ color: "red" }}>*</b>
              <input
                type="text"
                name="pin"
                value={value.pin}
                onChange={handleInputChangePIN}
                placeholder="Pin Code"
                required
                maxLength="6"
              />
              {errorMessage5 && <p style={{ color: "red" }}>{errorMessage5}</p>}
            </label>
          </div>
        </div>
        <div>
          <button type="button" className="btn" onClick={handleSubmit}>
            Submit
          </button>
          <button
            type="button"
            className="navigate-btn"
            onClick={navigateSform}
          >
            Registered UserList
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
