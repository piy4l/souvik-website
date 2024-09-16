import React from 'react'
import { BsCheck2 } from 'react-icons/bs'
import './services.css'

const Services = () => {
  return (
    <section id='services'> 
      <h5>What I've done so far</h5>
      <h2>Qualifications</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Education</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>B.Sc. in Computer Science and Engineering from
              Bangladesh University of Engineering and Technology (BUET) [2018-2023]<br></br>
                - CGPA: 3.85 out of 4.00<br></br>
                - Graduated with Magna Cum Laude<br></br>
                - Received Dean’s Award for academic excellence<br></br>
              </p>   
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Higher Secondary School Certificate (HSC) from
              Govt. Ananda Mohan College [2017]<br></br>
                - GPA: 5.00 out of 5.00<br></br>
              </p>   
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Secondary School Certificate (SSC) <br></br>from
              Mymensingh Zilla School [2015]<br></br>
                - GPA: 5.00 out of 5.00<br></br>
                - Board Talentpool Scholarship<br></br>
              </p>   
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Research Interest</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Artificial Intelligence</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Cybersecurity</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Human-Computer Interaction</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Work Experience</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Assistant Programmer (Assistant Director) at Bangladesh Computer Council (BCC) [June 2024 - Present]</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Programmer (Contractual) <br></br>at Grameen Bank <br></br>[June 2023 - June 2024]</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services