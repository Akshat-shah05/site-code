import "./footer.css"
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <p> <a href="mailto: akshatshah1605@gmail.com"> Email: Akshatshah1605@gmail.com </a> </p>
                <ul className="footer-list"> 
                    <li> 
                        <a href="https://www.instagram.com/akshat.shah05/" className="a-insta"> <FaInstagram size={36}/>  </a> 
                    </li>
                    <li> 
                        <a href="https://github.com/Akshat-shah05" className="a-github"> <FaGithub size={36}/> </a> 
                    </li>
                    <li> 
                        <a href="https://twitter.com/AkshatShah_05" className="a-twitter"> <FaTwitter size={36}/>  </a> 
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Footer