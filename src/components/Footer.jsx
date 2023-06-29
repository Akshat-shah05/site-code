import "./footer.css"
import githubImage from './github-logo.png'

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <footer className="footer">
                    <div className="contact-info">
                        <p>
                            Email: Akshatshah1605@gmail.com
                        </p>
                        <p>
                            Set a Meeting: --Calendly Link--
                        </p>
                    </div>
                    <div className="social-links">
                        <img></img> {/* Instagram Link */}
                        <img></img> {/* Github Link */}
                        <img></img> {/* Twitter Link */}
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer