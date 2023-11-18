import { useState } from "react";
import { FaStar } from "react-icons/fa/";
import { IoIosHeart } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import "./Home.scss"

const Home = () => {

    const [likeButton, setLikeButton] = useState(false);

    const toggleParagraph = () => {
      setLikeButton(!likeButton);
    };
  
  return (
    <div className="container-home">
        <h1>Doctor</h1>
        <div className='doc-image'>
        <img src="/images/doctor-image.jpg" alt="doctor-images" />
        <div className='logo' onClick={toggleParagraph} style={{ cursor: 'pointer'}}>{
            likeButton ? <IoIosHeart fontSize="2.2rem" />:<IoHeartOutline fontSize="2.2rem" />
        }
            
        </div>
        </div>
        <div className='doc-name-review'>
        <div className='doc-name-department'>
            <span className='doc-name'>Dr.Ali Uzair</span>
            <span className='department-name'>Cardiologist and Surgeon</span>
        </div>
        <div className='doc-review'>
            <div className='review-logo-container'>
            <FaStar className='review-logo' fontSize="2rem"/>             
            </div>                   
            <div className='review'>4.9 (96 reviews)</div>
        </div>
        </div>
    </div>
  )
}

export default Home