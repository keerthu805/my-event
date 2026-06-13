
import { useNavigate } from "react-router-dom";
import "./Mainpage.css";

export default function Mainpage() {
     const navigate = useNavigate()
    const MainNav = (type: any) => {
        if (type == 1) {
            navigate('/Signin')
        }}
  return (
    
    <div className="main-container">
      <div className="card">
        <h1 className="title">
          Unity Feast 2026 – Celebrating Talent, Innovation, and Empowerment
        </h1>

        <p className="subtitle">
          A grand platform organized by the Tamil Nadu Government to inspire
          creativity, recognize talent, empower youth and women, and promote
          innovative startup ideas.
        </p>

        <div className="events">
          <div className="event">
            <h3>🎤 Talent Hunt</h3>
            <p>
              Showcase your unique skills and compete with talented
              participants from across the state.
            </p>
          </div>

          <div className="event">
            <h3>👩‍🎓 Youth & Women Empowerment</h3>
            <p>
              Encouraging leadership, skill development, and opportunities for
              a brighter future.
            </p>
          </div>

          <div className="event">
            <h3>🎨 Arts Festival</h3>
            <p>
              A celebration of culture, creativity, music, dance, painting, and
              artistic excellence.
            </p>
          </div>

          <div className="event">
            <h3>💡 Startup Ideas</h3>
            <p>
              Present innovative business concepts and transform ideas into
              impactful ventures.
            </p>
          </div>
        </div>

        <p className="closing-line">
          "United in Diversity, Empowered Through Opportunity, Inspired for
          Tomorrow."
        </p>
        <h3>For further details click down</h3>
        <button className="login-btn" onClick={()=>MainNav(1)}>Signin</button>
      </div>
    </div>
  )
}


  
