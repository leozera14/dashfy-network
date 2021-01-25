import React from 'react';
import { useHistory } from 'react-router-dom'; 
import { FaCodepen ,FaUserAlt, FaPhoneAlt, FaArrowLeft } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import './user-profile-style.css';

export default function UserProfile(props) {
  const user = props.user || [];
  const education = props.user.education || [];
  const experiences = props.user.experiences || [];
  const proficiencies = props.user.proficiencies || [];

  const history = useHistory();

  async function goHome() {
    history.push('/');
  }

  return(
    <div className="wrap-user-info">

      <div className="back-homepage" onClick={() => goHome()}>
          < FaArrowLeft 
          size={20}
          color={'rgb(252,121,71)'}
          />
          <span>Back to Homepage</span>
      </div>

      <div className="user-info-personal">
        <div className="personal-content avatar">
          <a href={user.avatar} target="_blank" rel="noreferrer">
            <img src={user.avatar} alt={user.name}/>
          </a>
        </div>

        <div className="personal-content">
          <FaUserAlt 
          size={14}
          color={'rgb(252,121,71)'}
          />
          <p className="name">{user.name}</p>
        </div>

        <div className="personal-content">
          <FaCodepen
          size={14}
          color={'rgb(252,121,71)'}
          />
          <p>{user.current_position}</p>
        </div>

        <div className="personal-content">
          <HiLocationMarker 
          size={14} 
          color={'rgb(252,121,71)'}
          />
          <p>{user.city} - {user.country}</p>
        </div>

        <div className="personal-content">
          <FaPhoneAlt
          size={14}
          color={'rgb(252,121,71)'}
          />
          <p>{user.phone_number}</p>
        </div>

      </div>

      <div className="user-info-academic">

        <div className="academic-content">
          <h2 className="academic-info-title">Education:</h2>
          { education !== null 
          ? education.map(edu => (
            <>
              <div className="wrap-academic-info">
                <b>School Name: <span>{edu.school_name}</span></b> 
                <b>Course: <span>{edu.course}</span></b> 
                <b>Graduation Year: <span>{edu.graduation_year}</span></b> 
              </div>
              <div className="academic-separator"></div>
            </>
          ))
          : <p></p>
          }
        </div>

        <div className="academic-content">
          <h2 className="academic-info-title">Experiences:</h2>
          { experiences !== null 
          ? experiences.map(exp => (
            <>
              <div className="wrap-academic-info">
                <b>Company <span>{exp.company}</span></b> 
                <b>Description: <span>{exp.description}</span></b> 
                <b>Position: <span>{exp.position}</span></b> 
                <b>Start Date: <span>{exp.start_date}</span></b> 
              </div>
              <div className="academic-separator"></div>
            </>
          ))
          : <p></p>
          }
        </div>

        <div className="academic-content">
          <h2 className="academic-info-title">Proficiencies:</h2>
          { proficiencies !== null 
          ? proficiencies.map(pro => (
            <>
              <div className="wrap-academic-info">
                <b>Proficience: <span>{pro.name}</span></b> 
              </div>
              <div className="academic-separator"></div>
            </>
          ))
          : <p></p>
          }
        </div>

      </div>

    </div>
  )
}