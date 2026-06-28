import img1 from './assets/Images/emp.jpg'
import img2 from './assets/Images/Emp1.jpg'
import img3 from './assets/Images/Emp2.jpg'
import img4 from './assets/Images/emp3.jpg'
import  { useState } from "react";
import "./Emprovement.css";
import { useNavigate } from 'react-router-dom';



export default function Emprovement() {
 const route = useNavigate()
     const EmpNav = (type: any) => {
        if (type == 1) {
            route('/Register')
        }
    else if (type==2){
        route('/Events')
    }}
  const images = [img1,img2,img3,img4]
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
    <div className="emp-page-container">
      <div className="emp-card">

        <div className="emp-header">
          <h1>👩‍🎓 Emprovement Ideas</h1>
          <button className="emp-register-btn" onClick={()=>EmpNav(1)}>Register</button>
        </div>

        <div className="emp-divider"></div>

        <div className="emp-gallery">
          <div className="emp-main-image">
            <img src={selectedImage} alt="Main" />
          </div>

          <div className="emp-side-images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        <div className="emp-content">
          <h2>👩‍🎓 Youth and Women Empowerment</h2>
          <hr />

          <p>
            Youth and Women Empowerment is an initiative designed to inspire individuals to discover their strengths, build confidence, and achieve their personal and professional goals. The program focuses on creating opportunities that help participants develop essential skills and become active contributors to society.
          </p>

          <p>
     Through various workshops, seminars, and interactive sessions, participants gain valuable knowledge in areas such as leadership, communication, career development, and financial literacy. These activities are designed to equip youth and women with the tools needed to face challenges and make informed decisions.

The program also encourages innovation, entrepreneurship, and community involvement. Participants are motivated to explore new ideas, develop problem-solving abilities, and take initiative in creating positive changes within their communities. By fostering creativity and leadership, the initiative helps build future leaders.
          </p>

          <p>
            In addition, Youth and Women Empowerment promotes equality, inclusiveness, and self-reliance. It provides a supportive environment where individuals can share experiences, learn from mentors, and grow both personally and professionally. The initiative aims to empower participants to become confident, independent, and successful in their chosen paths
          </p>

          

          <h2>🌟 Overview</h2>
          <hr />

          <p>
            The Youth and Women Empowerment program is a vital part of Unity Feast, dedicated to nurturing talent, strengthening leadership skills, and creating opportunities for growth. By focusing on education, skill development, entrepreneurship, and social awareness, the initiative empowers individuals to realize their full potential and contribute to the progress and development of Tamil Nadu.
          </p>
          
         <div>
           <h3>Eligiblity Criteria</h3>
           <hr />
           <span><h4>Age</h4></span><p>Above 18-25 years </p>
           <p><h4>Gender</h4>Only Female </p>
           <div className='empback'> <h2>Back to Event page</h2><button className="emp-register-btn" onClick={()=>{EmpNav(2)}}>Events</button></div>
           </div>
        </div>

      </div>
    </div>
    </>
  )
}

