import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateEmployeeComponent = () => {
  const { id } = useParams();
  const navigator = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesignation] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneNo] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/employee/${id}`)
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setAge(data.age);
        setSalary(data.salary);
        setDesignation(data.designation);
        setEmail(data.email);
        setPhoneNo(data.phone_no);
      });
  }, [id]);

  const updateEmployee = async (e) => {
    e.preventDefault();

    const updatedEmployee = {
      name,
      age,
      salary,
      designation,
      email,
      phone_no
    };

    await fetch(`http://localhost:8080/employee/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedEmployee)
    });

    navigator('/');
  };

return (
  <div className="update-container">
    <div className="update-card">
      <h2 className="update-title">Update Employee</h2>

      <form onSubmit={updateEmployee}>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            placeholder="Enter Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Designation</label>
          <input
            type="text"
            placeholder="Enter Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone_no}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>

        <button type="submit" className="update-btn">
          Update
        </button>

      </form>
    </div>
  </div>
);

};

 export default UpdateEmployeeComponent;