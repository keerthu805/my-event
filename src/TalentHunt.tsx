import img1 from './assets/Images/talent.jpg'
import img2 from './assets/Images/Talent1.jpg'
import img3 from './assets/Images/Talent2.jpg'
import img4 from './assets/Images/T3.jpg'
import { useState } from "react";
import "./Talenthunt.css";
import { useNavigate } from 'react-router-dom';

const Talenthunt = () => {
  const route = useNavigate()
     const talentNav = (type: any) => {
        if (type == 1) {
            route('/Register')
        }
    else if (type==2){
        route('/Events')
    }}
  const images = [img1,img2,img3,img4]

  const [talentCurrentImage, setTalentCurrentImage] = useState(images[0]);

  return (
    <>
    <div className="talent-container">
      <div className="talent-card">
        
        <div className="talent-header">
          <h1 className="talent-title">🎭Talent Hunt</h1>
          <button className="talent-register-btn" onClick={()=>talentNav(1)}>Register</button>
        </div>
        <hr />
       
        <div className="talent-slider-section">
          <div className="talent-big-image-container">
            <img
              src={talentCurrentImage}
              alt="Talent Hunt"
              className="talent-big-image"
            />
          </div>

          <div className="talent-small-images">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Talent ${index + 1}`}
                className="talent-small-image"
                onClick={() => setTalentCurrentImage(img)}
              />
            ))}
          </div>
        </div>

       
        <div className="talent-content">
          
        <h3>💃 Dancing</h3>
        <hr />
          <p className="talent-text">
            The Dancing competition provides participants with an opportunity to showcase their rhythm, creativity, and passion for dance. Individuals and groups can perform various dance forms, including folk, classical, contemporary, and freestyle styles. The event encourages artistic expression, confidence, and appreciation for the rich cultural heritage of Tamil Nadu.
            
          </p>
  <h3>🎭 Mono Acting</h3>
  <hr />
          <p className="talent-text">
            Mono Acting allows participants to demonstrate their acting skills through a solo performance. Contestants portray different characters, emotions, and situations using their voice, expressions, and body language. This event helps participants improve their communication abilities, creativity, and stage presence while entertaining the audience with compelling performances.
          </p>
        <h3>🎤 Singing</h3>
  <hr />
          <p className="talent-text">
            The Singing competition offers a platform for talented vocalists to showcase their musical abilities. Participants can perform songs from various genres, including classical, folk, devotional, and contemporary music. The event promotes confidence, musical excellence, and appreciation for the art of singing while providing a memorable experience for performers and audiences alike.
          </p>
<h3>🎬 Drama</h3>
  <hr />
          <p className="talent-text">
            Talent Hunt aims to discover emerging talents, encourage creativity,
            and provide recognition for individuals who excel in their chosen
            field.
          </p>
          <h3>🌟 Talent Hunt Overview</h3>
  <hr />
  <p>The Talent Hunt program is designed to discover and celebrate the diverse talents of young individuals. Through Dancing, Mono Acting, Singing, and Drama, participants are given a platform to express their creativity, build confidence, and showcase their skills before a wider audience. The event not only recognizes outstanding talent but also encourages personal growth, cultural appreciation, and artistic excellence, making it one of the highlights of Unity Feast 2026.</p>
           <div>
           <h3>Eligiblity Criteria</h3>
           <hr />
           <span><h4>Age</h4></span><p>Above 15 years </p>
           <p><h4>Gender</h4>Both Female and Male</p>
           <div className='talentback'> <h2>Back to Event page</h2><button className="emp-register-btn" onClick={()=>{talentNav(2)}}>Events</button></div>
       
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Talenthunt;