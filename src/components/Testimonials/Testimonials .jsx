import React, { useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/next_icon.png'
import back_icon from '../../Assets/back_icon.png'
import user_1 from '../../Assets/user_1.png'
import user_2 from '../../Assets/user_2.png'
import user_3 from '../../Assets/user_3.png'
import user_4 from '../../Assets/user_4.png'


const Testimonials = () => {

    // const [activeSlide, setActiveSlide] = useState(0);
    // const totalSlides = 4; // Total number of slides

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActiveSlide(prevIndex => (prevIndex + 1) % totalSlides); // Loop back to first slide after reaching the last slide
    //     }, 5000); // Adjust the interval duration (in milliseconds) as needed

    //     return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount
    // }, [totalSlides]);

    // let tx = -activeSlide * 100;

    // useEffect(() => {
    //     if (slider.current) {
    //         slider.current.style.transform = `translateX(${tx}%)`;
    //     }
    // }, [tx]);

    const slider = useRef();
     let tx =0;
    const slideForward = () => {
       if (slider.current){

        if (tx > -50){
            tx-=25;
            slider.current.style.transform = `translateX(${tx}%)`
        }
        
       }

    };

    const slideBackward = () => {
        if (slider.current) {
            if (tx < 0) {
                tx += 25;
                slider.current.style.transform = `translateX(${tx}%)`;
            }
        }
    };
    


  return (
    
        <div className="testimonials">
            <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
            <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />

            <div className="slider" >
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                            <img src={user_1 } alt="" />
                            <div>
                                <h3> William Jackson1</h3>
                                <span>Edusity,USA</span>
                            </div>
                            </div>
                            <p> Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made.
                                The supportive community,state-of-the-art facilities, 
                                and commitment to academic excellennce have truly exceeded my expectattions.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                            <img src={user_2 } alt="" />
                            <div>
                                <h3> William Jackson2</h3>
                                <span>Edusity,USA</span>
                            </div>
                            </div>
                            <p> Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made.
                                The supportive community,state-of-the-art facilities, 
                                and commitment to academic excellennce have truly exceeded my expectattions.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                            <img src={user_3 } alt="" />
                            <div>
                                <h3> William Jackson3</h3>
                                <span>Edusity,USA</span>
                            </div>
                            </div>
                            <p> Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made.
                                The supportive community,state-of-the-art facilities, 
                                and commitment to academic excellennce have truly exceeded my expectattions.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user_info">
                            <img src={user_4 } alt="" />
                            <div>
                                <h3> William Jackson4</h3>
                                <span>Edusity,USA</span>
                            </div>
                            </div>
                            <p> Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made.
                                The supportive community,state-of-the-art facilities, 
                                and commitment to academic excellennce have truly exceeded my expectattions.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </div>
    
  )
}

export default Testimonials 