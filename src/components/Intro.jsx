import "./intro.css"
import selfImage from './self-photo.jpg'

const Intro = () => {
    return (
        
        <>
            <div className="self-intro-name">
                <h1>Hey! My name is ...</h1> <br></br>
            </div>
            <div className="name-animation"> <h1> Akshat Shah </h1> </div>
            <div className="self-description-photo">
                <img className="image-container" src={selfImage}></img>
                <div className="image-flex-container"><img className="image-container2" src={selfImage}></img></div>
                <div className="text-flex-container"><h2 className="self-description-text"> I am a 17 y/o passionate developer exploring full-stack development, machine learning, web 3.0 and cybersecurity. I am currently pursuing my Bachelors of Computer Science at The University of Waterloo. Feel free to reach out to me either by email or instagram 🤠👋</h2></div>
            </div>
        </>
        
    )
}

export default Intro;

// I am a 17 y/o passionate developer exploring full-stack development, machine learning, web 3.0 and cybersecurity. I am currently pursuing my Bachelors of Computer Science at The University of Waterloo