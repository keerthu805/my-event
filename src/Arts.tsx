import img1 from './assets/Images/arts.jpg'
import img2 from './assets/Images/arts1.jpg'
import img3 from './assets/Images/arts2.jpg'
import img4 from './assets/Images/arts3.jpg'
import { useState } from "react";
import "./Arts.css";
import { useNavigate } from 'react-router-dom';

function Arts() {
  const route = useNavigate()
     const ArtNav = (type: any) => {
        if (type == 1) {
            route('/Register')
        }
     else if (type == 2) {
            route('/Events')
        }}
  const images = [img1,img2,img3,img4]

  const [artSelectedImage, setArtSelectedImage] = useState(images[0]);

  return (
    <div className="art-page">
      <div className="art-card">
        
        {/* First Row */}
        <div className="art-header">
          <h1 className="art-title">Arts Festival</h1>
          <button className="art-register-btn" onClick={()=>{ArtNav(1)}}>Register</button>
        </div>
        <hr />

        {/* Second Row - Image Slider */}
        <div className="art-gallery">
          <div className="art-main-image-container">
            <img
              src={artSelectedImage}
              alt="Arts Festival"
              className="art-main-image"
            />
          </div>

          <div className="art-thumbnail-container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Art ${index + 1}`}
                className="art-thumbnail"
                onClick={() => setArtSelectedImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Third Row - Content */}
        <div className="art-content">
          <h2 className="art-subtitle">🎨 Arts Festival</h2>
           <hr />
          <p >
            The Arts Festival is a vibrant celebration of creativity, culture, and artistic expression. It provides a platform for students and aspiring artists to showcase their talents in various fields such as music, dance, painting, drawing, photography, and crafts. The festival encourages participants to explore their creativity and share their artistic vision with others.
The event brings together talented individuals from diverse backgrounds, creating an environment where art and culture can flourish. Participants have the opportunity to present their work, learn from fellow artists, and gain recognition for their creativity and dedication. This interaction helps foster mutual appreciation and cultural understanding.
          </p>

          <p >
            Through a variety of competitions, exhibitions, and performances, the Arts Festival promotes innovation and originality in artistic endeavors. It encourages participants to think creatively, experiment with new ideas, and develop their skills in a supportive and inspiring atmosphere. The festival serves as a stepping stone for emerging artists to gain confidence and exposure.

In addition to showcasing talent, the Arts Festival plays an important role in preserving and promoting the rich cultural heritage of Tamil Nadu. Traditional and contemporary art forms are celebrated together, helping participants connect with their roots while embracing modern artistic trends. This blend of tradition and innovation makes the festival a unique and enriching experience.

 
          </p>

          <h3>🌟Overview</h3>
         <hr />
          <p >
            The Arts Festival is more than just a competition—it is a celebration of imagination, culture, and self-expression. By bringing together artists, performers, and creative minds, the festival inspires innovation, encourages cultural appreciation, and provides opportunities for personal and artistic growth. It serves as a platform where talent is recognized, creativity is nurtured, and the spirit of art is celebrated
          </p>
           
        </div>
        <div>
           <h3>Eligiblity Criteria</h3>
           <hr />
           <span><h4>Age</h4></span><p>Above 10 years </p>
           <p><h4>Gender</h4>Both Female and Male</p>
           <div className='artback'> <h2>Back to Event page</h2><button className="art-register-btn" onClick={()=>{ArtNav(2)}}>Events</button></div>
           </div>

      </div>
    </div>
  );
}

export default Arts;