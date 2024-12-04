import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


const ServiceCard = ({ title, description, cost, image}) => {
    const role = localStorage.getItem("role");
    const navigate = useNavigate();
    const handleSchedule = () => {    
        if (role === "" || role =="Devotee") {
          navigate("/login");
        } else {
          navigate("/schedule-appointment");
        }
    };
  return (
    <div 
    className="card" 
    style={{
      display: 'flex', 
      flexDirection: 'column', 
      padding: '20px', 
      width: '380px', 
      borderRadius: '15px', 
      border: '2px solid #FF7400', 
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
      backgroundColor: '#fff'
    }}
  >
    <div 
      className="card-image" 
      style={{
        borderRadius: '10px', 
        overflow: 'hidden', 
        marginBottom: '15px'
      }}
    >
      <img 
        src={image} 
        alt="Card Visual" 
        style={{
          width: '100%', 
          height: '160px', 
          objectFit: 'cover'
        }} 
      />
    </div>
    <div 
      className="card-details" 
      style={{
        textAlign: 'left', border: 'none', width: '100%'
      }}
    >
      <h5 
        className="card-heading" 
        style={{
          fontSize: '18px', 
          fontWeight: '700', 
          marginBottom: '10px'
        }}
      >
        {title}
      </h5>
      <p 
        style={{
          fontSize: '14px', 
          color: '#6c757d', 
          marginBottom: '10px'
        }}
      >
        {description}
      </p>
      <p 
        style={{
          fontSize: '14px', 
          color: 'rgb(108, 117, 125)'
        }}
      >
        Cost: {cost}
      </p>
      {(role === "" || role === "Devotee") && (
        <Button 
          onClick={handleSchedule} 
          style={{
            fontSize: '14px', 
            marginTop: '15px', 
            backgroundColor: '#FF7400', 
            color: '#fff', 
            border: 'none', 
            padding: '10px 15px', 
            borderRadius: '5px', 
            cursor: 'pointer'
          }}
        >
          Schedule Appointment
        </Button>
      )}
    </div>
  </div>  
  )
}

export default ServiceCard