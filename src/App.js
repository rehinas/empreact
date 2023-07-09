import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/employee-form">Employee Form</Link>
            </li>
          </ul>
        </nav>

        <Routes> {/* Wrap your routes in the Routes component */}
          <Route path="/employee-form" element={<EmployeeForm />} /> {/* Use the element prop */}
          <Route path="/" element={<EmployeeDashboard />} /> {/* Use the element prop */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;






