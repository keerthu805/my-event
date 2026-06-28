import  { useState } from "react";
import "./Startup.css";
import img1 from './assets/Images/start.jpg'
import img2 from './assets/Images/start1.jpg'
import img3 from './assets/Images/start2.png'
import img4 from './assets/Images/start3.jpg'
import { useNavigate } from "react-router-dom";
export default function  Startup() {
    const route = useNavigate()
     const StartNav = (type: any) => {
        if (type == 1) {
            route('/Register')
        }
    else if (type == 2) {
            route('/Events')
        }}
  const images = [img1,img2,img3,img4]
    

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <>
    <div className="startup-container">
      <div className="startup-card">
       
        <div className="header">
          <h1>💡 Startup Ideas Program</h1>
          <button className="register-btn" onClick={()=>{StartNav(1)}}>Register</button>
        </div>

       
        <div className="divider"></div>

        <div className="gallery">
          <div className="main-image">
            <img src={selectedImage} alt="Startup Event" />
          </div>

          <div className="side-images">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Startup ${index + 1}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>

     
        <div className="content">
          <h2>💡 Startup Ideas Program</h2>
          <hr />
          <p>
            The Startup Ideas Program is designed to encourage aspiring
            entrepreneurs, students, and innovators to transform their creative
            ideas into practical solutions. It provides a platform for
            participants to present unique business concepts that can address
            real-world challenges and contribute to economic and social
            development.
          </p>

          <p>
            Participants will have the opportunity to showcase their innovative
            thinking across various sectors, including technology, healthcare,
            education, agriculture, sustainability, and digital services. The
            program promotes creativity, problem-solving skills, and the
            development of solutions that can create a positive impact on
            society.
          </p>

          <p>
            Through mentorship sessions, expert guidance, and interactive
            discussions, participants can gain valuable insights into business
            planning, market research, product development, and
            entrepreneurship. Industry professionals and successful
            entrepreneurs will share their experiences and provide constructive
            feedback to help refine promising ideas.
          </p>

          <p>
            The program also aims to build confidence among young innovators by
            encouraging them to think beyond conventional approaches and explore
            new opportunities. By fostering an entrepreneurial mindset, the
            initiative supports the growth of future business leaders and
            innovators who can contribute to Tamil Nadu's development.
          </p>

          <h2>🌟 Program Overview</h2>
          <hr />

          <p>
            The Startup Ideas Program serves as a launchpad for innovation,
            creativity, and entrepreneurship. By bringing together talented
            individuals with visionary ideas, the program creates an
            environment where innovation can thrive. It encourages participants
            to develop sustainable and impactful solutions, helping shape a
            future driven by technology, enterprise, and social progress.
          </p>
          
        <div>
           <h2>Eligiblity Criteria</h2>
           <hr />
           <p><h4>Age</h4></p><p>Above 10 years </p>
           <p><h4>Gender</h4>Both Female and Male</p>
           <div className="startback"> <h2>Back to Event page</h2><button className="register-btn" onClick={()=>{StartNav(2)}}>Events</button></div>
           </div>
        </div>

        </div>
      </div>
    </>
  )
}

