import { IoMdClose } from "react-icons/io";
import { FaLaptop, FaCamera, FaChartBar, FaPencilAlt } from 'react-icons/fa';
import project1Image from '../../public/asset/project1.jpg';
import project2Image from '../../public/asset/project2.jpg';
import project3Image from '../../public/asset/project3.jpg';
import project4Image from '../../public/asset/project4.jpg';

const AboutUsDrawer = ({ isOpen, onClose, side }) => {
    const translateX = isOpen ? 'translate-x-0' : (side === 'left' ? '-translate-x-full' : 'translate-x-full');

    return (
        <div className={`absolute top-0 ${side === 'left' ? 'left-0' : 'right-0'} h-full w-1/2 bg-white text-black transition-transform duration-300 transform ${translateX}`} style={{ zIndex: 10, overflowY: 'auto' }}>
            <div className="p-8">
                <div className="flex items-center">
                    <div className="flex-1">
                        <hr className="border-black border-b-2 w-full mb-6 mr-4" />
                    </div>
                    <div className="p-4">
                        <div className="text-3xl font-bold mb-6 flex items-center">
                            <div className=" p-2">About Us</div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <hr className="border-black border-b-2 w-full mb-6 mr-4" />
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aut quidem numquam! Molestias nisi odio itaque eaque vitae dolorem ipsum a, exercitationem laboriosam in quibusdam debitis sequi impedit quia officiis, esse ut fuga doloribus voluptas magnam quasi quo atque dolorum.

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aut quidem numquam! Molestias nisi odio itaque eaque vitae dolorem ipsum a, exercitationem laboriosam in quibusdam debitis sequi impedit quia officiis, esse ut fuga doloribus voluptas magnam quasi quo atque dolorum.</p>
                </div>

                {/* Our Services Section */}
                <div className="px-5 mt-8">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <hr className="border-black border-b-2 w-full mb-6 mr-4" />
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold mb-6 flex items-center">
                                <div className=" p-2">Our Services</div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <hr className="border-black border-b-2 w-full mb-6 mr-4" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <ServiceCard icon={<FaLaptop className="w-12 h-12" />} title="Web Design" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                        <ServiceCard icon={<FaCamera className="w-12 h-12" />} title="Photography" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                        <ServiceCard icon={<FaChartBar className="w-12 h-12" />} title="Marketing" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                        <ServiceCard icon={<FaPencilAlt className="w-12 h-12" />} title="Graphic Design" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit." />
                    </div>
                </div>

                {/* Our Projects Section */}
                <div className="px-5 mt-8">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <hr className="border-black border-b-2 w-full mb-6 mr-4" />
                        </div>
                        <div className="p-4">
                            <div className="text-3xl font-bold mb-6 flex items-center">
                                <div className=" p-2">Our Projects</div>
                            </div>
                        </div>
                        <div className="flex-1">
                            <hr className="border-black border-b-2 w-full mb-6 mr-4" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mt-4">
                        <ProjectCard image={project1Image} projectName="Project 1" />
                        <ProjectCard image={project2Image} projectName="Project 2" />
                        <ProjectCard image={project3Image} projectName="Project 3" />
                        <ProjectCard image={project4Image} projectName="Project 4" />
                    </div>
                </div>
            </div>
            <button onClick={onClose} className="absolute top-4 right-4 text-black"><IoMdClose className='text-3xl' /></button>
        </div>
    );
};

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="flex items-center p-4 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:bg-gray-100">
            <div className="mr-4">{icon}</div>
            <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>
        </div>
    );
};

const ProjectCard = ({ image, projectName }) => {
    return (
        <div className="relative">
            <img src={image} alt={projectName} className="w-full h-72 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center py-2 px-4 transition duration-300 opacity-0 hover:opacity-100">{projectName}</div>
        </div>
    );
};

export default AboutUsDrawer;
