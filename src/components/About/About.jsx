
import './About.scss';

import { useState } from 'react';

import { FaUser } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";



const About = () => {

    const [showFullParagraph, setShowFullParagraph] = useState(false);

    const toggleParagraph = () => {
        setShowFullParagraph(!showFullParagraph);
    };

   

  return (
    <div>
        <div className='about-section'>
            <div className='experience-data'>
                <div className='data-container'>
                    <div className='data-logo'> 
                        <FaUser fontSize="2.5rem" color="#3f66fa"/>                
                    </div>
                    <div className='data-numbers'>116+</div>
                    <div className='data-name'>Patients</div>
                </div>
                <div className='data-container'>
                    <div className='data-logo'>  
                        <IoMdCheckboxOutline fontSize="3rem" color="#3f66fa" />               
                    </div>
                    <div className='data-numbers'>3+</div>
                    <div className='data-name'>Years</div>
                </div>
                <div className='data-container'>
                    <div className='data-logo'>
                        <FaStar fontSize="2rem" color="#3f66fa"/>                 
                    </div>
                    <div className='data-numbers'>4.9</div>
                    <div className='data-name'>Rating</div>
                </div>
                <div className='data-container'>
                    <div className='data-logo'>
                        <RiMessage2Fill fontSize="2.3rem" color="#3f66fa"/>                 
                    </div>
                    <div className='data-numbers'>90+</div>
                    <div className='data-name'>Reviews</div>
                </div>
            </div>
            

            <div className='about-me-section'>
                <h2>About Me</h2>
                <p>
                    {showFullParagraph
                    ? 'Dr. Ali Uzair is the top most Cardiologist specialist in Crist Hospital in London, UK. He achived several awards or her wonderful contribution Sed eleifend lectus id semper accumsan. Sed lobortis id ligula eget blandit.Integer interdum iaculis nunc, sed porttitor magna tincidunt in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam lobortis accumsan tempor. Aliquam sollicitudin pulvinar est, quis convallis tellus.'
                    : 'Dr. Ali Uzair is the top most Cardiologist specialist in Crist Hospital in London, UK. He achived several awards or her wonderful contribution'}
                    <span onClick={toggleParagraph} style={{ cursor: 'pointer', color: '#3f66fa' }}>
                    {showFullParagraph ? ' Read less' : ' Read more...'}
                    </span>
                 </p>

            </div>

        </div>
    </div>
  )
}

export default About