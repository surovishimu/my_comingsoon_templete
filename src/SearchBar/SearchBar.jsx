import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const SearchBar = () => {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, such as sending the email to a backend server
        console.log('Email submitted:', email);
        // Clear the input after submission
        setEmail('');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex items-center justify-center mt-8">
                <input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Enter Your Email"
                    className="font-roboto border-b-4 border-t-2 border-l-2 border-white bg-transparent text-base-400 px-4 py-2 focus:outline-none focus:border-white transition-colors h-14 lg:w-96 md:w-52 w-40"
                    required
                />

                <button type="submit" className="font-roboto font-bold flex items-center bg-white text-black px-4 py-2 transition-colors focus:outline-none h-14 hover:bg-black hover:text-white hover:border-none">
                    <AiOutlineMail className="mr-2 font-bold text-xl" />  Notify Me
                </button>
            </form>




        </>
    );
};

export default SearchBar;
