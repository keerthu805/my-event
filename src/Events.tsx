import  { useState } from "react";
import "./Events.css";
import img1 from './assets/Images/talent.jpg';
import img2 from './assets/Images/emp.jpg';
import img3 from './assets/Images/arts.jpg';
import img4 from './assets/Images/start.jpg'
import { useNavigate } from "react-router-dom";

function Events() {
    const route = useNavigate()
     const NavEvents = (type: any) => {
        if (type == 1) {
            route('/TalentHunt')
        }
        else if (type == 2) {
            route('/Emprovement')
        }
        else if (type == 3) {
            route('/Arts')
        }
        else if (type == 4) {
            route('/Startup')
        }
     else if (type == 5) {
            route('/Register')
        }
    else if (type == 6) {
            route('/Mainpage')
    }}
  const images = [img1,img2,img3,img4];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="events-container">
      {/* First Row */}
      <div className="header">
        <h1>Unity Feast 2026</h1>

        <div className="header-buttons">
          <button className="register-btn" onClick={()=>NavEvents(5)}>Register</button>
          <button className="logout-btn" onClick={()=>NavEvents(6)}>Logout</button>
        </div>
      </div>

      {/* Second Row */}
      <div className="event-buttons">
        <button onClick={()=>NavEvents(1)}>Talent Hunt</button>
        <button onClick={()=>NavEvents(2)}>Empowerment</button>
        <button onClick={()=>NavEvents(3)}>Arts Festival</button>
        <button onClick={()=>NavEvents(4)}>Startup Ideas</button>
      </div>

      {/* Third Row - Image Slider */}
      <div className="gallery">
        <div className="main-image">
          <img src={selectedImage} alt="Main Event" />
        </div>

        <div className="side-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Event ${index}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Fourth Row */}
      <div className="content-section">
        <h2>🎤 Talent Hunt</h2>
        <p>
          The Talent Hunt program provides a dynamic stage for individuals to
          showcase their unique abilities and creative talents. Participants
          from various backgrounds can demonstrate their skills in areas such as
          music, dance, public speaking, and other performing arts.
        </p>

        <h2>👩‍🎓 Youth & Women Empowerment</h2>
        <p>
          Youth and Women Empowerment focuses on creating opportunities for
          personal growth, leadership development, and skill enhancement through
          workshops, interactive sessions, and awareness programs.
        </p>

        <h2>🎨 Arts Festival</h2>
        <p>
          The Arts Festival celebrates the rich cultural heritage and artistic
          diversity of Tamil Nadu through music, dance, painting, crafts, and
          other creative art forms.
        </p>

        <h2>💡 Startup Ideas</h2>
        <p>
          The Startup Ideas program encourages aspiring entrepreneurs to present
          innovative solutions, receive expert guidance, and explore growth
          opportunities.
        </p>

        <h2>🌟 Event Overview</h2>
        <p>
          Unity Feast 2026 is a flagship initiative by the Tamil Nadu
          Government that brings together talent, creativity, innovation, and
          empowerment under one platform. Through Talent Hunt, Youth & Women
          Empowerment, Arts Festival, and Startup Ideas, the event aims to
          inspire individuals, nurture leadership, celebrate cultural
          excellence, and encourage entrepreneurial thinking.
        </p>
      </div>

      {/* Fifth Row */}
      <div className="contact-section">
        <h2>Contact Details</h2>

        <p>
          <strong>Phone:</strong> 044 1234324589
        </p>

        <p>
          <strong>Address:</strong> Tamil Nadu Event Management Office,
          Building No 4, 2nd Street, Anna Salai, Chennai - 02
        </p>
      </div>
    </div>
  );
}

export default Events;