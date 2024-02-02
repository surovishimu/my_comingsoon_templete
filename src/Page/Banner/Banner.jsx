import { useState, useEffect } from 'react';
import logo from '../../../public/asset/logo.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import banner1 from '../../../public/asset/grass.mp4';
import banner2 from '../../../public/asset/wind.mp4';
import banner3 from '../../../public/asset/rice.mp4';
import banner4 from '../../../public/asset/banner4.mp4';
import CountdownTimer from '../Timer/Timer';
import SearchBar from '../../SearchBar/SearchBar';
import Drawer from '../../Drawer/Drawer';
import AboutUsDrawer from '../../Drawer/AboutUsDrawer';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';

const Banner = () => {
    const [contactDrawerOpen, setContactDrawerOpen] = useState(false);
    const [aboutDrawerOpen, setAboutDrawerOpen] = useState(false);

    const toggleContactDrawer = () => {
        setContactDrawerOpen(prevState => !prevState);
        setAboutDrawerOpen(false); 
    };

    const toggleAboutDrawer = () => {
        setAboutDrawerOpen(prevState => !prevState);
        setContactDrawerOpen(false); 
    };

    const [text] = useTypewriter({
        words: ["Join Us for the Big Reveal!", "New Experience Coming Soon!", "Stay Tuned for Exciting Updates!"],
        loop: {},
    });

    const [currentMedia, setCurrentMedia] = useState(banner1);
    const [key, setKey] = useState(0); 

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentMedia === banner1) {
                setCurrentMedia(banner2);
            } else if (currentMedia === banner2) {
                setCurrentMedia(banner3);
            } else if (currentMedia === banner3) {
                setCurrentMedia(banner4);
            } else {
                setCurrentMedia(banner1);
            }
            setKey(prevKey => prevKey + 1); 
        }, 5000); 

        return () => clearTimeout(timer);
    }, [currentMedia]); 

    return (
        <div className="relative h-screen overflow-hidden">
            <div className="absolute inset-0">
                <video key={key} autoPlay loop muted className="absolute inset-0 object-cover w-full h-full transition-opacity duration-1000">
                    <source src={currentMedia} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="font-roboto absolute inset-0 flex flex-col justify-center items-center text-white">
                <img className='w-40 mx-auto' src={logo} alt="" />
                <h1 className='text-5xl font-semibold text-center'>{text}<Cursor cursorStyle='_' /></h1>
                <p className="text-lg md:text-xl lg:text-2xl text-center mt-10 w-2/4">Discover {"what's"} next as we unveil our latest creation. Stay connected for updates and exclusive sneak peeks!</p>
                <SearchBar />
                <div className='mt-10 flex flex-wrap justify-center gap-5'>
                    <button onClick={toggleContactDrawer} className='btn w-full  text-lg font-roboto rounded-none transform transition-transform hover:scale-105 hover:shadow-md hover:bg-black hover:text-white hover:border-none md:w-52'>
                        Contact Us
                    </button>
                    <button onClick={toggleAboutDrawer} className='btn w-full  text-lg rounded-none transform transition-transform hover:scale-105 hover:shadow-md hover:bg-black hover:text-white hover:border-none md:w-52'>
                        About Us
                    </button>
                </div>
                <Drawer isOpen={contactDrawerOpen} onClose={toggleContactDrawer} side="left" />

                {/* About Drawer */}
                <AboutUsDrawer isOpen={aboutDrawerOpen} onClose={toggleAboutDrawer} side="right" />
            </div>

            <div className="absolute bottom-4 right-4 md:flex items-center gap-4">
                <a href="#" className="text-white transform hover:translate-y-[-3px] transition-transform">
                    <FaFacebook className="w-8 h-8 hover:text-blue-500" />
                </a>
                <a href="#" className="text-white transform hover:translate-y-[-3px] transition-transform">
                    <FaTwitter className="w-8 h-8 hover:text-blue-400" />
                </a>
                <a href="#" className="text-white transform hover:translate-y-[-3px] transition-transform">
                    <FaLinkedin className="w-8 h-8 hover:text-blue-800" />
                </a>
                <a href="#" className="text-white transform hover:translate-y-[-3px] transition-transform">
                    <FaPinterest className="w-8 h-8 hover:text-red-500" />
                </a>
            </div>

            <div className="absolute bottom-4 left-4">
                <CountdownTimer />
            </div>
        </div>
    );
};

export default Banner;
