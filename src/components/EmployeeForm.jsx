import React, { useState } from 'react';

function EmployeeForm() {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [location, setLocation] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Designation:', designation);
    console.log('Location:', location);
    console.log('Salary:', salary);
  };

  return (
    <div>
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <label>Designation:</label>
          <input type="text" value={designation} onChange={e => setDesignation(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={e => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Salary:</label>
          <input type="text" value={salary} onChange={e => setSalary(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
