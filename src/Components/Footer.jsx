import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import img from '../assets/bg.jpeg'

export const Footer = () => {
    return (
        <>
            {/* Footer Section */}
            <footer className="bg-slate-700 text-white py-16">
                <div className="max-w-screen-xl mx-auto px-6">
                    <div className="flex justify-between items-center space-x-10">
                        {/* Navigation Links */}
                        <div className="space-y-4 font-serif  ml-5 font-medium text-xl text-white">
                            <a href="#home" className="block hover:text-gray-400  transition duration-300">Home</a>
                            <a href="#services" className="block hover:text-gray-400 transition duration-300">Services</a>
                            <a href="#about" className="block hover:text-gray-400 transition duration-300">About</a>
                            <a href="#contact" className="block hover:text-gray-400 transition duration-300">Contact</a>
                        </div>

                        <div className="flex flex-col items-center">
                            <h2 className="text-3xl font-bold font-poppins text-white mb-5 ml-36 p-10">Our Partners</h2>
                            <div className="flex justify-between items-center space-x-16 font-semibold text-xl text-white">
                                {/* Google */}
                                <div className="flex ml-32 items-center space-x-4">
                                    <p>
                                        <span style={{ color: '#4285F4' }}>G</span>
                                        <span style={{ color: '#EA4335' }}>o</span>
                                        <span style={{ color: '#FBBC05' }}>o</span>
                                        <span style={{ color: '#4285F4' }}>g</span>
                                        <span style={{ color: '#34A853' }}>l</span>
                                        <span style={{ color: '#EA4335' }}>e</span>
                                    </p>
                                </div>

                                {/* Microsoft */}
                                <div className="flex items-center space-x-4">
                                    <p>
                                        <span style={{ color: '#F25022' }}>■</span>
                                        <span style={{ color: '#7FBA00' }}>■</span>
                                        <span style={{ color: '#00A4EF' }}>■</span>
                                        <span style={{ color: '#FFB900' }}>■</span> Microsoft
                                    </p>
                                </div>

                                {/* Amazon */}
                                <div className="flex items-center space-x-4">
                                    <p>
                                        <span style={{ color: '#FF9900' }}>A</span>
                                        <span style={{ color: '#232F3E' }}>m</span>
                                        <span style={{ color: '#232F3E' }}>a</span>
                                        <span style={{ color: '#FF9900' }}>z</span>
                                        <span style={{ color: '#232F3E' }}>o</span>
                                        <span style={{ color: '#232F3E' }}>n</span>
                                    </p>
                                </div>

                                {/* Apple */}
                                <div className="flex items-center space-x-4">
                                    <p>
                                        <span style={{ color: '#999999' }}>A</span>
                                        <span style={{ color: '#999999' }}>p</span>
                                        <span style={{ color: '#999999' }}>p</span>
                                        <span style={{ color: '#999999' }}>l</span>
                                        <span style={{ color: '#999999' }}>e</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-6">
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110 "
                            >
                                <FaFacebook size={30} />
                            </a>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-600 transition duration-300 transform hover:scale-110 "
                            >
                                <FaTwitter size={30} />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-500 hover:text-pink-700 transition duration-300 transform hover:scale-110 "
                            >
                                <FaInstagram size={30} />
                            </a>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 hover:text-blue-400 transition duration-300 transform hover:scale-110 "
                            >
                                <FaLinkedin size={30} />
                            </a>
                            <a
                                href="https://www.github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white  transform hover:scale-110"
                            >
                                <FaGithub size={30} />
                            </a>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center">
                    <hr className="w-4/5 border-t-2 border-white mx-auto my-7" />
                </div>

                <div className="text-center text-blue-600 py-4 mt-2">
                    <p>&copy; {new Date().getFullYear()} digiFynix. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};
