import React, { useEffect, useState } from 'react';

import profilePic from "./images/profile-picture.jpg"
import github from "./images/github-icon.png"
import linkedin from "./images/linkedin-icon.png"
import javascript from "./images/javascript.png"
import python from "./images/python.png"
import react from "./images/react.png"
import redux from "./images/redux.png"
import flask from "./images/flask.png"
import aws from "./images/aws.png"
import css3 from "./images/css3.png"
import docker from "./images/docker.png"
import git from "./images/git.png"
import html5 from "./images/html5.png"
import inkscape from "./images/inkscape.png"
import nodejs from "./images/nodejs.png"
import postgresql from "./images/postgresql.png"
import ruby from "./images/ruby.png"
import npm from "./images/npm.png"
import modernBeingHome from "./images/modern-being-home.png"
import modernBeingCategory from "./images/modern-being-category.png"
import funFinderHome from "./images/funfinder-home.png"
import funFinderSpot from "./images/funfinder-spot.png"
import catflixBrowse from "./images/catflix-browse.png"
import catflixProfiles from "./images/catflix-profiles.png"
import animediumSplash from "./images/animedium-splash.png"
import animediumHome from "./images/animedium-home.png"
import './HomePage.css'

const HomePage = () => {
    const [page, setPage] = useState('aboutMe');
    const [subtractor, setSubtractor] = useState(0)

    useEffect(() => {
        const divider = document.querySelector('.home-page-body-divider')
        const leftSection = document.querySelector('.home-page-body-left')
        const rightSection = document.querySelector('.home-page-body-right')

        setTimeout(() => {
            divider?.classList.add('stay')
        }, 500 - subtractor)

        setTimeout(() => {
            leftSection?.classList.add('extended-left')
        }, 1000 - subtractor)

        setTimeout(() => {
            rightSection?.classList.add('extended-right')
        }, 1500 - subtractor)

        setTimeout(() => {
            divider?.classList.remove('stay')
        }, 2000 - subtractor)

    }, [page, subtractor])

    let currentPageLeft;
    let currentPageRight;
    if (page === 'aboutMe') {
        currentPageLeft = (
            <div className="home-page-body-left">
                <div className="about-me-title">
                    <div className="my-picture" style={{ backgroundImage: `url(${profilePic})` }}></div>
                    <div className="about-me-hello">Hello</div>
                </div>
                <div className="about-me-info">I'm Franco Portin. I am a software engineer who enjoys stimulating both my problem solving and creative sides when I am developing projects. I love sharing ideas and coordinating with others as it often produces the most efficient results. I have built full stack apps that demonstrates my proficiency in <b>JavaScript</b>, <b>Python</b>, <b>React</b>, <b>Redux</b>, <b>Flask</b>, and <b>PostgreSQL</b>. More importantly, I always aim to add something new to my repertoire as I believe that learning is a continuous process.</div>
                <div className="about-me-contacts">Contact Me:
                    <div className="about-me-contacts-phone">Phone:<div className="about-me-contacts-data">(206)591-4167</div></div>
                    <div className="about-me-contacts-email">Email:<div className="about-me-contacts-data">fportin350@gmail.com</div></div>
                    <div className="about-me-links__container">
                        <div className="github__container">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/fportin">
                                <img className="github-icon" src={github} alt="Github Logo" />
                            </a>
                        </div>
                        <div className="linkedin__container">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/franco-portin">
                                <img className="linkedin-icon" src={linkedin} alt="LinkedIn Logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )

        currentPageRight = (
            <div className="home-page-body-right">
                <div className="about-me-skills-title">Skills</div>
                <div className="about-me-skills">
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={javascript} alt="JavaScript Logo" />
                        JavaScript
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={python} alt="Python Logo" />
                        Python
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={react} alt="React Logo" />
                        React
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={redux} alt="Redux Logo" />
                        Redux
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={flask} alt="Flask Logo" />
                        Flask
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={nodejs} alt="NodeJS Logo" />
                        Node.js
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={postgresql} alt="PostgreSQL Logo" />
                        PostgreSQL
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={css3} alt="CSS3 Logo" />
                        CSS 3
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={html5} alt="HTML5 Logo" />
                        HTML 5
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={ruby} alt="Ruby Logo" />
                        Ruby
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={aws} alt="AWS Logo" />
                        AWS
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={docker} alt="Docker Logo" />
                        Docker
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={npm} alt="NPM Logo" />
                        NPM
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={git} alt="Git Logo" />
                        Git
                    </div>
                    <div className="skills-icons__container">
                        <img className="skills-icon" src={inkscape} alt="Inkscape Logo" />
                        Inkscape
                    </div>
                </div>
            </div>
        )
    } else if (page === 'modernBeing') {
        currentPageLeft = (
            <div className="home-page-body-left">
                <div className="project-picture-1" style={{ backgroundImage: `url(${modernBeingHome})` }} />
                <div className="project-picture-2" style={{ backgroundImage: `url(${modernBeingCategory})` }} />
            </div>
        )

        currentPageRight = (
            <div className="home-page-body-right">
                <div className="project-title">Modern Being</div>
                <div className="project-info">Modern-Being is a consumer electronics e-commerce site that appeals to the visionary in you. It uses JavaScript / React with Redux on the Frontend, while it employs Python / Flask with SQLAlchemy on the Backend. The app's assets are stored in AWS S3, and it is deployed to Heroku using Docker containers.</div>
                <div className="project-features">The app features a Shopping Cart that employs Local Storage and it dynamically retrieves product information from the database. Furthermore, it also has a robust Reviews feature where it implements a Star rating and Product review text. The Reviews feature is then used to effectively compute a product's rating based on user/consumer reviews.</div>
                <a className="project-link" target="_blank" rel="noopener noreferrer" href="https://modernbeing.herokuapp.com">Visit Site</a>
            </div>
        )
    } else if (page === 'funFinder') {
        currentPageLeft = (
            <div className="home-page-body-left">
                <div className="project-picture-1" style={{ backgroundImage: `url(${funFinderHome})` }} />
                <div className="project-picture-2" style={{ backgroundImage: `url(${funFinderSpot})` }} />
            </div>
        )

        currentPageRight = (
            <div className="home-page-body-right">
                <div className="project-title">Fun Finder</div>
                <div className="project-info">Whether you are looking for a travel destination with your friends and family, or a get-away for your much deserved break, FunFinder is there for you. FunFinder is a Yelp clone but instead of Business Listings, they are vacation spots listings. It uses JavaScript / Express with Sequelize on the Backend, while it employs React with Redux on the Frontend. It is deployed to Heroku using Heroku CLI.</div>
                <div className="project-features">The app features a robust Vacation Spot pages in which spot information created, updated, or deleted are immediately read and posted after submission. Moreover, it also has a very user-friendly Maps feature, using React-Leaflet.js, which a thunk retrieves the geolocation of an address so that a user would no longer worry about a location's coordinates.</div>
                <a className="project-link" target="_blank" rel="noopener noreferrer" href="https://funfinder.herokuapp.com">Visit Site</a>
            </div>
        )
    } else if (page === 'catflix') {
        currentPageLeft = (
            <div className="home-page-body-left">
                <div className="project-picture-1" style={{ backgroundImage: `url(${catflixBrowse})` }} />
                <div className="project-picture-2" style={{ backgroundImage: `url(${catflixProfiles})` }} />
            </div>
        )

        currentPageRight = (
            <div className="home-page-body-right">
                <div className="project-title">Catflix</div>
                <div className="project-info">Catflix is a Netflix clone for cat lovers to browse through different cat-movie titles sourced from "The Movie DataBase" (TMDb) API, and watch royalty-free cat video snippets delivered using the AWS framework (S3 buckets & AWS Cloudfront). It uses Python / Flask with SQLAlchemy on the Backend, while it employs JavaScript / React with Redux on the Frontend. It is deployed to Heroku using Docker containers.</div>
                <div className="project-features">The app have Profiles, Videos, Search, Bookmarks, and Ratings features that are built to look and feel as close to Netflix as possible, while adding a unique twist to each one.</div>
                <a className="project-link" target="_blank" rel="noopener noreferrer" href="https://catflix-aa.herokuapp.com">Visit Site</a>
            </div>
        )
    } else if (page === 'animedium') {
        currentPageLeft = (
            <div className="home-page-body-left">
                <div className="project-picture-1" style={{ backgroundImage: `url(${animediumSplash})` }} />
                <div className="project-picture-2" style={{ backgroundImage: `url(${animediumHome})` }} />
            </div>
        )

        currentPageRight = (
            <div className="home-page-body-right">
                <div className="project-title">Animedium</div>
                <div className="project-info">Animedium, which takes inspirations from Medium, is a gathering place for anime characters and enthusiasts alike to share stories and moments from their favorite animes. It uses JavaScript / PUG on the Frontend, while it employs Express with Sequelize on the Backend. It is deployed to Heroku using Heroku CLI.</div>
                <div className="project-features">The app have Profiles, Stories, Comments, and Likes features with full CRUD functionality (Deleting one's own profile is omitted since a user needs one to access the site. Visitors could use the Demo Profile if signing-up is not desired). Animedium also have responsive and animated Login and Signup pages, and all of the forms throughout the site boasts a perceptive design.</div>
                <a className="project-link" target="_blank" rel="noopener noreferrer" href="https://animedium.herokuapp.com">Visit Site</a>
            </div>
        )
    }

    const navigateTo = (target) => (e) => {
        e.preventDefault();
        const divider = document.querySelector('.home-page-body-divider')
        const leftSection = document.querySelector('.home-page-body-left')
        const rightSection = document.querySelector('.home-page-body-right')
        const bodyContainer = document.querySelector('.home-page-body');
                
        if (target !== page) {
            divider?.classList.add('stay')
            setTimeout(() => {
                leftSection?.classList.remove('extended-left')
            }, 500)
            setTimeout(() => {
                rightSection?.classList.remove('extended-right')
            }, 1000)
            // setTimeout(() => {
                
            // }, 1500)
            setTimeout(() => {
                bodyContainer.scrollTo(0, 0);
                setPage(target)
                setSubtractor(1000)
            }, 1500)
        }
    }

    return (
        <div className='home-page__container'>
            <div className='home-page-navbar'>
                <div className='home-page-navlink' onClick={navigateTo('aboutMe')}>About Me</div>
                <div className='home-page-navlink' onClick={navigateTo('modernBeing')}>Modern Being</div>
                <div className='home-page-navlink' onClick={navigateTo('funFinder')}>FunFinder</div>
                <div className='home-page-navlink' onClick={navigateTo('catflix')}>Catflix</div>
                <div className='home-page-navlink' onClick={navigateTo('animedium')}>Animedium</div>
            </div>
            <div className='home-page-body'>
                <div className='home-page-body-left__container'>{currentPageLeft}</div>
                <div className='home-page-body-divider'></div>
                <div className='home-page-body-right__container'>{currentPageRight}</div>
            </div>
        </div>
    )
}

export default HomePage;