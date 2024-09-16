import React from 'react'
import { FaAward } from 'react-icons/fa'
import './about.css'

const About = () => {
  return (
    <section id="about"> 
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div> */}
        <div className="about__content">
          
          <p>Here is Souvik, currently serving as an Assistant Programmer (Assistant Director) at Bangladesh Computer Council (BCC) under ICT Division, Ministry of
            Posts, Telecommunications and Information Technology, Government of Bangladesh. Previously I worked in Grameen Bank as a programmer.<br></br>
            I'm currently looking for PhD opportunities. My research interest includes AI, Cybersecurity and HCI. I have expertise in full-stack development and research experience in Cybersecurity. 
            Along with my official tasks, I'm currently exploring the world of Spatial-Temporal Prediction with Large Language Models under supervision of Dr. Tanzima Hashem (Professor, CSE, BUET).
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          <br></br> <br></br>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Publications</h5>
              <br></br>
              
              <small> <ul>
                <li>
                ▪ Md. Olid Hasan Bhuiyan, Souvik Das, Shafayat Hossain Majumder, Suryadipta Majumdar, and Md. Shohrab Hossain, 
                <a href="https://www.scitepress.org/Papers/2024/125094/"> "On Detecting Malicious Code Injection by Monitoring Multi-Level Container Activities"</a>, The 14th International Conference 
                on Cloud Computing and Services Science (CLOSER 2024), Anges, France, 2-4 May, 2024. [An outcome of undergrad research]
                </li>
                <li>
                ▪ MD. Sabbir Hosen Pulok, Anusree Sen, Souvik Das, Farea Farhana Nishita, & MD. Mushfiquzzaman. (2022), 
                  <a href="https://supplychaininsider.org/ojs/index.php/home/article/view/9"> "MODELING SUSTAINABLE CHALLENGES TO WASTE REDUCTION IN THE FOOD INDUSTRY"</a>, Supply Chain Insider | 
                  ISSN: 2617-7420 (Print), 2617-7420 (Online), 7(1). [Extracurricular activity]
                </li>
                </ul>
              </small>
              <br></br>


            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About