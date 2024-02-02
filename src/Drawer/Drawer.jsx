import { FiSend } from 'react-icons/fi';
import { IoMdClose } from "react-icons/io";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Drawer = ({ isOpen, onClose, side }) => {
    const translateX = isOpen ? 'translate-x-0' : (side === 'left' ? '-translate-x-full' : 'translate-x-full');

    return (
        <div className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} h-full w-1/2 bg-white text-black transition-transform duration-300 transform ${translateX}`} style={{ zIndex: 10 }}>
            {/* Drawer content */}
            <div className="p-4" style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}>
                <div className="flex items-center">
                    <div className="flex-1">
                        <hr className="border-black border-b-2 w-full mb-4 md:mb-6 mr-2 md:mr-4" />
                    </div>
                    <div className="p-2 md:p-4">
                        <div className="text-xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center">
                            <div className=" p-1 md:p-2">Contact Us</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <hr className="border-black border-b-2 w-full mb-4 md:mb-6 mr-2 md:mr-4" />
                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <img className="w-28 md:w-40 h-28 rounded-full mr-2 md:mr-4 " src="https://codeclubitsolutions.com/wp-content/uploads/2023/04/4.jpg" alt="Company Logo" />
                </div>

                <div className='flex justify-around gap-4 md:gap-5 items-center'>
                    <div>
                        <h1 className='text-lg md:text-2xl font-roboto font-bold'>Address:</h1>
                        <p>House no: 5-6, Road No: 7, <br /> Block: A, Dhaka 1216</p>
                    </div>
                    <div>
                        <h1 className='text-lg md:text-2xl font-roboto font-bold'>Website</h1>
                        <p>www.codeclubitsolutions.com</p>
                    </div>
                </div>

                <div className='flex justify-around items-center mt-4 mb-2 md:mb-4'>
                    <div>
                        <h1 className='text-lg md:text-2xl font-roboto font-bold'>Email:</h1>
                        <p>contact@codeclubitsolutions.com</p>
                        <p>codeclubitsolutions@gmail.com</p>
                    </div>

                    <div className="mb-4 md:mb-6 flex flex-col justify-center items-center mt-2 md:mt-4">
                        <h1 className="text-md md:text-xl font-semibold mb-1 md:mb-2">Follow Us On:</h1>
                        <div className="flex items-center gap-3 md:gap-4">
                            <a href="#"><FaFacebook className="w-6  md:w-8 h-8 transform hover:scale-110" /></a>
                            <a href="#"><FaTwitter className="w-6 md:w-8 h-8 transform hover:scale-110" /></a>
                            <a href="#"><FaInstagram className="w-6  md:w-8 h-8 transform hover:scale-110" /></a>
                        </div>
                    </div>
                </div>

                <hr className="border-black md:hidden" />

                <div className="mb-6">
                    <div className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-center mt-3 md:mt-5">Send Message</div>
                    <form>
                        <div className='flex flex-col gap-3 md:gap-4'>
                            <input type="text" placeholder="Your Name" className="bg-white text-gray-800 border border-gray-400 outline-none p-2 focus:border-black focus:outline-none w-full md:w-96 lg:w-112 mx-auto" />
                            <input type="number" placeholder="Your Phone Number" className="bg-white text-gray-800 border border-gray-400 outline-none p-2 focus:border-black focus:outline-none w-full md:w-96 lg:w-112 mx-auto" />
                            <input type="email" placeholder="Your Email" className="bg-white text-gray-800 border border-gray-400 outline-none p-2 focus:border-black focus:outline-none w-full md:w-96 lg:w-112 mx-auto" />
                            <textarea type="text" placeholder="Your Message" className="bg-white text-gray-800 border border-gray-400 outline-none p-2 focus:border-black focus:outline-none w-full md:w-96 lg:w-112 mx-auto" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 flex items-center justify-center mt-6 hover:bg-blue-600 transition-colors">
                                <FiSend className="mr-2" /> Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 text-black"><IoMdClose className='text-3xl' /></button>
        </div>
    );
};

export default Drawer;
