import  { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
    const route = useNavigate()

    const NavReg = (type: any) => {
        if (type == 1) {
            route('/Events')
        }
        }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    event: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration Submitted Successfully!");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Event Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email ID</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <label>Select Event</label>
            <select
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
            >
              <option value="">Choose an Event</option>
              <option value="Startup Ideas">Startup Ideas</option>
              <option value="Improvement">Improvement</option>
              <option value="Arts Festival">Arts Festival</option>
              <option value="Talent Hunt">Talent Hunt</option>
            </select>
          </div>

          <button type="submit" className="submit-btn" onClick={()=>NavReg(1)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;