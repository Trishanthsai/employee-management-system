import React, { useState } from 'react';

export const Employeecomponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesgination] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setPhoneno] = useState("");

  const resetForm = () => {
    setName("");
    setAge("");
    setSalary("");
    setDesgination("");
    setEmail("");
    setPhoneno("");
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const employeeData = {
  name,
  age: Number(age),
  salary: Number(salary),
  designation,
  email,
  phone_no
};

    try {
      const response = await fetch("http://localhost:8080/employee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeData)
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      const data = await response.text();
      console.log("Success:", data);

      resetForm();

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
   <div className="employee-form-container">
  <div className="employee-form-card">
    <h2 className="employee-form-title">Employee Registeration form</h2>

    <form onSubmit={submitForm}>

      <div className="employee-input-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="employee-input-group">
        <label>Age</label>
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>

      <div className="employee-input-group">
        <label>Salary</label>
        <input
          type="number"
          placeholder="Enter your salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>

      <div className="employee-input-group">
        <label>Designation</label>
        <input
          type="text"
          placeholder="Enter your designation"
          value={designation}
          onChange={(e) => setDesgination(e.target.value)}
        />
      </div>

      <div className="employee-input-group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="employee-input-group">
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Enter your phone"
          value={phone_no}
          onChange={(e) => setPhoneno(e.target.value)}
        />
      </div>

      <div className="employee-btn-group">
        <button type="submit" className="employee-submit-btn">
          Submit
        </button>

        <button type="button" className="employee-reset-btn" onClick={resetForm}>
          Reset
        </button>
      </div>

    </form>
  </div>
</div>
  );
};