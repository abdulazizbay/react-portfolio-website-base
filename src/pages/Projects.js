import React from 'react';
import ProjectItem from '../Components/ProjectItem';
import molla from '../assets/Molla.jpeg'
import budgetCalc from '../assets/budgetCalc.jpg'
import '../styles/Project.css'
const Projects = () => {
    return (
        <div className='projects'>
            <h1>My Personal Projects</h1>
            <div className='projectList'>
                <a href='https://github.com/abdulazizbay/Myproject'><ProjectItem name={'Molla ecommerce website(Back-end)'} image={molla}/></a>
                <a href='https://github.com/abdulazizbay/Budget-calculator'><ProjectItem name={'Budget Calculator'} image={budgetCalc}/></a>
                
            </div>
        </div>
    );
};

export default Projects;