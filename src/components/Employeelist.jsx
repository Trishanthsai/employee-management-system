import React, { useEffect, useState } from 'react';
import { getEmployees } from '../Services/Employeeservice';
import { useNavigate } from 'react-router-dom';

const Employeelist = () => {
  const [employee, setEmployee] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getEmployees().then((response) => {
      setEmployee(response.data);
    });
  }, []);

  function addnewemployee() {
    navigator('/add-employee');
  }
  

  const deleteEmployee = async (id) => {
    console.log("Deleting:", id);

    try {
      const response = await fetch(`http://localhost:8080/employee/${id}`, {
        method: "DELETE"
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setEmployee(prev => prev.filter(emp => emp.id !== id));

    } catch (error) {
      console.error("Error:", error);
    }
  };


  return (
    <div className="employee-list-container">
  <h2 className="employee-list-title">List of Employees</h2>

  <button className="add-btn" onClick={addnewemployee}>
    Add Employee
  </button>

  <table className="employee-table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Salary</th>
        <th>Designation</th>
        <th>Email</th>
        <th>Phone No</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody>
      {employee.map(emp => (
        <tr key={emp.id}>
          <td>{emp.id}</td>
          <td>{emp.name}</td>
          <td>{emp.age}</td>
          <td>{emp.salary}</td>
          <td>{emp.designation}</td>
          <td>{emp.email}</td>
          <td>{emp.phone_no}</td>
          <td>
            <div className="action-buttons">
              <button
                className="delete-btn"
                onClick={() => deleteEmployee(emp.id)}
              >
                Delete
              </button>

              <button
                className="update-btn"
                onClick={() => updateEmployee(emp.id)}
              >
                Update
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
};

export default Employeelist;