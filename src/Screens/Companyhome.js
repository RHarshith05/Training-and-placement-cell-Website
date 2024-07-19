import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const containerStyle = {
  width: "55vw",
  height: "80vh",
  backgroundColor: "white",
  position: "fixed",
  zIndex: "50",
  right: "11rem",
  boxShadow: "1px 2px 5px 0px rgba(81, 80, 80, 0.5)",
  borderRadius: "10px",
  overflowY: "scroll",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  color: "blue",
};

const sectionStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const labelStyle = {
  fontSize: "larger",
  fontWeight: "500",
  fontFamily: "serif",
  marginBottom: "5px",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const rowStyle = {
  display: "flex",
  gap: "20px",
};

const selectStyle = {
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

export default function Companyhome(props) {
  const navigate=useNavigate();
  const [addcomp, setAddcomp] = useState(0);
  const initialCompanydetails = {
    CompanyName: "",
    CTC: "",
    Base: "",
    Jobrole: "",
    EligibleBranches: "",
    EligibleBatches: "",
    CGPA: "",
    PWD: "",
    ActiveBacklogs: "",
    PreviousBacklogs: "",
    NoofIntakes: "",
    NoofInterviewRounds: "",
    Description: "",
    DriveStartDate: "",
    DriveEndDate: "",
    Status: "",
  };
  const [companydetails, addcompanydetails] = useState(initialCompanydetails);
  const handleonchange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const newcompanydetails = { ...companydetails };
    newcompanydetails[name] = value;
    addcompanydetails(newcompanydetails);
  };





  const submitcompanydetails = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:2025/api/insertcompanydetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(companydetails),
        }
      );

      const json = await response.json();
      if (json.success === true) {
        alert(json.message);
        addcompanydetails(initialCompanydetails);
      }
    } catch (error) {
      alert("Failed to add company", error);
    }
  };

  const [companydt, setCompanydt] = useState([]);
  const companydata = async () => {
    try {
      const response = await fetch(
        "http://localhost:2025/api/gettingcompanydetails",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      if (json.success === true) {
        setCompanydt(json.data);
        console.log(json.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const addcompany = () => {
    console.log(addcomp);
    setAddcomp(1);
  };
  const handonchange = async (id, e) => {
    const { value } = e.target;
    console.log(e.target.value)
    setCompanydt(companydt =>
      companydt.map(element => element._id === id ? { ...element, Status: value } : element)


    );
    const data = {
      _id: id,
      Status: value
    }

    try {
      const response = await fetch("http://localhost:2025/api/updatecompanydetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data)
        }
      );

      const json = await response.json();

      if (json.success === true) {
        alert(json.message);

      }
    }
    catch (error) {
      alert("Failed to update status");
    }
  };

  const getcompanyid=(element,e)=>{
    props.setcompanydt(element);
    navigate("/home/tools");
  }

  useEffect(() => {
    companydata();
  }, []);

  return (
    <div>
      <div className="main1">
        {addcomp === 1 ? (
          <div className="ch1" style={containerStyle}>
            <div style={sectionStyle}>
              <p style={labelStyle}>Company Name:</p>
              <input
                name="CompanyName"
                type="text"
                value={companydetails.CompanyName}
                style={inputStyle}
                onChange={handleonchange}
              />
            </div>
            <div className="Salary" style={rowStyle}>
              <div className="ctc" style={sectionStyle}>
                <p style={labelStyle}>CTC :</p>
                <input
                  name="CTC"
                  type="text"
                  value={companydetails.CTC}
                  style={inputStyle}
                  onChange={handleonchange}
                />
              </div>
              <div className="Base" style={sectionStyle}>
                <p style={labelStyle}>Base :</p>
                <input
                  name="Base"
                  type="text"
                  value={companydetails.Base}
                  style={inputStyle}
                  onChange={handleonchange}
                />
              </div>
            </div>
            <div style={sectionStyle}>
              <p style={labelStyle}>Job Role</p>
              <input
                name="Jobrole"
                type="text"
                value={companydetails.Jobrole}
                style={inputStyle}
                onChange={handleonchange}
              />
            </div>
            <div className="Branches" style={rowStyle}>
              <div style={sectionStyle}>
                <p style={labelStyle}>Eligible Branches:</p>
                <input
                  name="EligibleBranches"
                  type="text"
                  value={companydetails.EligibleBranches}
                  style={inputStyle}
                  onChange={handleonchange}
                />
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}>Eligible Batches:</p>
                <input
                  name="EligibleBatches"
                  type="text"
                  value={companydetails.EligibleBatches}
                  style={inputStyle}
                  onChange={handleonchange}
                />
              </div>
            </div>
            <div className="cgpa" style={rowStyle}>
              <div style={sectionStyle}>
                <p style={labelStyle}>CGPA :</p>
                <input
                  name="CGPA"
                  type="text"
                  value={companydetails.CGPA}
                  style={inputStyle}
                  onChange={handleonchange}
                />
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}>PWD :</p>
                <select
                  name="PWD"
                  type="text"
                  value={companydetails.PWD}
                  style={selectStyle}
                  onChange={handleonchange}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}>Active Backlogs :</p>
                <select
                  name="ActiveBacklogs"
                  type="text"
                  value={companydetails.ActiveBacklogs}
                  style={selectStyle}
                  onChange={handleonchange}
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="nointakes" style={rowStyle}>
              <div style={sectionStyle}>
                <p style={labelStyle}>No Of Intakes:</p>
                <input
                  name="NoofIntakes"
                  type="text"
                  value={companydetails.NoofIntakes}
                  style={inputStyle}
                  onChange={handleonchange}
                />
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}>No of Interview Rounds :</p>
                <input
                  name="NoofInterviewRounds"
                  type="text"
                  value={companydetails.NoofInterviewRounds}
                  style={inputStyle}
                  onChange={handleonchange}
                />
              </div>
            </div>
            <div style={rowStyle}>
              <div style={sectionStyle}>
                <p style={labelStyle}>Start Date:</p>
                <input
                  name="DriveStartDate"
                  type="text"
                  value={companydetails.DriveStartDate}
                  style={inputStyle}
                  onChange={handleonchange}
                />
              </div>
              <div style={sectionStyle}>
                <p style={labelStyle}>End Date:</p>
                <input
                  name="DriveEndDate"
                  type="text"
                  value={companydetails.DriveEndDate}
                  style={inputStyle}
                  onChange={handleonchange}
                />
              </div>
            </div>
            <div style={sectionStyle}>
              <p style={labelStyle}>Status</p>
              <select
                name="Status"
                type="text"
                value={companydetails.Status}
                style={selectStyle}
                onChange={handleonchange}
              >
                <option>OnGoing</option>
                <option>Completed</option>
                <option>Scheduled</option>
                <option>Trying</option>
              </select>
            </div>
            <div style={sectionStyle}>
              <p style={labelStyle}>Description:</p>
              <input
                name="Description"
                type="text"
                value={companydetails.Description}
                style={inputStyle}
                onChange={handleonchange}
              />
            </div>
            <button>
              <p onClick={submitcompanydetails} style={labelStyle}>
                Submit{" "}
              </p>
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <div className="tcont">
          <div className="nsacont">
            <h1>Companies</h1>
            <input className="inputsearch"></input>
            <button className="button1" onClick={addcompany}>
              ADD
            </button>
          </div>

          <hr />

          <div className="sscont">
            <div className="sscont1">
              {companydt.map((element, value) => {
                return (
                  <div key={element._id} className="sscont2" onClick={(e)=>{getcompanyid(element)}}>
                    <div className="sscont3">
                      <div>
                        <h2>{element.CompanyName}</h2>
                      </div>
                      <div className="ssimg"></div>
                    </div>
                    <hr></hr>
                    <div className="sscont3">
                      <p className="sspara2">CTC: </p>
                      <p className="sspara3">{element.CTC}</p>
                    </div>
                    <div className="sscont3">
                      <p className="sspara2">Jobrole: </p>
                      <p className="sspara3">{element.Jobrole}</p>
                    </div>
                    <div className="sscont3">
                      <p className="sspara2">EligibleBranches: </p>
                      <p className="sspara3">{element.EligibleBranches}</p>
                    </div>
                    <div style={sectionStyle}>
                      <p style={labelStyle}>Status</p>
                      <select
                        name="Status"
                        value={element.Status}
                        type="text"
                        style={selectStyle}
                        onChange={(e) => { handonchange(element._id, e); }}
                      >
                        <option>OnGoing</option>
                        <option>Completed</option>
                        <option>Scheduled</option>
                        <option>Trying</option>
                      </select>
                    </div>
                    <div className="sscont3">
                      <Link to="">View all</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
