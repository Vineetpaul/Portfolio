import { motion } from "framer-motion";
import { FiGithub, FiLinkedin} from "react-icons/fi";
const Header = () => {

    const navItems = ["Home", "About", "Projects", "Contact", "Experience"];

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
                        V
                    </div>

                    <span className="font-bold text-xl bg-gradient-to-l 
                    from-gray-500 to-gray-100 bg-clip-text text-transparent">
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
                            className="relative text-gray-800 dark:text-gray-200
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
                initial={{opacity:0, scale:0.8}}
                animate={{opacity:1, scale:1}}
                transition={{delay:0.3, duration:0.8}}
                className="text-gray-800 
                dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400
                transition-all duration-300" href="#"> <FiGithub 
                className="w-5 h-5"/></motion.a>

                <motion.a 
                initial={{opacity:0, scale:0.8}}
                animate={{opacity:1, scale:1}}
                transition={{delay:0.3, duration:0.8}}
                className="text-gray-800 
                dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400
                transition-all duration-300" href="#"> <FiLinkedin
                className="w-5 h-5"/></motion.a>
                </div>

                {/* Creating Button */}

                <motion.button 
                initial={{opacity:0, scale:0.5}}
                animate={{opacity:1, scale:1}}
                transition={{
                    delay:0.3,
                    type:"spring",
                    stiffness: 100,
                    damping: 15,
                    duration:0.8
                }}
                

                className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r 
                from-gray-400 to-gray-100 text-violet-600 font-bold hover:text-white
                hover:from-violet-600 hover:to-purple-400 transition-all duration-500">
                    Hire Me
                </motion.button>

            </div>

        </header>

    );
};

export default Header;