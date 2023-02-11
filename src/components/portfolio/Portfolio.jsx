import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'
import IMG8 from '../../assets/portfolio8.jpg'
import IMG9 from '../../assets/portfolio9.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'University Management System',
    github: 'https://github.com/piy4l/UMS-with-Kubernetes-Cassandra',
    demo: 'https://www.youtube.com/watch?v=HZn0SWXBn74'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Moodle',
    github: 'https://github.com/piy4l/Moodle',
    demo: 'https://www.youtube.com/watch?v=Rg363m0rTUs&list=PLFlOs6fceUIz37uFDMrmQECdMqZQpI1VI&index=2'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Avengers Endgame (Minigame)',
    github: 'https://github.com/piy4l/Project-on-iGraphics-Avengers-EndGame',
    demo: 'https://www.youtube.com/watch?v=hcrxWHsU55U'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Battlefield Warriors (Minigame)',
    github: 'https://github.com/piy4l/JavaFX-Project-Battlefield-Warriors',
    demo: 'https://www.youtube.com/watch?v=hswpSLgxPg8'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Handwriting Recognition',
    github: 'https://github.com/piy4l/ML-Project-Handwriting-Recognition',
    demo: '#'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Automatic Flood Detection System',
    github: 'https://github.com/piy4l/Flood-Detection-using-Arduino',
    demo: 'https://www.youtube.com/watch?v=h7YejDEtIQk'
  },
  {
    id: 7,
    image: IMG7,
    title: 'Smart Entrance & Automated Hand Sanitizer',
    github: 'https://github.com/piy4l/Smart-Entrance',
    demo: 'https://www.youtube.com/watch?v=UUf9VUp86s4&list=PLFlOs6fceUIz37uFDMrmQECdMqZQpI1VI&index=3'
  },
  {
    id: 8,
    image: IMG8,
    title: 'Paper on Supply Chain',
    github: 'https://github.com/piy4l/Paper-on-Supply-Chain',
    demo: 'https://supplychaininsider.org/ojs/index.php/home/article/view/9'
  },
  {
    id: 9,
    image: IMG9,
    title: 'Thesis on Intrusion Detection',
    github: 'https://github.com/piy4l/Thesis-on-Intrusion-Detection-in-Containerized-Environment',
    demo: 'https://github.com/piy4l/Thesis-on-Intrusion-Detection-in-Containerized-Environment'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio