import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useState } from 'react'
import Pic from '../assets/pic-web.webp'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

    // defining state for form to check if it is open or not?
    const [contactFormOpen, setContactFormOpen] = useState(false);
    // Now defining two helper functions that will open or close the form
    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

    return (
        <header className="absolute w-full z-50">

            <div className="container flex items-center justify-between 
            mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20">

                {/* Logo */}
                <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 120, damping: 14 }}
                    className="flex items-center"
                >
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-r 
                    from-gray-500 to-gray-100 flex items-center justify-center 
                    text-purple-600 font-bold text-xl mr-3">
                        <img
                            className="w-10 h-10 rounded-lg object-cover"

                            src={Pic} alt="my-img" />
                    </div>

                    <span className="font-bold text-xl bg-gradient-to-l 
                    from-gray-400 to-gray-100 bg-clip-text text-transparent">
                        VineetCode
                    </span>
                </motion.div>

                {/* Nav Items */}
                <nav className="lg:flex hidden space-x-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1 }}
                            className="relative text-gray-200 dark:text-gray-200
                            hover:text-violet-600 dark:hover:text-violet-400 
                            font-medium transition-colors duration-300 group"
                        >
                            {item}

                            <span className="absolute bottom-0 left-0 w-0 h-0.5 
                            bg-violet-600 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    ))}
                </nav>

                {/* Icons */}
                <div className="md:flex hidden items-center space-x-4">
                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-200 
                dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400
                transition-all duration-300" href="#"> <FiGithub
                            className="w-5 h-5" /></motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-200 
                dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400
                transition-all duration-300" href="#"> <FiLinkedin
                            className="w-5 h-5" /></motion.a>

                    <motion.a
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-gray-200 
                dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400
                transition-all duration-300" href="#"> <FiUser
                            className="w-5 h-5" /></motion.a>
                </div>

                {/* Creating Button */}

                <div>
                    <motion.button
                        onClick={openContactForm}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.8
                        }}


                        className="hidden md:inline-flex ml-4 px-4 py-2 rounded-xl bg-gradient-to-r 
                from-gray-400 to-gray-100 text-violet-600 font-bold hover:text-white
                hover:from-violet-600 hover:to-purple-400 transition-all duration-500">
                        Hire Me
                    </motion.button>
                </div>


                {/* toggle side bar */}
                <div className="md:hidden flex items-center">
                    <motion.button
                        whileTap={{ scale: 0.7 }}
                        onClick={toggleMenu} className="text-gray-300">
                        {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}

                    </motion.button>
                </div>
            </div>

            {/* sidebar */}
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isOpen ? 1 : 0,
                    height: isOpen ? "auto" : 0,
                }}
                transition={{ duration: 0.35 }}
                className="md:hidden overflow-hidden bg-zinc-50 dark:bg-gray-900 px-4 py-5 rounded-lg"
            >
                <nav className="flex flex-col space-y-3 ">
                    {navItems.map((item) => (
                        <a
                            onClick={toggleMenu}
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className=" text-gray-600 dark:text-gray-200 font-medium py-2 rounded-lg
                             dark:hover:bg-gray-800 duration-300 hover:bg-gray-200"
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                {/* contact icons in sidebar */}

                <div className="pt-4 border-t border-gray-600 dark:border-gray-700 ">
                    <div className="flex space-x-3">
                        <a href="#">
                            <FiGithub className="h-4 w-5 text-gray-600 dark:text-gray-200 hover:text-violet-500 duration-300" />
                        </a>
                        <a href="#">
                            <FiLinkedin className="h-4 w-5 text-gray-600 dark:text-gray-200 hover:text-violet-500 duration-300" />
                        </a>
                        <a href="#">
                            <FiUser className="h-4 w-5 text-gray-600 dark:text-gray-200 hover:text-violet-500 duration-300" />
                        </a>


                    </div>
                    <button
                        onClick={() => {
                            toggleMenu()
                            openContactForm()
                        }}
                        className="mt-4 block w-full px-4 py-2 bg-gradient-to-r 
    from-violet-600 to-violet-400 font-bold rounded-xl  hover:from-violet-800 hover:to-purple-700
                            transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-violet-600/50">
                        Contact Me
                    </button>
                </div>

            </motion.div>

            {/* Contact form */}
            <AnimatePresence>
                {contactFormOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}

                        className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4">


                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 30 }}
                            transition={{
                                type: "spring",
                                damping: 30,
                                stiffness: 200,
                                duration: 0.8
                            }}
                            className="p-6 bg-zinc-50 dark:bg-gray-800 rounded-xl shadow-xl w-full
                    max-w-md">

                            <div className="flex justify-between items-center mb-4">
                                <h1 className="font-bold text-2xl dark:text-gray-300 text-gray-600">Get in Touch</h1>
                                <button onClick={closeContactForm}>
                                    <FiX className="w-5 h-5 text-gray-600 dark:text-gray-300 font-extrabold"></FiX>
                                </button>
                            </div>

                            {/* creating input form */}
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium dark:text-gray-400 text-gray-500 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-600
                                rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500
                                bg-gray-700"

                                    >
                                    </input>

                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium dark:text-gray-400 text-gray-500 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-600
                                rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500
                                bg-gray-700"

                                    >
                                    </input>

                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium dark:text-gray-400 text-gray-500 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        placeholder="How can i help you?"
                                        id="message"
                                        className="w-full px-4 py-2 border border-gray-600
                                rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500
                                bg-gray-700"

                                    >
                                    </textarea>

                                </div>
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}

                                    className="w-full px-4 py-2
                            bg-gradient-to-r from-violet-600 to-violet-400
                            rounded-lg hover:from-violet-800 hover:to-purple-700
                            transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-violet-600/50">
                                    Send Message
                                </motion.button>


                            </form>



                        </motion.div>




                    </motion.div>
                )}

            </AnimatePresence>


        </header>

    );
};

export default Header;
