import React from 'react';
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import '../styles/Home.css'
const Home = () => {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Hello, My Name is Abdulaziz</h2>
                <div className='prompt'>
                    <p>A Software Developer with a passion for learning and creating</p>
                    <a href='https://www.linkedin.com/in/abdulaziz-khalilov-190373259/'><LinkedinIcon/></a>
                     <a href='mailto:abdulazizxalilov30@gmail.com'><EmailIcon/></a>
                     <a href='https://github.com/abdulazizbay'><GithubIcon/></a>
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-end</h2>
                        <span>Javascript,HTML, CSS, NPM, Bootstrap, Yarn, ReactJS</span>
                    </li>
                    <li className='item'>
                        <h2>Back-end</h2>
                        <span>Python, Django, SQL, PostgreSQL</span>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Home;