import { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";


export default function Signup() {

    const navigate = useNavigate()

    const SignNav = (type: any) => {
        if (type == 1) {
            navigate('/Signin')
        }}
        const [formData, setFormData] = useState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        });

        const handleChange = (e: { target: { name: any; value: any; }; }) => {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        };

        const handleSubmit = (e:any) => {
            e.preventDefault();

            if (formData.password !== formData.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            alert("Signup Successful!");
            console.log(formData);
        }

        return (
            <>
                <div className="signup-container">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <h2>Create your own account</h2>
                     <h5>First Name:</h5>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
          required
                             />
                     <h5>Last Name:</h5>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
          required
                           
                        />
                    <h5>Emaild ID:</h5>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email ID"
                            value={formData.email}
                            onChange={handleChange}
          required/>
                            
                    <h5>Password:</h5>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                         onChange={handleChange}
          required   
                        />
                    <h5>Confirm the Password:</h5>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
          required
                        />

                        <button type="submit" onClick={() => SignNav(1)}>Submit</button>
                    </form>
                </div>
            </>
        )
    }


  